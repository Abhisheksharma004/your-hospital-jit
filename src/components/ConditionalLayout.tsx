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
  const noLayoutPages = [
    '/login',
    '/super-admin',
    '/super-admin/dashboard',
    '/forgot-password',
    '/register',
  ];

  const shouldShowLayout = !noLayoutPages.includes(pathname);

  return (
    <>
      {shouldShowLayout && <Navbar />}
      {children}
      {shouldShowLayout && <Footer />}
    </>
  );
}
