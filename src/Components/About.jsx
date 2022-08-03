import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import AboutThumb from '../images/about-thumb.jpg';
import Carousel from './Carousel';


const About = () => {

    const [progressOne, setProgressOne] = useState(0);
    const [progressTwo, setProgressTwo] = useState(0);
    const [progressThree, setProgressThree] = useState(0);
    const [progressFour, setProgressFour] = useState(0);


    useEffect(() => {
      const timer = setInterval(() => {
        setProgressOne((oldProgress) => {
          if (100 === oldProgress);
          return Math.min(oldProgress + Math.random() * 10, 95);
        });

        setProgressTwo((oldProgress) => {
          if (100 === oldProgress);
          return Math.min(oldProgress + Math.random() * 10, 90);
        });

        setProgressThree((oldProgress) => {
          if (100 === oldProgress);
          return Math.min(oldProgress + Math.random() * 10, 75);
        });

        setProgressFour((oldProgress) => {
          if (100 === oldProgress);
          return Math.min(oldProgress + Math.random() * 10, 85);
        });

      }, 1599);
   
      return () => {
        clearInterval(timer);
      };
    }, []);

  return (
    <div>
        


          

{/* <!--====== PAGE TITLE PART START ======--> */}

<section className="page-title-area  d-flex align-items-center">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-5">
                <div className="page-title-item text-center">
                    <h4 className="title" id='title'>about us</h4>
                    <Link to="/" id='back-to-home'>back to home page</Link>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <!--====== PAGE TITLE PART ENDS ======--> */}

{/* <!--====== ABOUT PART START ======--> */}

<section className="about-area pt-120 pb-160">
    <div className="container">
        <div className="row justify-content-center justify-content-lg-end align-items-center">
            <div className="col-lg-6 col-md-10 col-sm-11 order-2 order-lg-1">
                <div className="about-thumb mr-40">
                    <img className='img-fluid' src={AboutThumb} alt="" />
                </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
                <div className="about-content">
                    <h3 className="title">hey! <br /> let’s introduce about <br /> my self</h3>
                    <div className="about-list d-flex">
                        <ul className="item-1">
                            <li>name</li>
                            <li>date of birth</li>
                            <li>phone</li>
                            <li>email</li>
                            <li>website</li>
                            <li>address</li>
                        </ul>
                        <ul className="item-2">
                            <li><span>:</span> michael jhone</li>
                            <li><span>:</span> 26 june 1995</li>
                            <li><span>:</span> +01236547884</li>
                            <li><span>:</span> youremail@email.com</li>
                            <li><span>:</span> www.yourweb.com</li>
                            <li><span>:</span> 951 angus road new york, ny 10036</li>
                        </ul>
                    </div>
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

{/* <!--====== SKILLS PART START ======--> */}


<section className="skills-area pt-150 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                  <div className="section-title section-title-2">
                      <h3 className="title">my professional work skills</h3>
                  </div>
              </div>
            </div>

            <div className="row">

              <div className="col-lg-6 col-md-6">
                <div className="skills-items">
                    <h5 className="title" style={{fontWeight:'bold'}}>technical skills</h5>
                      <div className="skills">
                          <div className="skill-item">
                                <div className="skill-header">
                                    <h3 className="skill-title">graphic design</h3>
                                    <div className="skill-percentage">
                                        <div className="count-box"></div>
                                    </div>
                                </div>
                                <div className="skill-bar">
                                        <ProgressBar id='progressbar'
                                            now={progressOne} 
                                            visuallyHidden  
                                            variant="color" />
                                </div>
                            </div>
                            <div className="skill-item">
                            <div className="skill-header">
                                <h3 className="skill-title">UI/UX design</h3>
                                <div className="skill-percentage">
                                    <div className="count-box"></div>
                                </div>
                            </div>
                            <div className="skill-bar">
                                        <ProgressBar 
                                            now={progressTwo} 
                                            visuallyHidden  
                                            variant="color"
                                            id='progressbar'/>
                                </div>
                        </div>

                        <div className="skill-item">
                            <div className="skill-header">
                                <h3 className="skill-title">HTML/CSS</h3>
                                <div className="skill-percentage">
                                    <div className="count-box"></div>
                                </div>
                            </div>
                            <div className="skill-bar">
                                        <ProgressBar 
                                            now={progressThree}
                                            visuallyHidden  
                                            variant="color" 
                                            id='progressbar'/>
                                </div>
                        </div>

                        <div className="skill-item">
                            <div className="skill-header">
                                <h3 className="skill-title">wordpress</h3>
                                <div className="skill-percentage">
                                    <div className="count-box"></div>
                                </div>
                            </div>
                            <div className="skill-bar">
                                        <ProgressBar 
                                            now={progressFour} 
                                            // label={`${wp}%`} 
                                            visuallyHidden  
                                            variant="color" 
                                            id='progressbar'/>
                                </div>
                        </div>
                      </div>
                </div>

                

              </div>

              <div className="col-lg-6 col-md-6">
                <div className="skills-items">
                    <h5 className="title" style={{fontWeight:'bold'}}>software skills</h5>
                      <div className="skills">
                          <div className="skill-item">
                                <div className="skill-header">
                                    <h3 className="skill-title">Photoshop</h3>
                                    <div className="skill-percentage">
                                        <div className="count-box"></div>
                                    </div>
                                </div>
                                <div className="skill-bar">
                                        <ProgressBar id='progressbar'
                                            now={progressOne}
                                            visuallyHidden  
                                            variant="color" />
                                </div>
                            </div>
                            <div className="skill-item">
                            <div className="skill-header">
                                <h3 className="skill-title">Illustrator</h3>
                                <div className="skill-percentage">
                                    <div className="count-box"></div>
                                </div>
                            </div>
                            <div className="skill-bar">
                                        <ProgressBar 
                                            now={progressTwo}
                                            visuallyHidden  
                                            variant="color"
                                            id='progressbar'/>
                                </div>
                        </div>

                        <div className="skill-item">
                            <div className="skill-header">
                                <h3 className="skill-title">Adobe Xd</h3>
                                <div className="skill-percentage">
                                    <div className="count-box"></div>
                                </div>
                            </div>
                            <div className="skill-bar">
                                        <ProgressBar 
                                            now={progressThree}
                                            visuallyHidden  
                                            variant="color" 
                                            id='progressbar'/>
                                </div>
                        </div>

                        <div className="skill-item">
                            <div className="skill-header">
                                <h3 className="skill-title">Figma</h3>
                                <div className="skill-percentage">
                                    <div className="count-box"></div>
                                </div>
                            </div>
                            <div className="skill-bar">
                                        <ProgressBar 
                                            now={progressFour}
                                            visuallyHidden  
                                            variant="color" 
                                            id='progressbar'/>
                                </div>
                        </div>
                      </div>
                </div>
              </div>

            </div>

          </div>

      </section>

{/* <!--====== SKILLS PART ENDS ======--> */}

{/* <!--====== EXPERIENCES PART START ======--> */}

<section className="experiences-area pt-150 pb-120">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-10">
                <div className="section-title">
                    <h3 className="title">Work Experiences</h3>
                    <p>Far any name to and can go yet seven pattern. The client wanted big could part. Answering has turn of on feedback of evils and all careful like is wasn't to their wanting, </p>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-4 col-md-7 col-sm-9">
                <div className="single-experiences mt-30">
                    <span>june 2012 - 2016</span>
                    <h5 className="title">UI/UX designer</h5>
                    <span>adobe inc.</span>
                    <p>To had throughout his of boss werd your coast in lane. Encourag it a  out concept hazardousd.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-7 col-sm-9">
                <div className="single-experiences mt-30 active">
                    <span>june 2012 - 2016</span>
                    <h5 className="title">product designer</h5>
                    <span>adobe inc.</span>
                    <p>To had throughout his of boss werd your coast in lane. Encourag it a  out concept hazardousd.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-7 col-sm-9">
                <div className="single-experiences mt-30">
                    <span>june 2012 - 2016</span>
                    <h5 className="title">graphic designer</h5>
                    <span>adobe inc.</span>
                    <p>To had throughout his of boss werd your coast in lane. Encourag it a  out concept hazardousd.</p>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <!--====== EXPERIENCES PART ENDS ======--> */}

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


    </div>
  )
}

export default About