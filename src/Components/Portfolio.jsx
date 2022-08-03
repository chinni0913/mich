import React from 'react';
import { Link } from 'react-router-dom';
import Work1 from '../images/work-1.jpg';
import Work2 from '../images/work-2.jpg';
import Work3 from '../images/work-3.jpg';
import Work4 from '../images/work-4.jpg';


const Portfolio = () => {
  return (
    <div>

          {/* <!--====== PAGE TITLE PART START ======--> */}

<section className="page-title-area mt-100 d-flex align-items-center">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-5">
                <div className="page-title-item text-center">
                    <h4 className="title" id='title'>Portfolio</h4>
                    <Link to="/" id='back-to-home'>back to home page</Link>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <!--====== PAGE TITLE PART ENDS ======--> */}

{/* <!--====== WORK PART START ======--> */}

<section className="work-area portfolio-page pt-150 pb-120">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-10">
                <div className="section-title">
                    <h3 className="title">Latest Works</h3>
                    <div className="project-menu d-flex justify-content-center mb-15 text-left text-lg-right">
                        <ul>
                            <li data-filter="*" className="active items">All</li>
                            <li data-filter=".cat-1" className="items">Branding Goals</li>
                            <li data-filter=".cat-2" className="items">Photography</li>
                            <li data-filter=".cat-3" className="items">True Perfection</li>
                            <li data-filter=".cat-4" className="items">Web Design</li>
                        </ul>

                    </div> 
                </div>
            </div>
        </div>
        <div className="row justify-content-center grid">
            <div className="col-lg-4 col-md-4 col-sm-6 cat-2">
                <div className="single-work mt-30">
                    <img className='img-fluid' src={Work1} alt="work" />
                    <div className="work-overlay d-flex justify-content-center align-items-center">
                        <div className="work-content text-center">
                            <h5 className="title">project title</h5>
                            <span>client name</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-6 cat-4 cat-2">
                <div className="single-work mt-30 cat-1 cat-3">
                    <img className='img-fluid' src={Work2} alt="work" />
                    <div className="work-overlay d-flex justify-content-center align-items-center">
                        <div className="work-content text-center">
                            <h5 className="title">project title</h5>
                            <span>client name</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-6 cat-3 cat-1 cat-4">
                <div className="single-work mt-30">
                    <img className='img-fluid' src={Work3} alt="work"/>
                    <div className="work-overlay d-flex justify-content-center align-items-center">
                        <div className="work-content text-center">
                            <h5 className="title">project title</h5>
                            <span>client name</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-6 cat-1 cat-4">
                <div className="single-work mt-30">
                    <img className='img-fluid' src={Work4} alt="work"/>
                    <div className="work-overlay d-flex justify-content-center align-items-center">
                        <div className="work-content text-center">
                            <h5 className="title">project title</h5>
                            <span>client name</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="portfolio-btn text-center mt-60">
                    <Link className="main-btn" to="#">view more work</Link>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!--====== WORK PART ENDS ======--> */}



    </div>
  )
}

export default Portfolio