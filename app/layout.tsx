import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://360crypto.site'),
  title: {
    template: '%s | 360Crypto',
    default: '360Crypto — Navigate Crypto. Build Wealth.',
  },
  description:
    'Expert crypto guides, curated trading tools, passive income strategies, and a community built for serious traders. Start your crypto journey with 360Crypto.',
  keywords: [
    'crypto trading',
    'cryptocurrency guide',
    'trading bots',
    'passive income crypto',
    'Solana memecoins',
    'memecoin trading',
    'DeFi strategies',
    'Pionex grid bot',
    'Bybit exchange',
    'BullX trading',
    'crypto signals',
    'crypto for beginners',
    'how to trade crypto',
    'best crypto exchanges 2026',
  ],
  authors: [{ name: '360Crypto', url: 'https://360crypto.site' }],
  alternates: {
    canonical: 'https://360crypto.site',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://360crypto.site',
    siteName: '360Crypto',
    title: '360Crypto — Navigate Crypto. Build Wealth.',
    description:
      'Expert crypto guides, curated trading tools, passive income strategies, and a community built for serious traders.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '360Crypto' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@360CryptoSite',
    creator: '@360CryptoSite',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'Ld7tjVTbBhrPNB50pPG7CnyTM68tWhv10aVSKcuh_hU',
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
        {/* JSON-LD structured data */}
        <Script id="jsonld-org" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: '360Crypto',
            url: 'https://360crypto.site',
            description: 'Expert crypto guides, curated trading tools, passive income strategies, and a community built for serious traders.',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://360crypto.site/blog?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          })}
        </Script>
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
