import Head from 'next/head'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Header place="home"/>

      <main role="main">
        <p>My First Next.js Page</p>
      </main>
      
      <Footer />
    </div>
  )
}
