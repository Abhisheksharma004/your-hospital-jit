import pool from '../src/lib/db';
import { hashPassword } from '../src/lib/auth';

async function initAdmin() {
  try {
    const email = 'jyotiinfotech.04@gmail.com';
    const password = 'Admin@2025';
    const name = 'Super Admin';

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Check if admin already exists
    const [existing]: any = await pool.query(
      'SELECT * FROM super_admins WHERE email = ?',
      [email]
    );

    if (existing.length > 0) {
      console.log('Super admin already exists!');
      console.log('Email:', email);
      process.exit(0);
    }

    // Insert new admin
    await pool.query(
      'INSERT INTO super_admins (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    );

    console.log('Super admin created successfully!');
    console.log('Email:', email);
    console.log('Password:', password);
    
    process.exit(0);
  } catch (error) {
    console.error('Error creating admin:', error);
    process.exit(1);
  }
}

initAdmin();
