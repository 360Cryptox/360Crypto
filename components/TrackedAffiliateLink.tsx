'use client';

/**
 * TrackedAffiliateLink
 *
 * Drop-in replacement for <a> on affiliate links.
 * Fires a GA4 `affiliate_click` event before navigating.
 *
 * Usage:
 *   <TrackedAffiliateLink
 *     href={affiliates.bybit.url}
 *     affiliateName="bybit"
 *     category="exchanges_cex"
 *     placement="comparison-table"
 *     className="cyber-btn"
 *   >
 *     Get Started →
 *   </TrackedAffiliateLink>
 */

import React from 'react';
import { trackAffiliateClick, type AffiliateCategory } from '@/lib/analytics';

interface TrackedAffiliateLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  /** Full affiliate destination URL */
  href: string;
  /** Slug from affiliates.ts — e.g. 'bybit' */
  affiliateName: string;
  /** Category for GA4 grouping */
  category: AffiliateCategory;
  /**
   * Which section of the page this link is in.
   * e.g. 'hero-cta', 'comparison-table', 'affiliate-card', 'passive-income-strip'
   */
  placement?: string;
  /**
   * A/B test variant label. Omit when not testing.
   * e.g. 'cta_v1' | 'cta_v2'
   */
  variant?: string;
  /** Override the inferred page name */
  pageName?: string;
  children: React.ReactNode;
}

export default function TrackedAffiliateLink({
  href,
  affiliateName,
  category,
  placement,
  variant,
  pageName,
  children,
  onClick,
  ...anchorProps
}: TrackedAffiliateLinkProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    // Fire GA4 event — non-blocking, does not delay navigation
    trackAffiliateClick({
      affiliateName,
      destinationUrl: href,
      category,
      pageName,
      placement,
      variant,
    });

    // Call any additional onClick handler passed by the parent
    onClick?.(e);
    // Navigation proceeds naturally via the <a> href — no window.open needed
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={handleClick}
      {...anchorProps}
    >
      {children}
    </a>
  );
}
