import React, { Component } from 'react';
import TopNavigation from '../components/TopNavigation';
import HeaderSection from '../components/HeaderSection';
import Schedule from '../assets/images/Schedule.jpg';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

class ScheduleAppointment extends Component {
  render(props) {
    return (
      <div className = "wrapper">
        <TopNavigation />
        <HeaderSection
          background = { Schedule }
          titleMessage = "We would love for you to stop by!"
        />
        <ContactUs />
        <Footer />
      </div>
    )
  }
}

export default ScheduleAppointment;