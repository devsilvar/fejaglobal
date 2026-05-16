import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, ShareNetwork } from "@phosphor-icons/react";
import { articles, getArticleBySlug } from "@/lib/insights-data";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const article = getArticleBySlug(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    if (!a) return {};
    const title = `${a.title} | LuminaEdu Insights`;
    return {
      meta: [
        { title },
        { name: "description", content: a.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: a.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/insights/${a.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: a.excerpt },
      ],
      links: [{ rel: "canonical", href: `/insights/${a.slug}` }],
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
        ← Back to Insights
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

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

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

  return (
    <>
      <article className="max-w-3xl mx-auto px-6 pt-16 pb-20 lg:pt-24">
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 font-mont text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue hover:gap-3 transition-all mb-10"
        >
          <ArrowLeft className="size-3.5" />
          All Insights
        </Link>

        <div className="font-mont text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue mb-5">
          {article.category}
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-light tracking-[-0.035em] leading-[1.05] text-brand-navy mb-6 text-balance">
          {article.title}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-brand-navy/10 mb-12">
          <div className="flex items-center gap-5 font-mont text-xs text-muted-foreground">
            <span className="font-semibold text-brand-navy">{article.author}</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="size-3.5" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5" />
              {article.read}
            </span>
          </div>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 font-mont text-xs font-semibold text-brand-navy border border-brand-navy/15 rounded-full px-4 py-2 hover:bg-brand-navy hover:text-white transition-colors"
          >
            <ShareNetwork className="size-3.5" />
            Share
          </button>
        </div>

        <div className="space-y-10">
          {article.body.map((section: { heading?: string; paragraphs: string[] }, i: number) => (
            <section key={i}>
              {section.heading && (
                <h2 className="font-display text-2xl md:text-3xl font-medium text-brand-navy mb-4 tracking-[-0.015em]">
                  {section.heading}
                </h2>
              )}
              <div className="space-y-5">
                {section.paragraphs.map((p: string, j: number) => (
                  <p
                    key={j}
                    className="text-base md:text-lg text-foreground/85 leading-[1.75]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-brand-navy/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mont text-sm text-muted-foreground">
            Found this useful? Talk to an advisor.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-brand-blue text-white py-3 px-6 rounded-full font-mont font-semibold text-sm shadow-[0_10px_30px_-10px_oklch(0.52_0.24_264_/_0.55)] hover:-translate-y-0.5 transition-all"
          >
            Book a Discovery Call
          </Link>
        </div>
      </article>

      <section className="bg-secondary/40 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-light text-brand-navy mb-10 tracking-[-0.02em]">
            Keep reading.
          </h2>
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
                <h3 className="font-display text-xl font-medium text-brand-navy leading-snug mb-3">
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
