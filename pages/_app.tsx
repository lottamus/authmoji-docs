import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { DevPortalProvider } from "@stoplight/elements-dev-portal";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
    },
  },
});

function AutmojiDocs({ Component, pageProps }: AppProps) {
  // @ts-expect-error
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <DevPortalProvider>
        {getLayout(<Component {...pageProps}></Component>, pageProps)}
      </DevPortalProvider>
    </QueryClientProvider>
  );
}

export default AutmojiDocs;
