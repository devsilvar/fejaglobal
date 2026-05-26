import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import heroStudent from "@/assets/hero-student.jpg";
import { siteConfig } from "@/lib/site-config";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Toaster } from "sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Feja Global — Study Abroad in Canada & UK" },
      { name: "description", content: "Premium consultancy helping African students study in Canada and the UK." },
      { name: "author", content: "Feja Global" },
      { property: "og:title", content: "Feja Global — Study Abroad in Canada & UK" },
      { property: "og:description", content: "Premium consultancy helping African students study in Canada and the UK." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Feja Global" },
      { property: "og:url", content: siteConfig.siteUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Feja Global — Study Abroad in Canada & UK" },
      { name: "twitter:description", content: "Premium consultancy helping African students study in Canada and the UK." },
      { property: "og:image", content: `${siteConfig.siteUrl}/og.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: `${siteConfig.siteUrl}/og.png` },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      // Preload the LCP hero image so the browser fetches it in parallel with the HTML
      // instead of waiting for React to hydrate /index.tsx and discover the <img src=...>.
      {
        rel: "preload",
        as: "image",
        href: heroStudent,
        fetchpriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Feja Global",
          url: "https://fejaglobal.com",
          logo: "https://fejaglobal.com/og.png",
          description:
            "Premium consultancy helping African students study in Canada and the UK.",
          areaServed: ["NG", "CA", "GB"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.currentScript.parentElement.setAttribute('data-js-ready','')`
          }}
        />
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster richColors position="top-center" />
    </QueryClientProvider>
  );
}
