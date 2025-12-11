const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');

async function createAdmin() {
  let connection;
  
  try {
    // Create connection
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '', // Change this if you have a password
      multipleStatements: true
    });

    console.log('Connected to MySQL');

    // Create database
    await connection.query('CREATE DATABASE IF NOT EXISTS your_hospital_db');
    console.log('Database created or already exists');

    // Use database
    await connection.query('USE your_hospital_db');

    // Create table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS super_admins (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    console.log('Table created or already exists');

    // Check if admin exists
    const [existing] = await connection.query(
      'SELECT * FROM super_admins WHERE email = ?',
      ['jyotiinfotech.04@gmail.com']
    );

    if (existing.length > 0) {
      console.log('\n✅ Super admin already exists!');
      console.log('Email: jyotiinfotech.04@gmail.com');
      console.log('Password: Admin@2025');
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash('Admin@2025', 10);

    // Insert admin
    await connection.query(
      'INSERT INTO super_admins (name, email, password) VALUES (?, ?, ?)',
      ['Super Admin', 'jyotiinfotech.04@gmail.com', hashedPassword]
    );

    console.log('\n✅ Super admin created successfully!');
    console.log('Email: jyotiinfotech.04@gmail.com');
    console.log('Password: Admin@2025');
    console.log('\nYou can now login at: http://localhost:3000/super-admin');

  } catch (error) {
    console.error('❌ Error:', error.message);
    
    if (error.code === 'ECONNREFUSED') {
      console.log('\n⚠️  MySQL is not running. Please start MySQL and try again.');
    } else if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.log('\n⚠️  Access denied. Please check your MySQL username and password.');
      console.log('Edit this file and update the connection settings.');
    }
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

createAdmin();
