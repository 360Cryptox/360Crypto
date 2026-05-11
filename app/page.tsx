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
  const kraken = affiliates.kraken;
  const bybit = affiliates.bybit;
  const bullx = affiliates.bullx;

  return (
    <>
      {/* â"€â"€ HERO â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden grid-bg">
        {/* Radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="h-[600px] w-[600px] rounded-full bg-[#5599dd] opacity-[0.04] blur-[140px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center py-24">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(85,153,221,0.28)] bg-[rgba(85,153,221,0.08)] px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#5599dd] animate-pulse-glow" aria-hidden="true" />
            <span className="font-orbitron text-xs font-bold text-[#88ccff] tracking-wider uppercase">
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

        {/* Futuristic ship — blueprint/holographic schematic, right side */}
        <div aria-hidden="true" className="pointer-events-none absolute right-[-4%] top-1/2 -translate-y-[48%] w-[58%] max-w-[700px] hidden lg:block" style={{ opacity: 0.22 }}>
          <svg viewBox="0 0 700 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full animate-float">
            <defs>
              <filter id="sg" x="-25%" y="-25%" width="150%" height="150%">
                <feGaussianBlur stdDeviation="3.5" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <filter id="sgs" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="7" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>

            {/* Main hull */}
            <path d="M 55,132 L 580,104 L 650,120 L 580,136 L 55,164 L 16,148 Z"
              stroke="#5599dd" strokeWidth="1.5" fill="rgba(85,153,221,0.05)" filter="url(#sg)"/>
            {/* Upper deck layer */}
            <path d="M 95,132 L 555,108 L 580,120 L 555,132 L 95,158 Z"
              stroke="#5599dd" strokeWidth="0.75" fill="rgba(85,153,221,0.03)"/>
            {/* Command bridge */}
            <path d="M 200,132 L 232,78 L 400,74 L 428,100 L 428,132 Z"
              stroke="#5599dd" strokeWidth="1.5" fill="rgba(85,153,221,0.08)" filter="url(#sg)"/>
            {/* Bridge windows */}
            <path d="M 252,104 L 252,90 L 400,86 L 400,100 Z"
              stroke="#88ccff" strokeWidth="1.5" fill="rgba(136,204,255,0.12)" filter="url(#sg)"/>
            {/* Bow sharp tip */}
            <path d="M 580,104 L 652,120 L 580,136"
              stroke="#88ccff" strokeWidth="2" fill="rgba(136,204,255,0.1)" filter="url(#sg)"/>
            {/* Engine nacelle top */}
            <path d="M 16,118 L 55,116 L 55,132 L 16,130 Z"
              stroke="#5599dd" strokeWidth="1.5" fill="rgba(85,153,221,0.1)"/>
            {/* Engine nacelle bottom */}
            <path d="M 16,142 L 55,140 L 55,156 L 16,154 Z"
              stroke="#5599dd" strokeWidth="1.5" fill="rgba(85,153,221,0.1)"/>
            {/* Thruster glow top */}
            <circle cx="11" cy="124" r="8" fill="#88ccff" opacity="0.65" filter="url(#sgs)"/>
            <circle cx="11" cy="124" r="3.5" fill="white" opacity="0.95"/>
            {/* Thruster glow bottom */}
            <circle cx="11" cy="148" r="8" fill="#88ccff" opacity="0.65" filter="url(#sgs)"/>
            <circle cx="11" cy="148" r="3.5" fill="white" opacity="0.95"/>
            {/* Hull structural ribs */}
            <line x1="155" y1="108" x2="155" y2="160" stroke="#5599dd" strokeWidth="0.6" opacity="0.45"/>
            <line x1="260" y1="104" x2="260" y2="156" stroke="#5599dd" strokeWidth="0.6" opacity="0.45"/>
            <line x1="360" y1="102" x2="360" y2="150" stroke="#5599dd" strokeWidth="0.6" opacity="0.45"/>
            <line x1="460" y1="100" x2="460" y2="140" stroke="#5599dd" strokeWidth="0.6" opacity="0.45"/>
            <line x1="530" y1="100" x2="530" y2="130" stroke="#5599dd" strokeWidth="0.6" opacity="0.45"/>
            {/* Center deck dashed line */}
            <line x1="95" y1="145" x2="565" y2="120" stroke="#5599dd" strokeWidth="0.8" opacity="0.5" strokeDasharray="5 4"/>
            {/* Mast / comm antenna */}
            <line x1="300" y1="74" x2="288" y2="30" stroke="#88ccff" strokeWidth="1.5" opacity="0.85"/>
            <circle cx="286" cy="27" r="4.5" fill="#88ccff" opacity="0.9" filter="url(#sg)"/>
            <line x1="262" y1="50" x2="315" y2="48" stroke="#5599dd" strokeWidth="0.8" opacity="0.55"/>
            {/* Second antenna */}
            <line x1="370" y1="74" x2="380" y2="40" stroke="#5599dd" strokeWidth="1" opacity="0.6"/>
            <circle cx="381" cy="37" r="3" fill="#5599dd" opacity="0.8"/>
            {/* Sensor array */}
            <circle cx="490" cy="122" r="5.5" stroke="#88ccff" strokeWidth="1.5" fill="rgba(136,204,255,0.14)"/>
            <circle cx="516" cy="120" r="4" stroke="#88ccff" strokeWidth="1.5" fill="rgba(136,204,255,0.12)"/>
            <circle cx="538" cy="118" r="3" stroke="#88ccff" strokeWidth="1.5" fill="rgba(136,204,255,0.12)"/>
            {/* Hull accent lines */}
            <line x1="95" y1="122" x2="430" y2="108" stroke="#5599dd" strokeWidth="0.6" opacity="0.35"/>
            <line x1="95" y1="152" x2="540" y2="130" stroke="#5599dd" strokeWidth="0.6" opacity="0.28"/>
            {/* Wake lines */}
            <path d="M 42,172 Q 22,184 42,196 Q 62,208 82,196" stroke="#5599dd" strokeWidth="0.75" opacity="0.22" fill="none"/>
            <path d="M 65,178 Q 38,192 65,206 Q 92,220 118,206" stroke="#5599dd" strokeWidth="0.5" opacity="0.14" fill="none"/>
          </svg>
        </div>

        {/* Bottom fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent"
        />
      </section>

      {/* â"€â"€ STATS BAR â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
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

      {/* â"€â"€ FEATURED TOOLS â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
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
            name={kraken.name}
            url={kraken.url}
            description={kraken.description}
            affiliateName="kraken"
            category="exchanges_cex"
            badge={kraken.badge}
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

      {/* â"€â"€ WHY 360CRYPTO â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
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
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(85,153,221,0.1)] text-[#88ccff]">
                {f.icon}
              </div>
              <h3 className="font-orbitron text-sm font-bold text-white">{f.title}</h3>
              <p className="text-sm text-[#666] leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TREND CTA — RWA chromatic */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        {/* Silver iridescent border */}
        <div className="relative p-[2px] rounded-2xl" style={{ background: 'linear-gradient(135deg, #2244aa 0%, #5599ee 25%, #aaddff 45%, #ffffff 55%, #ffeebb 70%, #ddaa44 85%, #3355aa 100%)' }}>
          <div className="relative overflow-hidden rounded-2xl" style={{ background: '#080c14' }}>
            {/* Steel glow clouds */}
            <div aria-hidden="true" className="pointer-events-none absolute -left-16 -top-8 h-96 w-96 rounded-full bg-[#3366cc] opacity-[0.2] blur-[80px]" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -bottom-8 h-96 w-96 rounded-full bg-[#ddaa44] opacity-[0.14] blur-[80px]" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-10 px-8 py-12 md:px-12 md:py-14">
              {/* Left */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-10 rounded-full" style={{ background: 'linear-gradient(to right, #6677aa, #88ccff)' }} />
                  <span className="text-[10px] font-orbitron font-bold tracking-[0.18em] uppercase" style={{ color: '#5599dd' }}>
                    Trending in 2026
                  </span>
                </div>

                <h2 className="font-orbitron text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                  Wall Street Is Moving{' '}
                  <br className="hidden md:block" />
                  <span style={{ background: 'linear-gradient(135deg, #5599ee 0%, #aaddff 30%, #ffffff 52%, #ffeebb 72%, #ddaa44 90%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    On-Chain.
                  </span>
                </h2>

                <p className="text-[#607888] text-sm md:text-base leading-relaxed max-w-lg mb-8">
                  BlackRock, Franklin Templeton, and JPMorgan are tokenizing trillions in bonds, real estate, and private credit. Real-World Assets are the fastest-growing sector in crypto — and early movers are already positioned.
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    { label: 'Total RWA TVL', value: '$15B+' },
                    { label: 'YoY Growth',    value: '785%'  },
                    { label: 'Protocols',     value: '200+'  },
                  ].map((s) => (
                    <div key={s.label} className="px-4 py-2.5 rounded-lg" style={{ background: 'rgba(85,153,221,0.08)', border: '1px solid rgba(85,153,221,0.22)' }}>
                      <div className="text-[10px] font-orbitron text-[#4a6888] uppercase tracking-wider mb-0.5">{s.label}</div>
                      <div className="text-sm font-bold font-orbitron text-[#88ccff]">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — CTA */}
              <div className="shrink-0 flex flex-col items-start lg:items-end gap-3">
                <Link
                  href="/guides"
                  className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-orbitron text-sm font-bold text-white tracking-wider overflow-hidden transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(135deg, #0d1a30 0%, #1a2e50 100%)',
                    border: '1px solid rgba(85,153,221,0.45)',
                    boxShadow: '0 4px 24px rgba(85,153,221,0.12), inset 0 1px 0 rgba(255,255,255,0.08)',
                  }}
                >
                  <span className="relative z-10">Read the RWA Guide</span>
                  <svg className="h-4 w-4 relative z-10 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span aria-hidden="true" className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.07] transition-opacity" />
                </Link>
                <p className="text-[#444] text-[10px] font-orbitron tracking-widest uppercase">Free — No signup required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* â"€â"€ KRAKEN STRIP â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative overflow-hidden rounded-2xl bg-[#0a0c14] border border-[rgba(85,153,221,0.22)] px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-full w-48 bg-gradient-to-r from-[rgba(85,153,221,0.07)] to-transparent" />
          <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-[#5599dd] opacity-[0.06] blur-[60px]" />
          <div className="relative z-10">
            <p className="font-orbitron text-xs font-bold text-[#5599dd] uppercase tracking-widest mb-2">
              Most Trusted US Exchange
            </p>
            <h2 className="font-orbitron text-xl md:text-2xl font-bold text-white mb-2">
              Trade on Kraken — Est. 2011
            </h2>
            <p className="text-[#6a8aaa] text-sm max-w-lg leading-relaxed">
              America&apos;s most trusted regulated exchange. Never breached in 14 years. Low 0.25% maker fees, futures for US users, ETH staking, and a clean interface built for serious traders.
            </p>
          </div>
          <TrackedAffiliateLink
            href={affiliates.kraken.url}
            affiliateName="kraken"
            category="exchanges_cex"
            placement="homepage-kraken-strip"
            className="shrink-0 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-orbitron font-bold text-sm text-[#88ccff] transition-all duration-200 whitespace-nowrap uppercase tracking-widest"
            style={{ background: 'linear-gradient(135deg, #0d1a30 0%, #1a2e50 100%)', border: '1px solid rgba(85,153,221,0.4)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), 0 0 16px rgba(85,153,221,0.1)' }}
          >
            Open Kraken →
          </TrackedAffiliateLink>
        </div>
      </section>

      {/* â"€â"€ STORE TEASER â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
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
                className="pointer-events-none absolute top-0 right-0 h-24 w-24 rounded-full bg-[#5599dd] opacity-[0.04] blur-[30px]"
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
                  className="text-xs text-[#5599dd] font-semibold hover:underline"
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

      {/* â"€â"€ NEWSLETTER â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section id="newsletter" className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-24">
        <NewsletterInline
          title="Get Exclusive Signals & Early Access"
          subtitle="Get exclusive signals, early access to store products, and weekly alpha — straight to your inbox. Join 10,000+ traders already subscribed."
        />
      </section>
    </>
  );
}



