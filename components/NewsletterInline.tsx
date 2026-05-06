'use client';

import React, { useState, FormEvent } from 'react';

interface NewsletterInlineProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function NewsletterInline({
  title = 'Stay Ahead of the Market',
  subtitle = 'Get exclusive signals, early access to store products, and weekly alpha — straight to your inbox.',
  dark = true,
}: NewsletterInlineProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

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

      if (res.ok) {
        setStatus('success');
        setMessage("You're in! Welcome to the 360Crypto community.");
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  }

  return (
    <section
      id="newsletter"
      className={`relative overflow-hidden rounded-2xl px-6 py-12 md:px-12 ${
        dark ? 'bg-[#1a1a1a] border border-[rgba(0,191,255,0.15)]' : 'bg-[#0a0a0a]'
      }`}
    >
      {/* Subtle glow backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-64 w-64 rounded-full bg-[#00bfff] opacity-[0.04] blur-[80px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center gap-4">
        <span className="badge-cyan">Free Newsletter</span>

        <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white max-w-xl">
          {title}
        </h2>

        <p className="text-[#a0a0a0] text-sm md:text-base max-w-lg leading-relaxed">
          {subtitle}
        </p>

        {status === 'success' ? (
          <div className="mt-4 flex items-center gap-3 rounded-xl bg-[rgba(0,191,255,0.1)] border border-[rgba(0,191,255,0.3)] px-6 py-4 text-[#00bfff] font-semibold">
            <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {message}
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-4 flex w-full max-w-md flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="cyber-input flex-1"
              disabled={status === 'loading'}
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="cyber-btn shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-sm text-red-400">{message}</p>
        )}

        <p className="text-xs text-[#555] mt-2">
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
