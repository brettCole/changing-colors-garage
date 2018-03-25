import React from 'react';

const ContactUs = () => {
  return (
    <div className = "main">
      <div className = "contact-content pt-5">
        <div className = "container">
          <div className = "row">
            <div className = "col-md-5 ml-auto mr-auto">
              <h2 className = "title pt-4">
                Schedule an appointment
              </h2>
              <p className = "description">
                Give us a little info about yourself and your car troubles and we will get back to you as soon as possible.
                <br />
                <br />
              </p>
              <form role = "form" id = "contact-form" method = "post">
                <label>Your name</label>
                <div className = "input-group">
                  <div className = "input-group-prepend">
                    <span className = "input-group-text">
                      <i className = "now-ui-icons users_circle-08" />
                    </span>
                  </div>
                  <input type = "text" className = "form-control" placeholder = "Your Name..." aria-label = "Your Name..." />
                </div>
                <label>Email Address</label>
                <div className = "input-group">
                  <div className = "input-group-prepend">
                    <span className = "input-group-text">
                      <i className = "now-ui-icons ui-1_email-85" />
                    </span>
                  </div>
                  <input type = "email" className = "form-control" placeholder = "Email Here..." aria-label = "Email Here..." />
                </div>
                <label>Phone</label>
                <div className = "input-group">
                  <div className = "input-group-prepend">
                    <span className = "input-group-text">
                      <i className = "now-ui-icons tech_mobile" />
                    </span>
                  </div>
                  <input type = "text" className = "form-control" placeholder = "Number Here..." />
                </div>
                <div className = "input-group">
                  <label>Your message</label>
                  <textarea name = "message" className = "form-control" id = "message" rows = "6"></textarea>
                </div>
                <div className = "submit text-center">
                  <input type = "submit" class = "btn btn-primary btn-raised btn-round" value = "Request Appointment" />
                </div>
              </form>
            </div>
            <div className = "col-md-5 ml-auto mr-auto">
              <div className = "info info-horizontal mt-5">
                <div className = "icon icon-primary">
                  <i className = "now-ui-icons location_pin" />
                </div>
                <div className = "description">
                  <h4 className = "info-title">
                    Find us at the Garage
                  </h4>
                  <p>
                    98G Albe Dr
                    <br />
                    Newark, De
                    <br />
                    19702
                  </p>
                </div>
              </div>
              <div className = "info info-horizontal">
                <div className = "icon icon-primary">
                  <i className = "now-ui-icons tech_mobile" />
                </div>
                <div className = "description">
                  <h4 className = "info-title">Give us a ring</h4>
                  <p>
                    Mark Cole
                    <br />
                    302-293-8627
                    <br />
                    Mon - Fri, 7:30am - 5:00pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;