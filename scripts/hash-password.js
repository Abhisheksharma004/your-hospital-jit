const bcrypt = require('bcryptjs');

async function hashPassword() {
  const password = 'Admin@2025';
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log('Hashed password for Admin@2025:');
  console.log(hashedPassword);
  console.log('\nUse this in your SQL INSERT statement');
}

hashPassword();
