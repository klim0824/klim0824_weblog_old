import Head from 'next/head'
import Link from 'next/link'

import Layout from '@/components/Layout'
import meta from '@/utilities/meta'
import date from '@/utilities/date'

export default function WeblogId({ weblog }) {
  return (
    <>
      <Head>
        <title key="title">
          {weblog.title} | {meta.name}
        </title>
        <meta
          key="description"
          name="description"
          content={weblog.description}
        />
        <meta
          key="og:title"
          property="og:title"
          content={weblog.title + ' | ' + meta.name}
        />
        <meta
          key="og:description"
          property="og:description"
          content={weblog.description}
        />
      </Head>
      <Layout place="page">
        <article>
          <h1>
            <Link href={`/weblog/${weblog.category[0]}/${weblog.id}`}>
              <a>{weblog.title}</a>
            </Link>
          </h1>
          <div>
            createdAt:
            <time dateTime={date(weblog.createdAt, '-')}>
              {date(weblog.createdAt)}
            </time>
          </div>
          <div>
            updatedAt:
            <time dateTime={date(weblog.updatedAt, '-')}>
              {date(weblog.updatedAt)}
            </time>
          </div>
          <div>
            <Link href={`/weblog/${weblog.category[0]}/`}>
              <a>category: {weblog.category[0]}</a>
            </Link>
          </div>

          <div
            dangerouslySetInnerHTML={{
              __html: `${weblog.body}`,
            }}
          />
        </article>
      </Layout>
    </>
  )
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }
  const data = await fetch('https://klim0824.microcms.io/api/v1/weblog', key)
    .then((res) => res.json())
    .catch(() => null)
  // console.log('769876897698687698769876876896', data.contents)
  const paths = data.contents.map(
    (content) => `/weblog/${content.category[0]}/${content.id}`
  )
  return { paths, fallback: false }
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }
  const data = await fetch(
    'https://klim0824.microcms.io/api/v1/weblog/' + id,
    key
  )
    .then((res) => res.json())
    .catch(() => null)
  return {
    props: {
      weblog: data,
    },
  }
}
