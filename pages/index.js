import Head from 'next/head'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'
import meta from "../utilities/constants"

export default function Home() {
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

      <main role="main" className="max-w-3xl mx-auto">
        <p>吾輩は猫である。名前はまだ無い。</p>
        <p>どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの見始であろう。この時妙なものだと思った感じが今でも残っている。第一毛をもって装飾されべきはずの顔がつるつるしてまるで薬缶だ。その後猫にもだいぶ逢ったがこんな片輪には一度も出会わした事がない。のみならず顔の真中があまりに突起している。そうしてその穴の中から時々ぷうぷうと煙を吹く。どうも咽せぽくて実に弱った。これが人間の飲む煙草というものである事はようやくこの頃知った。</p>
      </main>
      
      <Footer />
    </div>
  )
}
