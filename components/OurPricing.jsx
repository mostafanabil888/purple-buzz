import React, { useState } from 'react'
import Link from 'next/link'
import {FaBoxOpen} from'react-icons/fa'
import styles from '../styles/OurPricing.module.scss'
export default function OurPricing( {price} ) {
  const [data] = useState(price)
  return (
    <section className={styles.ourpricing}>
      <div className="container">
        <div className="text-center my-5">
          <h2 className='my-4'>Our Pricing</h2>
          <h6>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut facilisis.</h6>
        </div>
          <div className='col-12'>
          {
                data.map(item => {
                  return (
                    <div className={`shadow-sm my-3 d-md-flex flex-wrap justify-content-between align-items-center text-center ${styles.carditems}`} key={item.id}>
                        <div className={`col-md-3 text-center bg-primary text-light col-12 ${styles.boxicon}`}> 
                            <h5><FaBoxOpen className='display-6 mb-3'/></h5>
                            <span>{item.title}</span>
                        </div>
                        <div className={`col-md-6 col-12 ${styles.boxcontnet}`}>
                            <li>{item.user}</li>
                            <li>{item.space}</li>
                            <li>{item.Features}</li>
                        </div>
                        <div className={`col-md-3 col-12 text-center ${styles.boxprice}`}>
                            <span className='d-block'>$ {item.price}</span>
                            <Link href='/contact' className={styles.btn}>get start</Link>
                        </div>
                    </div>
                  )
                  })
                }
          </div>
      </div>
    </section>
  )
}
