import Head from 'next/head'
import 'sanitize.css'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family:  "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  }
`
const theme = {
  colors: {
    primary: '#0070f3',
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
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
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
