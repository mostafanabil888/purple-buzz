import React from 'react'
import styles from '../styles/OurVission.module.scss'
import { FaBuilding,FaResolving,FaSpellCheck } from "react-icons/fa"
export default function OurVission() {
  return (
    <section className={`banner-bg bg-white py-5 ${styles.ourvission}`}>
        <div className="container my-4">
          <div className="row  text-center">
              <div className='col-md-4 col-12 pb-3'>
                  <div className={styles.box}>
                      <FaBuilding />
                  </div>
                  <h2>Our Vision</h2>
                  <p>Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse commodo viverra.</p>
              </div>
              <div className='col-md-4 col-12 pb-3'>
                  <div className={styles.box}>
                      <FaResolving />
                  </div>
                  <h2>Our Vision</h2>
                  <p>Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse commodo viverra.</p>
              </div>
              <div className='col-md-4 col-12 pb-3'>
                  <div className={styles.box}>
                      <FaSpellCheck />
                  </div>
                  <h2>Our Vision</h2>
                  <p>Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse commodo viverra.</p>
              </div>
          </div>     
        </div>
    </section>
  )
}
