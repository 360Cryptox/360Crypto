/**
 * analytics.ts
 *
 * Central module for all GA4 custom event tracking on 360Crypto.
 * Works with the existing GA4 setup in layout.tsx (G-0MXFRFKXZC).
 * Designed for static export — no server required.
 */

// ── Types ──────────────────────────────────────────────────────────────────────

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

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

export interface AffiliateLinkParams {
  /** Slug key from affiliates.ts — e.g. 'bybit', 'pionex' */
  affiliateName: string;
  /** Full destination URL being opened */
  destinationUrl: string;
  /** Category for grouping in GA4 reports */
  category: AffiliateCategory;
  /** Which page the click originated on — e.g. 'homepage', 'tools', 'guides/grid-bots' */
  pageName?: string;
  /** Which specific section/placement — e.g. 'hero-cta', 'comparison-table', 'affiliate-card' */
  placement?: string;
  /** A/B test variant label — e.g. 'cta_v1', 'cta_v2' */
  variant?: string;
}

// ── Guard: only fire when gtag is ready ───────────────────────────────────────

function isGtagReady(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.gtag === 'function'
  );
}

// ── Core event function ────────────────────────────────────────────────────────

/**
 * Fires a GA4 custom event for an affiliate link click.
 *
 * GA4 will surface this under:
 *   Reports > Engagement > Events > affiliate_click
 *
 * Parameters visible in GA4 > Configure > Custom definitions:
 *   affiliate_name, destination_url, affiliate_category,
 *   page_name, placement, variant
 */
export function trackAffiliateClick(params: AffiliateLinkParams): void {
  if (!isGtagReady()) return;

  const {
    affiliateName,
    destinationUrl,
    category,
    pageName,
    placement,
    variant,
  } = params;

  window.gtag('event', 'affiliate_click', {
    // ── Required fields ──────────────────────────────────────────────────────
    affiliate_name: affiliateName,
    destination_url: destinationUrl,
    affiliate_category: category,

    // ── Context fields ───────────────────────────────────────────────────────
    page_name: pageName ?? inferPageName(),
    page_location: typeof window !== 'undefined' ? window.location.href : '',
    placement: placement ?? 'unknown',

    // ── A/B testing ──────────────────────────────────────────────────────────
    ...(variant ? { variant } : {}),
  });
}

/**
 * Infers a human-readable page name from the current URL path.
 * Avoids importing Next.js router in a utility file.
 */
function inferPageName(): string {
  if (typeof window === 'undefined') return 'unknown';
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const map: Record<string, string> = {
    '/':         'homepage',
    '/tools':    'tools',
    '/guides':   'guides',
    '/store':    'store',
    '/blog':     'blog',
    '/community': 'community',
  };
  // Exact match first
  if (map[path]) return map[path];
  // Prefix match for nested pages (e.g. /guides/grid-bots)
  for (const [prefix, label] of Object.entries(map)) {
    if (prefix !== '/' && path.startsWith(prefix)) return `${label}_detail`;
  }
  return path.replace(/^\//, '').replace(/\//g, '_') || 'unknown';
}

// ── UTM URL builder ────────────────────────────────────────────────────────────

export interface UtmParams {
  affiliateName: string;
  pageName?: string;
  placement?: string;
  variant?: string;
}

/**
 * Appends 360Crypto UTM parameters to any affiliate URL.
 *
 * Schema:
 *   utm_source   = 360crypto          (always — identifies our site as the source)
 *   utm_medium   = affiliate          (always — channel type)
 *   utm_campaign = <affiliateName>    (e.g. bybit, pionex)
 *   utm_content  = <pageName>-<placement>  (e.g. tools-comparison-table)
 *   utm_term     = <variant>          (only when A/B testing)
 *
 * Example output:
 *   https://link.360crypto.site/56f?utm_source=360crypto&utm_medium=affiliate
 *     &utm_campaign=bybit&utm_content=tools-comparison-table
 *
 * NOTE: Most affiliate redirect links (link.360crypto.site) will strip or
 * pass-through UTMs depending on your redirect service. UTMs here are
 * primarily useful for tracking in GA4 via the affiliate_click event params,
 * but they also help if the destination's own analytics picks them up.
 */
export function buildUtmUrl(baseUrl: string, params: UtmParams): string {
  const { affiliateName, pageName, placement, variant } = params;

  const resolvedPage = pageName ?? (
    typeof window !== 'undefined' ? inferPageName() : 'unknown'
  );
  const contentParts = [resolvedPage, placement].filter(Boolean);

  const utm = new URLSearchParams({
    utm_source:   '360crypto',
    utm_medium:   'affiliate',
    utm_campaign: affiliateName,
    utm_content:  contentParts.join('-'),
    ...(variant ? { utm_term: variant } : {}),
  });

  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}${utm.toString()}`;
}
