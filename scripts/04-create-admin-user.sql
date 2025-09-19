-- Create an admin user (password should be hashed in real application)
-- This is just for demo purposes - use proper password hashing in production
INSERT INTO users (email, password_hash, first_name, last_name, role) VALUES
('admin@artisan.com', '$2b$10$example_hashed_password', 'Admin', 'User', 'admin'),
('demo@artisan.com', '$2b$10$example_hashed_password', 'Demo', 'Customer', 'customer')
ON CONFLICT (email) DO NOTHING;
