import Link from 'next/link'
import styled from 'styled-components'

import Layout from '@/components/Layout'
import date from '@/utilities/date'

export default function Home({ weblog }) {
  return (
    <>
      <Layout place="home">
        <ul>
          {weblog.map((weblog) => (
            <li key={weblog.id}>
              <Link href={`weblog/${weblog.category[0]}/${weblog.id}`}>
                <a>
                  <p>
                    {weblog.title}
                    <br />
                    <time dateTime={date(weblog.createdAt, '-')}>
                      {date(weblog.createdAt)}
                    </time>
                  </p>
                </a>
              </Link>
              <Link href={`weblog/${weblog.category[0]}/`}>
                <a>
                  <p>{weblog.category[0]}</p>
                </a>
              </Link>
              {(() => {
                if (weblog.tag.length > 0) {
                  return (
                    <ul>
                      {weblog.tag.map((tag) => {
                        return <li key={tag}>{tag}</li>
                      })}
                    </ul>
                  )
                }
              })()}
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
