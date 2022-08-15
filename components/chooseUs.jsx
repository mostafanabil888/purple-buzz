import React from 'react'
import Image from "next/image"
export default function ChooseUs() {
    return (
        <section className="why-us banner-bg bg-light">
            <div className="container my-4">
                <div className="row">
                    <div className="banner-img col-lg-5">
                        <Image  src="/images/work.svg" className="rounded img-fluid" alt="work" width="376" height="376" />
                    </div>
                    <div className="banner-content col-lg-7 align-self-end">
                        <h2 className="h2 pb-3">Why you choose us?</h2>
                        <p className="text-muted pb-5 light-300">
                            You are allowed to download and use this Purple Buzz template for your websites. You are websites.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
