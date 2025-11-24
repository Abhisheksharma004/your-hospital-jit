'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Pages that should not have navbar and footer
  // Check if pathname starts with any of these routes
  const noLayoutRoutes = [
    '/login',
    '/super-admin',
    '/forgot-password',
    '/register',
  ];

  const shouldShowLayout = !noLayoutRoutes.some((route) =>
    pathname.startsWith(route)
  );

  return (
    <>
      {shouldShowLayout && <Navbar />}
      {children}
      {shouldShowLayout && <Footer />}
    </>
  );
}
