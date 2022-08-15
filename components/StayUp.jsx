import React from 'react'
import styles from "../styles/StayUp.module.scss";
export default function StayUp() {
  return (
    <div className={`text-center bg-light ${styles.stayup}`}>
      <h2>Stay up to date with us</h2>
      <input type="email" name="email" Placeholder="Your Email"   />
      <button>Subscribe</button>
      <p>Lorem ipsum dolor sit amet, consctetur adipiscing elit, ed do eiusmod tempor incididunt labore et dolore magna aliqua.</p>
    </div>
  )
}
