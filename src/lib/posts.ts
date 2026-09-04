import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  category?: string;
  featured?: boolean;
  cornerstone?: boolean;
  readingTime: string;
  sample?: boolean;
};

export type Post = PostMeta & {
  content: string;
};

function getMdxFiles(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"));
}

function parsePost(filename: string): Post {
  const slug = filename.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(postsDirectory, filename), "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    category: data.category ? String(data.category) : undefined,
    featured: Boolean(data.featured),
    cornerstone: Boolean(data.cornerstone),
    sample: data.sample !== false,
    readingTime: stats.text,
    content,
  };
}

function toMeta(post: Post): PostMeta {
  const { content, ...meta } = post;
  void content;
  return meta;
}

export function getAllPosts(): PostMeta[] {
  const posts = getMdxFiles().map((filename) => toMeta(parsePost(filename)));
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  return parsePost(`${slug}.mdx`);
}

export function getAllSlugs(): string[] {
  return getMdxFiles().map((filename) => filename.replace(/\.mdx$/, ""));
}

export function getCornerstonePosts(): PostMeta[] {
  const cornerstones = getAllPosts().filter((p) => p.cornerstone);
  if (cornerstones.length > 0) return cornerstones;
  // Fallback curated order for draft samples
  const preferred = [
    "reading-contracts-without-the-panic",
    "what-legal-guide-taught-me-about-teaching",
    "building-bridges-beyond-the-courtroom",
  ];
  const all = getAllPosts();
  return preferred
    .map((slug) => all.find((p) => p.slug === slug))
    .filter((p): p is PostMeta => Boolean(p));
}

export function getRecentPosts(limit = 5, excludeSlug?: string): PostMeta[] {
  return getAllPosts()
    .filter((p) => p.slug !== excludeSlug)
    .slice(0, limit);
}
