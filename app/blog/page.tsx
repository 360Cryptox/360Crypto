import type { Metadata } from 'next';
import Link from 'next/link';
import NewsletterInline from '@/components/NewsletterInline';
import { getAllBlogPosts, formatDate } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Blog — Crypto Alpha & Insights',
  description:
    'In-depth crypto articles, trading guides, and market insights from the 360Crypto team. Memecoins, passive income, exchange reviews, trading bots, and more.',
  openGraph: {
    title: 'Blog — Crypto Alpha & Insights | 360Crypto',
    description:
      'In-depth crypto articles, trading guides, and market insights. No hype — just actionable alpha.',
    url: 'https://360crypto.site/blog',
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  Memecoins:        'text-orange-400 bg-orange-400/10 border-orange-400/20',
  'Passive Income': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Community:        'text-purple-400 bg-purple-400/10 border-purple-400/20',
  'Trading Bots':   'text-[#00bfff] bg-[rgba(0,191,255,0.1)] border-[rgba(0,191,255,0.2)]',
  Exchanges:        'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  Security:         'text-red-400 bg-red-400/10 border-red-400/20',
};

function CategoryBadge({ category }: { category: string }) {
  const color =
    CATEGORY_COLORS[category] ??
    'text-[#a0a0a0] bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.1)]';
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border font-orbitron uppercase tracking-wider ${color}`}
    >
      {category}
    </span>
  );
}

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const featured = posts.filter((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0a0a0a] grid-bg">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="h-96 w-96 rounded-full bg-[#00bfff] opacity-[0.04] blur-[100px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center py-20">
          <span className="badge-cyan mb-4 inline-block">360Crypto Blog</span>
          <h1 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-5">
            Crypto Alpha &amp; Insights
          </h1>
          <p className="text-[#a0a0a0] text-lg max-w-xl mx-auto leading-relaxed">
            In-depth analysis, trading guides, and market insights written by traders who actually
            execute. No fluff. No hype. Just actionable intel.
          </p>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent"
        />
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* ── FEATURED POSTS ───────────────────────────────────────────────── */}
        {featured.length > 0 && (
          <section>
            <h2 className="font-orbitron text-sm font-bold text-[#00bfff] uppercase tracking-widest mb-6">
              Featured
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.map((post) => (
                <article key={post.slug} className="cyber-card-highlight p-8 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <CategoryBadge category={post.category} />
                    <span className="text-xs text-[#555]">{post.readTime}</span>
                  </div>
                  <h2 className="font-orbitron text-lg font-bold text-white leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#666] leading-relaxed flex-1">{post.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.06)] mt-auto">
                    <span className="text-xs text-[#444]">{formatDate(post.date)}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm text-[#00bfff] font-semibold font-orbitron hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ── ALL POSTS ────────────────────────────────────────────────────── */}
        <section>
          <h2 className="font-orbitron text-sm font-bold text-[#00bfff] uppercase tracking-widest mb-6">
            Latest Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article key={post.slug} className="cyber-card p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <CategoryBadge category={post.category} />
                  <span className="text-xs text-[#555]">{post.readTime}</span>
                </div>
                <h2 className="font-orbitron text-sm font-bold text-white leading-snug">
                  {post.title}
                </h2>
                <p className="text-xs text-[#666] leading-relaxed flex-1">{post.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.06)] mt-auto">
                  <span className="text-xs text-[#444]">{formatDate(post.date)}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs text-[#00bfff] font-semibold font-orbitron hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── NEWSLETTER ───────────────────────────────────────────────────── */}
        <section>
          <NewsletterInline
            title="Never Miss a Post"
            subtitle="Get new articles, market insights, and tool reviews delivered directly to your inbox. No spam — just quality crypto content."
          />
        </section>
      </div>
    </>
  );
}
