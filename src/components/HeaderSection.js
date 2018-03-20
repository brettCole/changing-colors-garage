import React, { Component } from 'react';
import ChameleonMain from '../assets/images/GarageSlantDoor.jpg';

const HeaderSection = () => {
  return (
    <div className = "page-header page-header-small">
      <div className = "page-header-image"
        data-parallax = "true"
        style = {{backgroundImage: `url(${ ChameleonMain })`, transform: 'translate3d(0px, 0px, 0px)'}}>
      </div>
      <div className = "container">
        <div className = "content-center">
          <h1 className = "title">Car repair done right the first time</h1>
          <div className = "text-center">
            <a href = "#" className = "btn btn-success btn-icon btn-round">
              <i className = "fa fa-facebook-square"></i>
            </a>
            <a href = "#" className = "btn btn-success btn-icon btn-round">
              <i className = "fa fa-twitter"></i>
            </a>
            <a href = "#" className = "btn btn-success btn-icon btn-round">
              <i className = "fa fa-google-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderSection;