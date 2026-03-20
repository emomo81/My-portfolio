import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Emmanuel Momo | Data Scientist & Web Developer',
  description: 'Portfolio of Emmanuel G. Momo - Creative Developer & Data Scientist based in Kigali.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body antialiased selection:bg-primary/30 selection:text-white">
        <div className="noise-overlay" />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
