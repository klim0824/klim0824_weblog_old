import Link from 'next/link';

import Layout from '../../../components/Layout'

export default function WeblogId({ weblog }) {
  return (
    <Layout place="page">
      <p>{weblog.title}</p>
    </Layout>
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