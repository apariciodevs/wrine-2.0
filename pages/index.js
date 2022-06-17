import Head from 'next/head'
import Image from 'next/image'

import { Flex } from '@chakra-ui/react'




//components
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Pricing from "../components/Pricing.tsx"
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wrine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex overflow='hidden' justifyContent={'center'} flexDirection={'column'} alignItems='center'>
      <Hero></Hero>
      <Features></Features>     
      <Pricing></Pricing>
      </Flex>

     
    </div>
  )
}
