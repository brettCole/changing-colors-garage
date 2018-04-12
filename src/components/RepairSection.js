import React from 'react';
import { RepairItems } from './RepairItems';
import { RepairDescriptions } from './RepairDescriptions';
import CarVent from '../assets/images/CarVent.jpg';
import LiftedJeep from '../assets/images/LiftedJeep.jpg';
import OilChange from '../assets/images/OilChange.jpg';

// TODO: add margin top repair items

export const RepairSection = () => {
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
        {/*end of header below initial image */}

        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairItems
              cardImage={CarVent}
              cardTitle="Vehicle AC Repair"
              cardDescription="It keeps us cool on those hot summer days but is crucial to defrosting our windshields on those cold winter mornings"
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairDescriptions
              info1Title="Signs of A/C Trouble"
              info1List={
                <React.Fragment>
                  <li>Your A/C blows warm air or just colder then outside temperature</li>
                  <li>The defroster takes longer then normal to operate</li>
                  <li>Your A/C only operates when you are driving and is inoperative when idling</li>
                  <li>Your heat and A/C fan only works on the high setting</li>
                </React.Fragment>
              }
              info2Title="Possible Causes Affecting Your A/C"
              info2List={
                <React.Fragment>
                  <li>A/C refrigerant seaps naturally through the lines, or a leak, which evacuates the refrigerant charge</li>
                  <li>A/C compressor is going bad or the belt is cracked or loose causing the belt to slip</li>
                  <li>Blower motor resistor has gone bad</li>
                </React.Fragment>
              }
            />
          </div>
        </div>
        {/* end of first row AC row */}
        <hr />

        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairDescriptions 
              info1Title="Signs of Filter Trouble"
              info1List={
                <React.Fragment>
                  <li>testing</li>
                  <li>testing again</li>
                </React.Fragment>
              }
              info2Title=""
              info1List=""
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairItems 
              cardImage={CarVent}
              cardTitle="Air/Transmission/Cabin Filters"
              cardDescription="We cover all the filters for you."
            />
          </div>
        </div>
        {/* end of second row Filters row */}
        <hr />

        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairItems
              cardImage=''
              cardTitle="Battery Testing and Replacement"
              cardDescription="Still waiting on a description"
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairDescriptions 
              info1Title="Signs of Battery Failure"
              info1List={
                <React.Fragment>
                  <li>testing</li>
                  <li>testing again</li>
                </React.Fragment>
              }
              info2Title=""
              info1List=""
            />
          </div>
        </div>
        {/* end of third row Battery row */}
        <hr />

        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairDescriptions
              info1Title="Warning Signs"
              info1List={
                <React.Fragment>
                  <li>Your A/C blows warm air or just colder then outside temperature</li>
                  <li>The defroster takes longer then normal to operate</li>
                  <li>Your A/C only operates when you are driving and is inoperative when idling</li>
                  <li>Your heat and A/C fan only works on the high setting</li>
                </React.Fragment>
              }
              info2Title="Possible Causes Affecting Your A/C"
              info2List={
                <React.Fragment>
                  <li>A/C refrigerant seaps naturally through the lines, or a leak, which evacuates the refrigerant charge</li>
                  <li>A/C compressor is going bad or the belt is cracked or loose causing the belt to slip</li>
                  <li>Blower motor resistor has gone bad</li>
                </React.Fragment>
              }
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairItems
              cardImage={CarVent}
              cardTitle="Belts and Hoses"
              cardDescription="Check for cracks splits and leaks"
            />
          </div>
        </div>
        {/* end of fourth row Belts and Hoses row */}
        <hr />

        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairItems 
              cardImage={CarVent}
              cardTitle="Brake Inspection and Repair"
              cardDescription="The safety of your family is something we don't take lightly."
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairDescriptions 
              info1Title="Signs of Filter Trouble"
              info1List={
                <React.Fragment>
                  <li>testing</li>
                  <li>testing again</li>
                </React.Fragment>
              }
              info2Title=""
              info1List=""
            />
          </div>
        </div>
        {/* end of fifth row Brake row */}
        <hr />

        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairDescriptions 
              info1Title="Signs of Filter Trouble"
              info1List={
                <React.Fragment>
                  <li>testing</li>
                  <li>testing again</li>
                </React.Fragment>
              }
              info2Title=""
              info1List=""
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairItems 
              cardImage={CarVent}
              cardTitle="Cooling System Repair"
              cardDescription="Cooling system helps keep your vehicle running at the proper temperature"
            />
          </div>
        </div>
        {/* end of sixth row Cooling System row */}
        <hr />

        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairItems 
              cardImage={CarVent}
              cardTitle="Driveline Repair"
              cardDescription="The driveline transfers power from the engine to the wheels"
            />
            
          </div>
          <div className="col-md-5 mr-auto">
            <RepairDescriptions 
              info1Title="Signs of Filter Trouble"
              info1List={
                <React.Fragment>
                  <li>testing</li>
                  <li>testing again</li>
                </React.Fragment>
              }
              info2Title=""
              info1List=""
            />
          </div>
        </div>
        {/* end of seventh row Driveline row */}
        <hr />
          
        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairDescriptions 
              info1Title="Signs of Filter Trouble"
              info1List={
                <React.Fragment>
                  <li>testing</li>
                  <li>testing again</li>
                </React.Fragment>
              }
              info2Title=""
              info1List=""
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairItems 
              cardImage={CarVent}
              cardTitle="Electrical Systems Diagnosis"
              cardDescription="There are plenty of systems now in our cars. We diagnose them all."
            />
          </div>
        </div>  
        {/* end of eigth row Electrical row */}
        <hr />

        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairItems 
              cardImage={CarVent}
              cardTitle="Engine Diagnosis and Repair"
              cardDescription="Even the dreaded Check Engine"
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairDescriptions 
              info1Title="Signs of Filter Trouble"
              info1List={
                <React.Fragment>
                  <li>testing</li>
                  <li>testing again</li>
                </React.Fragment>
              }
              info2Title=""
              info1List=""
            />
          </div>
        </div>  
        {/* end of nineth row Engine Repair row */}
        <hr />
          
        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairDescriptions 
              info1Title="Signs of Filter Trouble"
              info1List={
                <React.Fragment>
                  <li>testing</li>
                  <li>testing again</li>
                </React.Fragment>
              }
              info2Title=""
              info1List=""
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairItems 
              cardImage={CarVent}
              cardTitle="Exhaust System Repair"
              cardDescription="From small leaks to complete replacements"
            />
          </div>
        </div>   
        {/*end of tenth row Exhaust row */}
        <hr />
          
        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairItems 
              cardImage={LiftedJeep}
              cardTitle="Lift Kits"
              cardDescription="From a couple of inches to full competition lifts"
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairDescriptions 
              info1Title="Signs of Filter Trouble"
              info1List={
                <React.Fragment>
                  <li>testing</li>
                  <li>testing again</li>
                </React.Fragment>
              }
              info2Title=""
              info1List=""
            />
          </div>
        </div>   
        {/* end of eleventh row Lift Kit row */}
        <hr />

        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairDescriptions 
              info1Title="Signs of Filter Trouble"
              info1List={
                <React.Fragment>
                  <li>testing</li>
                  <li>testing again</li>
                </React.Fragment>
              }
              info2Title=""
              info1List=""
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairItems 
              cardImage={OilChange}
              cardTitle="Oil Change and General Maintenance"
              cardDescription="Recommended every 3000 miles or 3 months."
            />
          </div>
        </div>  
        {/* end of twelth row Oil and Maintenance row */}
        <hr />
          
        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairItems 
              cardImage={LiftedJeep}
              cardTitle="Suspension Repair"
              cardDescription="We will fix all your suspension needs."
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairDescriptions 
              info1Title="Signs of Filter Trouble"
              info1List={
                <React.Fragment>
                  <li>testing</li>
                  <li>testing again</li>
                </React.Fragment>
              }
              info2Title=""
              info1List=""
            />
          </div>
        </div>   
        {/* end of thirteenth row Suspension row */}
        <hr />
        
        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairDescriptions 
              info1Title="Signs of Filter Trouble"
              info1List={
                <React.Fragment>
                  <li>testing</li>
                  <li>testing again</li>
                </React.Fragment>
              }
              info2Title=""
              info1List=""
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairItems 
              cardImage={OilChange}
              cardTitle="Tire Repair and Replacement"
              cardDescription="From Patches to complete replacements"
            />
          </div>
        </div>  
        {/* end of fourteenth row Tire row */}
        <hr />
          
        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairItems 
              cardImage={LiftedJeep}
              cardTitle="Transmission Flush and Repair"
              cardDescription="Flush fluid and Repair if necessary"
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairDescriptions 
              info1Title="Signs of Filter Trouble"
              info1List={
                <React.Fragment>
                  <li>testing</li>
                  <li>testing again</li>
                </React.Fragment>
              }
              info2Title=""
              info1List=""
            />
          </div>
        </div>     
        {/* end of fifteenth row Transmission row */}
      </div>
    </div>
  )
}