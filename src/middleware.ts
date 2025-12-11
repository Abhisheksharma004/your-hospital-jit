import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protected routes that require authentication
  const protectedRoutes = [
    '/super-admin/dashboard',
    '/super-admin/hospitals',
    '/super-admin/users',
    '/super-admin/plans',
    '/super-admin/reports',
    '/super-admin/settings',
  ];

  // Check if the current path is a protected route
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtectedRoute) {
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
      // Redirect to login if no token
      return NextResponse.redirect(new URL('/super-admin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/super-admin/:path*'],
};
