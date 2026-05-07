import type { Metadata } from 'next';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogPost, getBlogSlugs, formatDate } from '@/lib/content';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getBlogPost(slug);
    return {
      title: post.title,
      description: post.description,
      keywords: post.keywords,
      openGraph: {
        title: post.title,
        description: post.description,
        type: 'article',
        publishedTime: post.date,
        url: `https://360crypto.site/blog/${slug}`,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.description,
      },
    };
  } catch {
    return { title: 'Not Found' };
  }
}

const CATEGORY_COLORS: Record<string, string> = {
  Memecoins:        'text-orange-400 bg-orange-400/10 border-orange-400/20',
  'Passive Income': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Community:        'text-purple-400 bg-purple-400/10 border-purple-400/20',
  'Trading Bots':   'text-[#00bfff] bg-[rgba(0,191,255,0.1)] border-[rgba(0,191,255,0.2)]',
  Exchanges:        'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  Security:         'text-red-400 bg-red-400/10 border-red-400/20',
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = getBlogPost(slug);
  } catch {
    notFound();
  }

  const categoryColor =
    CATEGORY_COLORS[post.category] ??
    'text-[#a0a0a0] bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.1)]';

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0a0a0a] grid-bg border-b border-[rgba(255,255,255,0.06)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="h-96 w-96 rounded-full bg-[#00bfff] opacity-[0.04] blur-[100px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs text-[#555] font-orbitron uppercase tracking-wider hover:text-[#00bfff] transition-colors mb-8"
          >
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border font-orbitron uppercase tracking-wider ${categoryColor}`}
            >
              {post.category}
            </span>
            <span className="text-xs text-[#555]">{post.readTime}</span>
            <span className="text-xs text-[#444]">{formatDate(post.date)}</span>
          </div>
          <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            {post.title}
          </h1>
          <p className="mt-5 text-[#a0a0a0] text-lg leading-relaxed max-w-2xl">
            {post.description}
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ─────────────────────────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose-crypto">
          <MDXRemote source={post.content} />
        </div>

        {/* ── FOOTER NAV ───────────────────────────────────────────────── */}
        <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/blog"
            className="text-sm text-[#00bfff] font-orbitron font-bold hover:underline"
          >
            ← All Posts
          </Link>
          <Link
            href="/tools"
            className="cyber-btn-outline text-xs py-2 px-5"
          >
            Explore Recommended Tools →
          </Link>
        </div>
      </article>
    </>
  );
}
