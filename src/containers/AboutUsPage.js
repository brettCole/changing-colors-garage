import React, {Component} from 'react';
import TopNavigation from '../components/TopNavigation';
import HeaderSection from '../components/HeaderSection';
import Open from '../assets/images/Open.jpg';
import AboutSection from '../components/AboutSection';
import AboutTeam from '../components/AboutTeam';
import Footer from '../components/Footer';

class AboutUsPage extends Component {
  render() {
    return (
      <div>
        <TopNavigation />
        <HeaderSection 
          background={Open}
          titleMessage="Get to know us a little more"
        />
        <AboutSection />
        <AboutTeam />
        <Footer />
      </div>
    )
  }
}

export default AboutUsPage;
