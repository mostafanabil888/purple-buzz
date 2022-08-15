import styles from '../styles/Services.module.scss'
import React, { useState } from "react";
import { FaGift } from 'react-icons/fa';
import Image from 'next/image';
export default function Services({ servicesitems }) {
  const [data, setdata] = useState(servicesitems);
  const filterresult = (item) => {
    const result = servicesitems.filter((curdata) => {
      return curdata.catogery === item;
    });
    setdata(result)
  }
  return (
    <section className={`py-5 ${styles.services}`}>
      <h2>Services</h2>
      <div className={`d-flex container ${styles.servicesheading}`}>
        <div className={styles.iconbox}>
          <FaGift />
        </div>
        <div className={styles.contentbox}>
          <h3>Make Success for future</h3>
          <p>You are free to use this template for your commercial or business websites. You are not allowed to re-distribute this template ZIP file on any template collection websites.
            It is too easy to illegally copy and repost this template.</p>
        </div>
      </div>
      <div className={`d-flex align-items-center justify-content-center my-5 ${styles.servicesbtnsbox}`}>
        <button className={styles.btn} onClick={() => setdata(servicesitems)}>all</button>
        <button className={styles.btn} onClick={() => filterresult('branding')}>branding</button>
        <button className={styles.btn} onClick={() => filterresult('ui/ux')}>ui/ux</button>
        <button className={styles.btn} onClick={() => filterresult("graphic")}>graphic</button>
      </div>
      <div className={styles.servicescard}>
        <div className='container'>
          <div className='row'>
            {
              data.map(item => {
                return (
                  <div className='col-md-4 col-lg-3 col-12 p-3' key={item.id}>
                    <div>
                    <div className={styles.card}>
                      <div className={styles.overlay}></div>
                      <div>
                        <Image src={item.src} width='800' height='800' alt={item.title} />
                      </div>
                      <div className={styles.imgdetails}>
                        <span>{item.title}</span>
                        <p>{item.description}</p>
                      </div>
                    </div>
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
