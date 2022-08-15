import React from 'react'
import Image from 'next/image'
export default function ContactHeader() {
  return (
    <header className='bg-light py-3'>
    <div className="container">
        <div className="row  align-items-center justify-content-center">
            <div className="col-lg-6">
                <h1 className="py-2 text-primary">Contact</h1>
                <h4 className='py-3'>Elit, sed do eiusmod tempor</h4>
                <p className="light-300">Vector illustration is from StorySet. Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
            </div>
            <div className="col-lg-6">
                <Image src="/images/banner-img-01.svg" alt='contact us header' width="456" height="415"/>
            </div>
        </div>
    </div>
</header>
  )
}
