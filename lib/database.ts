// Database connection and query utilities
// This file provides a foundation for database integration

export interface DatabaseConfig {
  host: string
  port: number
  database: string
  username: string
  password: string
}

// Database connection utility (to be implemented with your chosen database)
export class Database {
  private config: DatabaseConfig

  constructor(config: DatabaseConfig) {
    this.config = config
  }

  // Example query methods - implement based on your database choice
  async query(sql: string, params?: any[]): Promise<any[]> {
    // Implementation depends on your database client (pg, mysql2, etc.)
    throw new Error("Database query method not implemented. Please configure your database client.")
  }

  async transaction<T>(callback: (db: Database) => Promise<T>): Promise<T> {
    // Implementation for database transactions
    throw new Error("Database transaction method not implemented. Please configure your database client.")
  }
}

// Database service classes
export class UserService {
  constructor(private db: Database) {}

  async createUser(userData: {
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: string
  }) {
    const sql = `
      INSERT INTO users (email, password_hash, first_name, last_name, role)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, email, first_name, last_name, role, created_at
    `
    const result = await this.db.query(sql, [
      userData.email,
      userData.passwordHash,
      userData.firstName,
      userData.lastName,
      userData.role || "customer",
    ])
    return result[0]
  }

  async getUserByEmail(email: string) {
    const sql = `SELECT * FROM users WHERE email = $1`
    const result = await this.db.query(sql, [email])
    return result[0]
  }

  async getUserById(id: string) {
    const sql = `SELECT id, email, first_name, last_name, role, created_at FROM users WHERE id = $1`
    const result = await this.db.query(sql, [id])
    return result[0]
  }
}

export class ProductService {
  constructor(private db: Database) {}

  async getAllProducts() {
    const sql = `
      SELECT p.*, c.name as category_name, c.slug as category_slug
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      WHERE p.in_stock = true
      ORDER BY p.created_at DESC
    `
    return await this.db.query(sql)
  }

  async getProductBySlug(slug: string) {
    const sql = `
      SELECT p.*, c.name as category_name, c.slug as category_slug
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      WHERE p.slug = $1
    `
    const result = await this.db.query(sql, [slug])
    return result[0]
  }

  async getProductsByCategory(categorySlug: string) {
    const sql = `
      SELECT p.*, c.name as category_name, c.slug as category_slug
      FROM products p
      JOIN categories c ON p.category_id = c.id
      WHERE c.slug = $1 AND p.in_stock = true
      ORDER BY p.created_at DESC
    `
    return await this.db.query(sql, [categorySlug])
  }

  async updateProductStock(productId: string, quantity: number) {
    const sql = `
      UPDATE products 
      SET stock_quantity = stock_quantity - $2, updated_at = NOW()
      WHERE id = $1
      RETURNING stock_quantity
    `
    const result = await this.db.query(sql, [productId, quantity])
    return result[0]
  }
}

export class OrderService {
  constructor(private db: Database) {}

  async createOrder(orderData: {
    userId: string
    orderNumber: string
    items: Array<{ productId: string; quantity: number; unitPrice: number }>
    subtotal: number
    shippingCost: number
    taxAmount: number
    totalAmount: number
    shippingInfo: {
      firstName: string
      lastName: string
      email: string
      phone?: string
      address: string
      city: string
      state: string
      zipCode: string
    }
  }) {
    return await this.db.transaction(async (db) => {
      // Create order
      const orderSql = `
        INSERT INTO orders (
          order_number, user_id, subtotal, shipping_cost, tax_amount, total_amount,
          shipping_first_name, shipping_last_name, shipping_email, shipping_phone,
          shipping_address, shipping_city, shipping_state, shipping_zip_code
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
        RETURNING id
      `
      const orderResult = await db.query(orderSql, [
        orderData.orderNumber,
        orderData.userId,
        orderData.subtotal,
        orderData.shippingCost,
        orderData.taxAmount,
        orderData.totalAmount,
        orderData.shippingInfo.firstName,
        orderData.shippingInfo.lastName,
        orderData.shippingInfo.email,
        orderData.shippingInfo.phone,
        orderData.shippingInfo.address,
        orderData.shippingInfo.city,
        orderData.shippingInfo.state,
        orderData.shippingInfo.zipCode,
      ])

      const orderId = orderResult[0].id

      // Create order items
      for (const item of orderData.items) {
        const itemSql = `
          INSERT INTO order_items (order_id, product_id, quantity, unit_price, total_price)
          VALUES ($1, $2, $3, $4, $5)
        `
        await db.query(itemSql, [
          orderId,
          item.productId,
          item.quantity,
          item.unitPrice,
          item.unitPrice * item.quantity,
        ])

        // Update product stock
        await db.query(`UPDATE products SET stock_quantity = stock_quantity - $2 WHERE id = $1`, [
          item.productId,
          item.quantity,
        ])
      }

      return orderId
    })
  }

  async getOrdersByUser(userId: string) {
    const sql = `
      SELECT o.*, 
        json_agg(
          json_build_object(
            'id', oi.id,
            'product_id', oi.product_id,
            'product_name', p.name,
            'quantity', oi.quantity,
            'unit_price', oi.unit_price,
            'total_price', oi.total_price
          )
        ) as items
      FROM orders o
      LEFT JOIN order_items oi ON o.id = oi.order_id
      LEFT JOIN products p ON oi.product_id = p.id
      WHERE o.user_id = $1
      GROUP BY o.id
      ORDER BY o.created_at DESC
    `
    return await this.db.query(sql, [userId])
  }
}

// Export a singleton database instance (to be configured)
let dbInstance: Database | null = null

export function initializeDatabase(config: DatabaseConfig): Database {
  dbInstance = new Database(config)
  return dbInstance
}

export function getDatabase(): Database {
  if (!dbInstance) {
    throw new Error("Database not initialized. Call initializeDatabase() first.")
  }
  return dbInstance
}

// Service instances
export function createServices(db: Database) {
  return {
    users: new UserService(db),
    products: new ProductService(db),
    orders: new OrderService(db),
  }
}
