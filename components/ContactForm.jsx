import React from 'react'
import { FaWpforms } from 'react-icons/fa'
export default function ContactForm() {
    return (
        <section className='p-5'>
            <div className="container">
                <h2 className='text-primary'>Create success campaign with us!</h2>
                <h4 className='py-4'>Elit, sed do eiusmod tempor</h4>
                <p>Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo<br />
                    viverra maecenas accumsan lacus vel facilisis. Laboris nisi ut aliquip ex ea commodo consequat. Duis<br />
                    aute irure dolor in reprehenderit in voluptate.</p>
                <div className="row py-5">
                    <div className="col-md-4 col-12">
                        <div className="d-flex align-items-center mb-3">
                            <div className='p-4  text-center border rounded text-primary'>
                                <FaWpforms className='display-5' />
                            </div>
                            <div className='px-4'>
                                <h5>Media Contact</h5>
                                <span className='d-block'>Mr. John Doe</span>
                                <span>010-020-0340</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <div className='p-4 text-center border rounded text-primary'>
                                <FaWpforms className='display-5' />
                            </div>
                            <div className='px-4'>
                                <h5>Media Contact</h5>
                                <span className='d-block'>Mr. John Doe</span>
                                <span>010-020-0340</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className='p-4  text-center border rounded text-primary'>
                                <FaWpforms className='display-5' />
                            </div>
                            <div className='px-4'>
                                <h5>Media Contact</h5>
                                <span className='d-block'>Mr. John Doe</span>
                                <span>010-020-0340</span>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-8 col-12">
                        <input type="text" className="col-md-6 col-12 my-3  p-3  border rounded light-300" name="inputcompany" placeholder="Name" />
                        <input type="text" className="col-md-6 col-12 my-3  p-3  border rounded light-300" name="inputcompany" placeholder="Email " />
                        <input type="text" className="col-md-6 col-12 my-3  p-3  border rounded light-300" name="inputcompany" placeholder="Phone " />
                        <input type="text" className="col-md-6 col-12 my-3  p-3  border rounded light-300" name="inputcompany" placeholder="Company Name" />
                        <input type="text" className="form-control my-3 form-control-lg light-300" id="floatingsubject" name="inputsubject" placeholder="Subject" />
                        <textarea className="form-control MY-3 light-300" rows="8" placeholder="Message" id="floatingtextarea"></textarea>
                        <label className='bg-primary p-3 text-capitalize text-light rounded  my-4'>send Message</label>
                    </div>
                </div>
            </div>
        </section>
    )
}
