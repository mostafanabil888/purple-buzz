import React from 'react'
import styles from '../styles/OurPartner.module.scss'
import {FaBuilding,FaCheck,FaBolt,FaSpa} from "react-icons/fa"
export default function OurPartner() {
  return (
    <section className={styles.ourpartner}>
        <div className="container">
            <h2>OurPartner</h2>
            <div className="row">
                <div className="col-md-6 col-lg-3 p-3 col-12">
                    <div className={styles.box}>
                        <FaBuilding className={styles.icon} />
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 p-3 col-12">
                    <div className={styles.box}>
                        <FaCheck className={styles.icon} />
                    </div>
                </div>
                
                <div className="col-md-6 col-lg-3 p-3 col-12">
                    <div className={styles.box}>
                        <FaBolt className={styles.icon} />
                    </div>
                </div>
                
                <div className="col-md-6 col-lg-3 p-3 col-12">
                    <div className={styles.box}>
                        <FaSpa className={styles.icon} />
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}
