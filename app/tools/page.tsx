import type { Metadata } from 'next';
import AffiliateCard from '@/components/AffiliateCard';
import TrackedAffiliateLink from '@/components/TrackedAffiliateLink';
import NewsletterInline from '@/components/NewsletterInline';
import { affiliates } from '@/lib/affiliates';
import { SOCIAL } from '@/lib/affiliates';

export const metadata: Metadata = {
  title: 'Best Crypto Tools — Curated & Tested',
  description:
    'Every crypto tool you need in one place. Exchanges, trading bots, passive income platforms, hardware wallets, tax software, and research tools — all curated and tested by 360Crypto.',
};

const SECTION_IDS = ['exchanges', 'bots', 'passive', 'wallets', 'tax', 'research'] as const;

const CEX_COMPARISON = [
  {
    name: 'Bybit',
    url: affiliates.bybit.url,
    fees: '0.10% / 0.06%',
    coins: '300+',
    futures: true,
    copy: true,
    bonus: 'Up to $30,000',
    highlight: true,
    badge: 'Best CEX',
  },
  {
    name: 'Binance',
    url: affiliates.binance.url,
    fees: '0.10% / 0.10%',
    coins: '350+',
    futures: true,
    copy: false,
    bonus: 'Up to $100',
    highlight: false,
    badge: 'Largest Volume',
  },
  {
    name: 'OKX',
    url: affiliates.okx.url,
    fees: '0.08% / 0.05%',
    coins: '350+',
    futures: true,
    copy: true,
    bonus: 'Up to $10,000',
    highlight: false,
    badge: undefined,
  },
  {
    name: 'Bitget',
    url: affiliates.bitget.url,
    fees: '0.10% / 0.06%',
    coins: '800+',
    futures: true,
    copy: true,
    bonus: 'Up to $6,200',
    highlight: false,
    badge: 'Best Copy Trading',
  },
  {
    name: 'MEXC',
    url: affiliates.mexc.url,
    fees: '0.00% / 0.05%',
    coins: '1500+',
    futures: true,
    copy: false,
    bonus: 'Up to $1,000',
    highlight: false,
    badge: 'Early Listings',
  },
  {
    name: 'KuCoin',
    url: affiliates.kucoin.url,
    fees: '0.10% / 0.06%',
    coins: '700+',
    futures: true,
    copy: false,
    bonus: 'Up to $500',
    highlight: false,
    badge: undefined,
  },
  {
    name: 'Gate.io',
    url: affiliates.gateio.url,
    fees: '0.20% / 0.15%',
    coins: '1700+',
    futures: true,
    copy: false,
    bonus: 'Up to $500',
    highlight: false,
    badge: undefined,
  },
];

const DEX_COMPARISON = [
  {
    name: 'SimpleSwap',
    url: affiliates.simpleswap.url,
    kyc: false,
    chains: '40+',
    pairs: '600+',
    minSwap: '$5',
    highlight: true,
    badge: 'Best DEX',
  },
  {
    name: 'Changelly',
    url: affiliates.changelly.url,
    kyc: false,
    chains: '40+',
    pairs: '700+',
    minSwap: '$10',
    highlight: false,
    badge: undefined,
  },
];

const HOT_WALLETS = [
  {
    name: 'MetaMask',
    url: 'https://metamask.io',
    chains: 'EVM (Ethereum, BSC, Polygon…)',
    description: 'The most widely used browser extension wallet for Ethereum and all EVM-compatible chains. Required for most DeFi protocols and NFT platforms.',
  },
  {
    name: 'Phantom',
    url: 'https://phantom.app',
    chains: 'Solana, Ethereum, Bitcoin',
    description: 'The go-to wallet for the Solana ecosystem. Clean UX, built-in swap, NFT support, and multi-chain capability. Essential for Solana memecoin trading.',
  },
  {
    name: 'Tonkeeper',
    url: 'https://tonkeeper.com',
    chains: 'TON Blockchain',
    description: 'The leading wallet for the TON ecosystem. If you\'re trading TON-based tokens or using Telegram Mini Apps for crypto, Tonkeeper is your starting point.',
  },
];

