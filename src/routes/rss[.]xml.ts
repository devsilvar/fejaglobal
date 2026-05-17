import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { articles } from "@/lib/insights-data";

const BASE_URL =
  (import.meta as unknown as { env: Record<string, string | undefined> }).env
    ?.VITE_SITE_URL?.replace(/\/$/, "") ?? "https://fejaglobal.com";

function xmlEscape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: async () => {
        const sorted = [...articles].sort((a, b) => {
          const aTs = new Date(a.date).getTime();
          const bTs = new Date(b.date).getTime();
          return (Number.isNaN(bTs) ? 0 : bTs) - (Number.isNaN(aTs) ? 0 : aTs);
        });

        const items = sorted
          .map((a) => {
            const link = `${BASE_URL}/insights/${a.slug}`;
            const pubDate = new Date(a.date);
            const pubDateStr = Number.isNaN(pubDate.getTime())
              ? new Date().toUTCString()
              : pubDate.toUTCString();
            return `    <item>
      <title>${xmlEscape(a.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDateStr}</pubDate>
      <category>${xmlEscape(a.category)}</category>
      <author>${xmlEscape(a.author)}</author>
      <description>${xmlEscape(a.excerpt)}</description>
    </item>`;
          })
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Feja Global Insights</title>
    <link>${BASE_URL}/insights</link>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Founder-written guides on studying in Canada and the UK from Nigeria.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
