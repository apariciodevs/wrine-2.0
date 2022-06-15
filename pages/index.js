import Head from 'next/head'
import Image from 'next/image'




//components
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import HeroImage from '../components/HeroImage'
import Features from '../components/Features'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wrine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Hero></Hero>
      
      </main>

     
    </div>
  )
}
