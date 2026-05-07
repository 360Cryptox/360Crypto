import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getGuide, getGuideSlugs, formatDate } from '@/lib/content';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const guide = getGuide(slug);
    return {
      title: guide.title,
      description: guide.description,
      keywords: guide.keywords,
      openGraph: {
        title: guide.title,
        description: guide.description,
        type: 'article',
        publishedTime: guide.date,
        url: `https://360crypto.site/guides/${slug}`,
      },
      twitter: {
        card: 'summary_large_image',
        title: guide.title,
        description: guide.description,
      },
    };
  } catch {
    return { title: 'Not Found' };
  }
}

const LEVEL_COLORS: Record<string, string> = {
  Beginner:     'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Intermediate: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  Advanced:     'text-red-400 bg-red-400/10 border-red-400/20',
};

const CATEGORY_COLORS: Record<string, string> = {
  Beginner:         'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Trading:          'text-[#00bfff] bg-[rgba(0,191,255,0.1)] border-[rgba(0,191,255,0.2)]',
  'Passive Income': 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  Memecoins:        'text-orange-400 bg-orange-400/10 border-orange-400/20',
  Security:         'text-red-400 bg-red-400/10 border-red-400/20',
};

export default async function GuidePostPage({ params }: Props) {
  const { slug } = await params;

  let guide;
  try {
    guide = getGuide(slug);
  } catch {
    notFound();
  }

  const levelColor =
    LEVEL_COLORS[guide.level] ??
    'text-[#a0a0a0] bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.1)]';
  const categoryColor =
    CATEGORY_COLORS[guide.category] ??
    'text-[#a0a0a0] bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.1)]';

  return (
    <>
      <Script id="jsonld-guide" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: guide.title,
          description: guide.description,
          datePublished: guide.date,
          author: { '@type': 'Organization', name: '360Crypto', url: 'https://360crypto.site' },
          publisher: { '@type': 'Organization', name: '360Crypto', url: 'https://360crypto.site' },
          url: `https://360crypto.site/guides/${slug}`,
        })}
      </Script>
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
            href="/guides"
            className="inline-flex items-center gap-2 text-xs text-[#555] font-orbitron uppercase tracking-wider hover:text-[#00bfff] transition-colors mb-8"
          >
            ← Back to Guides
          </Link>
          <div className="text-4xl mb-4">{guide.icon}</div>
          <div className="flex items-center gap-3 flex-wrap mb-5">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border font-orbitron uppercase tracking-wider ${categoryColor}`}
            >
              {guide.category}
            </span>
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border font-orbitron uppercase tracking-wider ${levelColor}`}
            >
              {guide.level}
            </span>
            <span className="text-xs text-[#555]">{guide.readTime}</span>
            <span className="text-xs text-[#444]">{formatDate(guide.date)}</span>
          </div>
          <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            {guide.title}
          </h1>
          <p className="mt-5 text-[#a0a0a0] text-lg leading-relaxed max-w-2xl">
            {guide.description}
          </p>
        </div>
      </section>

      {/* ── GUIDE BODY ───────────────────────────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose-crypto">
          <MDXRemote source={guide.content} />
        </div>

        {/* ── FOOTER NAV ───────────────────────────────────────────────── */}
        <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/guides"
            className="text-sm text-[#00bfff] font-orbitron font-bold hover:underline"
          >
            ← All Guides
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
