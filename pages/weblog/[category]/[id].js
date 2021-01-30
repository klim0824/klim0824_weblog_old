import Head from 'next/head'
import Link from 'next/link';

import Layout from '../../../components/Layout'

export default function WeblogId({ weblog }) {
  return (
    <>
      <Head>
        <title key="title">{weblog.title}</title>
        <meta key="description" name="description" content={weblog.description} />
        <meta key="og:title" property="og:title" content={weblog.title} />
        <meta key="og:description"  property="og:description" content={weblog.description} />
      </Head>
      <Layout place="page">
        <h1>{weblog.title}</h1>
        <div>createdAt: {weblog.createdAt}</div>
        <div>updatedAt: {weblog.updatedAt}</div>
        <div>category: {weblog.category[0]}</div>

        <div
          dangerouslySetInnerHTML={{
            __html: `${weblog.body}`,
          }}
        />
      </Layout>
    </>
  );
}
  
// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://klim0824.microcms.io/api/v1/weblog', key)
    .then(res => res.json())
    .catch(() => null);
  // console.log('769876897698687698769876876896', data.contents)
  const paths = data.contents.map(content => `/weblog/${content.category[0]}/${content.id}`);
  return {paths, fallback: false};
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async context => {
  const id = context.params.id;
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch(
    'https://klim0824.microcms.io/api/v1/weblog/' + id,
    key,
  )
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      weblog: data
    },
  };
};