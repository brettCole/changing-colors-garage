import React, { Component } from 'react';
import TopNavigation from '../components/TopNavigation';
import HeaderSection from '../components/HeaderSection';
import RepairSection from '../components/RepairSection';
import Footer from '../components/Footer';

class RepairPage extends Component {
  render() {
    return (
      <div>
        <TopNavigation />
        <HeaderSection />
        <RepairSection />
        <Footer />
      </div>
    )
  }
}

export default RepairPage;