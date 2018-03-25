import React from 'react';

const AboutTeam = () => {
  return (
    <div className="team-3 section-image">
      <div className="container">
        <div className="row">
          <div className="col-md-8 ml-auto mr-auto text-center">
            <h2 className="title">
              Here we are in the flesh
            </h2>
            <h4 className="description">
              Here is our team that will keep you going.
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-7 ml-auto mr-auto">
            <div className="card card-profile">
              <div className="row">
                <div className="col-md-5">
                  <div className="card-image">
                    <a href="#">
                      <img className="img" />
                    </a>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h3 className="card-title">
                      Mark Cole
                    </h3>
                    <h6 className="category text-primary">
                      CEO, Master Technician
                    </h6>
                    <p className="card-description">
                      He has been doing this for a long time. He has a passion for fixing vehicles and giving customer's their money's worth!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7 ml-auto mr-auto">
            <div className="card card-profile">
              <div className="row">
                <div className="col-md-5">
                  <div className="card-image">
                    <a href="#">
                      <img className="img" />
                    </a>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h3 className="card-title">
                      Brett Cole
                    </h3>
                    <h6 className="category text-primary">
                      ASE Certified Technician
                    </h6>
                    <p className="card-description">
                      He has a love for cars. Keeps the shop entertaining and love's web dev.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTeam;