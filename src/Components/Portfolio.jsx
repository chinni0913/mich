import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Work1 from '../images/work-1.jpg';
import Work2 from '../images/work-2.jpg';
import Work3 from '../images/work-3.jpg';
import Work4 from '../images/work-4.jpg';
import 'animate.css';

const Portfolio = (props) => {
	

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

  return (
    <div>

{/*  */}

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

<div className="container pb-120" id='container'>

                <div class="row justify-content-center">
					<div class="col-lg-10">
						<div class="section-title">
							<h3 class="title">Latest Works</h3>
						</div>
					</div>
				</div>

            <div className="bloc-tabs">
            <button id='tab-1'
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          All
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Branding Goals 
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
            Photography
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          True Perfection
        </button>
        <button id='tab-2'
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Web Design
        </button>
            </div>

            <div className="content-tabs work-area" >

                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                   

                    <div class="row justify-content-center">
					<div class="col-lg-4 col-md-4 col-sm-6 cat-2 animate__animated animate__zoomIn">
						<div class="single-work mt-30">
							<img className='img-fluid' src={Work1} alt="work" />
							<div class="work-overlay d-flex justify-content-center align-items-center">
								<div class="work-content text-center">
									<h5 class="title">project title</h5>
									<span>client name</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-8 col-md-8 col-sm-6 cat-4 cat-2 animate__animated animate__zoomIn">
						<div class="single-work mt-30 cat-1 cat-3">
							<img className='img-fluid' src={Work2} alt="work" />
							<div class="work-overlay d-flex justify-content-center align-items-center">
								<div class="work-content text-center">
									<h5 class="title">project title</h5>
									<span>client name</span>
								</div>
							</div>
						</div>
					
					<div className="row">
                    <div class="col-md-6 col-lg-6 col-sm-6 cat-3 cat-1 cat-4 animate__animated animate__zoomIn">
						<div class="single-work mt-30">
							<img className='img-fluid' src={Work3} alt="work" />
							<div class="work-overlay d-flex justify-content-center align-items-center">
								<div class="work-content text-center">
									<h5 class="title">project title</h5>
									<span>client name</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6 col-lg-6 col-sm-6 cat-1 cat-4 animate__animated animate__zoomIn">
						<div class="single-work mt-30">
							<img className='img-fluid' src={Work4} alt="work" />
							<div class="work-overlay d-flex justify-content-center align-items-center">
								<div class="work-content text-center">
									<h5 class="title">project title</h5>
									<span>client name</span>
								</div>
							</div>
						</div>
					</div>
                    </div>
                    </div>
				</div>

                </div>

                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    
                    <div className="row">
                    <div class="col-md-4 col-lg-4 col-sm-6 cat-3 cat-1 cat-4 animate__animated animate__fadeInUp">
						<div class="single-work mt-30">
							<img className='img-fluid' src={Work3} alt="work" />
							<div class="work-overlay d-flex justify-content-center align-items-center">
								<div class="work-content text-center">
									<h5 class="title">project title</h5>
									<span>client name</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-lg-4 col-sm-6 cat-1 cat-4 animate__animated animate__fadeInRight">
						<div class="single-work mt-30">
							<img className='img-fluid' src={Work4} alt="work" />
							<div class="work-overlay d-flex justify-content-center align-items-center">
								<div class="work-content text-center">
									<h5 class="title">project title</h5>
									<span>client name</span>
								</div>
							</div>
						</div>
					</div>
                    </div> 
                </div>

                <div className={toggleState === 3 ? "content  active-content" : "content"}>
                    

                    <div className="row">
                    <div class="col-lg-4 col-md-4 col-sm-6 cat-2 animate__animated animate__zoomIn">
						<div class="single-work mt-30">
							<img className='img-fluid' src={Work1} alt="work" />
							<div class="work-overlay d-flex justify-content-center align-items-center">
								<div class="work-content text-center">
									<h5 class="title">project title</h5>
									<span>client name</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-8 col-md-8 col-sm-6 cat-4 cat-2 animate__animated animate__zoomIn">
						<div class="single-work mt-30 cat-1 cat-3">
							<img className='img-fluid' src={Work2} alt="work" />
							<div class="work-overlay d-flex justify-content-center align-items-center">
								<div class="work-content text-center">
									<h5 class="title">project title</h5>
									<span>client name</span>
								</div>
							</div>
						</div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 4 ? "content  active-content" : "content"}>
                   
                    <div className="row">
                    <div class="col-md-4 col-lg-4 col-sm-6 cat-3 cat-1 cat-4 animate__animated animate__fadeInUp">
						<div class="single-work mt-30">
							<img className='img-fluid' src={Work3} alt="work" />
							<div class="work-overlay d-flex justify-content-center align-items-center">
								<div class="work-content text-center">
									<h5 class="title">project title</h5>
									<span>client name</span>
								</div>
							</div>
						</div>
					</div>
                    </div>
                </div>

                <div className={toggleState === 5 ? "content  active-content" : "content"}>
                    
                    <div className="row">
                    <div class="col-lg-8 col-md-8 col-sm-6 cat-4 cat-2 animate__animated animate__zoomIn">
						<div class="single-work mt-30 cat-1 cat-3">
							<img className='img-fluid' src={Work2} alt="work" />
							<div class="work-overlay d-flex justify-content-center align-items-center">
								<div class="work-content text-center">
									<h5 class="title">project title</h5>
									<span>client name</span>
								</div>
							</div>
						</div>
                        </div>
					
                    <div className="row">
                    <div class="col-md-4 col-lg-4 col-sm-6 cat-3 cat-1 cat-4 animate__animated animate__fadeInUp">
						<div class="single-work mt-30">
							<img className='img-fluid' src={Work3} alt="work" />
							<div class="work-overlay d-flex justify-content-center align-items-center">
								<div class="work-content text-center">
									<h5 class="title">project title</h5>
									<span>client name</span>
								</div>
							</div>
						</div>
					</div>
                    </div>
					<div className="row">
                    <div class="col-md-4 col-lg-4 col-sm-6 cat-1 cat-4 animate__animated animate__fadeInRight">
						<div class="single-work mt-30">
							<img className='img-fluid' src={Work4} alt="work" />
							<div class="work-overlay d-flex justify-content-center align-items-center">
								<div class="work-content text-center">
									<h5 class="title">project title</h5>
									<span>client name</span>
								</div>
							</div>
						</div>
					</div>
                    </div>
                    </div>
                    
                </div>

            </div>

            <div class="row">
					<div class="col-lg-12">
						<div class="portfolio-btn text-center mt-60">
							<a class="main-btn" href="#">view more work</a>
						</div>
					</div>
				</div>

        </div>

    {/* <!--====== WORK PART ENDS ======--> */}



    </div>
  )
}

export default Portfolio;