import React, { useState } from 'react'
import Image from 'next/image';
import styles from "../styles/RecentWork.module.scss"
export default function RecentWorks({recentworks}) {
    const [data] = useState(recentworks)
  return (
    <div className={`py-5 ${styles.recentworks}`}>
        <div className="container">
            <h2 className='text-center my-5'>RecentWorks</h2>
            <div className="row align-items-center justify-content-center">
            {
                data.map(item => {
                  return (
                    <div className='col-md-4 col-12 p-4' key={item.id}>
                        <div className={styles.workscard}>
                        <div className={styles.overlay}></div>
                        <Image src={item.src} alt={item.title} width="800" height="800" />
                        <div className={styles.carddetails}>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div> 
                        </div>
                        
                    </div>
                  )
                  })
                }
            </div>
        </div>
    </div>
  )
}
