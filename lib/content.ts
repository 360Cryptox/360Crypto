import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  featured?: boolean;
  keywords?: string[];
}

export interface GuideMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  readTime: string;
  icon: string;
  keywords?: string[];
}

export interface Post extends PostMeta {
  content: string;
}

export interface Guide extends GuideMeta {
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), 'content/blog');
const GUIDES_DIR = path.join(process.cwd(), 'content/guides');

export function getBlogSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''));
}

export function getGuideSlugs(): string[] {
  return fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''));
}

export function getBlogPost(slug: string): Post {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return { slug, ...(data as Omit<PostMeta, 'slug'>), content };
}

export function getGuide(slug: string): Guide {
  const filePath = path.join(GUIDES_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return { slug, ...(data as Omit<GuideMeta, 'slug'>), content };
}

export function getAllBlogPosts(): Post[] {
  return getBlogSlugs()
    .map((slug) => getBlogPost(slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllGuides(): Guide[] {
  return getGuideSlugs()
    .map((slug) => getGuide(slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
