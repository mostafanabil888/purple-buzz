import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CopyRight from './CopyRight'
export default  function Layout ({ children })  {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
        <CopyRight />
    </>
  )
}
