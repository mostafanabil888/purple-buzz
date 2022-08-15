import React from 'react'
import styles from '../styles/MakePerfect.module.scss'
import ProgressBar from 'react-bootstrap/ProgressBar'
export default function MakePerfect() {
    return (
        <section className={`p-5 ${styles.makeperfect}`}>
            <div className="container">
            <h2>Creative & Make Perfect</h2>
                <div className="row align-items-center justify-content-center">
                    <div className='col-md-6 col-12 pb-3'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus.</p>
                    </div>
                    <div className='col-md-6 col-12'>
                        <div className='py-2'>
                            <div className='d-flex justify-content-between col-6'>
                                <h5>Development</h5>
                                <span>66%</span>
                            </div>
                            <ProgressBar  now={66} />
                        </div>
                        <div className='py-2'>
                            <div className='d-flex justify-content-between col-6'>
                                <h5>Marketing</h5>
                                <span>90%</span>
                            </div>
                            <ProgressBar now={90} />
                        </div>
                        <div className='py-2'>
                            <div className='d-flex justify-content-between col-6'>
                                <h5>Design</h5>
                                <span>74%</span>
                            </div>
                            <ProgressBar now={74} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
