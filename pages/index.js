import Head from 'next/head'
import Footer from '../parts/footer'
import Header from '../parts/header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Nice Music Blog — Reviews en Español</title>
        <meta name="description" content="Reviews de música japonesa en español" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header/>

      <Footer/>

    </div>
  )
}
