# Database Setup Instructions

## Prerequisites
- MySQL installed and running
- Node.js and npm installed

## Setup Steps

### 1. Install Dependencies
```bash
npm install mysql2 bcryptjs jsonwebtoken
npm install --save-dev @types/bcryptjs @types/jsonwebtoken tsx
```

### 2. Configure Environment Variables
Create a `.env.local` file in the root directory with your database credentials:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=your_hospital_db
DB_PORT=3306
JWT_SECRET=your-super-secret-jwt-key
```

### 3. Create Database and Table
Run the SQL script to create the database and table:
```bash
mysql -u root -p < scripts/setup-database.sql
```

Or manually execute the SQL commands in MySQL:
```sql
CREATE DATABASE IF NOT EXISTS your_hospital_db;
USE your_hospital_db;

CREATE TABLE IF NOT EXISTS super_admins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 4. Create Super Admin Account
Run the initialization script:
```bash
npx tsx scripts/init-admin.ts
```

This will create a super admin with:
- **Email**: jyotiinfotech.04@gmail.com
- **Password**: Admin@2025

### 5. Start the Development Server
```bash
npm run dev
```

### 6. Test Login
1. Navigate to http://localhost:3000/super-admin
2. Login with:
   - Email: jyotiinfotech.04@gmail.com
   - Password: Admin@2025

## API Endpoints

- `POST /api/auth/login` - Login endpoint
- `POST /api/auth/logout` - Logout endpoint
- `GET /api/auth/verify` - Verify authentication

## Security Notes

- Passwords are hashed using bcrypt
- JWT tokens are stored in HTTP-only cookies
- Change JWT_SECRET in production
- Use HTTPS in production
- Never commit .env.local to version control

## Troubleshooting

### Database Connection Error
- Check if MySQL is running
- Verify database credentials in .env.local
- Ensure database exists

### Login Failed
- Verify super admin account exists in database
- Check password is correct
- Check browser console for errors

### Module Not Found
- Run `npm install` to install dependencies
- Restart development server
