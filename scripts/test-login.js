const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');

async function testLogin() {
  let connection;
  
  try {
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'your_hospital_db'
    });

    console.log('✅ Connected to database');

    // Get admin user
    const [rows] = await connection.query(
      'SELECT * FROM super_admins WHERE email = ?',
      ['jyotiinfotech.04@gmail.com']
    );

    if (rows.length === 0) {
      console.log('❌ Admin user not found');
      return;
    }

    const user = rows[0];
    console.log('\n✅ Admin user found:');
    console.log('ID:', user.id);
    console.log('Name:', user.name);
    console.log('Email:', user.email);

    // Test password
    const testPassword = 'Admin@2025';
    const isValid = await bcrypt.compare(testPassword, user.password);

    console.log('\n🔐 Password test:');
    console.log('Testing password:', testPassword);
    console.log('Result:', isValid ? '✅ VALID' : '❌ INVALID');

    if (!isValid) {
      console.log('\n⚠️  Password mismatch! Updating password...');
      const newHash = await bcrypt.hash(testPassword, 10);
      await connection.query(
        'UPDATE super_admins SET password = ? WHERE email = ?',
        [newHash, 'jyotiinfotech.04@gmail.com']
      );
      console.log('✅ Password updated successfully!');
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

testLogin();
