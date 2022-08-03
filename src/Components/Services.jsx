import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from './Carousel';

const Services = () => {
  return (
    <div>
          {/* <!--====== PAGE TITLE PART START ======--> */}

<section className="page-title-area mt-100 d-flex align-items-center">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-5">
                <div className="page-title-item text-center">
                    <h4 className="title" id='title'>Services</h4>
                    <Link to="/" id='back-to-home'>back to home page</Link>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <!--====== PAGE TITLE PART ENDS ======--> */}

{/* <!--====== SERVICES PART START ======--> */}

<section className="services-area gray-bg pt-150 pb-120">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title section-title-2">
                    <h3 className="title">my all Services</h3>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <div className="single-sevices bg-white">
                    <i className="flaticon-research"></i>
                    <Link to="/" id='services-items'><h4 className="title">UX Research</h4></Link>
                    <p>The can the her immediately the a buttons generally, long get is from lthey in has or far is cache.</p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="single-sevices bg-white">
                    <i className="flaticon-web-programming"></i>
                    <Link to="/" id='services-items'><h4 className="title">Web Development</h4></Link>
                    <p>The can the her immediately the a buttons generally, long get is from lthey in has or far is cache.</p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="single-sevices bg-white">
                    <i className="flaticon-seo-and-web"></i>
                    <Link to="/" id='services-items'><h4 className="title">Web Design</h4></Link>
                    <p>The can the her immediately the a buttons generally, long get is from lthey in has or far is cache.</p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="single-sevices bg-white">
                    <i className="flaticon-note"></i>
                    <Link to="/" id='services-items'><h4 className="title">App Design</h4></Link>
                    <p>The can the her immediately the a buttons generally, long get is from lthey in has or far is cache.</p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="single-sevices bg-white">
                    <i className="flaticon-support"></i>
                    <Link to="/" id='services-items'><h4 className="title">24/7 support</h4></Link>
                    <p>The can the her immediately the a buttons generally, long get is from lthey in has or far is cache.</p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="single-sevices bg-white">
                    <i className="flaticon-commerce-and-shopping"></i>
                    <Link to="/" id='services-items'><h4 className="title">graphic design</h4></Link>
                    <p>The can the her immediately the a buttons generally, long get is from lthey in has or far is cache.</p>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <!--====== SERVICES PART ENDS ======--> */}

{/* <!--====== CLIENT PART START ======--> */}

<Carousel />


{/* <!--====== CLIENT PART ENDS ======--> */}


    </div>
  )
}

export default Services