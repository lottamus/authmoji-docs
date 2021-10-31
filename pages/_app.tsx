import { DevPortalProvider } from "@stoplight/elements-dev-portal";
import withTwindApp from "@twind/next/app";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import SEO from "../next-seo.config";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
    },
  },
});

function AuthmojiDocs({ Component, pageProps }: AppProps) {
  // @ts-expect-error
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        {process.env.NODE_ENV === "production" && (
          <script async data-api="/_hive" src="/bee.js"></script>
        )}
      </Head>

      <DefaultSeo {...SEO} />

      <QueryClientProvider client={queryClient}>
        <DevPortalProvider>
          {getLayout(<Component {...pageProps}></Component>, pageProps)}
        </DevPortalProvider>
      </QueryClientProvider>
    </>
  );
}

export default withTwindApp(AuthmojiDocs);
