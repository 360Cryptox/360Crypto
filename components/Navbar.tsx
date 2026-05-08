'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Home',      href: '/' },
  { label: 'Guides',    href: '/guides' },
  { label: 'Blog',      href: '/blog' },
  { label: 'Tools',     href: '/tools' },
  { label: 'Store',     href: '/store' },
  { label: 'Community', href: '/community' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(10,10,10,0.95)] backdrop-blur-md border-b border-[rgba(123,92,245,0.1)] shadow-[0_0_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <span
              className="font-orbitron text-xl font-black glow-text group-hover:scale-105 transition-transform duration-200"
              aria-label="360Crypto home"
            >
              360<span className="text-white">Crypto</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href || (href !== '/' && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-4 py-2 text-sm font-medium font-sans transition-colors duration-200 rounded-lg ${
                    active
                      ? 'text-[#88ccff]'
                      : 'text-[#a0a0a0] hover:text-white'
                  }`}
                >
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-lg bg-[rgba(85,153,221,0.1)]"
                    />
                  )}
                  <span className="relative">{label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#newsletter" className="cyber-btn text-xs py-2 px-5">
              Subscribe
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors"
          >
            <span
              className={`block h-0.5 w-6 bg-[#a0a0a0] rounded-full transition-all duration-300 ${
                open ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#a0a0a0] rounded-full transition-all duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#a0a0a0] rounded-full transition-all duration-300 ${
                open ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav
          className="bg-[rgba(10,10,10,0.98)] border-t border-[rgba(255,255,255,0.06)] px-4 pb-6 pt-2 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(({ label, href }) => {
            const active = pathname === href || (href !== '/' && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  active
                    ? 'text-[#88ccff] bg-[rgba(85,153,221,0.1)]'
                    : 'text-[#a0a0a0] hover:text-white hover:bg-[rgba(255,255,255,0.04)]'
                }`}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="#newsletter"
            className="cyber-btn mt-3 text-xs py-3"
            onClick={() => setOpen(false)}
          >
            Subscribe Free
          </a>
        </nav>
      </div>
    </header>
  );
}

