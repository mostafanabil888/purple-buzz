import React from 'react'
import Image from 'next/image'
export default function FeatureWork() {
    return (
        <section className="bg-light py-5">
            <div className="feature-work container my-4">
                <div className="row d-flex d-flex align-items-center">
                    <div className="col-lg-5">
                        <h3 className="feature-work-title h4 text-muted light-300">Featured Work</h3>
                        <h1 className="feature-work-heading h2 py-3 semi-bold-600">Transform with us</h1>
                        <p className="feature-work-body text-muted light-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                            ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                        </p>
                        <p className="feature-work-footer text-muted light-300">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className="col-lg-6 offset-lg-1 align-left">
                        <div className="row">
                            <Image className="img-fluid" width='216' alt='feature-work' height='216' src="/images/feature-work-1.jpg" />
                            <Image className="img-fluid" width='216' alt='feature-work' height='216' src="/images/feature-work-2.jpg" />
                        </div>
                        <div className="row pt-4">

                            <Image className="img-fluid" width='216' height='216' alt='feature-work' src="/images/feature-work-3.jpg" />
                            <Image className="img-fluid" width='216' height='216' alt='feature-work' src="/images/feature-work-4.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
