'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NewsletterInline from '@/components/NewsletterInline';

interface Guide {
  slug: string;
  title: string;
  description: string;
  category: GuideCategory;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  readTime: string;
  icon: string;
}

type GuideCategory = 'Beginner' | 'Trading' | 'Passive Income' | 'Memecoins' | 'Security';

const GUIDES: Guide[] = [
  {
    slug: 'beginners-guide-to-cryptocurrency',
    title: "Beginner's Complete Guide to Cryptocurrency (2026)",
    description:
      "Everything you need to know to start your crypto journey. What is blockchain, how do wallets work, how to buy your first Bitcoin safely, and the core concepts every crypto trader must understand before putting money at risk.",
    category: 'Beginner',
    level: 'Beginner',
    readTime: '15 min read',
    icon: 'ðŸŒ±',
  },
  {
    slug: 'advanced-trading-strategies',
    title: 'Advanced Crypto Trading Strategies: Technical Analysis & System Building',
    description:
      'Move beyond buy-and-hold. This guide covers technical analysis, support and resistance, trend following, momentum trading, and how to build a rules-based trading system that removes emotion from your decisions.',
    category: 'Trading',
    level: 'Advanced',
    readTime: '20 min read',
    icon: 'ðŸ“Š',
  },
  {
    slug: 'pionex-grid-bot-setup',
    title: 'Pionex Grid Bot: Complete Setup Guide for Beginners (2026)',
    description:
      'Step-by-step walkthrough of setting up your first Pionex grid trading bot. From creating your account and depositing funds to configuring grid parameters, selecting the right pair, and managing risk once the bot is live.',
    category: 'Passive Income',
    level: 'Beginner',
    readTime: '12 min read',
    icon: 'ðŸ¤–',
  },
  {
    slug: 'memecoin-trading-on-solana',
    title: 'Memecoin Trading on Solana: The Complete 2026 Playbook',
    description:
      'Solana memecoins move fast. This playbook covers how to find new launches on Pump.fun, assess token fundamentals, use DEX tools to spot smart money, size your positions for asymmetric upside, and how to exit profitably.',
    category: 'Memecoins',
    level: 'Intermediate',
    readTime: '18 min read',
    icon: 'ðŸš€',
  },
  {
    slug: 'how-to-secure-your-crypto-assets',
    title: 'How to Secure Your Crypto Assets: The Complete Security Guide',
    description:
      'Crypto security is non-negotiable. This guide covers hardware wallets, seed phrase storage, avoiding phishing scams, exchange security, smart contract risks, and what to do if you get hacked.',
    category: 'Security',
    level: 'Beginner',
    readTime: '14 min read',
    icon: 'ðŸ”',
  },
  {
    slug: 'yield-farming-and-liquidity-pools',
    title: 'Yield Farming & Liquidity Pools Explained: How to Earn in DeFi (2026)',
    description:
      'DeFi yield farming can generate yields that dwarf traditional finance â€” but the risks are equally outsized. This guide explains impermanent loss, LP token mechanics, how to evaluate protocol risk, and the best platforms for sustainable yield.',
    category: 'Passive Income',
    level: 'Intermediate',
    readTime: '16 min read',
    icon: 'ðŸŒ¾',
  },
];

const CATEGORIES: Array<'All' | GuideCategory> = [
  'All',
  'Beginner',
  'Trading',
  'Passive Income',
  'Memecoins',
  'Security',
];

const LEVEL_COLORS: Record<string, string> = {
  Beginner:     'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Intermediate: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  Advanced:     'text-red-400 bg-red-400/10 border-red-400/20',
};

const CATEGORY_COLORS: Record<string, string> = {
  Beginner:         'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Trading:          'text-[#5599dd] bg-[rgba(85,153,221,0.1)] border-[rgba(85,153,221,0.2)]',
  'Passive Income': 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  Memecoins:        'text-orange-400 bg-orange-400/10 border-orange-400/20',
  Security:         'text-red-400 bg-red-400/10 border-red-400/20',
};

export default function GuidesPage() {
  const [activeCategory, setActiveCategory] = useState<'All' | GuideCategory>('All');

  const filtered =
    activeCategory === 'All' ? GUIDES : GUIDES.filter((g) => g.category === activeCategory);

  return (
    <>
      {/* â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="relative overflow-hidden bg-[#0a0a0a] grid-bg">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="h-96 w-96 rounded-full bg-[#5599dd] opacity-[0.04] blur-[100px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center py-20">
          <span className="badge-cyan mb-4 inline-block">Free Education</span>
          <h1 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-5">
            Crypto Guides â€” From Beginner to Pro
          </h1>
          <p className="text-[#a0a0a0] text-lg max-w-xl mx-auto leading-relaxed">
            Whether you just heard about Bitcoin or you&apos;re already trading Solana memecoins
            with bots â€” our guides meet you exactly where you are and take you further.
          </p>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent"
        />
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* â”€â”€ CATEGORY TABS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section>
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-orbitron text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-lg border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#5599dd] text-[#0a0a0a] border-[#5599dd]'
                    : 'bg-[#1a1a1a] text-[#666] border-[rgba(255,255,255,0.08)] hover:text-white hover:border-[rgba(85,153,221,0.3)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-[#555] py-20">
              No guides in this category yet â€” check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((guide) => (
                <article key={guide.slug} className="cyber-card p-7 flex flex-col gap-4">
                  <div className="text-3xl">{guide.icon}</div>

                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border font-orbitron uppercase tracking-wider ${CATEGORY_COLORS[guide.category] ?? ''}`}
                    >
                      {guide.category}
                    </span>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border font-orbitron uppercase tracking-wider ${LEVEL_COLORS[guide.level] ?? ''}`}
                    >
                      {guide.level}
                    </span>
                  </div>

                  <h2 className="font-orbitron text-sm font-bold text-white leading-snug">
                    {guide.title}
                  </h2>
                  <p className="text-xs text-[#666] leading-relaxed flex-1">{guide.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.06)] mt-auto">
                    <span className="text-xs text-[#444]">{guide.readTime}</span>
                    <Link
                      href={`/guides/${guide.slug}`}
                      className="text-xs text-[#5599dd] font-semibold font-orbitron hover:underline"
                    >
                      Read Guide â†’
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* â”€â”€ AFFILIATE CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section>
          <div className="cyber-card-highlight px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-orbitron text-xl font-bold text-white mb-2">
                Ready to Put the Knowledge to Work?
              </h2>
              <p className="text-[#666] text-sm max-w-lg leading-relaxed">
                Our guides are only as good as the tools you use. We&apos;ve curated the best
                platforms for every strategy â€” from your first exchange account to automated trading
                bots.
              </p>
            </div>
            <Link href="/tools" className="cyber-btn shrink-0 text-sm py-3 px-8">
              Check Recommended Tools â†’
            </Link>
          </div>
        </section>

        {/* â”€â”€ NEWSLETTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section>
          <NewsletterInline
            title="New Guides Every Week"
            subtitle="We publish new trading guides, strategy breakdowns, and tool tutorials every week. Subscribe to get them before everyone else."
          />
        </section>
      </div>
    </>
  );
}

