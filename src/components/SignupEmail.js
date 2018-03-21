import React from 'react';

const SignupEmail = () => {
  return (
    <div className = "section section-contact-us text-center">
      <div className = "container">
        <h2 className = "title">
          Signup for our monthly 
        </h2>
        <p className = "description">
          Newsletters, Coupons and such.
        </p>
        <div className = "row">
          <div className = "col-lg-6 text-center col-md-8 ml-auto mr-auto">
            <form className = "form" method action>
            <div className = "input-group form-group-no-border input-lg">
              <span className = "input-group-addon">
                <i className = "now-ui-icons users_circle-08"></i>
              </span>
              <input type = "text" class = "form-control" placeholder = "First Name..." />
            </div>
            <div className = "input-group form-group-no-border input-lg">
              <span className = "input-group-addon">
                <i className = "now-ui-icons ui-1_email-85"></i>
              </span>
              <input type = "text" class = "form-control" placeholder = "Email..." />
            </div>
            <div className = "send-button">
              <a href = "#" className = "btn btn-success btn-round btn-block btn-lg mt-3">Submit Info</a>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupEmail;