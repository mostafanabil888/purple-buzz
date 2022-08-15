import React from 'react'
import styles from '../styles/Error.module.scss'
import Image from 'next/image'
import Link from 'next/link'
export default function Error() {
  return (
    <section className={styles.error}>
        <div className="row text-center align-items-center justify-content-center text-light h-100">
           <div>
           <h1 className='text-capitalize'>Error page back to home</h1>
            <Image src='/images/404.png' width='513' height='317' alt='404' />
            <div className={styles.btn}>
                <Link href='/'>home</Link>
            </div>
           </div>
        </div>     
    </section>
  )
}
