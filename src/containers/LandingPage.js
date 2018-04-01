import React, { Component } from 'react';
import TopNavigation from '../components/TopNavigation';
import HeaderSection from '../components/HeaderSection';
import AboutUsSection from '../components/AboutUsSection';
import TeamSection from '../components/TeamSection';
import SignupEmail from '../components/SignupEmail';
import Footer from '../components/Footer';
import ChameleonMain from '../assets/images/GarageSlantDoor.jpg';

class LandingPage extends Component {
  render (props) {
    return (
      <div>
        <TopNavigation />
        <div className = "wrapper">
          <HeaderSection 
            background = { ChameleonMain }
            titleMessage = "Car repair done right the first time."
          />
          <AboutUsSection />
          <TeamSection />
          <SignupEmail />
          <Footer />
        </div>
      </div>
    )
  }
}

export default LandingPage;