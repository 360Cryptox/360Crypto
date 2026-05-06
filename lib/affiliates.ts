export type AffiliateCategory =
  | 'exchanges_cex'
  | 'exchanges_dex'
  | 'passive_income'
  | 'trading_bots'
  | 'telegram_bots'
  | 'wallets'
  | 'research'
  | 'resources';

export interface Affiliate {
  name: string;
  url: string;
  description: string;
  category: AffiliateCategory;
  badge?: string;
  highlight?: boolean;
  icon?: string;
}

export const affiliates: Record<string, Affiliate> = {
  // ── CEX Exchanges ──────────────────────────────────────────────────────────
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
      '"The People\'s Exchange" — 700+ altcoins including early-stage gems before they hit mainstream platforms. Great for discovering low-cap opportunities with strong trading tools.',
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

  // ── DEX / Swaps ───────────────────────────────────────────────────────────
  simpleswap: {
    name: 'SimpleSwap',
    url: 'https://link.360crypto.site/4hh',
    description:
      'No account, no KYC, no limits. Swap 600+ crypto pairs instantly at the best available rates. The simplest and most private way to exchange crypto on-chain.',
    category: 'exchanges_dex',
    badge: 'Best DEX',
    highlight: true,
  },
  kyberswap: {
    name: 'KyberSwap',
    url: 'https://link.360crypto.site/eqn',
    description:
      'Multi-chain DEX aggregator that finds the best swap rates across 15+ blockchains. Smart routing ensures you always get the most for your tokens, with minimal slippage.',
    category: 'exchanges_dex',
  },

  // ── Passive Income ────────────────────────────────────────────────────────
  pionex: {
    name: 'Pionex',
    url: 'https://link.360crypto.site/jkw',
    description:
      'The #1 platform for crypto grid trading bots. 16 free built-in bots let you automate buying low and selling high 24/7 — no coding required. The easiest hands-off income strategy in crypto.',
    category: 'passive_income',
    badge: 'TOP PICK — Passive Income',
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
      'Earn passive crypto by sharing your unused internet bandwidth. Set it and forget it — Pawns.app pays you 24/7 in the background with no technical setup required.',
    category: 'passive_income',
  },
  freecash: {
    name: 'Freecash',
    url: 'https://freecash.com/r/c206bbd175b1b90eb38a',
    description:
      'The highest-paying rewards platform in crypto. Complete offers, surveys, and game challenges to earn cash, Bitcoin, or gift cards. Payouts are instant and withdrawals start at $1.',
    category: 'passive_income',
  },
  claimyoursol: {
    name: 'ClaimYourSOL',
    url: 'https://link.360crypto.site/rgr',
    description:
      'Claim free Solana rewards and participate in SOL ecosystem airdrops and reward programs. A quick way to stack SOL without investing capital.',
    category: 'passive_income',
  },

  // ── Trading Bots ──────────────────────────────────────────────────────────
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
      'Professional trading automation platform trusted by 150,000+ traders. DCA bots, grid bots, signal bots, and portfolio management — all connected to your existing exchange via API.',
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

  // ── Telegram Bots ────────────────────────────────────────────────────────
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
      'Trade Solana tokens without leaving Telegram. One-tap buying, automatic take-profit/stop-loss, and wallet monitoring — all inside your Telegram app.',
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
      'Solana-specific version of Pepeboost with Pump.fun integration. Snipe new launches, set auto-sells, and track your positions — all from Telegram.',
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

  // ── Research / Analytics ─────────────────────────────────────────────────
  tradingview: {
    name: 'TradingView',
    url: 'https://link.360crypto.site/p67',
    description:
      'The world\'s leading charting platform. Professional-grade technical analysis tools, 100+ indicators, real-time data across all markets, and a massive community of traders sharing ideas.',
    category: 'research',
    badge: 'Essential',
    highlight: true,
  },
};

// ── Category-filtered helpers ──────────────────────────────────────────────
export function getAffiliatesByCategory(category: AffiliateCategory): Affiliate[] {
  return Object.values(affiliates).filter((a) => a.category === category);
}

export function getHighlightedAffiliates(): Affiliate[] {
  return Object.values(affiliates).filter((a) => a.highlight);
}

export const SOCIAL = {
  telegram: 'https://t.me/cryptox360x',
  twitter: 'https://twitter.com/360CryptoSite',
  facebook: 'https://www.facebook.com/profile.php?id=61562049504886',
  email: 'admin@360crypto.site',
} as const;
