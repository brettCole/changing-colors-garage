import React from 'react';
import Valves from '../assets/images/Valves.jpg';
import Engine from '../assets/images/Engine.jpg';
import Charger from '../assets/images/Charger.jpg';

const AboutUsSection = () => {
  return (
    <div className = "section section-about-us">
      <div className = "container">
        <div className = "row">
          <div className = "col-md-8 ml-auto mr-auto text-center">
            <h2 className = "title mb-4">
              Keeping you on the road
            </h2>
            <h5 className = "description">
              We've been keeping families safe on the road since 1995. Our priority is to fix cars not make money. The money is a result of being good at what we do.
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
              <div className = "image-container" style = {{backgroundImage: `url(${Charger})`}}></div>
            </div>
            <div className = "col-md-5">
              <div className = "image-container image-right" style = {{backgroundImage: `url(${Valves})`}}></div>
                <h3 className = "mb-4">
                  So what makes us different from every other Dealership, Repair Garage and grease monkey?
                </h3>
                <p>
                  You know the routine, you take your car for a routine oil change. Not to your surprise here comes the service writer out to speak to you. He may start off with something like "We have a little bit of a problem...". Then he proceeds to give you a list of things that your vehicle needs this instant or you will likely die as soon as you pull off the lot. Don't you hate that!
                </p>
                <p>
                  This is one of the ways that makes us different. We don't look to fluff the bill or push parts because we have to increase sales. We are in the business of fixing cars <i>"not changing parts"</i>. The fact remains though, parts on our vehicle's inevitably do wear out. 
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsSection;