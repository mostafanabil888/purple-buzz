import React from 'react'
import Link from 'next/link'
import { FaBox } from 'react-icons/fa';
import styles from '../styles/ViewOurWork.module.scss'
export default function ViewOurWork() {
  return (
    <section className={`py-4 my-3 ${styles.viewourwork}`}>
        <div className='container'>
            <div className="row justify-content-between align-items-center text-center">
                <div className="col-md-4 col-12 my-4">
                    <FaBox className={styles.icon} />
                </div>
                <div className="col-md-4 col-12 my-4">
                        <h4>Great transformations successful</h4>
                        <p>Quis ipsum suspendisse ultrices gravida.</p>
                </div>
                <div className="col-md-4 col-12 my-4">
                    <Link href='/work'>ViewOurWork</Link>
                </div>
            </div>
        </div>
    </section>
  )
}
