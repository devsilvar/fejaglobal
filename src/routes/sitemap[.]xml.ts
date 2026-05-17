import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { articles } from "@/lib/insights-data";

// Sitemap is served from the same Worker; an empty BASE_URL produces
// path-relative <loc> entries which Google accepts when crawled from the
// site itself. Set VITE_SITE_URL if you want absolute URLs in production.
const BASE_URL =
  (import.meta as unknown as { env: Record<string, string | undefined> }).env
    ?.VITE_SITE_URL?.replace(/\/$/, "") ?? "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        type Entry = {
          path: string;
          changefreq: string;
          priority: string;
          lastmod?: string;
        };

        const staticEntries: Entry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/destinations", changefreq: "monthly", priority: "0.9" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/scholarships", changefreq: "monthly", priority: "0.8" },
          { path: "/insights", changefreq: "weekly", priority: "0.8" },
          { path: "/about", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.8" },
        ];

        const articleEntries: Entry[] = articles.map((a) => {
          const parsed = new Date(a.date);
          return {
            path: `/insights/${a.slug}`,
            changefreq: "yearly",
            priority: "0.6",
            lastmod: Number.isNaN(parsed.getTime())
              ? undefined
              : parsed.toISOString().slice(0, 10),
          };
        });

        const urls = [...staticEntries, ...articleEntries]
          .map((e) => {
            const lastmod = e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : "";
            return `  <url>\n    <loc>${BASE_URL}${e.path}</loc>${lastmod}\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`;
          })
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
