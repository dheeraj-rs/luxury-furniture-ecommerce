-- Insert categories
INSERT INTO categories (name, slug, description) VALUES
('Seating', 'seating', 'Comfortable and stylish seating solutions including sofas, chairs, and ottomans'),
('Tables', 'tables', 'Elegant tables for dining, coffee, and workspace needs'),
('Storage', 'storage', 'Functional storage solutions including wardrobes, bookcases, and cabinets'),
('Bedroom', 'bedroom', 'Complete bedroom furniture including beds, nightstands, and dressers'),
('Lighting', 'lighting', 'Ambient and task lighting including floor lamps, table lamps, and chandeliers')
ON CONFLICT (slug) DO NOTHING;
