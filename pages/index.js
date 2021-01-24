import Head from 'next/head'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'
import meta from "../utilities/constants"

export default function Home() {
  return (
    <div>
      <Head>
        <title>{meta.name}</title>
        <meta name="title" content={meta.name} />
        <meta name="description" content={meta.description} />

        <meta property="og:title" content={meta.name} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.url + 'images/icon-256x256.png'} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:site_name" content={meta.name} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={'@' + meta.author} />
        <meta name="twitter:creator" content={'@' + meta.author} />

        <link rel="canonical" href={meta.url} />
      </Head>

      <Header place="home"/>

      <main role="main">
        <p>My First Next.js Page</p>
      </main>
      
      <Footer />
    </div>
  )
}
