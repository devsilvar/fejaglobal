import { createFileRoute, Outlet } from "@tanstack/react-router";

/**
 * Parent route for /insights — pure layout.
 *
 * The actual index page lives in `insights.index.tsx` (matches /insights exactly).
 * The article page lives in `insights.$slug.tsx` (matches /insights/<slug>).
 *
 * Without this <Outlet /> the child route never renders, because TanStack Router
 * treats `insights.$slug` as a child of `insights`.
 */
export const Route = createFileRoute("/insights")({
  component: InsightsLayout,
});

function InsightsLayout() {
  return <Outlet />;
}
