import React from 'react';

const RepairSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 ml-auto mr-auto text-center">
          <h2 className="title">
            You have a problem? We can fix it!
          </h2>
          <h4 className="description">
            There isn't much we can't do. We work hard to offer all the services that your vehicle needs. This list isn't exhaustive but represents some of the services we offer.
          </h4>
        </div>
      </div>
      <div className="row">
          <div className="card card-background card-raised">
            <div className="info">
              <div className="icon icon-white">
                <i className="now-ui-icons business_badge" />
              </div>
              <div className="description">
                <h4 className="info-title">
                  Blah Blah Blah
                </h4>
                <p>Some more Blah blah blah blah</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-background card-raised">
            <div className="info">
              <div className="icon icon-white">
                <i className="now-ui-icons business_bulb-63" />
              </div>
              <div className="description">
                <h4 className="info-title">
                  Blah Blah Blah
                </h4>
                <p>Some more Blah blah blah blah</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-background card-raised">
            <div className="info">
              <div className="icon icon-white">
                <i className="now-ui-icons location_map-big" />
              </div>
              <div className="description">
                <h4 className="info-title">
                  Blah Blah Blah
                </h4>
                <p>Some more Blah blah blah blah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  )
}

export default RepairSection;