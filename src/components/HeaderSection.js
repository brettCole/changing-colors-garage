import React from 'react';
import { withRouter } from 'react-router';

const HeaderSection = (props) => {
  return (
    <div className = "page-header page-header-small">
      <div className = "page-header-image"
        data-parallax = "true"
        style = {{backgroundImage: `url(${ props.background })`, transform: 'translate3d(0px, 0px, 0px)'}}>
      </div>
      <div className = "container">
        <div className = "content-center">
          <h1 className = "title">
            { props.titleMessage }
          </h1>
          { props.location.pathname === '/' ? (
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
          ) : null }
        </div>
      </div>
    </div>
  )
}

export default withRouter(HeaderSection);