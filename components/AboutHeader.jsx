import React from 'react'
import styles from '../styles/AboutHeader.module.scss'
import Image from 'next/image'
export default function AboutHeader() {
    return (
        <section className={`bg-light w-100 ${styles.aboutheader}`}>
            <div className="container">
                <div className="row  align-items-center py-5">
                    <div className="col-lg-6 text-start">
                        <h1 className="py-5">About Us</h1>
                        <p className="light-300">
                            Vector illustration credit goes to  website. Purple Buzz is provided by TemplateMo. Lorem ipsum dolor sit amet, consectetur.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <Image src="/images/banner-img-02.svg" alt='about us header' width="456" height="415"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
