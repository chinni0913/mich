import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png'

const Header = () => {
  return (
  <>
  {/* <!--====== HEADER AREA PART START ======--> */}

<header className="header-area">
    <div className="navigation ">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg">
                        <Link to='/' className="navbar-brand">
                            <img className='img-fluid' src={Logo} alt="Logo" />
                        </Link> 

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarFive" aria-controls="navbarFive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="toggler-icon"></span>
                            <span className="toggler-icon"></span>
                            <span className="toggler-icon"></span>
                        </button> 
                        <div className="collapse navbar-collapse sub-menu-bar" id="navbarFive">
                        
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                              <Link className="page-scroll" to="/">Home</Link>
                            </li>
                                {/* <li className="nav-item active"><a className="page-scroll" href="index.html">Home +</a>
                                    <ul className="sub-menu">
                                        <li><a href="index.html">Home 1</a></li>
                                        <li><a href="index-2.html">Home 2</a></li>
                                        <li><a href="index-3.html">Home 3</a></li>
                                    </ul>
                                </li> */}
                                <li className="nav-item">
                                  <Link to='/about' className="page-scroll">About</Link>
                                </li>
                                <li className="nav-item">
                                  <Link className="page-scroll" to="/service">Services</Link>
                                </li>
                                <li className="nav-item">
                                  <Link className="page-scroll" to="/portfolio">Portfolio</Link>
                                </li>
                                <li className="nav-item">
                                  <Link className="page-scroll" to="/blog">blog</Link>
                                </li>
                                <li className="nav-item">
                                  <Link className="page-scroll" to="/contact">contact</Link>
                                </li>
                            </ul>
                        </div>
                    </nav> 
                </div>
            </div> 
        </div> 
    </div>
</header>

{/* <!--====== HEADER AREA PART ENDS ======--> */}
  </>
  );
};
export default Header;