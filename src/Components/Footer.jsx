import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/logo.png'

const Footer = () => {
  return (
    <div>
            {/* <!--====== FOOTER PART START ======--> */}

<footer className="footer-area pt-120 pb-120">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12">
                <div className="footer-logo text-center pb-70">
                    <Link to="/"><img className='img-fluid' src={Logo} alt="logo" /></Link>
                </div>
                <div className="row align-items-center pl-50 pr-50">
                    <div className="col-lg-3">
                        <div className="footer-copyright text-center text-lg-left">
                            <p>©Mich. 2019. All rights reserved.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="footer-list text-center">
                            <ul>
                                <li><Link to="/" id='footer-list-items'>Home</Link></li>
                                <li><Link to="/about" id='footer-list-items'>About</Link></li>
                                <li><Link to="/service" id='footer-list-items'>Services</Link></li>
                                <li><Link to="/portfolio" id='footer-list-items'>Portfolio</Link></li>
                                <li><Link to="/blog" id='footer-list-items'>blog</Link></li>
                                <li><Link to="/contact" id='footer-list-items'>contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-social text-lg-right text-center">
                            <ul>
                                <li><Link to="#"><i className="fa fa-facebook-f"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-behance"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-dribbble"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>

{/* <!--====== FOOTER PART ENDS ======--> */}
    </div>
  )
}

export default Footer