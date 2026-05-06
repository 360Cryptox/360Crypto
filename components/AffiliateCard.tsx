import React from 'react';

interface AffiliateCardProps {
  name: string;
  url: string;
  description: string;
  badge?: string;
  highlight?: boolean;
  className?: string;
}

export default function AffiliateCard({
  name,
  url,
  description,
  badge,
  highlight = false,
  className = '',
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
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="cyber-btn w-full text-center mt-auto"
        aria-label={`Get started with ${name}`}
      >
        Get Started →
      </a>
    </div>
  );
}
