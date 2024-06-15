import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import '@/styles/globals.css';
import { Footer, Header } from '@/components/ui';

const nunito = Nunito({
  subsets: ['vietnamese', 'latin'],
  weight: ['500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Tuna dev',
  description: 'Tuna dev portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
