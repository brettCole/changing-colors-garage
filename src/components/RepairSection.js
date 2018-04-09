import React from 'react';
import RepairItems from './RepairItems';
import LiftedJeep from '../assets/images/LiftedJeep.jpg';
import OilChange from '../assets/images/OilChange.jpg';

const RepairSection = () => {
  return (
    <div className="projects-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 ml-auto mr-auto text-center">
            <h2 className="title">
              You have a problem? We can fix it!
            </h2>
            <h4 className="description">
              There isn't much we can't do. We work hard to offer all the services that your vehicle needs. This list isn't exhaustive but represents some of the services we offer.
            </h4>
            <div className="section-space"></div>
          </div>
        </div>
        <RepairItems
          cardTitleLeft="Vehicla AC Repair"
          cardDescriptionLeft="We will freeze you out!"
          cardTitleRight="Air/Transmission/Cabin Filters"
          cardDescriptionRight="We cover all the filters for you."
        />
        <RepairItems
          cardTitleLeft="Belts and Hoses"
          cardDescriptionLeft="Check for cracks splits and leaks"
          cardTitleRight="Brake Repair"
          cardDescriptionRight="The safety of your family is something we don't take lightly." 
        />
        <RepairItems 
          cardTitleLeft="Cooling System Repair"
          cardDescriptionLeft="Cooling system helps keep your vehicle running at the proper temperature"
          cardTitleRight="Driveline Repair"
          cardDescriptionRight="The driveline transfers power from the engine to the wheels"
        />
        <RepairItems 
          cardTitleLeft="Electrical Systems Diagnosis"
          cardDescriptionLeft="There are plenty of systems now in our cars. We diagnose them all."
          cardTitleRight="Engine Diagnosis and Repair"
          cardDescriptionRight="Even the dreaded Check Engine"
        />
        <RepairItems 
          cardTitleLeft="Exhaust System Repair"
          cardDescriptionLeft="From small leaks to complete replacements"
          cardImageRight={LiftedJeep}
          cardTitleRight="Lift Kits"
          cardDescriptionRight="From a couple of inches to full competition lifts"
        />
        <RepairItems
          cardImageLeft = {OilChange}
          cardTitleLeft = "Oil Changes"
          cardDescriptionLeft = "Recommended every 3000 miles or 3 months." 
          cardTitleRight = "Suspension Repair"
          cardDescriptionRight = "We will fix all your suspension needs."
        />
        <RepairItems 
          cardTitleLeft="Tire Repair and Replacement"
          cardDescriptionLeft="From Patches to complete replacements"
          cardTitleRight="Transmission Flush and Repair"
          cardDescriptionRight="Flush fluid and Repair if necessary"
        />
      </div>
    </div>
  )
}

export default RepairSection;