import type { Metadata } from 'next';
import NewsletterInline from '@/components/NewsletterInline';
import { SOCIAL } from '@/lib/affiliates';

export const metadata: Metadata = {
  title: 'Community — Join the 360Crypto Tribe',
  description:
    'Join 10,000+ crypto traders in the 360Crypto community. Real-time signals, expert discussions, and a community that grows together.',
};

const BENEFITS = [
  {
    icon: '📡',
    title: 'Trade Signals',
    description: 'Real-time entry and exit signals from our team of active traders. Vetted calls, not hype.',
  },
  {
    icon: '🎓',
    title: 'Expert Tips',
    description: 'Daily tips on trading psychology, technical analysis, risk management, and DeFi strategies.',
  },
  {
    icon: '⚡',
    title: 'Latest Crypto News',
    description: 'Breaking news filtered for signal vs noise. We share what matters and ignore the rest.',
  },
  {
    icon: '📚',
    title: 'Educational Resources',
    description: 'Guides, tutorials, and explainers shared by the community. Learn from traders who\'ve been in the trenches.',
  },
  {
    icon: '🤝',
    title: 'Networking',
    description: 'Connect with serious traders, developers, and early-stage project teams. Your network is your net worth.',
  },
  {
    icon: '🚀',
    title: 'Future Coin Releases',
    description: 'First access to early-stage projects, token launches, and exclusive presale opportunities.',
  },
];

const SOCIAL_CARDS = [
  {
    name: 'Telegram',
    handle: '@cryptox360x',
    url: SOCIAL.telegram,
    description: 'Our most active hub. Real-time signals, live market commentary, and a community of 10,000+ traders discussing every move.',
    cta: 'Join Telegram →',
    color: '#229ED9',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter / X',
    handle: '@360CryptoSite',
    url: SOCIAL.twitter,
    description: 'Daily market insights, trend analysis, tool highlights, and the occasional hot take. Follow for the pulse of the crypto market.',
    cta: 'Follow on X →',
    color: '#1DA1F2',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    handle: '360Crypto',
    url: SOCIAL.facebook,
    description: 'Join our Facebook community for longer-form educational content, weekly market recaps, and discussions for newer crypto traders.',
    cta: 'Join Facebook →',
    color: '#1877F2',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'Email',
    handle: 'admin@360crypto.site',
    url: `mailto:${SOCIAL.email}`,
    description: 'Got a question, tool suggestion, or want to collaborate? Reach our team directly. We read every email and reply within 48 hours.',
    cta: 'Send Email →',
    color: '#7b5cf5',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
  },
];

export default function CommunityPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0a0a0a] grid-bg">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="h-[500px] w-[500px] rounded-full bg-[#7b5cf5] opacity-[0.05] blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center py-20">
          <span className="badge-cyan mb-4 inline-block">10,000+ Members</span>
          <h1 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-5">
            Join the <span className="glow-text">360Crypto</span> Community
          </h1>
          <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto leading-relaxed">
            Crypto is more powerful when we trade together. Our community is built on shared knowledge, honest signals, and helping each other build real wealth — not pump-and-dump hype.
          </p>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent"
        />
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 space-y-24">

        {/* ── PPP CONCEPT ──────────────────────────────────────────────────── */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-cyan mb-4 inline-block">Our Philosophy</span>
              <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-5">
                Player Pump Player — <span className="glow-text">PPP</span>
              </h2>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  Most crypto communities operate on fear and competition. Someone wins because someone else loses. 360Crypto is built on the opposite principle: <strong className="text-white">Player Pump Player (PPP)</strong>.
                </p>
                <p>
                  PPP means we help each other. When a member finds a promising project, they share it — not after they&apos;ve already taken profits, but while there&apos;s still opportunity. When someone has a losing trade, the community helps them understand why, not mock them for it.
                </p>
                <p>
                  Crypto has enough sharks. We built 360Crypto to be a community of builders, learners, and genuine traders who understand that <strong className="text-white">a rising tide lifts all boats</strong>.
                </p>
                <p>
                  That&apos;s the 360Crypto difference. And it&apos;s why our members stay.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Compete', old: true, icon: '⚔️', desc: 'Information hoarded for personal gain' },
                { label: 'Collaborate', old: false, icon: '🤝', desc: 'Alpha shared freely within the tribe' },
                { label: 'Pump & Dump', old: true, icon: '💣', desc: 'Short-term plays that hurt newcomers' },
                { label: 'Sustainable Gains', old: false, icon: '📈', desc: 'Long-term strategies that compound' },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`cyber-card p-5 flex flex-col gap-2 ${!item.old ? 'border-[rgba(123,92,245,0.3)]' : ''}`}
                >
                  <div className="text-2xl">{item.icon}</div>
                  <div className={`font-orbitron text-xs font-bold uppercase tracking-wider ${item.old ? 'text-[#555] line-through' : 'text-[#7b5cf5]'}`}>
                    {item.label}
                  </div>
                  <p className="text-xs text-[#666] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOCIAL LINKS ─────────────────────────────────────────────────── */}
        <section>
          <div className="text-center mb-10">
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-3">
              Find Us Everywhere
            </h2>
            <p className="text-[#666] max-w-lg mx-auto">
              Choose your platform. We&apos;re active on all of them with different content tailored to each audience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SOCIAL_CARDS.map((card) => (
              <a
                key={card.name}
                href={card.url}
                target={card.name !== 'Email' ? '_blank' : undefined}
                rel={card.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="cyber-card p-8 flex flex-col gap-4 group cursor-pointer"
                aria-label={`Visit 360Crypto on ${card.name}`}
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-200"
                  style={{
                    background: `${card.color}20`,
                    color: card.color,
                  }}
                >
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-orbitron text-base font-bold text-white mb-1">{card.name}</h3>
                  <p className="text-xs font-orbitron text-[#555] mb-3">{card.handle}</p>
                  <p className="text-sm text-[#666] leading-relaxed">{card.description}</p>
                </div>
                <div
                  className="font-orbitron text-xs font-bold uppercase tracking-wider group-hover:underline transition-colors duration-200"
                  style={{ color: card.color }}
                >
                  {card.cta}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── BENEFITS ─────────────────────────────────────────────────────── */}
        <section>
          <div className="text-center mb-10">
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-3">
              What You Get Inside
            </h2>
            <p className="text-[#666] max-w-lg mx-auto">
              Membership is free. The value is real. Here&apos;s what our community actively shares and discusses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((benefit) => (
              <div key={benefit.title} className="cyber-card p-6 flex flex-col gap-3">
                <div className="text-3xl">{benefit.icon}</div>
                <h3 className="font-orbitron text-sm font-bold text-white">{benefit.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── NEWSLETTER ───────────────────────────────────────────────────── */}
        <section>
          <NewsletterInline
            title="Get the Weekly Alpha Digest"
            subtitle="Every week we compile the best signals, tool updates, market insights, and community highlights — delivered straight to your inbox."
          />
        </section>
      </div>
    </>
  );
}
