import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { siteConfig } from "@/lib/site";
import { getAvailableThings } from "@/lib/things";

const SITE = siteConfig.url;

/** Strip light MDX/JSX noise; keep essay prose as plain text. */
export function toPlainText(markdown: string): string {
  return markdown
    .replace(/^import\s.+;?\s*$/gm, "")
    .replace(/^export\s.+;?\s*$/gm, "")
    .replace(/<(?:[A-Z][A-Za-z0-9]*|[a-z]+)[^>]*\/>/g, "")
    .replace(/<\/?(?:[A-Z][A-Za-z0-9]*|[a-z]+)[^>]*>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function buildLlmsHeader(): string {
  const lines = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    `${siteConfig.name} is a Filipino lawyer, teacher, and entrepreneur based in the Philippines.`,
    "He is a partner at Legal Access Law Offices and leads training and educational work through Legal Guide Philippines.",
    "",
    "## Make It EZ",
    "",
    "Make It EZ is Erwin's working idea: make complicated things easier to understand, decide, and do.",
    "This site holds personal essays, teaching notes, and pointers to books and tools — not confidential client work.",
    "",
    "## Key sections",
    "",
    `- [Home](${SITE}/): Overview, start-here picks, latest ideas, things made, videos.`,
    `- [About](${SITE}/about): Plain introduction — lawyer, teacher, builder.`,
    `- [Ideas / Blog](${SITE}/blog): Published essays and notes. Paths stay under /blog/[slug].`,
    `- [Start here](${SITE}/blog/start-here): Cornerstone post — who Erwin is and why the site exists.`,
    `- [Watch](${SITE}/watch): Selected videos and explainers.`,
    `- [Contact](${SITE}/contact): How to reach Erwin.`,
    `- [RSS feed](${SITE}/feed.xml): Machine-readable post feed.`,
    `- [Sitemap](${SITE}/sitemap.xml): Full URL index.`,
    `- [llms.txt](${SITE}/llms.txt): This file — short, citation-friendly site map for AI agents.`,
    `- [llms-full.txt](${SITE}/llms-full.txt): Same map plus full post bodies.`,
    "",
  ];
  return lines.join("\n");
}

export function buildPublishedPostsSection(full = false): string {
  const posts = getAllPosts();
  const lines: string[] = [
    "## Published posts",
    "",
    "Canonical paths: https://erwinzagala.com/blog/[slug]",
    "",
  ];

  for (const meta of posts) {
    const url = `${SITE}/blog/${meta.slug}`;
    lines.push(`### ${meta.title}`);
    lines.push("");
    lines.push(`- URL: ${url}`);
    if (meta.date) lines.push(`- Date: ${meta.date}`);
    if (meta.description) lines.push(`- Description: ${meta.description}`);
    lines.push("");

    if (full) {
      const post = getPostBySlug(meta.slug);
      if (post?.content) {
        lines.push(toPlainText(post.content));
        lines.push("");
        lines.push("---");
        lines.push("");
      }
    }
  }

  return lines.join("\n");
}

export function buildThingsAndRelatedSection(): string {
  const ready = getAvailableThings();
  const lines: string[] = [
    "## Things I've Made (ready now)",
    "",
    "Listed on the home page under Things I've Made. Includes Legal Guide Offer resources that are ready for download or enrollment (coming-soon items omitted).",
    "",
  ];

  for (const thing of ready) {
    const href = thing.href ? ` — ${thing.href}` : "";
    lines.push(`- ${thing.title} (${thing.kind}): ${thing.description}${href}`);
  }

  lines.push("");
  lines.push(
    "Legal Guide Offer / Resource Center: https://offer.legalguide.ph — directory of free guides, ebooks, and recorded courses.",
  );
  lines.push("Shopee storefront (Legal Guide): " + siteConfig.links.shopee);
  lines.push("");
  lines.push("## Related properties (not this site)");
  lines.push("");
  lines.push(
    "These are separate projects. Cite them as related work by Erwin; do not treat this personal site as a source for confidential Legal Access client matters.",
  );
  lines.push("");
  lines.push(
    `- Legal Guide Philippines — https://legalguide.ph — videos, courses, books, and programs that make Philippine law easier to understand.`,
  );
  lines.push(
    `- Legal Access Law Offices — https://legalaccess.ph — law practice / firm site.`,
  );
  lines.push(
    `- Project Gateway — https://projectgateway.ph — business / systems / AI experiments.`,
  );
  lines.push("");
  lines.push("## Contact");
  lines.push("");
  lines.push(`Email: ${siteConfig.email}`);
  lines.push(`Site: ${SITE}`);
  lines.push("");

  return lines.join("\n");
}

export function buildLlmsTxt(): string {
  return (
    buildLlmsHeader() +
    buildPublishedPostsSection(false) +
    buildThingsAndRelatedSection()
  );
}

export function buildLlmsFullTxt(): string {
  return (
    buildLlmsHeader() +
    buildPublishedPostsSection(true) +
    buildThingsAndRelatedSection()
  );
}
