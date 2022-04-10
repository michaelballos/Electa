import React from 'react'
import '../styles/globals.css'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import Layout from '../components/Layout'

export default function App({ Component, pageProps}) {
  const [queryClient] = React.useState(new QueryClient())

  return (
    <>
      <QueryClientProvider client={queryClient}>

        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: 'light',
          }}
        >
          <Hydrate state={pageProps.dehydratedState}>
            {Component.name !== 'Login' ? (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            ) : (
              <Component {...pageProps} />
            )}
          </Hydrate>
        </MantineProvider>
      </QueryClientProvider>
    </>
  )
}
