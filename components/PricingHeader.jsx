import Link from 'next/link';
import React, {  useState } from 'react'
import { FaBoxOpen} from 'react-icons/fa'
import styles from '../styles/PricingHeader.module.scss'
export default function PricingHeader( {price} ) {
  const [data] = useState(price);
  return (
    <header className={styles.header}>
        <div className="container py-5">
           <div className="text-center">
           <h2>Pricing</h2>
            <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut facilisis.</p>
           </div>
            <div className="row align-items-center justify-content-center">
            {
                data.map(item => {
                  return (
                    <div className='col-md-4 col-12 text-center my-4' key={item.id}>
                          <div className='border shadow-sm  rounded'>
                            <div className='text-center my-3'>
                            <FaBoxOpen className='text-primary display-6 mt-5 mb-3' /> 
                            <h5>{item.title}</h5>
                            <span>$ {item.price}</span>
                            </div>
                            <ul className='my-4 p-0'>
                              <li>{item.user}</li>
                              <li>{item.space}</li>
                              <li>{item.Features}</li>
                              <li>{item.otherfetures}</li>
                            </ul>
                            <div className="text-center my-5">
                            <Link className={styles.btn} href='/contact' >get now</Link>
                            </div>
                          </div>
                    </div>
                  )
                  })
                }
            </div>
        </div>
    </header>
  )
}
