"use client"
import 'bootstrap/dist/css/bootstrap.css';
import { Inter } from "next/font/google";
import { usePathname } from 'next/navigation';
import "./globals.scss";
import BootstrapClient from '@/components/BootstrapClient';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeaderDoctor from '@/components/HeaderDoctor';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); 

  const isHome = pathname === '/';

  return (
    <html lang="en">
      <body className={inter.className}>
        {isHome ? <Header /> : <HeaderDoctor />}
        {children}
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}
