import React, { useState } from 'react'
import  Image from 'next/image'
import {FaBoxOpen} from 'react-icons/fa'
export default function Pricing({price}) {
    const [data] = useState(price)
    console.log(price);
  return (
    <section>
        <div className="container py-5">
            <div className="text-center my-5">
                <h2>Pricing</h2>
                <p>Vector illustration from StorySet. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut facilisis.</p>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 col-12 row justify-content-center align-items-center">
                    <Image src='/images/pricing.svg' alt="pricing" height='456' width='456' />
                </div>
                <div className="col-md-6 col-12">
                {
                data.map(item => {
                  return (
                        <div className='p-4 col-12 shadow-sm my-3 d-flex flex-wrap justify-content-between align-items-center text-center' key={item.id}>
                            <div className='text-primary col-md-4 col-12 display-6'>
                                <FaBoxOpen />
                            </div>
                            <div className="text-center col-md-4 col-12">
                                <h2>{item.title}</h2>
                                <p>{item.Features}</p>
                            </div>
                            <div className='my-3 col-md-4 col-12'>
                                <span className='bg-primary py-2 px-4 border-5 rounded  text-light'>$ {item.price}</span>
                            </div>
                        </div>
                  )
                  })
                }
                </div>
            </div>
        </div>
    </section>
  )
}
