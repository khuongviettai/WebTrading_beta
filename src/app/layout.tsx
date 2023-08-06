import './globals.css';
import '../styles/scss/Bootstrap.scss';
import '../styles/scss/Font.scss';
import '../styles/scss/Global.scss';
import '../styles/scss/Mobile.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext/ThemeContext';
import AuthProvider from '@/context/AuthProvider/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}