import React from 'react'
import Head from 'next/head'
import AboutHeader from '../components/AboutHeader'
import OurPartner from '../components/OurPartner'

import OurVission from "../components/OurVission.jsx"
import MakePerfect from '../components/MakePerfect'
import StayUp from '../components/StayUp'
import OurTeam from '../components/OurTeam'
import ChooseUs from '../components/chooseUs'
export default function about() {
  return (
    <>
     <Head>
        <title>About page</title>
        <meta name="programming company" content="A programming company that helps customers set up an online store, create a brand, e-marketing, and designs for products" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <AboutHeader />
      <OurTeam />
      <OurPartner />
      <ChooseUs />
      <OurVission />
      
      <MakePerfect />
      <StayUp />
    </>
  )
}
