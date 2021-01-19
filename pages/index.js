import Head from 'next/head'
import styled from 'styled-components'

import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main role="main">
        <Title>My First Next.js Page</Title>
      </main>
      
      <Footer />
    </div>
  )
}

const Title = styled.h1`
  color: #333;
`;