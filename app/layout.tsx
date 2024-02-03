import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './dashboard/providers';

const inter = Inter({
  subsets: ['latin'],
  weight: 'variable',
});

export const metadata: Metadata = {
  title: 'JustLink',
  description: 'One Link, endless possibilities.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
