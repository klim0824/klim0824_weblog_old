import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="icon" href="/images/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="48x48" href="/images/icon-48x48.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/images/icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="96x96" href="/images/icon-96x96.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/images/icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="192x192" href="/images/icon-192x192.png"/>
        <link rel="apple-touch-icon" sizes="256x256" href="/images/icon-256x256.png"/>
        <link rel="apple-touch-icon" sizes="384x384" href="/images/icon-384x384.png"/>
        <link rel="apple-touch-icon" sizes="512x512" href="/images/icon-512x512.png"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
