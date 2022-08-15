import React from 'react'
import Link from 'next/link'
import { FaBuilding } from 'react-icons/fa'
import styles from "../styles/Navbar.module.scss"
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" href="/">
              <a className={`text-decoration-none d-flex align-items-center text-captilize ${styles.navbarbrand}`}>
                <FaBuilding className={styles.icon} />
                <h1>Purple</h1>
                <span>Buzz</span>
              </a>
            </Link>
            <button className="navbar-toggler border-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${styles.navbarcollapse}`} id="navbarNavDropdown">
              <ul className={`navbar-nav mt-2 mt-lg-0 ${styles.navbarnav}`}>
                  <Link className="nav-link"  href="/">home</Link>          
                  <Link className="nav-link"  href="/about">about</Link>        
                  <Link className="nav-link"  href="/contact">contact</Link>   
                  <Link className="nav-link"  href="/work">work</Link>   
                  <Link className="nav-link"  href="/pricing">pricing</Link>   
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
