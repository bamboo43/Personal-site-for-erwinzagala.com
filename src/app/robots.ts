import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/**
 * Explicit Allow groups for answer/search crawlers come first.
 * Wildcard Allow / remains. No Disallow for GPTBot / ClaudeBot /
 * Google-Extended — public personal site wants maximum AI discoverability.
 * llms.txt is crawlable at /llms.txt (also listed in sitemap).
 */
export default function robots(): MetadataRoute.Robots {
  const allowAll = { allow: "/" as const };

  // Answer / search–oriented crawlers first (priority for AI search visibility)
  const answerSearchAgents = [
    "OAI-SearchBot",
    "ChatGPT-User",
    "Claude-SearchBot",
    "Claude-User",
    "PerplexityBot",
    "Googlebot",
    "Bingbot",
  ];

  // Other major AI / training / social crawlers — still explicitly allowed
  const otherAiAgents = [
    "GPTBot",
    "Google-Extended",
    "ClaudeBot",
    "Anthropic-AI",
    "Applebot-Extended",
    "Bytespider",
    "CCBot",
    "cohere-ai",
    "Meta-ExternalAgent",
    "FacebookBot",
  ];

  return {
    rules: [
      ...answerSearchAgents.map((userAgent) => ({
        userAgent,
        ...allowAll,
      })),
      ...otherAiAgents.map((userAgent) => ({
        userAgent,
        ...allowAll,
      })),
      {
        userAgent: "*",
        ...allowAll,
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
