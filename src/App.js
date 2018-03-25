import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './containers/LandingPage';
import RepairPage from './containers/RepairPage';
import ScheduleAppointment from './containers/ScheduleAppointment';
import LocationPage from './containers/LocationPage';
import AboutUsPage from './containers/AboutUsPage';
import TestimonialPage from './containers/TestimonialPage';
import './App.css';
import './assets/css/now-ui-kit.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route 
            exact path="/" 
            component={LandingPage}
          />
          <Route 
            path="/repairs"
            component={RepairPage}
          />
          <Route 
            path="/schedule-appointment"
            component={ScheduleAppointment}
          />
          <Route
            path="/location"
            component={LocationPage}
          />
          <Route 
            path="/aboutus"
            component={AboutUsPage}
          />
          <Route
            path="/testimonials"
            component={TestimonialPage}
          />
        </div>
      </Router>
    );
  }
}

export default App;
