import React from 'react';
import { Link } from 'react-router-dom';
import Blog1 from '../images/blog-1.jpg';
import Blog2 from '../images/blog-2.jpg';
import Blog3 from '../images/blog-3.jpg';
import Blog4 from '../images/blog-4.jpg';
import Blog5 from '../images/blog-5.jpg';
import Blog6 from '../images/blog-6.jpg';

const Blog = () => {
  return (
    <div>
          {/* <!--====== PAGE TITLE PART START ======--> */}

<section className="page-title-area mt-100 d-flex align-items-center">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-5">
                <div className="page-title-item text-center">
                    <h4 className="title" id='title'>blog</h4>
                    <Link to="/" id='back-to-home'>back to home page</Link>

                </div>
            </div>
        </div>
    </div>
</section>

{/* <!--====== PAGE TITLE PART ENDS ======--> */}

{/* <!--====== blog PART START ======--> */}
    
    <section className="blog-area blog-page gray-bg pt-150 pb-115">
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
                                <a href="/"><i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="blog-content">
                            <span>uI/UX design</span>
                            <ul>
                                <li>April 14, 2018</li>
                                <li>2 Comment</li>
                            </ul>
                            <a to="/">
                                <h4 className="title" id='look-up-text'>Look Up At The Innovative  Ways Team Work</h4>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="single-blog mt-30">
                        <div className="blog-thumb">
                            <img className='img-fluid' src={Blog2} alt="blog" />
                            <div className="blog-overlay">
                                <a href="/"><i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="blog-content">
                            <span>uI/UX design</span>
                            <ul>
                                <li>April 14, 2018</li>
                                <li>2 Comment</li>
                            </ul>
                            <a to="/">
                                <h4 className="title" id='look-up-text'>Look Up At The Innovative  Ways Team Work</h4>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="single-blog mt-30">
                        <div className="blog-thumb">
                            <img className='img-fluid' src={Blog3} alt="blog" />
                            <div className="blog-overlay">
                                <a to="/"><i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="blog-content">
                            <span>uI/UX design</span>
                            <ul>
                                <li>April 14, 2018</li>
                                <li>2 Comment</li>
                            </ul>
                            <a to="/">
                                <h4 className="title" id='look-up-text'>Look Up At The Innovative  Ways Team Work</h4>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="single-blog mt-30">
                        <div className="blog-thumb">
                            <img className='img-fluid' src={Blog4} alt="blog" />
                            <div className="blog-overlay">
                                <a><i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="blog-content">
                            <span>uI/UX design</span>
                            <ul>
                                <li>April 14, 2018</li>
                                <li>2 Comment</li>
                            </ul>
                            <a to="/">
                                <h4 className="title" id='look-up-text'>Look Up At The Innovative  Ways Team Work</h4>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="single-blog mt-30">
                        <div className="blog-thumb">
                            <img className='img-fluid' src={Blog5} alt="blog" />
                            <div className="blog-overlay">
                                <a><i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="blog-content">
                            <span>uI/UX design</span>
                            <ul>
                                <li>April 14, 2018</li>
                                <li>2 Comment</li>
                            </ul>
                            <a to="/">
                                <h4 className="title" id='look-up-text'>Look Up At The Innovative  Ways Team Work</h4>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="single-blog mt-30">
                        <div className="blog-thumb">
                            <img className='img-fluid' src={Blog6} alt="blog" />
                            <div className="blog-overlay">
                                <a><i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="blog-content">
                            <span>uI/UX design</span>
                            <ul>
                                <li>April 14, 2018</li>
                                <li>2 Comment</li>
                            </ul>
                            <a to="/">
                                <h4 className="title" id='look-up-text'>Look Up At The Innovative  Ways Team Work</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!--====== blog PART ENDS ======--> */}
    </div>
  )
}

export default Blog