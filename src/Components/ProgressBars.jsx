import React, {useEffect, useState} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ProgressBars = () => {

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

      }, 999);

   
      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
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
    )
}

export default ProgressBars;
