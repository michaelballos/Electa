import React from 'react'
import '../styles/globals.css'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import Layout from '../components/Layout';



export default function App({ Component, pageProps}) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Page title</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>

          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              /** Put your mantine theme override here */
              colorScheme: "light",
            }}
          >
            <Hydrate state={pageProps.dehydratedState}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Hydrate>
          </MantineProvider>
      </QueryClientProvider>
    </>
  );
}

