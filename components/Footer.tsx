'use client';

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { SOCIAL } from '@/lib/affiliates';

const FOOTER_NAV = [
  { label: 'Home',      href: '/' },
  { label: 'Guides',    href: '/guides' },
  { label: 'Blog',      href: '/blog' },
  { label: 'Community', href: '/community' },
];

const FOOTER_TOOLS = [
  { label: 'All Tools',      href: '/tools' },
  { label: 'Exchanges',      href: '/tools#exchanges' },
  { label: 'Trading Bots',   href: '/tools#bots' },
  { label: 'Passive Income', href: '/tools#passive' },
  { label: 'Store',          href: '/store' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const formData = new FormData();
      formData.append('email', email);
      const res = await fetch('https://formspree.io/f/xnnangvw', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setEmail('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <footer className="bg-[#0d0d0d] border-t border-[rgba(255,255,255,0.06)] mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 â€” Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-3">
              <span className="font-orbitron text-xl font-black glow-text">
                360<span className="text-white">Crypto</span>
              </span>
            </Link>
            <p className="text-[#666] text-sm leading-relaxed mb-5">
              Navigate crypto with confidence. Expert guides, curated tools, and a community built for serious traders and passive income seekers.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href={SOCIAL.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1a1a1a] border border-[rgba(255,255,255,0.08)] text-[#666] hover:text-[#5599dd] hover:border-[rgba(85,153,221,0.35)] transition-colors duration-200"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a
                href={SOCIAL.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1a1a1a] border border-[rgba(255,255,255,0.08)] text-[#666] hover:text-[#5599dd] hover:border-[rgba(85,153,221,0.35)] transition-colors duration-200"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1a1a1a] border border-[rgba(255,255,255,0.08)] text-[#666] hover:text-[#5599dd] hover:border-[rgba(85,153,221,0.35)] transition-colors duration-200"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={`mailto:${SOCIAL.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1a1a1a] border border-[rgba(255,255,255,0.08)] text-[#666] hover:text-[#5599dd] hover:border-[rgba(85,153,221,0.35)] transition-colors duration-200"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 â€” Navigation */}
          <div>
            <h4 className="font-orbitron text-xs font-bold text-white uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {FOOTER_NAV.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#666] hover:text-[#5599dd] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 â€” Tools */}
          <div>
            <h4 className="font-orbitron text-xs font-bold text-white uppercase tracking-widest mb-4">
              Tools
            </h4>
            <ul className="space-y-2">
              {FOOTER_TOOLS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#666] hover:text-[#5599dd] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 â€” Newsletter */}
          <div>
            <h4 className="font-orbitron text-xs font-bold text-white uppercase tracking-widest mb-4">
              Newsletter
            </h4>
            <p className="text-sm text-[#666] mb-4 leading-relaxed">
              Weekly alpha, signals, and exclusive early access to new tools and store products.
            </p>
            {status === 'success' ? (
              <p className="text-sm text-[#5599dd] font-semibold">
                âœ“ You&apos;re subscribed!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="cyber-input text-sm"
                  disabled={status === 'loading'}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="cyber-btn text-xs py-2 disabled:opacity-60"
                >
                  {status === 'loading' ? 'Subscribingâ€¦' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Divider */}
        <hr className="section-divider mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#444]">
          <p>
            Â© 2026 360Crypto Â· All rights reserved
          </p>
          <p className="text-center sm:text-right max-w-md leading-relaxed">
            <strong className="text-[#555]">Affiliate Disclosure:</strong> Some links on this site are affiliate links. We may earn a commission at no extra cost to you. We only recommend tools we genuinely use and trust.
          </p>
        </div>
      </div>
    </footer>
  );
}

