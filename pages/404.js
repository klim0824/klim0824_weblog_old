import Link from 'next/link'

import Layout from '../components/Layout'

export default function Custom404() {
  return (
    <Layout place="page">
      <h1 className="text-center">404 - Page Not Found</h1>
      <p className="text-center">
        <Link href="/">
          <a>ブログトップへ戻る</a>
        </Link>
      </p>
    </Layout>
  )
}
