import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    template: '%s | 360Crypto',
    default: '360Crypto — Navigate Crypto. Build Wealth.',
  },
  description:
    'Expert crypto guides, curated trading tools, passive income strategies, and a community built for serious traders. Start your crypto journey with 360Crypto.',
  keywords: [
    'crypto',
    'cryptocurrency',
    'trading bots',
    'passive income',
    'Solana',
    'memecoin',
    'DeFi',
    'grid bots',
    'Pionex',
    'Bybit',
    'trading signals',
  ],
  authors: [{ name: '360Crypto', url: 'https://360crypto.site' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://360crypto.site',
    siteName: '360Crypto',
    title: '360Crypto — Navigate Crypto. Build Wealth.',
    description:
      'Expert crypto guides, curated trading tools, passive income strategies, and a community built for serious traders.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@360CryptoSite',
    creator: '@360CryptoSite',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GA_ID = 'G-0MXFRFKXZC';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `}
        </Script>
      </head>
      <body className="bg-[#0a0a0a] text-[#ededed] antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
