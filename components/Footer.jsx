import React from 'react'
import Link from 'next/Link'
import { FaFacebook,FaLinkedin,FaInstagram } from 'react-icons/fa';
import { FaWhatsapp,FaPhone,FaVoicemail,FaEnvelope} from 'react-icons/fa';
import styles from '../styles/Footer.module.scss'
 function Footer() {
  return (
    <div className={`p-5 ${styles.footer}`}>
      <div className='container'>
       <div className='row'>
       <div className={`col-12 col-md-6 col-lg-3 ${styles.footercontent}`}>
            <h2>Purple Buzz</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
            <div className="d-flex">
                <FaFacebook className={styles.flexicons} />
                <FaWhatsapp className={styles.flexicons} />
                <FaVoicemail className={styles.flexicons} />
                <FaLinkedin className={styles.flexicons}/>
                <FaInstagram className={styles.flexicons}/>
            </div>
        </div>
        <div className={`col-12 col-md-6 col-lg-3 ${styles.footercontent}`}>
           <h2>Our Company</h2>
            <li><Link  href="/" >Home</Link></li>
            <li><Link  href="/about">About Us</Link></li>
            <li><Link  href="/work" >Work</Link></li>
            <li><Link  href="/price" >Price</Link></li>
            <li><Link  href="/contact" >Contact</Link></li>             
        </div>
        <div className={`col-12 col-md-6 col-lg-3 ${styles.footercontent}`}>
        <h2>Our Works</h2>
          <li>Branding</li>
          <li>Business</li>
          <li>Marketing</li>
          <li>Social Media</li>
          <li>Digital Solution</li>
          <li>Graphic</li>
        </div>
        <div className={`col-12 col-md-6 col-lg-3 ${styles.footercontent}`}>
            <h2>Our Works</h2>
              <li><FaPhone className={styles.icons}/>010-020-0340</li>
              <li><FaEnvelope className={styles.icons} />info@company.com</li>
        </div>
       </div>
      </div>
    </div>
  )
}
export default Footer;

