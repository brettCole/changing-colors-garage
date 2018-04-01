import React, { Component } from 'react';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';

class TopNavigation extends Component {
  render() {
    return (
      <nav className = "navbar navbar-expand-lg bg-white fixed-top navbar-transparent" color-on-scroll = "500">
        <div className = "container">
          <div className = "dropdown button-dropdown">
            <a href = "#" className = "dropdown-toggle" id = "navbarDropdown" data-toggle = "dropdown" aria-expanded = "false">
              <span className = "button-bar"></span>
              <span className = "button-bar"></span>
              <span className = "button-bar"></span>
            </a>
            <div className = "dropdown-menu" aria-labelledby = "navbarDropdown">
              <a className = "dropdown-item" href = "#">Repairs</a>
              <a className = "dropdown-item" href = "#">Schedule</a>
              <a className = "dropdown-item" href = "#">Location</a>
              <a className = "dropdown-item" href = "#">About Us</a>
              <a className = "dropdown-item" href = "#">Testimonials</a>
            </div>
          </div>
          <div className = "navbar-translate col-4">
            <a className = "navbar-brand pt-0 pb-0" href="#">
              <Logo className = "w-100" />
            </a>
            <button className = "navbar-toggler navbar-toggler-right" type = "button" data-toggle = "collapse" data-target = "#navigation" aria-controls = "navigation-index" aria-expanded = "false" aria-label = "Toggle navigation">
              <span className="navbar-toggler-bar bar1"></span>
	            <span className="navbar-toggler-bar bar2"></span>
	            <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse justify-content-end" id="navigation">
    	      <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/repairs"
                  className="nav-link"
                >
                  Repairs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/schedule-appointment"
                  className="nav-link"
                >
                  Schedule
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/location" 
                  className="nav-link"
                >
                  Location
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/aboutus" 
                  className="nav-link"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/testimonials" 
                  className="nav-link"
                >
                  Testimonials
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default TopNavigation;