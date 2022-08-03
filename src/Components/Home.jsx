import React from 'react';
import { Link } from 'react-router-dom';
import BannerThumb from '../images/banner-thumb.jpg';
import AboutThumb from '../images/about-thumb.jpg';
import Work1 from '../images/work-1.jpg';
import Work2 from '../images/work-2.jpg';
import Work3 from '../images/work-3.jpg';
import Work4 from '../images/work-4.jpg';
import Blog1 from '../images/blog-1.jpg';
import Blog2 from '../images/blog-2.jpg';
import Blog3 from '../images/blog-3.jpg';
import ContactThumb from '../images/contact-thumb.jpg';
import Carousel from './Carousel';

const Home = () => {

  return (
    <div>




{/* <!--====== BANNER PART START ======--> */}

<section className="banner-area mt-100 d-flex align-items-center">
    <div className="container position-relative">
        <div className="row">
            <div className="col-lg-6">
                <div className="banner-content">
                    <h1 className="title">I’m Michael</h1>
                    <span>Freelance Web & Mobile UI/UX Designer</span>
                    <Link className="main-btn" to="#">hire me</Link>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-behance"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="banner-thumb d-none d-md-block">
            <img className='img-fluid' src={BannerThumb} alt="banner" />
        </div>
    </div>

</section>

{/* <!--====== BANNER PART ENDS ======--> */}

{/* <!--====== ABOUT PART START ======--> */}

<section className="about-area pt-120 pb-160">
    <div className="container">
        <div className="row justify-content-center justify-content-lg-end align-items-center">
            <div className="col-lg-6 col-md-10 col-sm-11 order-2 order-lg-1">
                <div className="about-thumb mr-40">
                    <img className='img-fluid' src={AboutThumb} alt="about" />
                </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
                <div className="about-content">
                    <h3 className="title">About Me</h3>
                    <p>Far any name to and can go yet seven pattern. The client wanted big could part. Answering has turn of on feedback of evils and all careful like is wasn't to their wanting, wellfeigned to almost herself they him several that peacefully, advised up, I away, what's entrance in. What calculus far doubting neuter. </p>
                    <ul>
                        <li><Link className="main-btn" to="/portfolio">view works</Link></li>
                        <li><Link className="main-btn main-btn-2" to="#">download CV</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <!--====== ABOUT PART ENDS ======--> */}

{/* <!--====== SERVICES PART START ======--> */}

<section className="services-area gray-bg pt-150 pb-120">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title section-title-2">
                    <h3 className="title">Services</h3>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <div className="single-sevices bg-white">
                    <i className="flaticon-research"></i>
                    <Link to="/" id="services-list"><h4 className="title">UX Research</h4></Link>
                    <p>The can the her immediately the a buttons generally, long get is from lthey in has or far is cache.</p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="single-sevices bg-white">
                    <i className="flaticon-web-programming"></i>
                    <Link to="/" id="services-list"><h4 className="title">Web Development</h4></Link>
                    <p>The can the her immediately the a buttons generally, long get is from lthey in has or far is cache.</p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="single-sevices bg-white">
                    <i className="flaticon-seo-and-web"></i>
                    <Link to="/" id="services-list"><h4 className="title">Web Design</h4></Link>
                    <p>The can the her immediately the a buttons generally, long get is from lthey in has or far is cache.</p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="single-sevices bg-white">
                    <i className="flaticon-note"></i>
                    <Link to="/" id="services-list"><h4 className="title">App Design</h4></Link>
                    <p>The can the her immediately the a buttons generally, long get is from lthey in has or far is cache.</p>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <!--====== SERVICES PART ENDS ======--> */}


{/* <!--====== WORK PART START ======--> */}

<section className="work-area pt-150 pb-120">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-10">
                <div className="section-title">
                    <h3 className="title">Latest Works</h3>
                    <p>Far any name to and can go yet seven pattern. The client wanted big could part. Answering has turn of on feedback of evils and all careful like is wasn't to their wanting, </p>
                </div>
            </div>
        </div>
       <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-8">
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
            <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="single-work mt-30">
                    <img className='img-fluid' src={Work2} alt="work" />
                    <div className="work-overlay d-flex justify-content-center align-items-center">
                        <div className="work-content text-center">
                            <h5 className="title">project title</h5>
                            <span>client name</span>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-sm-6">
                        <div className="single-work mt-30">
                            <img className='img-fluid' src={Work3} alt="work" />
                            <div className="work-overlay d-flex justify-content-center align-items-center">
                                <div className="work-content text-center">
                                    <h5 className="title">project title</h5>
                                    <span>client name</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="single-work mt-30">
                            <img className='img-fluid' src={Work4} alt="work" />
                            <div className="work-overlay d-flex justify-content-center align-items-center">
                                <div className="work-content text-center">
                                    <h5 className="title">project title</h5>
                                    <span>client name</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</section>

{/* <!--====== WORK PART ENDS ======--> */}

{/* <!--====== PROJECT PART START ======--> */}


<section className="project-area pt-150 pb-120" id='project-area'>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-10">
                <div className="section-title">
                    <h3 className="title">have any project on mind</h3>
                    <p>Far any name to and can go yet seven pattern. The client wanted big could part. Answering has turn of on feedback of evils and all careful like is wasn't to their wanting, </p>
                    <Link className="main-btn mt-25" to="/contact">contact me</Link>
                </div>
            </div>
        </div>
    </div>
</section>


{/* <!--====== PROJECT PART ENDS ======--> */}

{/* <!--====== CLIENT PART START ======--> */}

<Carousel />

    {/* <!--====== CLIENT PART ENDS ======--> */}



{/* <!--====== blog PART START ======--> */}

<section className="blog-area gray-bg pt-150 pb-115">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-10">
                <div className="section-title">
                    <h3 className="title">our latest blog</h3>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="single-blog mt-30">
                    <div className="blog-thumb">
                        <img className='img-fluid' src={Blog1} alt="blog" />
                        <div className="blog-overlay">
                            <Link to="/"><i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="blog-content">
                        <span>uI/UX design</span>
                        <ul>
                            <li>April 14, 2018</li>
                            <li>2 Comment</li>
                        </ul>
                        <Link to="/" id='innovative-text'>
                            <h4 className="title">Look Up At The Innovative Ways Team Work</h4>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="single-blog mt-30">
                    <div className="blog-thumb">
                        <img className='img-fluid' src={Blog2} alt="blog" />
                        <div className="blog-overlay">
                            <Link to="/"><i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="blog-content">
                        <span>uI/UX design</span>
                        <ul>
                            <li>April 14, 2018</li>
                            <li>2 Comment</li>
                        </ul>
                        <Link to="/" id='innovative-text'>
                            <h4 className="title">Look Up At The Innovative Ways Team Work</h4>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="single-blog mt-30">
                    <div className="blog-thumb">
                        <img className='img-fluid' src={Blog3} alt="blog" />
                        <div className="blog-overlay">
                            <Link to="/"><i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="blog-content">
                        <span>uI/UX design</span>
                        <ul>
                            <li>April 14, 2018</li>
                            <li>2 Comment</li>
                        </ul>
                        <Link to="/" id='innovative-text'>
                            <h4 className="title">Look Up At The Innovative Ways Team Work</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <!--====== blog PART ENDS ======--> */}

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



    </div>
  )
}

export default Home