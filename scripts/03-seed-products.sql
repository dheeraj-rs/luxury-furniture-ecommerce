-- Insert products (using category IDs from the categories table)
WITH category_ids AS (
  SELECT id, slug FROM categories
)
INSERT INTO products (
  name, slug, description, price, original_price, category_id, subcategory,
  features, materials, width, height, depth, weight, images, in_stock,
  stock_quantity, rating, review_count, tags
) VALUES
(
  'Executive Leather Chair',
  'executive-leather-chair',
  'Handcrafted executive chair featuring premium Italian leather and solid walnut frame. Designed for ultimate comfort and sophistication in professional environments.',
  2499.00,
  2999.00,
  (SELECT id FROM category_ids WHERE slug = 'seating'),
  'Chairs',
  ARRAY['Premium Italian leather', 'Solid walnut frame', 'Ergonomic design', 'Adjustable height', '360° swivel'],
  ARRAY['Italian leather', 'Walnut wood', 'Steel hardware'],
  65, 120, 70, 28,
  ARRAY['/luxury-office-chair--executive-leather-chair--sop.jpg'],
  true, 15, 4.8, 24,
  ARRAY['executive', 'leather', 'walnut', 'ergonomic']
),
(
  'Modern Dining Table',
  'modern-dining-table',
  'Contemporary dining table crafted from solid oak with a minimalist design. Perfect for modern dining spaces that value both form and function.',
  3299.00,
  NULL,
  (SELECT id FROM category_ids WHERE slug = 'tables'),
  'Dining Tables',
  ARRAY['Solid oak construction', 'Minimalist design', 'Seats 6-8 people', 'Natural finish', 'Handcrafted joints'],
  ARRAY['Oak wood', 'Natural oil finish'],
  200, 75, 100, 65,
  ARRAY['/modern-oak-dining-table.jpg'],
  true, 8, 4.9, 18,
  ARRAY['dining', 'oak', 'modern', 'minimalist']
),
(
  'Luxury Velvet Sofa',
  'luxury-velvet-sofa',
  'Opulent three-seater sofa upholstered in rich emerald velvet with brass accents. A statement piece that combines comfort with timeless elegance.',
  4599.00,
  5299.00,
  (SELECT id FROM category_ids WHERE slug = 'seating'),
  'Sofas',
  ARRAY['Premium velvet upholstery', 'Brass accent details', 'Down-filled cushions', 'Hardwood frame', 'Three-seater design'],
  ARRAY['Velvet fabric', 'Brass hardware', 'Hardwood frame', 'Down filling'],
  220, 85, 95, 85,
  ARRAY['/luxury-emerald-velvet-sofa-brass-accents.jpg'],
  true, 5, 4.7, 31,
  ARRAY['sofa', 'velvet', 'luxury', 'brass', 'emerald']
),
(
  'Artisan Coffee Table',
  'artisan-coffee-table',
  'Handcrafted coffee table featuring live-edge walnut top with steel hairpin legs. Each piece is unique, showcasing the natural beauty of the wood grain.',
  1899.00,
  NULL,
  (SELECT id FROM category_ids WHERE slug = 'tables'),
  'Coffee Tables',
  ARRAY['Live-edge walnut top', 'Steel hairpin legs', 'Unique wood grain', 'Handcrafted finish', 'Mid-century modern style'],
  ARRAY['Walnut wood', 'Steel legs', 'Natural finish'],
  120, 45, 60, 32,
  ARRAY['/live-edge-walnut-coffee-table-hairpin-legs.jpg'],
  true, 12, 4.6, 15,
  ARRAY['coffee table', 'walnut', 'live-edge', 'mid-century', 'artisan']
),
(
  'Designer Floor Lamp',
  'designer-floor-lamp',
  'Contemporary floor lamp with adjustable brass arm and linen shade. Perfect for reading corners or as accent lighting in modern interiors.',
  899.00,
  NULL,
  (SELECT id FROM category_ids WHERE slug = 'lighting'),
  'Floor Lamps',
  ARRAY['Adjustable brass arm', 'Linen shade', 'Marble base', 'Dimmable LED', 'Contemporary design'],
  ARRAY['Brass', 'Marble', 'Linen fabric'],
  35, 165, 35, 12,
  ARRAY['/contemporary-brass-floor-lamp-marble-base-linen-sh.jpg'],
  true, 20, 4.5, 22,
  ARRAY['floor lamp', 'brass', 'marble', 'contemporary', 'adjustable']
),
(
  'Handwoven Storage Basket',
  'handwoven-storage-basket',
  'Artisan-crafted storage basket made from sustainable rattan. Perfect for organizing while adding natural texture to any space.',
  299.00,
  NULL,
  (SELECT id FROM category_ids WHERE slug = 'storage'),
  'Baskets',
  ARRAY['Handwoven rattan', 'Sustainable materials', 'Natural finish', 'Versatile storage', 'Artisan crafted'],
  ARRAY['Rattan', 'Natural fibers'],
  40, 35, 40, 2,
  ARRAY['/handwoven-rattan-storage-basket-natural.jpg'],
  true, 25, 4.4, 8,
  ARRAY['storage', 'rattan', 'handwoven', 'sustainable', 'natural']
)
ON CONFLICT (slug) DO NOTHING;