const FREE_TOOLS = [
  {
    name: 'CoinGecko',
    url: 'https://coingecko.com',
    description: 'The most comprehensive free crypto data platform. Track prices, market caps, on-chain metrics, and developer activity across 13,000+ tokens with no account required.',
    slug: 'coingecko',
  },
  {
    name: 'DexScreener',
    url: 'https://dexscreener.com',
    description: 'Real-time DEX pair analytics across 50+ blockchains. Find new liquidity pool launches the moment they go live, track holder counts, and spot early pumps before they trend.',
    slug: 'dexscreener',
  },
  {
    name: 'Pump.fun',
    url: 'https://pump.fun',
    description: 'The launch platform for Solana memecoins. Watch new tokens launch in real time, track bonding curve progress, and identify which coins are graduating to Raydium.',
    slug: 'pumpfun',
  },
  {
    name: 'Birdeye',
    url: 'https://birdeye.so',
    description: 'Solana-focused analytics aggregator with real-time price charts, holder tracking, smart money flow, and token discovery. The Bloomberg Terminal for Solana degens.',
    slug: 'birdeye',
  },
];

export default function ToolsPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0a0a0a] grid-bg pt-16 pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="h-96 w-96 rounded-full bg-[#00bfff] opacity-[0.03] blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center py-14">
          <span className="badge-cyan mb-4 inline-block">Curated & Tested</span>
          <h1 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-5">
            The Best Crypto Tools
          </h1>
          <p className="text-[#a0a0a0] text-lg max-w-xl mx-auto leading-relaxed">
            We test every platform so you don&apos;t have to. From CEX exchanges to Telegram sniping bots, hardware wallets, and tax software — this is the complete toolkit of a serious crypto trader.
          </p>

          {/* Jump links */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {['Exchanges', 'Bots', 'Passive Income', 'Wallets', 'Tax', 'Research'].map((label, i) => (
              <a
                key={label}
                href={`#${SECTION_IDS[i]}`}
                className="text-xs font-orbitron font-bold uppercase tracking-wider px-4 py-2 rounded-lg bg-[#1a1a1a] border border-[rgba(255,255,255,0.08)] text-[#a0a0a0] hover:text-[#00bfff] hover:border-[rgba(0,191,255,0.3)] transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent"
        />
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24 pb-24">

        {/* ── EXCHANGES ──────────────────────────────────────────────────────────── */}
        <section id="exchanges" className="scroll-mt-24">
          <div className="mb-10">
            <span className="badge-cyan mb-3 inline-block">Exchanges</span>
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-3">
              CEX vs DEX — Know Your Options
            </h2>
            <p className="text-[#666] max-w-2xl leading-relaxed">
              Centralized exchanges (CEX) offer deep liquidity and advanced trading features. Decentralized exchanges (DEX) give you full custody and no KYC. Use both strategically.
            </p>
          </div>

          {/* CEX Comparison Table */}
          <div className="mb-10">
            <h3 className="font-orbitron text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="h-px w-8 bg-[#00bfff]" aria-hidden="true" />
              Centralized Exchanges
            </h3>
            <div className="overflow-x-auto rounded-xl border border-[rgba(255,255,255,0.08)]">
              <table className="w-full text-sm">
                <thead className="bg-[#161616] border-b border-[rgba(255,255,255,0.06)]">
                  <tr>
                    <th className="text-left px-5 py-4 font-orbitron text-xs text-[#666] uppercase tracking-wider">Exchange</th>
                    <th className="text-left px-5 py-4 font-orbitron text-xs text-[#666] uppercase tracking-wider">Maker/Taker</th>
                    <th className="text-left px-5 py-4 font-orbitron text-xs text-[#666] uppercase tracking-wider">Coins</th>
                    <th className="text-center px-5 py-4 font-orbitron text-xs text-[#666] uppercase tracking-wider">Futures</th>
                    <th className="text-center px-5 py-4 font-orbitron text-xs text-[#666] uppercase tracking-wider">Copy Trade</th>
                    <th className="text-left px-5 py-4 font-orbitron text-xs text-[#666] uppercase tracking-wider">Sign-Up Bonus</th>
                    <th className="px-5 py-4" />
                  </tr>
                </thead>
                <tbody className="bg-[#0f0f0f] divide-y divide-[rgba(255,255,255,0.04)]">
                  {CEX_COMPARISON.map((ex) => (
                    <tr
                      key={ex.name}
                      className={`transition-colors hover:bg-[rgba(0,191,255,0.03)] ${ex.highlight ? 'bg-[rgba(0,191,255,0.03)]' : ''}`}
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white">{ex.name}</span>
                          {ex.badge && <span className="badge-cyan">{ex.badge}</span>}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-[#a0a0a0] font-mono text-xs">{ex.fees}</td>
                      <td className="px-5 py-4 text-[#a0a0a0]">{ex.coins}</td>
                      <td className="px-5 py-4 text-center">
                        {ex.futures ? (
                          <svg className="h-4 w-4 text-[#00bfff] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="h-4 w-4 text-[#444] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </td>
                      <td className="px-5 py-4 text-center">
                        {ex.copy ? (
                          <svg className="h-4 w-4 text-[#00bfff] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="h-4 w-4 text-[#444] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </td>
                      <td className="px-5 py-4 text-[#00bfff] font-semibold text-xs">{ex.bonus}</td>
                      <td className="px-5 py-4">
                        <TrackedAffiliateLink
                          href={ex.url}
                          affiliateName={ex.name.toLowerCase().replace(/\./g, '')}
                          category="exchanges_cex"
                          placement="tools-cex-comparison"
                          className="cyber-btn text-xs py-1.5 px-4"
                        >
                          Open →
                        </TrackedAffiliateLink>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* DEX Comparison Table */}
          <div className="mb-10">
            <h3 className="font-orbitron text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="h-px w-8 bg-[#00bfff]" aria-hidden="true" />
              Decentralized Exchanges
            </h3>
            <div className="overflow-x-auto rounded-xl border border-[rgba(255,255,255,0.08)]">
              <table className="w-full text-sm">
                <thead className="bg-[#161616] border-b border-[rgba(255,255,255,0.06)]">
                  <tr>
                    <th className="text-left px-5 py-4 font-orbitron text-xs text-[#666] uppercase tracking-wider">Protocol</th>
                    <th className="text-center px-5 py-4 font-orbitron text-xs text-[#666] uppercase tracking-wider">KYC Required</th>
                    <th className="text-left px-5 py-4 font-orbitron text-xs text-[#666] uppercase tracking-wider">Chains</th>
                    <th className="text-left px-5 py-4 font-orbitron text-xs text-[#666] uppercase tracking-wider">Pairs</th>
                    <th className="text-left px-5 py-4 font-orbitron text-xs text-[#666] uppercase tracking-wider">Min Swap</th>
                    <th className="px-5 py-4" />
                  </tr>
                </thead>
                <tbody className="bg-[#0f0f0f] divide-y divide-[rgba(255,255,255,0.04)]">
                  {DEX_COMPARISON.map((dex) => (
                    <tr
                      key={dex.name}
                      className={`transition-colors hover:bg-[rgba(0,191,255,0.03)] ${dex.highlight ? 'bg-[rgba(0,191,255,0.03)]' : ''}`}
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white">{dex.name}</span>
                          {dex.badge && <span className="badge-cyan">{dex.badge}</span>}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-center">
                        {dex.kyc ? (
                          <svg className="h-4 w-4 text-red-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span className="text-xs font-bold text-emerald-400 font-orbitron">NO KYC</span>
                        )}
                      </td>
                      <td className="px-5 py-4 text-[#a0a0a0]">{dex.chains}</td>
                      <td className="px-5 py-4 text-[#a0a0a0]">{dex.pairs}</td>
                      <td className="px-5 py-4 text-[#a0a0a0]">{dex.minSwap}</td>
                      <td className="px-5 py-4">
                        <TrackedAffiliateLink
                          href={dex.url}
                          affiliateName={dex.name.toLowerCase().replace(/\./g, '')}
                          category="exchanges_dex"
                          placement="tools-dex-comparison"
                          className="cyber-btn text-xs py-1.5 px-4"
                        >
                          Swap Now →
                        </TrackedAffiliateLink>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* ── BOTS ───────────────────────────────────────────────────────────────── */}
        <section id="bots" className="scroll-mt-24">
          <div className="mb-10">
            <span className="badge-cyan mb-3 inline-block">Automated Trading</span>
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-3">
              Trading Bots & Terminals
            </h2>
            <p className="text-[#666] max-w-2xl leading-relaxed">
              From professional grid bots to Solana memecoin snipers — automate your edge and trade faster than any human can.
            </p>
          </div>

          <h3 className="font-orbitron text-lg font-bold text-white mb-5 flex items-center gap-2">
            <span className="h-px w-8 bg-[#00bfff]" aria-hidden="true" />
            Bot Platforms
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {[affiliates.gmgn, affiliates.bullx, affiliates.threecommas, affiliates.cryptohopper, affiliates.coinrule].map((a) => (
              <AffiliateCard
                key={a.name}
                name={a.name}
                url={a.url}
                description={a.description}
                affiliateName={a.slug ?? a.name.toLowerCase()}
                category={a.category}
                badge={a.badge}
                highlight={a.highlight}
                placement="tools-page"
              />
            ))}
          </div>

          <h3 className="font-orbitron text-lg font-bold text-white mb-5 flex items-center gap-2">
            <span className="h-px w-8 bg-[#00bfff]" aria-hidden="true" />
            Telegram Trading Bots
          </h3>
          <p className="text-[#666] text-sm mb-6 max-w-2xl leading-relaxed">
            Trade directly from Telegram — no app switching, no browser. These bots give you sniper-speed execution on Solana, ETH, TON, and BSC with a simple command interface.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              affiliates.pepeboosteth,
              affiliates.pepeboostsol,
              affiliates.trojan,
              affiliates.shuriken,
              affiliates.soulsniper,
              affiliates.etherdrops,
              affiliates.raysilver,
            ].map((a) => (
              <AffiliateCard
                key={a.name}
                name={a.name}
                url={a.url}
                description={a.description}
                affiliateName={a.slug ?? a.name.toLowerCase()}
                category={a.category}
                placement="tools-page"
              />
            ))}
          </div>
        </section>

        <hr className="section-divider" />

        {/* ── PASSIVE INCOME ─────────────────────────────────────────────────────── */}
        <section id="passive" className="scroll-mt-24">
          <div className="mb-10">
            <span className="badge-cyan mb-3 inline-block">Passive Income</span>
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-3">
              Earn Crypto Passively
            </h2>
            <p className="text-[#666] max-w-2xl leading-relaxed">
              Your capital should work harder than you do. From automated grid bots to browser mining and faucets — here are the best ways to earn crypto without active trading.
            </p>
          </div>

          {/* Pionex Hero Card */}
          <div className="cyber-card-highlight p-8 mb-8 relative overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#00bfff] opacity-[0.05] blur-[60px]"
            />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <span className="badge-cyan mb-3 inline-block">{affiliates.pionex.badge}</span>
                <h3 className="font-orbitron text-xl md:text-2xl font-bold text-white mb-3">
                  {affiliates.pionex.name}
                </h3>
                <p className="text-[#a0a0a0] leading-relaxed text-sm mb-4">
                  {affiliates.pionex.description}
                </p>
                <ul className="text-sm text-[#a0a0a0] space-y-1.5">
                  {[
                    '16 free built-in trading bots — no subscription required',
                    'Over $5 billion in daily trading volume',
                    'Works 24/7 — even when you\'re sleeping, traveling, or offline',
                    'Beginner-friendly setup takes less than 10 minutes',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <svg className="h-4 w-4 text-[#00bfff] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <TrackedAffiliateLink
                href={affiliates.pionex.url}
                affiliateName="pionex"
                category="passive_income"
                placement="tools-passive-strip"
                className="cyber-btn shrink-0 text-sm py-3 px-8"
              >
                Start Grid Bot →
              </TrackedAffiliateLink>
            </div>
          </div>

          {/* Other passive income */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[affiliates.cryptotab, affiliates.cointiply, affiliates.pawns, affiliates.freecash, affiliates.rollercoin].map((a) => (
              <AffiliateCard
                key={a.name}
                name={a.name}
                url={a.url}
                description={a.description}
                affiliateName={a.slug ?? a.name.toLowerCase()}
                category={a.category}
                badge={a.badge}
                highlight={a.highlight}
                placement="tools-page"
              />
            ))}
          </div>
        </section>

        <hr className="section-divider" />

        {/* ── WALLETS ────────────────────────────────────────────────────────────── */}
        <section id="wallets" className="scroll-mt-24">
          <div className="mb-10">
            <span className="badge-cyan mb-3 inline-block">Security First</span>
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-3">
              Wallets — Custody Your Assets
            </h2>
            <p className="text-[#666] max-w-2xl leading-relaxed">
              Not your keys, not your coins. The right wallet depends on what chains you&apos;re active on and your security tolerance. We cover both hot and cold options.
            </p>
          </div>

          <h3 className="font-orbitron text-lg font-bold text-white mb-5 flex items-center gap-2">
            <span className="h-px w-8 bg-[#00bfff]" aria-hidden="true" />
            Hot Wallets (Free)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {HOT_WALLETS.map((w) => (
              <div key={w.name} className="cyber-card p-6 flex flex-col gap-3">
                <h3 className="font-orbitron text-sm font-bold text-white">{w.name}</h3>
                <p className="text-xs text-[#00bfff] font-semibold">{w.chains}</p>
                <p className="text-sm text-[#666] leading-relaxed flex-1">{w.description}</p>
                <TrackedAffiliateLink
                  href={w.url}
                  affiliateName={w.name.toLowerCase()}
                  category="wallets"
                  placement="tools-hot-wallets"
                  className="cyber-btn-outline text-xs py-2 w-full text-center mt-auto"
                >
                  Download Free →
                </TrackedAffiliateLink>
              </div>
            ))}
          </div>

          <h3 className="font-orbitron text-lg font-bold text-white mb-5 flex items-center gap-2">
            <span className="h-px w-8 bg-[#00bfff]" aria-hidden="true" />
            Cold Wallets (Hardware)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <AffiliateCard
              name={affiliates.ledger.name}
              url={affiliates.ledger.url}
              description={affiliates.ledger.description}
              affiliateName="ledger"
              category="hardware_wallets"
              badge={affiliates.ledger.badge}
              highlight={affiliates.ledger.highlight}
              placement="tools-cold-wallets"
              ctaLabel="Shop Ledger →"
            />
            <AffiliateCard
              name={affiliates.trezor.name}
              url={affiliates.trezor.url}
              description={affiliates.trezor.description}
              affiliateName="trezor"
              category="hardware_wallets"
              placement="tools-cold-wallets"
              ctaLabel="Shop Trezor →"
            />
          </div>
        </section>

        <hr className="section-divider" />

        {/* ── TAX SOFTWARE ───────────────────────────────────────────────────────── */}
        <section id="tax" className="scroll-mt-24">
          <div className="mb-10">
            <span className="badge-cyan mb-3 inline-block">Tax & Compliance</span>
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-3">
              Crypto Tax Software
            </h2>
            <p className="text-[#666] max-w-2xl leading-relaxed">
              Ignore your taxes and the IRS won&apos;t ignore you. These tools auto-import your entire transaction history and generate compliant tax reports in minutes — not days.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <AffiliateCard
              name={affiliates.koinly.name}
              url={affiliates.koinly.url}
              description={affiliates.koinly.description}
              affiliateName="koinly"
              category="tax_software"
              badge={affiliates.koinly.badge}
              highlight={affiliates.koinly.highlight}
              placement="tools-tax"
              ctaLabel="Try Koinly Free →"
            />
            <AffiliateCard
              name={affiliates.coinledger.name}
              url={affiliates.coinledger.url}
              description={affiliates.coinledger.description}
              affiliateName="coinledger"
              category="tax_software"
              placement="tools-tax"
              ctaLabel="Try CoinLedger Free →"
            />
          </div>
        </section>

        <hr className="section-divider" />

        {/* ── RESEARCH ───────────────────────────────────────────────────────────── */}
        <section id="research" className="scroll-mt-24">
          <div className="mb-10">
            <span className="badge-cyan mb-3 inline-block">Analysis & Research</span>
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-3">
              Research & Analytics Tools
            </h2>
            <p className="text-[#666] max-w-2xl leading-relaxed">
              Data wins markets. The right analytics tools give you an asymmetric edge — see what others can&apos;t, act before the crowd.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            <AffiliateCard
              name={affiliates.tradingview.name}
              url={affiliates.tradingview.url}
              description={affiliates.tradingview.description}
              affiliateName="tradingview"
              category="research"
              badge={affiliates.tradingview.badge}
              highlight={affiliates.tradingview.highlight}
              placement="tools-research"
            />
            {FREE_TOOLS.map((tool) => (
              <div key={tool.name} className="cyber-card p-6 flex flex-col gap-3">
                <h3 className="font-orbitron text-sm font-bold text-white">{tool.name}</h3>
                <p className="text-sm text-[#666] leading-relaxed flex-1">{tool.description}</p>
                <TrackedAffiliateLink
                  href={tool.url}
                  affiliateName={tool.slug}
                  category="research"
                  placement="tools-research-free"
                  className="cyber-btn-outline text-xs py-2 w-full text-center mt-auto"
                >
                  Open Free →
                </TrackedAffiliateLink>
              </div>
            ))}
          </div>
        </section>

        {/* ── NEWSLETTER + CONTACT ───────────────────────────────────────────────── */}
        <section>
          <NewsletterInline
            title="Get Notified About New Tools"
            subtitle="We add new curated tools regularly. Subscribe to get notified the moment we recommend something new — and get exclusive discount codes for premium tools."
          />
          <div className="mt-6 text-center">
            <p className="text-sm text-[#555]">
              Missed a tool you love?{' '}
              <a
                href={`mailto:${SOCIAL.email}`}
                className="text-[#00bfff] hover:underline"
              >
                Email us at {SOCIAL.email}
              </a>{' '}
              and we&apos;ll review it.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
