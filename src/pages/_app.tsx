import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { useStore } from '../store'

import Header from '@components/Header'

import '@duik/it/dist/styles.css'
import '@styles/globals.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <>
      <Head>
        <title>page</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:300,400,500&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </main>
    </>
  )
}
