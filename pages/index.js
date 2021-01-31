import Link from 'next/link'
import styled from 'styled-components'

import Layout from '@/components/Layout'

export default function Home({ weblog }) {
  return (
    <>
      <Layout place="home">
        <ul>
          {weblog.map((weblog) => (
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
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const apiKey = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }
  const data = await fetch('https://klim0824.microcms.io/api/v1/weblog', apiKey)
    .then((res) => res.json())
    .catch(() => null)
  return {
    props: {
      weblog: data.contents,
    },
  }
}
