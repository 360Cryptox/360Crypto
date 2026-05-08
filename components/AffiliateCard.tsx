'use client';

import React from 'react';
import TrackedAffiliateLink from '@/components/TrackedAffiliateLink';
import type { AffiliateCategory } from '@/lib/analytics';

interface AffiliateCardProps {
  name: string;
  url: string;
  description: string;
  /** Slug key from affiliates.ts — e.g. 'bybit'. Used for GA4 event. */
  affiliateName: string;
  /** Category for GA4 grouping */
  category: AffiliateCategory;
  badge?: string;
  highlight?: boolean;
  className?: string;
  /** Which section this card is in — e.g. 'homepage-featured', 'tools-page' */
  placement?: string;
  /** A/B variant label. Omit when not testing. */
  variant?: string;
  /** CTA button text. Default: 'Get Started →' */
  ctaLabel?: string;
}

export default function AffiliateCard({
  name,
  url,
  description,
  affiliateName,
  category,
  badge,
  highlight = false,
  className = '',
  placement = 'affiliate-card',
  variant,
  ctaLabel = 'Get Started →',
}: AffiliateCardProps) {
  return (
    <div className={`${highlight ? 'cyber-card-highlight' : 'cyber-card'} p-6 flex flex-col gap-4 ${className}`}>
      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-orbitron text-base font-bold text-white leading-snug">{name}</h3>
        {badge && (
          <span className="badge-cyan shrink-0">{badge}</span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-[#a0a0a0] leading-relaxed flex-1">{description}</p>

      {/* CTA */}
      <TrackedAffiliateLink
        href={url}
        affiliateName={affiliateName}
        category={category}
        placement={placement}
        variant={variant}
        className="cyber-btn w-full text-center mt-auto"
        aria-label={`Get started with ${name}`}
      >
        {ctaLabel}
      </TrackedAffiliateLink>
    </div>
  );
}

