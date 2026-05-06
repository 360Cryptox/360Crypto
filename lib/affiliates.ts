export type AffiliateCategory =
  | 'exchanges_cex'
  | 'exchanges_dex'
  | 'passive_income'
  | 'trading_bots'
  | 'telegram_bots'
  | 'wallets'
  | 'hardware_wallets'
  | 'tax_software'
  | 'research'
  | 'resources';

export interface Affiliate {
  /** Record key — used as affiliateName in GA4 tracking */
  slug?: string;
  name: string;
  url: string;
  description: string;
  category: AffiliateCategory;
  badge?: string;
  highlight?: boolean;
  icon?: string;
}

export const affiliates: Record<string, Affiliate> = {
  // â”€â”€ CEX Exchanges â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  bybit: {
    name: 'Bybit',
    url: 'https://link.360crypto.site/56f',
    description:
      'One of the world\'s largest crypto derivatives exchanges. Up to $30,000 in deposit bonuses for new users. Low fees, deep liquidity, and a full suite of spot, futures, and copy trading.',
    category: 'exchanges_cex',
    badge: 'Best CEX',
    highlight: true,
  },
  kucoin: {
    name: 'KuCoin',
    url: 'https://link.360crypto.site/13m',
    description:
      '"The People\'s Exchange" â€” 700+ altcoins including early-stage gems before they hit mainstream platforms. Great for discovering low-cap opportunities with strong trading tools.',
    category: 'exchanges_cex',
  },
  okx: {
    name: 'OKX',
    url: 'https://link.360crypto.site/3f5ca1',
    description:
      'Top-tier global exchange with advanced derivatives, a built-in Web3 wallet, and one of the best mobile trading apps in the space. Ideal for both spot and futures traders.',
    category: 'exchanges_cex',
  },
  gateio: {
    name: 'Gate.io',
    url: 'https://link.360crypto.site/im9',
    description:
      'Access 1,700+ trading pairs including the smallest altcoins and new project listings. Gate.io is the go-to for early-stage gem hunters and high-volume altcoin traders.',
    category: 'exchanges_cex',
  },
  // ── Sign up at https://www.binance.com/en/activity/referral to get your affiliate link ──
  binance: {
    name: 'Binance',
    url: 'https://accounts.binance.com/register',
    description:
      'The world\'s largest crypto exchange by volume. Industry-leading 0.1% spot fees (reducible to 0.07% with BNB), 350+ trading pairs, futures, earn products, and the deepest liquidity on the planet.',
    category: 'exchanges_cex',
    badge: 'Largest Exchange',
  },
  // ── Sign up at https://www.mexc.com/affiliate to get your affiliate link (70% commission rate) ──
  mexc: {
    name: 'MEXC',
    url: 'https://www.mexc.com/register',
    description:
      'The highest-commission exchange for affiliates — 70% revenue share. For traders: 1,500+ listed tokens including ultra-early altcoins, zero-fee spot trading on select pairs, and lightning-fast listings.',
    category: 'exchanges_cex',
    badge: 'Early Listings',
  },
  // ── Sign up at https://partner.bitget.com/ for affiliate access ──
  bitget: {
    name: 'Bitget',
    url: 'https://www.bitget.com/register',
    description:
      'The #1 copy trading exchange. One-click mirror elite traders with verified track records, $5B+ daily volume, and a full suite of spot and futures markets. Top choice for beginners entering the market.',
    category: 'exchanges_cex',
  },

  // â”€â”€ DEX / Swaps â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  simpleswap: {
    name: 'SimpleSwap',
    url: 'https://link.360crypto.site/4hh',
    description:
      'No account, no KYC, no limits. Swap 600+ crypto pairs instantly at the best available rates. The simplest and most private way to exchange crypto on-chain.',
    category: 'exchanges_dex',
    badge: 'Best DEX',
    highlight: true,
  },
  // ── Sign up at https://changelly.com/referral for your affiliate link ──
  changelly: {
    name: 'Changelly',
    url: 'https://changelly.com',
    description:
      'Swap 700+ cryptocurrencies instantly with no registration and competitive flat fees. Backed by Binance and trusted since 2015 — the most well-known no-KYC instant swap service with a solid affiliate program.',
    category: 'exchanges_dex',
  },

  // â”€â”€ Passive Income â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  pionex: {
    name: 'Pionex',
    url: 'https://link.360crypto.site/jkw',
    description:
      'The #1 platform for crypto grid trading bots. 16 free built-in bots let you automate buying low and selling high 24/7 â€” no coding required. The easiest hands-off income strategy in crypto.',
    category: 'passive_income',
    badge: 'TOP PICK â€” Passive Income',
    highlight: true,
  },
  cryptotab: {
    name: 'CryptoTab Browser',
    url: 'https://cryptotab.farm/go/G1UK2YJ9',
    description:
      'Mine Bitcoin passively just by browsing the web. Replace your default browser with CryptoTab and earn BTC in the background while you work, watch videos, or scroll.',
    category: 'passive_income',
  },
  cointiply: {
    name: 'Cointiply',
    url: 'http://cointiply.com/r/575OvJ',
    description:
      'Earn Bitcoin for free by completing surveys, watching videos, playing games, and more. Consistent daily earnings with a loyalty bonus that boosts your rate the longer you use it.',
    category: 'passive_income',
  },
  pawns: {
    name: 'Pawns.app',
    url: 'https://pawns.app/?r=5821852',
    description:
      'Earn passive crypto by sharing your unused internet bandwidth. Set it and forget it â€” Pawns.app pays you 24/7 in the background with no technical setup required.',
    category: 'passive_income',
  },
  freecash: {
    name: 'Freecash',
    url: 'https://freecash.com/r/c206bbd175b1b90eb38a',
    description:
      'The highest-paying rewards platform in crypto. Complete offers, surveys, and game challenges to earn cash, Bitcoin, or gift cards. Payouts are instant and withdrawals start at $1.',
    category: 'passive_income',
  },
  rollercoin: {
    name: 'RollerCoin',
    url: 'https://rollercoin.com',
    description:
      'The original crypto mining simulator game. Play mini-games, build your virtual mining empire, and earn real BTC, ETH, and SOL. Millions of players — the most engaging passive earner with a true referral system.',
    category: 'passive_income',
  },

  // â”€â”€ Trading Bots â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  gmgn: {
    name: 'GMGN',
    url: 'https://link.360crypto.site/fpc',
    description:
      'AI-powered memecoin analytics and automated trading for Solana. Real-time token tracking, smart wallet copy trading, and profit-maximizing entry/exit signals.',
    category: 'trading_bots',
  },
  bullx: {
    name: 'BullX',
    url: 'https://link.360crypto.site/50p',
    description:
      'The most advanced Solana memecoin terminal. Snipe new launches, set limit orders, copy top wallets, and trade with surgical precision on Pump.fun and Raydium.',
    category: 'trading_bots',
    badge: 'Best Solana Bot',
    highlight: true,
  },
  photon: {
    name: 'Photon',
    url: 'https://link.360crypto.site/gox',
    description:
      'Lightning-fast Solana trading terminal for memecoin sniping. Sub-second execution, anti-rug filters, and advanced wallet tracking. Built for speed when every millisecond counts.',
    category: 'trading_bots',
  },
  threecommas: {
    name: '3Commas',
    url: 'https://link.360crypto.site/cf6',
    description:
      'Professional trading automation platform trusted by 150,000+ traders. DCA bots, grid bots, signal bots, and portfolio management â€” all connected to your existing exchange via API.',
    category: 'trading_bots',
  },
  cryptohopper: {
    name: 'Cryptohopper',
    url: 'https://link.360crypto.site/a4p',
    description:
      'Cloud-based trading bot platform with a strategy marketplace. Paper trade to test your strategies risk-free, then deploy live across 17 exchanges with automated backtesting.',
    category: 'trading_bots',
  },
  coinrule: {
    name: 'Coinrule',
    url: 'https://link.360crypto.site/qcx',
    description:
      'Build powerful trading rules without a single line of code. 250+ rule templates, if-this-then-that logic, and seamless integration with Binance, Coinbase, Kraken, and more.',
    category: 'trading_bots',
  },

  // â”€â”€ Telegram Bots â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  tonbot: {
    name: 'TON Trading Bot',
    url: 'https://link.360crypto.site/hhx',
    description:
      'Snipe and trade TON ecosystem tokens directly in Telegram. Fast execution, anti-MEV protection, and real-time tracking of TON chain opportunities.',
    category: 'telegram_bots',
  },
  solbot: {
    name: 'Sol Trading Bot',
    url: 'https://link.360crypto.site/lo6',
    description:
      'Trade Solana tokens without leaving Telegram. One-tap buying, automatic take-profit/stop-loss, and wallet monitoring â€” all inside your Telegram app.',
    category: 'telegram_bots',
  },
  pepeboosteth: {
    name: 'Pepeboost ETH',
    url: 'https://t.me/pepeboost_swap_bot?start=ref_0uvl1u',
    description:
      'Execute ETH and ERC-20 trades at lightning speed directly from Telegram. MEV protection, limit orders, and gas optimization for Ethereum memecoin trading.',
    category: 'telegram_bots',
  },
  pepeboostsol: {
    name: 'Pepeboost SOL',
    url: 'https://t.me/pepeboost_sol05_bot?start=ref_0h7z1x',
    description:
      'Solana-specific version of Pepeboost with Pump.fun integration. Snipe new launches, set auto-sells, and track your positions â€” all from Telegram.',
    category: 'telegram_bots',
  },
  trojan: {
    name: 'Trojan Bot',
    url: 'https://t.me/solana_trojanbot?start=r-48576889637',
    description:
      'One of the most popular Solana bots in the ecosystem. Advanced sniping, copy trading, and portfolio tracking with a clean Telegram UX. Trusted by serious memecoin traders.',
    category: 'telegram_bots',
  },
  shuriken: {
    name: 'Shuriken Bot',
    url: 'https://t.me/ShurikenTradeBot?start=ref-96dc75ff',
    description:
      'Multi-chain Telegram trading bot covering Solana, Ethereum, and BSC. Fast, reliable, and packed with features including copy trading and automatic limit orders.',
    category: 'telegram_bots',
  },
  soulsniper: {
    name: 'Soul Sniper',
    url: 'https://t.me/soul_sniper_bot?start=7avfDSyO06VG',
    description:
      'Precision Solana sniping bot with a focus on new launches and low-cap gems. Sub-block execution speed with smart anti-rug detection to protect your capital.',
    category: 'telegram_bots',
  },
  etherdrops: {
    name: 'EtherDrops',
    url: 'https://t.me/EtherDROPS_bot?start=promo_LP856X',
    description:
      'Ethereum-focused Telegram trading bot with real-time DeFi alerts, wallet tracking, and one-click swapping. Stay ahead of smart money movements on ETH.',
    category: 'telegram_bots',
  },
  raysilver: {
    name: 'Ray Silver',
    url: 'https://t.me/ray_blue_bot?start=ref_YAN0Gc',
    description:
      'Raydium-specialized trading bot for Solana. Ideal for trading new liquidity pool launches directly on Raydium with automated strategies and wallet analytics.',
    category: 'telegram_bots',
  },

  // â”€â”€ Research / Analytics â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  tradingview: {
    name: 'TradingView',
    url: 'https://link.360crypto.site/p67',
    description:
      'The world\'s leading charting platform. Professional-grade technical analysis tools, 100+ indicators, real-time data across all markets, and a massive community of traders sharing ideas.',
    category: 'research',
    badge: 'Essential',
    highlight: true,
  },

  // ── Hardware Wallets ──────────────────────────────────────────────────────────────────────────
  // Sign up at https://affiliate.ledger.com/ for your affiliate link (10% commission, 30-day cookie)
  ledger: {
    name: 'Ledger',
    url: 'https://www.ledger.com',
    description:
      'The global gold standard in hardware wallets. A secure element chip keeps your private keys completely offline. Supports 5,500+ coins and integrates with MetaMask, DeFi, and NFT platforms. One-time purchase, lifetime security.',
    category: 'hardware_wallets',
    badge: '#1 Cold Wallet',
    highlight: true,
  },
  // Sign up at https://trezor.io/affiliate for your affiliate link (~12% commission)
  trezor: {
    name: 'Trezor',
    url: 'https://trezor.io',
    description:
      'The original hardware wallet — 100% open-source since 2014. Every line of firmware is publicly auditable. Trezor is the choice for maximum transparency and serious self-custody advocates.',
    category: 'hardware_wallets',
  },

  // ── Tax Software ──────────────────────────────────────────────────────────────────────────────
  // Sign up at https://koinly.io/affiliates/ for your affiliate link (30% RECURRING commission)
  koinly: {
    name: 'Koinly',
    url: 'https://koinly.io',
    description:
      'The most used crypto tax software — supports 700+ exchanges and 170+ countries. Auto-imports your full transaction history and generates IRS, HMRC, ATO, and EU-compliant tax reports in minutes.',
    category: 'tax_software',
    badge: 'Best Tax Tool',
    highlight: true,
  },
  // Sign up at https://coinledger.io/affiliate for your affiliate link (25% commission)
  coinledger: {
    name: 'CoinLedger',
    url: 'https://coinledger.io',
    description:
      'Generate accurate crypto tax reports in under 20 minutes. Integrates with Coinbase, Binance, Kraken, MetaMask, and 500+ exchanges. Trusted by 500,000+ crypto investors. Works directly inside TurboTax and TaxAct.',
    category: 'tax_software',
  },
};

