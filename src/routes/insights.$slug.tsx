import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { Calendar } from "@phosphor-icons/react/dist/ssr/Calendar";
import { Clock } from "@phosphor-icons/react/dist/ssr/Clock";
import { ShareNetwork } from "@phosphor-icons/react/dist/ssr/ShareNetwork";
import { Quotes } from "@phosphor-icons/react/dist/ssr/Quotes";
import { Check } from "@phosphor-icons/react/dist/ssr/Check";
import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight";
import { articles, getArticleBySlug, type Article } from "@/lib/insights-data";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const article = getArticleBySlug(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    if (!a) return {};
    const title = `${a.title} | Feja Global Blog`;
    const parsedDate = new Date(a.date);
    const isoDate = Number.isNaN(parsedDate.getTime())
      ? undefined
      : parsedDate.toISOString();
    const absoluteUrl = `${siteConfig.siteUrl}/insights/${a.slug}`;
    const ogImage = a.cover ?? `${siteConfig.siteUrl}/og.png`;
    const meta: Array<{ name?: string; property?: string; content: string }> = [
      { title } as never,
      { name: "description", content: a.excerpt },
      { property: "og:title", content: title },
      { property: "og:description", content: a.excerpt },
      { property: "og:type", content: "article" },
      { property: "og:url", content: absoluteUrl },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: a.excerpt },
      { name: "twitter:image", content: ogImage },
      { property: "article:author", content: a.author },
      { property: "article:section", content: a.category },
    ];
    if (isoDate) {
      meta.push({ property: "article:published_time", content: isoDate });
    }
    return {
      meta,
      links: [{ rel: "canonical", href: absoluteUrl }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title,
            description: a.excerpt,
            datePublished: isoDate,
            dateModified: isoDate,
            author: { "@type": "Person", name: a.author },
            publisher: {
              "@type": "Organization",
              name: "Feja Global",
              logo: {
                "@type": "ImageObject",
                url: "https://fejaglobal.com/og.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://fejaglobal.com/insights/${a.slug}`,
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://fejaglobal.com/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://fejaglobal.com/insights" },
              { "@type": "ListItem", position: 3, name: a.title, item: `https://fejaglobal.com/insights/${a.slug}` },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mont text-xs uppercase tracking-[0.18em] text-brand-blue mb-3">
        404
      </p>
      <h1 className="font-display text-4xl text-brand-navy mb-4">
        Article not found.
      </h1>
      <Link
        to="/insights"
        className="font-mont text-sm text-brand-blue hover:underline"
      >
        ← Back to the Blog
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-[60vh] flex items-center justify-center px-6 text-center">
      <p className="font-mont text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ArticlePage,
});

function useReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      if (total <= 0) {
        setProgress(0);
        return;
      }
      setProgress(Math.min(1, Math.max(0, h.scrollTop / total)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function ArticlePage() {
  const { article } = Route.useLoaderData() as { article: Article };
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
  const progress = useReadingProgress();

  const sectionsWithHeadings = article.body.filter((s) => s.heading);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: article.title, text: article.excerpt, url });
        return;
      } catch {
        /* user cancelled — fall through to clipboard */
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(url);
    }
  };

  const initials = article.author
    .split(/\s+/)
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <>
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-transparent z-50 pointer-events-none">
        <div
          className="h-full bg-brand-blue origin-left transition-[width] duration-100"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Breadcrumb */}
      <div className="border-b border-brand-navy/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-2 font-mont text-[11px] text-muted-foreground overflow-x-auto">
          <Link to="/" className="hover:text-brand-blue shrink-0">Home</Link>
          <CaretRight className="size-3 shrink-0" />
          <Link to="/insights" className="hover:text-brand-blue shrink-0">Blog</Link>
          <CaretRight className="size-3 shrink-0" />
          <span className="text-brand-navy truncate">{article.title}</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-b from-brand-cream/40 to-background border-b border-brand-navy/10">
        <div className="max-w-3xl mx-auto px-6 pt-16 pb-12 lg:pt-20">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 font-mont text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft className="size-3.5" />
            All Articles
          </Link>

          <div className="font-mont text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue mb-5">
            {article.category}
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.035em] leading-[1.05] text-brand-navy mb-6 text-balance">
            {article.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            {article.lede ?? article.excerpt}
          </p>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="size-11 shrink-0 rounded-full bg-brand-navy text-white grid place-items-center font-mont text-xs font-semibold tracking-wider">
                {initials}
              </div>
              <div className="leading-tight">
                <div className="font-mont text-sm font-semibold text-brand-navy">
                  {article.author}
                </div>
                {article.authorRole && (
                  <div className="font-mont text-[11px] text-muted-foreground mt-0.5">
                    {article.authorRole}
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-4 font-mont text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="size-3.5" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5" />
                {article.read}
              </span>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 font-mont text-xs font-semibold text-brand-navy border border-brand-navy/15 rounded-full px-4 py-2 hover:bg-brand-navy hover:text-white transition-colors"
              >
                <ShareNetwork className="size-3.5" />
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Cover image */}
        {article.cover && (
          <div className="max-w-5xl mx-auto px-6 pb-12">
            <div className="aspect-[16/9] overflow-hidden bg-brand-navy shadow-[0_30px_60px_-25px_oklch(0.16_0.04_265_/_0.35)]">
              <img
                src={article.cover}
                alt={article.title}
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
              />
            </div>
          </div>
        )}
      </header>

      {/* Body */}
      <article className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
          {/* Sidebar: TOC + takeaways */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="lg:sticky lg:top-28 space-y-8">
              {article.keyTakeaways && article.keyTakeaways.length > 0 && (
                <div className="bg-brand-cream/50 border-l-2 border-brand-blue p-6">
                  <div className="font-mont text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue mb-4">
                    Key takeaways
                  </div>
                  <ul className="space-y-3">
                    {article.keyTakeaways.map((t) => (
                      <li
                        key={t}
                        className="flex gap-2.5 text-[13px] text-brand-navy leading-snug"
                      >
                        <Check
                          className="size-3.5 mt-0.5 text-brand-blue shrink-0"
                          weight="bold"
                        />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {sectionsWithHeadings.length > 1 && (
                <nav>
                  <div className="font-mont text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue mb-4">
                    In this article
                  </div>
                  <ol className="space-y-2.5">
                    {sectionsWithHeadings.map((s, i) => (
                      <li key={s.heading}>
                        <a
                          href={`#${slugify(s.heading!)}`}
                          className="font-mont text-[12px] text-muted-foreground hover:text-brand-blue transition-colors leading-snug flex gap-2"
                        >
                          <span className="text-brand-blue/60 tabular-nums">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span>{s.heading}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
            </div>
          </aside>

          {/* Article content */}
          <div className="lg:col-span-9 order-1 lg:order-2 max-w-3xl">
            <div className="space-y-12">
              {article.body.map((section, i) => (
                <section key={i}>
                  {section.heading && (
                    <h2
                      id={slugify(section.heading)}
                      className="font-display text-2xl md:text-3xl font-medium text-brand-navy mb-5 tracking-[-0.015em] scroll-mt-24"
                    >
                      {section.heading}
                    </h2>
                  )}
                  <div className="space-y-5">
                    {section.paragraphs.map((p, j) => (
                      <p
                        key={j}
                        className="text-base md:text-[17px] text-foreground/85 leading-[1.8]"
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-6 space-y-3 border-l-2 border-brand-blue/30 pl-5">
                      {section.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-3 text-[15px] md:text-base text-foreground/85 leading-relaxed"
                        >
                          <span
                            className="size-1.5 rounded-full bg-brand-blue mt-2.5 shrink-0"
                            aria-hidden
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.callout && (
                    <figure className="my-8 relative bg-brand-navy text-white p-7 md:p-9 border-l-4 border-brand-blue">
                      <Quotes
                        className="absolute top-4 right-5 size-10 text-brand-blue/30"
                        weight="fill"
                      />
                      <blockquote className="font-display text-xl md:text-2xl font-light italic leading-[1.4] tracking-[-0.015em]">
                        “{section.callout.quote}”
                      </blockquote>
                      {section.callout.attribution && (
                        <figcaption className="mt-4 font-mont text-[11px] uppercase tracking-[0.18em] text-brand-blue">
                          — {section.callout.attribution}
                        </figcaption>
                      )}
                    </figure>
                  )}
                </section>
              ))}
            </div>

            {/* Author card */}
            <div className="mt-16 pt-10 border-t border-brand-navy/10">
              <div className="bg-brand-cream/40 p-7 md:p-8 flex flex-col sm:flex-row gap-5 sm:items-center">
                <div className="size-16 shrink-0 rounded-full bg-brand-navy text-white grid place-items-center font-mont text-base font-semibold tracking-wider">
                  {initials}
                </div>
                <div className="flex-1">
                  <div className="font-mont text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue mb-1.5">
                    Written by
                  </div>
                  <div className="font-display text-xl font-medium text-brand-navy">
                    {article.author}
                  </div>
                  {article.authorRole && (
                    <div className="font-mont text-sm text-muted-foreground mt-1">
                      {article.authorRole}
                    </div>
                  )}
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                    Writes about admissions, visas and life as an African
                    student abroad — based on what we actually see across our
                    annual cohort.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 bg-brand-navy text-white p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="font-mont text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue mb-2">
                  Free consultation
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-light leading-tight">
                  Have questions about your application?
                </h3>
                <p className="text-white/70 text-sm mt-3 leading-relaxed max-w-md">
                  Book a 30-minute call with a senior consultant — no fee, no
                  pressure, just clear next steps.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-brand-blue text-white py-3.5 px-7 rounded-full font-mont font-semibold text-sm shadow-[0_10px_30px_-10px_oklch(0.52_0.24_264_/_0.55)] hover:-translate-y-0.5 transition-all shrink-0"
              >
                Book a Discovery Call
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="bg-secondary/40 py-20 border-t border-brand-navy/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-light text-brand-navy tracking-[-0.02em]">
              Keep reading.
            </h2>
            <Link
              to="/insights"
              className="font-mont text-sm font-semibold text-brand-blue inline-flex items-center gap-2 border-b-2 border-transparent hover:border-brand-blue transition-colors pb-1"
            >
              All articles
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((a) => (
              <Link
                key={a.slug}
                to="/insights/$slug"
                params={{ slug: a.slug }}
                className="group bg-white border border-brand-navy/10 hover:border-brand-navy/40 hover:-translate-y-0.5 transition-all p-6 flex flex-col"
              >
                <div className="font-mont text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue mb-3">
                  {a.category}
                </div>
                <h3 className="font-display text-xl font-medium text-brand-navy leading-snug mb-3 group-hover:text-brand-blue transition-colors">
                  {a.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {a.excerpt}
                </p>
                <span className="font-mont text-xs text-muted-foreground">
                  {a.read}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
