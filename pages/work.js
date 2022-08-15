import React from 'react'
import Head from 'next/head'
import HeaderWork from '../components/HeaderWork.jsx'
import FeatureWork from '../components/FeatureWork.jsx'
import OurWork from '../components/OurWork.jsx'
export default function work( {workitems} ) {
  return (
    <>
     <Head>
        <title>Work page</title>
        <meta name="programming company" content="A programming company that helps customers set up an online store, create a brand, e-marketing, and designs for products" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <HeaderWork />
      <FeatureWork />
      <OurWork workitems={workitems}/>
    </>
  )
}

// this code for fetch data for data ourworks component
export async function getStaticProps() {
  const res = await fetch('https://mocki.io/v1/0ca35701-34e7-4522-8fd8-1ff346e39167')
  const datawork = await res.json()
  return {
    props: {
      workitems:datawork,
    },
  }
}