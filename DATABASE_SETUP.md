# Database Setup Guide

This guide will help you set up the database for the Luxury Furniture E-commerce application.

## Database Schema

The application uses a PostgreSQL database with the following main tables:

- **users** - Customer and admin user accounts
- **categories** - Product categories (Seating, Tables, Storage, etc.)
- **products** - Furniture products with details, pricing, and inventory
- **orders** - Customer orders with shipping and payment info
- **order_items** - Individual items within each order
- **cart_items** - Persistent shopping cart storage
- **reviews** - Product reviews and ratings

## Setup Options

### Option 1: Using Supabase (Recommended)

1. **Connect Supabase Integration**
   - Go to your project settings in v0
   - Add the Supabase integration
   - This will provide environment variables automatically

2. **Run Database Scripts**
   - Execute the SQL scripts in the `/scripts` folder in order:
     - `01-create-tables.sql` - Creates all tables and indexes
     - `02-seed-categories.sql` - Adds product categories
     - `03-seed-products.sql` - Adds sample products
     - `04-create-admin-user.sql` - Creates admin user

3. **Configure Row Level Security (RLS)**
   - Enable RLS on all tables for security
   - Set up policies for user access control

### Option 2: Using Neon Database

1. **Connect Neon Integration**
   - Add the Neon integration in project settings
   - Get your database connection string

2. **Run the same SQL scripts** as above

### Option 3: Local PostgreSQL

1. **Install PostgreSQL** locally
2. **Create a database** for the application
3. **Update environment variables**:
   \`\`\`
   DATABASE_URL=postgresql://username:password@localhost:5432/luxury_furniture
   \`\`\`
4. **Run the SQL scripts** in order

## Environment Variables

The following environment variables are needed:

\`\`\`
DATABASE_URL=your_database_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
\`\`\`

## Database Services

The application includes database service classes in `/lib/database.ts`:

- **UserService** - User authentication and management
- **ProductService** - Product catalog operations
- **OrderService** - Order processing and management

## Security Considerations

1. **Password Hashing** - Use bcrypt or similar for password hashing
2. **Row Level Security** - Enable RLS policies for data protection
3. **Input Validation** - Validate all user inputs before database operations
4. **Connection Pooling** - Use connection pooling for production deployments

## Sample Data

The seed scripts include:
- 5 product categories
- 6 sample luxury furniture products
- Demo admin and customer accounts

## Next Steps

1. Choose your database provider
2. Run the setup scripts
3. Configure authentication
4. Test the application with sample data
5. Customize products and categories for your needs

For production deployment, ensure proper backup strategies and monitoring are in place.
