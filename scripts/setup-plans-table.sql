-- Add plans table to your_hospital_db
USE your_hospital_db;

-- Create plans table
CREATE TABLE IF NOT EXISTS plans (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
  duration VARCHAR(50) NOT NULL DEFAULT 'Monthly',
  features TEXT NOT NULL,
  color VARCHAR(20) NOT NULL DEFAULT 'red',
  status ENUM('Active', 'Inactive') NOT NULL DEFAULT 'Active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create hospital_subscriptions table to track which hospitals subscribe to which plans
CREATE TABLE IF NOT EXISTS hospital_subscriptions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  hospital_id INT NOT NULL,
  plan_id INT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE,
  status ENUM('Active', 'Expired', 'Cancelled') NOT NULL DEFAULT 'Active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (plan_id) REFERENCES plans(id) ON DELETE CASCADE
);

-- Insert default plans
INSERT INTO plans (name, price, duration, features, color, status) VALUES 
(
  'Starter',
  7999.00,
  'Monthly',
  'Up to 50 patients|Basic patient management|5 staff accounts|Email support|Mobile app access|Basic reporting',
  'blue',
  'Active'
),
(
  'Professional',
  24999.00,
  'Monthly',
  'Up to 500 patients|Advanced patient management|25 staff accounts|Priority support 24/7|Mobile app access|Advanced analytics|Custom integrations|Staff scheduling',
  'red',
  'Active'
),
(
  'Enterprise',
  0.00,
  'Custom',
  'Unlimited patients|Full feature access|Unlimited staff accounts|Dedicated support team|Mobile app access|Custom development|API access|Multi-location support|Advanced security',
  'purple',
  'Active'
);

-- Insert sample hospital subscriptions (example data)
INSERT INTO hospital_subscriptions (hospital_id, plan_id, start_date, end_date, status) VALUES 
(1, 1, '2024-01-01', '2024-12-31', 'Active'),
(2, 1, '2024-02-01', '2024-12-31', 'Active'),
(3, 1, '2024-03-01', '2024-12-31', 'Active'),
(4, 1, '2024-04-01', '2024-12-31', 'Active'),
(5, 1, '2024-05-01', '2024-12-31', 'Active'),
(6, 1, '2024-06-01', '2024-12-31', 'Active'),
(7, 1, '2024-07-01', '2024-12-31', 'Active'),
(8, 1, '2024-08-01', '2024-12-31', 'Active'),
(9, 2, '2024-01-15', '2024-12-31', 'Active'),
(10, 2, '2024-02-15', '2024-12-31', 'Active'),
(11, 2, '2024-03-15', '2024-12-31', 'Active'),
(12, 2, '2024-04-15', '2024-12-31', 'Active'),
(13, 2, '2024-05-15', '2024-12-31', 'Active'),
(14, 2, '2024-06-15', '2024-12-31', 'Active'),
(15, 2, '2024-07-15', '2024-12-31', 'Active'),
(16, 2, '2024-08-15', '2024-12-31', 'Active'),
(17, 2, '2024-09-15', '2024-12-31', 'Active'),
(18, 2, '2024-10-15', '2024-12-31', 'Active'),
(19, 2, '2024-11-15', '2024-12-31', 'Active'),
(20, 2, '2024-12-15', '2024-12-31', 'Active'),
(21, 3, '2024-01-01', NULL, 'Active'),
(22, 3, '2024-06-01', NULL, 'Active'),
(23, 3, '2024-09-01', NULL, 'Active'),
(24, 3, '2024-11-01', NULL, 'Active');
