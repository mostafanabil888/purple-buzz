import React from 'react'
import Head from 'next/head'
import ContactHeader from '../components/ContactHeader'
import ContactForm from '../components/ContactForm'
export default function contact() {
  return (
    <>
      <Head>
        <title>Contact page</title>
        <meta name="programming company" content="A programming company that helps customers set up an online store, create a brand, e-marketing, and designs for products" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <ContactHeader />
      <ContactForm />
    </>
  )
}
