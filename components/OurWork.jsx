import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/OurWork.module.scss'
export default function OurWork({ workitems }) {
    const [data, setdata] = useState(workitems);
    const filterresult = (item) => {
        const result = workitems.filter((curdata) => {
            return curdata.catogery === item;
        });
        setdata(result)
    }
    return (
        <section className={styles.ourwork}>
            <div className="container">
                <div className={`d-flex align-items-center justify-content-center my-5 ${styles.worksbtnsbox}`}>
                    <button className={styles.btn} onClick={() => setdata(workitems)}>all</button>
                    <button className={styles.btn} onClick={() => filterresult('Business')}>Business</button>
                    <button className={styles.btn} onClick={() => filterresult('Marketing')}>Marketing</button>
                    <button className={styles.btn} onClick={() => filterresult("Social Media")}>Social Media</button>
                    <button className={styles.btn} onClick={() => filterresult("graphic")}>Graphic</button>
                </div>
                <div className={styles.workcard}>
                    <div className="row">
                        {
                            data.map(item => {
                                return (
                                    <div className='col-md-6 col-lg-4 col-12 p-3' key={item.id}>
                                        <div>
                                            <div className={styles.card}>
                                                <div>
                                                    <Image src={item.src} alt={item.title} width='800' height='800' title={item.title} />
                                                </div>
                                                <div className={styles.imgdetails}>
                                                    <span>{item.title}</span>
                                                    <p>{item.description}</p>
                                                    <Link href='/pricing'>Read more</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
