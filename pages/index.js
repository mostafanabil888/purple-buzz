import Head from 'next/head'
import Header from '../components/Header.jsx'
import RecentWorks from '../components/RecentWorks.jsx'
import Services from '../components/Services.jsx'
import ViewOurWork from '../components/ViewOurWork.jsx'
export default function home( { servicesitems,recentworks } ) {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="programming company" content="A programming company that helps customers set up an online store, create a brand, e-marketing, and designs for products" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Header />
      <Services servicesitems={servicesitems}/>
      <ViewOurWork />
      <RecentWorks recentworks={recentworks}/>
    </>
  )
}
// this code for fetch data for home page components
export async function getStaticProps() {
  // this for services component data
  const resservices = await fetch('https://mocki.io/v1/f5042763-fec3-4bd1-b39e-b073d4892609')
  // this for recent work component data
  const reswork = await fetch('https://mocki.io/v1/02ddfdb2-9b3f-4760-af7c-5f9eb2656001')
  const dataservices = await resservices.json()
  const datarecentwork = await reswork.json()
  return {
    props: {
      // this props for services componenet
      servicesitems:dataservices,
      // this props for recent work componenet
      recentworks:datarecentwork
    },
  }
}
