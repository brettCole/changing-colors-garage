import React, { Component } from 'react';
import TopNavigation from '../components/TopNavigation';
import HeaderSection from '../components/HeaderSection';

class LandingPage extends Component {
  render () {
    return (
      <div>
        <TopNavigation />
        <HeaderSection />
      </div>
    )
  }
}

export default LandingPage;