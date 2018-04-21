import React, { Component } from 'react';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

class TopNavigation extends Component {

  componentDidMount() {
    this.addAndRemoveNavbar();
  }

  componentDidUpdate() {
    this.addAndRemoveNavbar();
  }

  render() {
    return (
      <nav 
        className="navbar navbar-expand-lg bg-white fixed-top navbar-transparent" 
        color-on-scroll="500"
      >
        <div className="container">
          <div className="dropdown button-dropdown">
            <a 
              className="dropdown-toggle" 
              id="navbarDropdown" 
              data-toggle="dropdown" 
              aria-expanded="false"
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </a>
            <div 
              className="dropdown-menu" 
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item">Repairs</a>
              <a className="dropdown-item">Schedule</a>
              <a className="dropdown-item">Location</a>
              <a className="dropdown-item">About Us</a>
              <a className="dropdown-item">Testimonials</a>
            </div>
          </div>
          <div className="navbar-translate col-4">
            <NavLink 
              className="navbar-brand pt-0 pb-0"
              to="/"  
            >
              <Logo className="w-100" />
            </NavLink>
            <button 
              className="navbar-toggler navbar-toggler-right" 
              type="button" 
              data-toggle="collapse" 
              data-target="#navigation" 
              aria-controls="navigation-index" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-bar bar1"></span>
	            <span className="navbar-toggler-bar bar2"></span>
	            <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <div 
            className="collapse navbar-collapse justify-content-end" 
            id="navigation"
          >
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
  addAndRemoveNavbar= function() {
    // nowuiKit.initNavbarImage();
    // let navbar = $('.navbar[color-on-scroll]');
    // let scroll_distance = navbar.attr('color-on-scroll') || 240;
    let transparent = true;
    let navbar_initialized,
    backgroundOrange = false,
    toggle_initialized = false;
    let big_image;

    let nowuiKit = {
      misc: {
          navbar_menu_visible: 0
      },
  
      checkScrollForTransparentNavbar: debounce(function() {
          if ($(document).scrollTop() > scroll_distance) {
              if (transparent) {
                  transparent = false;
                  $('.navbar[color-on-scroll]').removeClass('navbar-transparent');
              }
          } else {
              if (!transparent) {
                  transparent = true;
                  $('.navbar[color-on-scroll]').addClass('navbar-transparent');
              }
          }
      }, 17),
  
      initNavbarImage: function() {
          navbar = $('.navbar').find('.navbar-translate').siblings('.navbar-collapse');
          var background_image = navbar.data('nav-image');
  
          if ($(window).width() < 991 || $('body').hasClass('burger-menu')) {
              if (background_image != undefined) {
                  navbar.css('background', "url('" + background_image + "')")
                      .removeAttr('data-nav-image')
                      .css('background-size', "cover")
                      .addClass('has-image');
              }
          } else if (background_image != undefined) {
              navbar.css('background', "")
                  .attr('data-nav-image', '' + background_image + '')
                  .css('background-size', "")
                  .removeClass('has-image');
          }
      },
  
      checkScrollForParallax: debounce(function() {
  
          let oVal = ($(window).scrollTop() / 3);
          big_image.css({
              'transform': 'translate3d(0,' + oVal + 'px,0)',
              '-webkit-transform': 'translate3d(0,' + oVal + 'px,0)',
              '-ms-transform': 'translate3d(0,' + oVal + 'px,0)',
              '-o-transform': 'translate3d(0,' + oVal + 'px,0)'
          });
  
      }, 6),
  }
  nowuiKit.initNavbarImage();
  let navbar = $('.navbar[color-on-scroll]');
    let scroll_distance = navbar.attr('color-on-scroll') || 240;

  // Check if we have the class "navbar-color-on-scroll" then add the function to remove the class "navbar-transparent" so it will transform to a plain color.
  if ($('.navbar[color-on-scroll]').length != 0) {
    nowuiKit.checkScrollForTransparentNavbar();
    $(window).on('scroll', nowuiKit.checkScrollForTransparentNavbar)
  }
  

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
};
  }

}

export default TopNavigation;