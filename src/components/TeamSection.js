import React from 'react';
import Mascot from '../assets/images/Mascot.jpg';

const TeamSelection = () => {
  return (
    <div className = "section section-team text-center">
      <div className = "container">
        <h2 className = "title">Here is our team</h2>
        <div className = "team">
          <div className = "row">
            <div className = "col-md-4">
              <div className = "team-player">
                {/* <img  alt = "Thumbnail Image" className = "rounded-circle img-fluid img-raised"> */}
                  <i className = "now-ui-icons users_circle-08"></i>
                {/* </img> */}
                <h4 className = "title">Mark Cole</h4>
                <p className = "category text-primary">CEO, Lead Tech</p>
                <p className = "description">He own's everything!</p>
              </div>
            </div>
            <div className = "col-md-4">
              <div className = "team-player">
                {/* <img  alt = "Thumbnail Image" className = "rounded-circle img-fluid img-raised" /> */}
                <i className = "now-ui-icons users_circle-08"></i>
                <h4 className = "title">Brett Cole</h4>
                <p className = "category text-primary">ASE Certified Tech</p>
                <p className = "description">The brains behind things!</p>
              </div>
            </div>
            <div className = "col-md-4">
              <div className = "team-player">
                <img src = { Mascot }  alt = "Thumbnail Image" className = "rounded-circle img-fluid img-raised" />
                <h4 className = "title">Mascot</h4>
                <p className = "category text-primary"></p>
                <p className = "description">The brains behind things!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamSelection;