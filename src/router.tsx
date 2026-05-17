import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  // One QueryClient per request — correct on Cloudflare Workers (avoids cross-request leakage).
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60_000,
        gcTime: 5 * 60_000,
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  });

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    // Preload routes on hover/focus; cache preload data for 30s so back/forward feels instant.
    defaultPreload: "intent",
    defaultPreloadStaleTime: 30_000,
    // Suppress brief pending flashes on fast navigations.
    defaultPendingMs: 200,
  });
  return router;
};
