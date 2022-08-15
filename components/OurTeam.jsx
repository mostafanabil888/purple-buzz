import React, { useState } from 'react'
import styles from "../styles/OurTeam.module.scss"
import Image from 'next/image'
export default function OurTeam() {
    const [DataTeam] = useState([
        {
            "id": 1,
            "src": "images/team-01.jpg",
            "name": "John Doe",
            "postion": "Business Development"
        },
        {
            "id": 2,
            "src": "images/team-02.jpg",
            "name": "Jane Doe",
            "postion": "Media Development"
        },
        {
            "id": 3,
            "src": "images/team-03.jpg",
            "name": "Sam",
            "postion": "Developer"
        }
    ])
    return (
        <section className={`container py-5 ${styles.ourteam}`}>
            <div className="pt-5 pb-3 d-lg-flex align-items-center gx-5">
                <div className="col-lg-3">
                    <h2 className="h2 py-5 typo-space-line">Our Team</h2>
                    <p className="text-muted light-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="col-lg-9 row">
                    {
                        DataTeam.map((carditem) => {
                            return (
                                <div className="team-member col-md-4 col-12 text-center" key={carditem.id}>
                                    <Image className={`img-fluid rounded-circle p-4 ${styles.teammemberimg}`} src={`/${carditem.src}`} width='400' height='400' alt={carditem.name} />
                                    <ul className="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                                        <li>{carditem.name}</li>
                                        <li>{carditem.postion}</li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
}
