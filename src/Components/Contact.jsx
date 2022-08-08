import React from 'react';
import { Link } from 'react-router-dom';
import ContactThumb from '../images/contact-thumb.jpg';

const Contact = (props) => {
  return (
    <div>

{/* <!--====== PAGE TITLE PART START ======--> */}

<section className="page-title-area mt-100 d-flex align-items-center">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-5">
                <div className="page-title-item text-center">
                    <h4 className="title" id='title'>contact me</h4>
                    <Link to="/" id='back-to-home'>back to home page</Link>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <!--====== PAGE TITLE PART ENDS ======--> */}

{/* <!--====== CONTACT PART START ======--> */}

<section className="contact-area pt-110 pb-165">
    <div className="container">
        <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-10 col-sm-11 order-2 order-lg-1">
                <div className="contact-thumb mr-40">
                    <img className='img-fluid' src={ContactThumb} alt="contact" />
                </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
                <div className="contact-form">
                    <h4 className="title">get in touch</h4>
                    <form action="#">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="input-box mt-30">
                                    <input type="text" placeholder="first name" />
                                </div>
                                <div className="input-box mt-30">
                                    <input type="email" placeholder="email address" />
                                </div>
                                <div className="input-box mt-30">
                                    <input type="text" placeholder="Subject" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="input-box mt-30">
                                    <textarea name="#" id="#" cols="30" rows="10" placeholder="message"></textarea>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="input-box mt-30">
                                    <button className="main-btn" type="submit">send message</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <!--====== CONTACT PART ENDS ======--> */}

{/* <!--====== CONTACT INFO PART START ======--> */}

<section className="contact-info-area mt-30 pb-120">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="section-title section-title-2">
                    <h3 className="title">if you need <br /> any work please contact me </h3>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4">
                <div className="contact-info-item d-flex align-items-center mt-35">
                    <div className="icon">
                        <i className="fa fa-mobile"></i>
                    </div>
                    <div className="contact-info-content">
                        <span>phone me</span>
                        <ul>
                            <li>+1230 456 789</li>
                            <li>+1203 654 987</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="contact-info-item d-flex align-items-center mt-35">
                    <div className="icon">
                        <i className="fa fa-paper-plane-o"></i>
                    </div>
                    <div className="contact-info-content">
                        <span>mail me</span>
                        <ul>
                            <li>micheah@gmail.com</li>
                            <li>Mic.info@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="contact-info-item d-flex align-items-center mt-35">
                    <div className="icon">
                        <i className="fa fa-map-marker"></i>
                    </div>
                    <div className="contact-info-content">
                        <span>my address</span>
                        <ul>
                            <li>123 Qwerty Avenue</li>
                            <li>road NYC, USA</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <!--====== CONTACT INFO PART ENDS ======--> */}

    </div>
  )
}

export default Contact