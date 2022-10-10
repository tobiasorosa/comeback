import type {NextPage} from 'next'
import Head from 'next/head'

import {Footer} from '../components/Footer'
import {Header} from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>WhoGaming</title>

        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="h-screen">Teste</div>

      <Footer />
    </>
  )
}

export default Home
