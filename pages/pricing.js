import React from 'react'
import Head from 'next/head'
import PricingHeader from '../components/PricingHeader'
import OurPricing from '../components/OurPricing'
import Pricing from '../components/Pricing'
export default function pricing({price}) {
  return (
    <>
      <Head>
        <title>Pricing page</title>
        <meta name="programming company" content="A programming company that helps customers set up an online store, create a brand, e-marketing, and designs for products" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <PricingHeader price={price}/>
      <OurPricing price={price} />
      <Pricing price={price}/>
    </>
  )
}

// this fetch data for pricing plan data
export async function getStaticProps() {
  const res = await fetch("https://mocki.io/v1/b768ee8d-2ddf-402a-a70c-fa518a1834f9")
  const dataprice = await res.json()
  return {
    props: {
      price:dataprice,
    },
  }
}