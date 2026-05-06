'use client';

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';

const PRODUCTS = [
  {
    id: 'apex-signal-bot',
    name: 'APEX Signal Bot',
    description: 'Advanced Solana memecoin signal detector powered by on-chain analytics. Scans Pump.fun and Raydium launches in real time, filters by holder distribution, liquidity, and smart money activity — and alerts you before the crowd.',
    price: '$49',
    priceNote: 'One-time payment',
    icon: '🤖',
    features: [
      'Real-time Solana memecoin scanning',
      'Smart money wallet tracking',
      'Anti-rug scoring algorithm',
      'Telegram alert integration',
    ],
    tag: 'Most Popular',
    highlight: true,
  },
  {
    id: 'insider-wallet-list',
    name: 'Insider Wallet List',
    description: 'A curated database of top-performing sniper and whale wallets on Solana. Updated weekly with verified profitable addresses — copy their moves before the rest of the market notices.',
    price: '$29',
    priceNote: 'One-time payment',
    icon: '📋',
    features: [
      '500+ verified profitable wallets',
      'Weekly update cadence',
      'Performance stats for each wallet',
      'CSV + JSON export ready',
    ],
    tag: 'Best Value',
    highlight: false,
  },
  {
    id: 'vip-telegram-access',
    name: 'VIP Telegram Access',
    description: 'Join our private signals channel where we share real-time trade entry and exit calls, upcoming launches, and exclusive alpha sourced from our on-chain monitoring tools.',
    price: '$19/mo',
    priceNote: 'Monthly subscription',
    icon: '⚡',
    features: [
      'Daily trade signals',
      'Memecoin launch alerts',
      'Private community chat',
      'Early access to all products',
    ],
    tag: 'Recurring Income',
    highlight: false,
  },
  {
    id: 'grid-bot-setup-guide',
    name: 'Grid Bot Setup Guide',
    description: 'A step-by-step Pionex grid bot setup guide written by traders who\'ve been running grid strategies through bull and bear markets. Includes risk management frameworks, pair selection criteria, and profit optimization.',
    price: '$9',
    priceNote: 'One-time payment',
    icon: '📈',
    features: [
      'Complete Pionex setup walkthrough',
      'Risk management frameworks',
      'Best pairs for grid trading',
      'Rebalancing & optimization tips',
    ],
    tag: 'Best Starter',
    highlight: false,
  },
];

export default function StorePage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleNotify(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json() as { success?: boolean };
      setStatus(res.ok && data.success ? 'success' : 'error');
      if (res.ok && data.success) setEmail('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0a0a0a] grid-bg pb-0">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="h-[500px] w-[500px] rounded-full bg-[#00bfff] opacity-[0.05] blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center py-20">
          <span className="badge-cyan mb-4 inline-block">Launching Soon</span>
          <h1 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-5">
            360Crypto Store
          </h1>
          <p className="text-[#a0a0a0] text-lg max-w-xl mx-auto leading-relaxed mb-8">
            Premium digital products built for serious crypto traders. Signal bots, insider wallet lists, VIP access, and step-by-step guides — everything you need to trade at the next level.
          </p>

          {/* Notify form */}
          {status === 'success' ? (
            <div className="inline-flex items-center gap-3 rounded-xl bg-[rgba(0,191,255,0.1)] border border-[rgba(0,191,255,0.3)] px-6 py-4 text-[#00bfff] font-semibold text-sm">
              <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              You&apos;re on the list! We&apos;ll email you at launch.
            </div>
          ) : (
            <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Get notified when we launch…"
                className="cyber-input flex-1"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="cyber-btn shrink-0 disabled:opacity-60"
              >
                {status === 'loading' ? 'Joining…' : 'Notify Me'}
              </button>
            </form>
          )}
          {status === 'error' && (
            <p className="mt-3 text-sm text-red-400">Something went wrong. Please try again.</p>
          )}
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent"
        />
      </section>

      {/* ── PRODUCT GRID ───────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-3">
            What&apos;s Coming
          </h2>
          <p className="text-[#666] max-w-lg mx-auto">
            A preview of the products we&apos;re building. Lock in the early-bird price by joining the waitlist.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className={`${product.highlight ? 'cyber-card-highlight' : 'cyber-card'} p-6 flex flex-col gap-4 relative`}
            >
              {product.tag && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="badge-cyan whitespace-nowrap">{product.tag}</span>
                </div>
              )}

              <div className="text-3xl mt-2">{product.icon}</div>
              <h3 className="font-orbitron text-sm font-bold text-white leading-snug">
                {product.name}
              </h3>
              <p className="text-xs text-[#666] leading-relaxed flex-1">{product.description}</p>

              <ul className="space-y-1.5">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-[#a0a0a0]">
                    <svg className="h-3.5 w-3.5 text-[#00bfff] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[rgba(255,255,255,0.06)] mt-auto">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-orbitron text-lg font-black text-white">{product.price}</span>
                  <span className="text-xs text-[#555]">{product.priceNote}</span>
                </div>
                <button
                  className="cyber-btn w-full text-xs py-2.5 opacity-80 cursor-not-allowed"
                  disabled
                  aria-label="Notify me when available"
                >
                  Coming Soon — Notify Me
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHILE YOU WAIT CTA ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="cyber-card p-10 text-center">
          <h2 className="font-orbitron text-xl md:text-2xl font-bold text-white mb-4">
            While You Wait — Check Our Free Tools
          </h2>
          <p className="text-[#666] mb-6 max-w-lg mx-auto leading-relaxed">
            We&apos;ve already curated the best exchanges, bots, and passive income platforms. Start building your edge today — for free.
          </p>
          <Link href="/tools" className="cyber-btn text-sm py-3 px-8 inline-flex">
            Explore Free Tools →
          </Link>
        </div>
      </section>
    </>
  );
}
