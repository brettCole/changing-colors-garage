import React from 'react';
import MB from '../assets/images/MB.jpg';
import Engine from '../assets/images/Engine.jpg';
import Jag from '../assets/images/Jag.jpg';

const AboutUsSection = () => {
  return (
    <div className = "section section-about-us">
      <div className = "container">
        <div className = "row">
          <div className = "col-md-8 ml-auto mr-auto text-center">
            <h2 className = "title">
              Keeping you on the road
            </h2>
            <h5 className = "description">
              
            </h5>
          </div>
        </div>
        <div className = "separator separator-primary"></div>
        <div className = "section-story-overview">
          <div className = "row">
            <div className = "col-md-6">
              <div className = "image-container image-left" style = {{backgroundImage: `url(${Engine})`}}>
                <p className = "blockquote blockquote-primary">
                  "It's like these guys have the magic touch! Even after an oil change it feels like my car runs better."
                  <br />
                  <br />
                  <small>-Tim</small>
                </p>
              </div>
              <div className = "image-container" style = {{backgroundImage: `url(${Jag})`}}></div>
            </div>
            <div className = "col-md-5">
              <div className = "image-container image-right" style = {{backgroundImage: `url(${MB})`}}></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsSection;