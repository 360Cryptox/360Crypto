import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateCard from '@/components/AffiliateCard';
import TrackedAffiliateLink from '@/components/TrackedAffiliateLink';
import NewsletterInline from '@/components/NewsletterInline';
import { affiliates } from '@/lib/affiliates';

export const metadata: Metadata = {
  title: '360Crypto — Navigate Crypto. Build Wealth.',
  description:
    'Expert crypto guides, curated trading tools, passive income strategies, and a community built for serious traders.',
};

const STATS = [
  { value: '10,000+', label: 'Community Members' },
  { value: '50+',     label: 'Curated Tools' },
  { value: '100%',    label: 'Free Expert Guides' },
];

const FEATURES = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.966 8.966 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: 'Expert Guides',
    description: 'From beginner basics to advanced DeFi strategies — our guides are written by traders who actually use the tools.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Best-in-Class Tools',
    description: 'Every tool we recommend has been personally tested by traders who actually use them. Only what works.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Active Community',
    description: 'Join 10,000+ traders on Telegram sharing signals, news, and strategies in real time. Learn, trade, and grow together.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Early Alpha Signals',
    description: 'Get ahead of the market with early signals, upcoming coin launches, and memecoin opportunities before they go viral.',
  },
];

const STORE_PREVIEWS = [
  {
    name: 'Premium Trading Bots',
    description: 'Fully automated Solana and ETH memecoin bots with pre-configured strategies. Plug in your wallet, set your risk, and let the bot hunt for alpha.',
    icon: '🤖',
  },
  {
    name: 'Insider Wallet Lists',
    description: 'Curated lists of top-performing sniper and whale wallets on Solana. Copy their moves before the rest of the market notices.',
    icon: '📋',
  },
  {
    name: 'VIP Signal Access',
    description: 'Join our private signal channel where we share real-time entry and exit calls, upcoming launches, and exclusive alpha.',
    icon: '⚡',
  },
];

