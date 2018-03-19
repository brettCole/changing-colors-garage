import React, { Component } from 'react';
import Logo from './Logo';

class TopNavigation extends Component {
  render() {
    return (
      <nav className = "navbar navbar-expand-lg bg-default fixed-top" color-on-scroll = "500">
        <div className = "container">
          <div className = "navbar-translate col-4">
            <a className = "navbar-brand pt-0 pb-0" href="#">
              <Logo className = "w-100" />
            </a>
            <button className = "navbar-toggler navbar-toggler-right" type = "button" data-toggle = "collapse" data-target = "#navigation" aria-controls = "navigation-index" aria-expanded = "false" aria-label = "Toggle navigation">
              <span class="navbar-toggler-bar bar1"></span>
	            <span class="navbar-toggler-bar bar2"></span>
	            <span class="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse justify-content-end" id="navigation">
    	      <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#pablo">
                  Repairs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#pablo">Schedule</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#pablo">Location</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#pablo">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#pablo">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default TopNavigation;