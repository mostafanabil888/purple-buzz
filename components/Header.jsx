import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import styles from '../styles/Header.module.scss'
import Link from 'next/link'
export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container d-flex h-100 align-items-center justify-content-center">
        <Carousel className={`p-5 ${styles.curousel}`}>
          <Carousel.Item>
            <div className='p-5'>
              <div>
                <h2>HTML CSS Template with Bootstrap 5 Beta 1</h2>
                <p>You are not allowed to re-distribute this Purple Buzz HTML template as a downloadable ZIP file on any kind of Free CSS collection websites. This is strongly prohibited. Please contact TemplateMo for more information.</p>
                <div className={styles.btnbox}>
                <Link className={styles.btn} href='/contact'>get start</Link>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='p-5'>
              <div>
                <h2>Cupidatat non proident, sunt in culpa qui officia</h2>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                <div className={styles.btnbox}>
                <Link className={styles.btn} href='/contact'>get start</Link>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='p-5'>
              <div>
                <h2>Develop Strategies foryour business</h2>
                <p>Purple Buzz is a corporate HTML template with Bootstrap 5 Beta 1. This CSS template is 100% free to download provided by TemplateMo. Total 6 HTML pages included in this template. Icon fonts by Boxicons. Photos are from Unsplash and Icons 8.</p>
                <div className={styles.btnbox}>
                <Link href='/contact'>get start</Link>
                </div>
              </div>
            </div>
          </Carousel.Item>

        </Carousel>
      </div>
    </header>
  )
}
