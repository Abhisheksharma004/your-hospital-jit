import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import pool from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value;

    console.log('Verify request - Token exists:', !!token);

    if (!token) {
      console.log('No token found in cookies');
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const decoded = verifyToken(token);

    if (!decoded) {
      console.log('Token verification failed');
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    console.log('Token decoded successfully for user:', decoded.userId);

    // Get user from database
    const [rows]: any = await pool.query(
      'SELECT id, email, name FROM super_admins WHERE id = ?',
      [decoded.userId]
    );

    if (rows.length === 0) {
      console.log('User not found in database:', decoded.userId);
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    console.log('User verified successfully:', rows[0].email);

    return NextResponse.json(
      {
        authenticated: true,
        user: rows[0],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Verify error:', error);
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