// â”€â”€ Category-filtered helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export function getAffiliatesByCategory(category: AffiliateCategory): Affiliate[] {
  return Object.entries(affiliates)
    .filter(([, a]) => a.category === category)
    .map(([slug, a]) => ({ ...a, slug }));
}

export function getHighlightedAffiliates(): Affiliate[] {
  return Object.entries(affiliates)
    .filter(([, a]) => a.highlight)
    .map(([slug, a]) => ({ ...a, slug }));
}

export const SOCIAL = {
  telegram: 'https://t.me/cryptox360x',
  twitter: 'https://twitter.com/360CryptoSite',
  facebook: 'https://www.facebook.com/profile.php?id=61562049504886',
  email: 'admin@360crypto.site',
} as const;


// ── Slug-aware helpers ─────────────────────────────────────────────────────────

/**
 * Returns all affiliates as an array with the slug populated from the record key.
 * Use this instead of Object.values(affiliates) when you need the slug for tracking.
 */
export function getAffiliatesWithSlug(): Affiliate[] {
  return Object.entries(affiliates).map(([slug, affiliate]) => ({
    ...affiliate,
    slug,
  }));
}

/**
 * Returns affiliates for a category with slugs populated.
 */
export function getAffiliatesByCategoryWithSlug(category: AffiliateCategory): Affiliate[] {
  return getAffiliatesWithSlug().filter((a) => a.category === category);
}
