import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";
import { articles } from "./src/lib/insights-data";

// Prerender every public route at build time so they ship as static HTML.
// The serverless function is then only invoked for genuinely dynamic endpoints
// (sitemap.xml, rss.xml) — which keeps us well inside Vercel's free-tier
// invocation budget even at high traffic.
const staticRoutes = [
  "/",
  "/about",
  "/services",
  "/destinations",
  "/scholarships",
  "/contact",
  "/insights",
];
const articleRoutes = articles.map((a) => `/insights/${a.slug}`);
const feedRoutes = ["/sitemap.xml", "/rss.xml"];

export default defineConfig(({ command }) => ({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      "react",
      "react-dom",
      "@tanstack/react-router",
      "@tanstack/react-start",
      "@tanstack/react-query",
    ],
  },
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
      prerender: {
        routes: [...staticRoutes, ...articleRoutes, ...feedRoutes],
      },
    }),
    viteReact(),
  ],
}));