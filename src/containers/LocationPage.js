import React from 'react';
import TopNavigation from '../components/TopNavigation';
import HeaderSection from '../components/HeaderSection';
// import GoogleMapsContainer from './GoogleMapsContainer';
import Footer from '../components/Footer';
import fourFourTwo from '../assets/images/442.jpg';

const LocationPage = () => {
  return (
    <div>
      <TopNavigation />
      <HeaderSection
        background={fourFourTwo}
      />
      {/* <GoogleMapsContainer /> */}
      <Footer />
    </div>
  )
}

export default LocationPage;