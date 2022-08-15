import React from 'react'
import styles from '../styles/WorkHeader.module.scss';
export default function HeaderWork() {
  return (
    <header className={`py-5 ${styles.header}`}>
    <div className="container text-light d-flex justify-content-center align-items-center py-5">
        <div className="col-lg-8 col-12 m-lg-auto text-center">
            <h1 className="display-3 pb-5 semi-bold-600">Our Work</h1>
            <h3 className="pb-2 regular-400">Elit, sed do eiusmod tempor incididunt</h3>
            <p className="pb-2 light-300">
                Vector illustration
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                commodo viverra maecenas accumsan lacus.
            </p>
            <button type="submit" className="btn rounded-pill btn-outline-light px-4 me-4 light-300">Learn More</button>
            <button type="submit" className="btn rounded-pill btn-secondary text-light px-4 light-300">Contact Us</button>
        </div>
    </div>
</header>
  )
}
