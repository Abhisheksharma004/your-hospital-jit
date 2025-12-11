-- Create database
CREATE DATABASE IF NOT EXISTS your_hospital_db;
USE your_hospital_db;

-- Create super_admins table
CREATE TABLE IF NOT EXISTS super_admins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default super admin
-- Email: jyotiinfotech.04@gmail.com
-- Password: Admin@2025
-- Hashed password for Admin@2025
INSERT INTO super_admins (name, email, password) VALUES 
('Super Admin', 'jyotiinfotech.04@gmail.com', '$2a$10$YourHashedPasswordHere');

-- Note: You need to run the hash-password.js script first to generate the hashed password
