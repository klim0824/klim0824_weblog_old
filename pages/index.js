import Head from 'next/head'
import Link from 'next/link';
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'
import meta from "../utilities/meta"

export default function Home({ weblog }) {
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

      <main role="main" className="max-w-3xl mx-4 md:mx-auto">
        <ul>
          {weblog.map(weblog => (
            <li key={weblog.id}>
              <Link href={`weblog/${weblog.category[0]}/${weblog.id}`}>
                <a>
                  <p>{weblog.title}</p>
                  <p>{weblog.createdAt}</p>
                </a>
              </Link>
              <Link href={`weblog/${weblog.category[0]}/`}>
                <a>
                  <p>{weblog.category[0]}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const apiKey = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://klim0824.microcms.io/api/v1/weblog', apiKey)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      weblog: data.contents,
    },
  };
};