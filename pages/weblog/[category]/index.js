import Link from 'next/link'

import Layout from '../../../components/Layout'

export default function WeblogCategory({ weblog, category }) {
  return (
    <Layout place="page">
      <h1>{category}カテゴリー 記事一覧</h1>
      <ul>
        {weblog.map((weblog) => (
          <li key={weblog.id}>
            <Link href={`${weblog.category[0]}/${weblog.id}`}>
              <a>
                <p>{weblog.title}</p>
                {/* <p>{weblog.createdAt}</p> */}
                <p>{weblog.category[0]}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
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
  // console.log(data)
  const paths = data.contents.map((content) => `/weblog/${content.category[0]}`)
  return { paths, fallback: false }
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const category = context.params.category
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }
  const data = await fetch(
    'https://klim0824.microcms.io/api/v1/weblog/?filters=category[contains]' +
      category,
    key
  )
    .then((res) => res.json())
    .catch(() => null)
  return {
    props: {
      weblog: data.contents,
      category,
    },
  }
}