export default function HomePage() {
  const pionex = affiliates.pionex;
  const bybit = affiliates.bybit;
  const bullx = affiliates.bullx;

  return (
    <>
      {/* â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden grid-bg">
        {/* Radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="h-[600px] w-[600px] rounded-full bg-[#00bfff] opacity-[0.04] blur-[140px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center py-24">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(0,191,255,0.25)] bg-[rgba(0,191,255,0.07)] px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#00bfff] animate-pulse-glow" aria-hidden="true" />
            <span className="font-orbitron text-xs font-bold text-[#00bfff] tracking-wider uppercase">
              Live — Join 10,000+ Traders
            </span>
          </div>

          <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-white mb-6">
            Navigate Crypto.{' '}
            <span className="glow-text block mt-1">Build Wealth.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-[#a0a0a0] text-lg md:text-xl leading-relaxed mb-10">
            360Crypto is your all-in-one platform for crypto education, curated trading tools, passive income strategies, and a community that trades together. From your first Bitcoin to memecoins on Solana — we&apos;ve got you covered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/guides" className="cyber-btn text-sm py-3 px-8">
              Explore Guides →
            </Link>
            <Link href="/tools" className="cyber-btn-outline text-sm py-3 px-8">
              Best Tools →
            </Link>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent"
        />
      </section>

      {/* â”€â”€ STATS BAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="bg-[#111] border-y border-[rgba(255,255,255,0.06)]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-3 divide-x divide-[rgba(255,255,255,0.06)]">
            {STATS.map(({ value, label }) => (
              <div key={label} className="px-4 sm:px-8 text-center">
                <div className="font-orbitron text-2xl sm:text-3xl font-black glow-text mb-1">
                  {value}
                </div>
                <div className="text-xs sm:text-sm text-[#666] font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ FEATURED TOOLS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <span className="badge-cyan mb-4 inline-block">Top Picks</span>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4">
            Our Top Recommended Tools
          </h2>
          <p className="text-[#666] max-w-xl mx-auto">
            These are the platforms we actually use. Start here to maximize your edge — whether you&apos;re trading, automating, or earning passively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AffiliateCard
            name={pionex.name}
            url={pionex.url}
            description={pionex.description}
            affiliateName="pionex"
            category="passive_income"
            badge={pionex.badge}
            highlight={pionex.highlight}
            placement="homepage-featured"
          />
          <AffiliateCard
            name={bybit.name}
            url={bybit.url}
            description={bybit.description}
            affiliateName="bybit"
            category="exchanges_cex"
            badge={bybit.badge}
            highlight={bybit.highlight}
            placement="homepage-featured"
          />
          <AffiliateCard
            name={bullx.name}
            url={bullx.url}
            description={bullx.description}
            affiliateName="bullx"
            category="trading_bots"
            badge={bullx.badge}
            highlight={bullx.highlight}
            placement="homepage-featured"
          />
        </div>

        <div className="text-center mt-8">
          <Link href="/tools" className="cyber-btn-outline text-sm py-2.5 px-6">
            View All Tools →
          </Link>
        </div>
      </section>

      <hr className="section-divider mx-auto max-w-7xl" />

      {/* â”€â”€ WHY 360CRYPTO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4">
            Why <span className="glow-text">360Crypto?</span>
          </h2>
          <p className="text-[#666] max-w-lg mx-auto">
            Traders building for traders. Real strategies, tested tools, and a community that moves fast.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f) => (
            <div key={f.title} className="cyber-card p-6 flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(0,191,255,0.1)] text-[#00bfff]">
                {f.icon}
              </div>
              <h3 className="font-orbitron text-sm font-bold text-white">{f.title}</h3>
              <p className="text-sm text-[#666] leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* â”€â”€ MEMECOIN CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-[rgba(0,191,255,0.2)] px-8 py-12 md:px-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#00bfff] opacity-[0.05] blur-[80px]"
          />
          <div className="relative z-10 max-w-2xl">
            <span className="badge-cyan mb-4 inline-block">Trending Now</span>
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-4">
              The Memecoin Wave Is <span className="glow-text">Now</span>
            </h2>
            <p className="text-[#a0a0a0] mb-8 leading-relaxed">
              Solana memecoins are creating life-changing returns for early movers. From Pump.fun launches to Raydium listings — the window is open right now. Learn how to identify, snipe, and exit winning memecoins before the crowd arrives.
            </p>
            <Link href="/guides" className="cyber-btn text-sm py-3 px-8 inline-flex">
              Learn Memecoin Trading →
            </Link>
          </div>
        </div>
      </section>

      {/* â”€â”€ PASSIVE INCOME STRIP â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0d1a1f] to-[#0a1520] border border-[rgba(0,191,255,0.25)] px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-[rgba(0,191,255,0.08)] to-transparent"
          />
          <div className="relative z-10">
            <p className="font-orbitron text-xs font-bold text-[#00bfff] uppercase tracking-widest mb-2">
              Passive Income
            </p>
            <h2 className="font-orbitron text-xl md:text-2xl font-bold text-white mb-2">
              Earn While You Sleep
            </h2>
            <p className="text-[#a0a0a0] text-sm max-w-lg leading-relaxed">
              Pionex grid trading bots buy low and sell high automatically — 24/7. No manual trades. No emotion. Just consistent, compounding returns. Over $5 billion in daily trading volume processed by Pionex bots.
            </p>
          </div>
                    {/* tracked link — fires affiliate_click GA4 event */}
          <TrackedAffiliateLink
            href={affiliates.pionex.url}
            affiliateName="pionex"
            category="passive_income"
            placement="homepage-passive-strip"
            className="cyber-btn shrink-0 text-sm py-3 px-8"
          >
            Start Grid Bot Trading →
          </TrackedAffiliateLink>
        </div>
      </section>

      {/* â”€â”€ STORE TEASER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <span className="badge-cyan mb-4 inline-block">Coming Soon</span>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4">
            360Crypto Store
          </h2>
          <p className="text-[#666] max-w-lg mx-auto">
            Premium digital products for serious crypto traders. Be the first to know when we launch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {STORE_PREVIEWS.map((product) => (
            <div key={product.name} className="cyber-card p-6 flex flex-col gap-4 relative overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 right-0 h-24 w-24 rounded-full bg-[#00bfff] opacity-[0.04] blur-[30px]"
              />
              <div className="text-3xl">{product.icon}</div>
              <h3 className="font-orbitron text-sm font-bold text-white">{product.name}</h3>
              <p className="text-sm text-[#666] leading-relaxed flex-1">{product.description}</p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <span className="font-orbitron text-xs text-[#555] font-bold uppercase tracking-wider">
                  Coming Soon
                </span>
                <Link
                  href="/store"
                  className="text-xs text-[#00bfff] font-semibold hover:underline"
                >
                  Notify Me →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/store" className="cyber-btn-outline text-sm py-2.5 px-6">
            View Full Store →
          </Link>
        </div>
      </section>

      {/* â”€â”€ NEWSLETTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section id="newsletter" className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-24">
        <NewsletterInline
          title="Get Exclusive Signals & Early Access"
          subtitle="Get exclusive signals, early access to store products, and weekly alpha — straight to your inbox. Join 10,000+ traders already subscribed."
        />
      </section>
    </>
  );
}


