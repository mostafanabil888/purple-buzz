import React from 'react'
import styles from '../styles/CopyRight.module.scss'
export default function CopyRight() {
  return (
    <div className={`py-4  ${styles.copyright}`}>
      <div className='container d-md-flex align-items-center flex-wrap text-center justify-content-between'>
      <h6>© Copyright 2022 Mostafa Nabil. All Rights Reserved.</h6>
      <h6>Designed by Purple Buzz Company</h6>
      </div>
    </div>
  )
}
// end copy right section

