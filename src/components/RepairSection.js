import React from 'react';
import { RepairItems } from './RepairItems';
import { RepairDescriptions } from './RepairDescriptions';
import Battery from '../assets/images/Battery.jpg';
import BeltsAndHoses from '../assets/images/BeltsAndHoses.jpg';
import CarVent from '../assets/images/CarVent.jpg';
import LiftedJeep from '../assets/images/LiftedJeep.jpg';
import OilChange from '../assets/images/OilChange.jpg';
import Tire from '../assets/images/Tire.jpg';
import Transmission from '../assets/images/Transmission.jpg';

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

        {/* AC row */}
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

        {/* Battery row */}
        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairDescriptions 
              info1Title="Signs Your Battery May Need Attention"
              info1List={
                <React.Fragment>
                  <li>Slow cranking or only hear a clicking noise when trying to start vehicle</li>
                  <li>Vehicle dash lights may be dim or nothing at all</li>
                  <li>Battery terminals are heavily corroded</li>
                  <li>The battery light may be illuminated on the dash</li>
                </React.Fragment>
              }
              info2Title="Possible Causes For Battery Issues"
              info2List={
                <React.Fragment>
                  <li>Something as simple as a light, radio or draw drained the battery. Be surprised how often this happens to people</li>
                  <li>Battery has deteriorated and can no longer hold a proper charge</li>
                  <li>The alternator could be in need of replacement and as a result has turned on the Battery light on the dash</li>
                </React.Fragment>
              }
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairItems 
              cardImage={Battery}
              cardTitle="Battery Testing and Replacement"
              cardDescription="From your ignition an fuel system, to your radio and starter motor, they all rely on a strong fully charged battery"
            />
          </div>
        </div>
        {/* end of second row Battery row */}
        <hr />

        {/* Belts and Hoses row */}
        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairItems
              cardImage={BeltsAndHoses}
              cardTitle="Belts and Hoses"
              cardDescription="Your Alternator, A/C compressor and Powersteering pump all rely on the serpetine belt to drive them. Coolant hoses help to move antifreeze along through your engine to maintain the proper operating temperature."
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairDescriptions 
              info1Title="Warning Signs of Needed Maintenance"
              info1List={
                <React.Fragment>
                  <li>Audible squealing or grinding noise while vehicle is running</li>
                  <li>Slipping felt in the steering wheel while turning</li>
                  <li>Vehicle running hotter then normal</li>
                  <li>Notice stain of coolant or other fluid on the ground</li>
                </React.Fragment>
              }
              info2Title="Possible Necessary Repairs"
              info2List={
                <React.Fragment>
                  <li>Serpentine belt has glazed over and is now squealing</li>
                  <li>Serpentine belt has stretched over time and loosened and now needs to be adjusted or replaced</li>
                  <li>Hoses overtime have cratched or split causing a partial leak</li>
                </React.Fragment>
              }
            />
          </div>
        </div>
        {/* end of third row Belts and Hoses row */}
        <hr />

        {/* Brake row */}
        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairDescriptions
              info1Title="Early Warning Signs of Brakes Needing Attention"
              info1List={
                <React.Fragment>
                  <li>Hear an audible screaching sound as vehicle is moving</li>
                  <li>Hear a worsening grinding sound. Needing immediate attention</li>
                  <li>Brake pedal has begun to feel softer then usual</li>
                  <li>Parking brake does not hold the vehicle properly</li>
                </React.Fragment>
              }
              info2Title="Possible Reasons For Brakes Degrading"
              info2List={
                <React.Fragment>
                  <li>Wear indicators are hitting brake rotors causing the audible screaching noise</li>
                  <li>Brake pad material has completely worn out and now the metal backing of the pad and the rotor are contacting causing the grinding noise</li>
                  <li>Could have possible air in the hydraulic system or master cylinder internal seals are leaking</li>
                </React.Fragment>
              }
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairItems
              cardImage=''
              cardTitle="Brake Inspection and Repair"
              cardDescription="Your brakes are the only thing stopping you and your precious cargo. Brake care is of the utmost importance to us."
            />
          </div>
        </div>
        {/* end of fourth row Brake row */}
        <hr />

        {/* Cooling System row */}
        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairItems 
              cardImage=''
              cardTitle="Cooling System Repair"
              cardDescription="The cooling system is what efficiently pulls heat from the engine and cools itself in the radiator. It is used to keep us up on those freezing cold winter mornings"
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairDescriptions 
              info1Title="Signs of Cooling System Problems"
              info1List={
                <React.Fragment>
                  <li>Engine is running hotter then it should be</li>
                  <li>The cabin doesn't heat up properly</li>
                  <li>Hear a gurgling sound from coolant expansion tank</li>
                </React.Fragment>
              }
              info2Title="Possible Solutions"
              info2List={
                <React.Fragment>
                  <li>Coolant level is too low to properly cool vehicle</li>
                  <li>Water pump propeller not circulating coolant efficiently</li>
                  <li>Wrong kind of antifreeze added to the system causing the coolant to congeal</li>
                  <li>Enginge combustion gas is being introduced to the cooling system through a head gasket leak</li>
                </React.Fragment>
              }
            />
          </div>
        </div>
        {/* end of fifth row Cooling System row */}
        <hr />

        {/* Driveline row */}
        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairDescriptions 
              info1Title="Possible Warning Signs of Needed Driveline Attention"
              info1List={
                <React.Fragment>
                  <li>Vibration while driving</li>
                  <li>Audible clicking or knocking noise heard when shifting gears</li>
                  <li>Growning noise heard from front or reat differential</li>
                </React.Fragment>
              }
              info2Title="Possible Causes of Necessary Driveline Repairs"
              info2List={
                <React.Fragment>
                  <li>Driveshaft may need to be rebalanced or replaced</li>
                  <li>Universal joint has worn out needing necessary replacement</li>
                  <li>Differential could be low on fluid or have the wrong fluid used</li>
                </React.Fragment>
              }
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairItems 
              cardImage=''
              cardTitle="Driveline Repair"
              cardDescription="The driveline transfers the power created from the engine to the drive wheels"
            />
          </div>
        </div>
        {/* end of sixth row Driveline row */}
        <hr />

        {/* Electrical System row */}
        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairItems 
              cardImage=''
              cardTitle="Electrical Systems Diagnosis"
              cardDescription="Cars today can often have over 150 subsystems each controlled by a computer. Each controlling your seat positioning to your transmission gear select position"
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairDescriptions 
              info1Title="Signs of Electrical Trouble"
              info1List={
                <React.Fragment>
                  <li>Piece of equipment is now inoperational</li>
                  <li>The check engine light is now illuminated</li>
                  <li>Weird operation of components, or maybe other components work when they shouldn't</li>
                  <li>Battery drained</li>
                </React.Fragment>
              }
              info2Title="Possible Causes of Electrical Issues"
              info2List={
                <React.Fragment>
                  <li>Bad ground is causing electrical issue</li>
                  <li>Connector was left unplugged and turned check engine light on</li>
                  <li>Wires have rubbed against each other or metal and are now shorting against each other</li>
                </React.Fragment>
              }
            />
          </div>
        </div>
        {/* end of seventh row Electrical row */}
        <hr />
          
        {/* Engine row */}
        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairDescriptions 
              info1Title="Signs of Engine Troubles"
              info1List={
                <React.Fragment>
                  <li>Dreaded Check Engine Light is illuminated</li>
                  <li>Notice a miss or stumble in the engine as it is running</li>
                  <li>Fuel economy has worsened over time</li>
                </React.Fragment>
              }
              info2Title="A Possible Myriad of Things At Fault"
              info2List={
                <React.Fragment>
                  <li>To many things to list could be at fault for turning the Check Engine Light on</li>
                  <li>Poor quality fuel</li>
                  <li>Tune up may be necessary to replace worn parts affecting performance</li>
                  <li>Did you know even your transmission can turn your Check Engine Light on?</li>
                </React.Fragment>
              }
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairItems 
              cardImage=''
              cardTitle="Engine Diagnosis and Repair"
              cardDescription="Your engine relys on three basic things, air, fuel and compression. The newer the vehicle though the more components that have an effect on these"
            />
          </div>
        </div>  
        {/* end of eigth row Engine row */}
        <hr />

        {/* Exhaust row */}
        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairItems 
              cardImage=''
              cardTitle="Exhaust System Repair"
              cardDescription="Your exhaust basically acts as the lungs of your engine and releases the burnt gases that are a byproduct of your running engine"
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairDescriptions 
              info1Title="Signs of Exhaust Troubles"
              info1List={
                <React.Fragment>
                  <li>Engine running excessively hotter then it should</li>
                  <li>Your vehicle's enginge seems to be straining to reach a cruising speed and can not go over certain speeds</li>
                  <li>Exhaust sounds much louder then usual</li>
                </React.Fragment>
              }
              info2Title="Possible Solutions to the Problem"
              info2List={
                <React.Fragment>
                  <li>Catalytic Converter has deteriorated and now clogged the exhaust not allowing the engine to exhaust</li>
                  <li>Exhaust has rusted to the point that it is now leaking and needs replacement of pieces</li>
                </React.Fragment>
              }
            />
          </div>
        </div>  
        {/* end of nineth row Exhaust System row */}
        <hr />
        
        {/* Filters row */}
        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairDescriptions 
              info1Title="Signs of Filter Trouble"
              info1List={
                <React.Fragment>
                  <li>Engine may not be breathing like it should</li>
                  <li>Musty smell inside the vehicle cabin</li>
                  <li>Transmission may not be shifting properly</li>
                </React.Fragment>
              }
              info2Title="Possible Solutions for Filter Trouble"
              info2List={
                <React.Fragment>
                  <li>Air filter has become clogged</li>
                  <li>Cabin filter has become clogged and is saturated no longer properly filtering air coming into cabin</li>
                  <li>Transmission filter clogged and not allowing transmission fluid to flow properly</li>
                </React.Fragment>
              }
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairItems 
              cardImage=''
              cardTitle="Filters - Air/Trains/Cabin/Fuel"
              cardDescription="From the Air to the Trans filter they all help remove dirt and debri to keep each system clean"
            />
          </div>
        </div>   
        {/*end of tenth row Filters row */}
        <hr />
          
        {/* Lift Kit row */}
        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairItems 
              cardImage={LiftedJeep}
              cardTitle="Lift Kits"
              cardDescription="From a small leveling kit to adding inches of lift, adding a lift kit to your vehicle can really give it that aggressive look and feel"
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairDescriptions 
              info1List=''
              info2Title="How Big Do You Wonna Go?"
              info2List={
                <React.Fragment>
                  <li>We can just add a simple leveling kit to your vehicle</li>
                  <li>Maybe you wonna add a couple of inches to raise vehicle and give it a little more aggressive of a look</li>
                  <li>Let's go a little bit bigger an install a kit that gives you the option to now install a much more aggressive tire, 35" 38" tires anybody?</li>
                  <li>Really the world is yours when it comes to how big you wonna go</li>
                  <li>Ask us the details about the different kits we offer</li>
                </React.Fragment>
              }
            />
          </div>
        </div>   
        {/* end of eleventh row Lift Kit row */}
        <hr />

        {/* Oil and Maintenance row */}
        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairDescriptions 
              info1Title="Signs of Oil problems and Needed Maintenance"
              info1List={
                <React.Fragment>
                  <li>Audible clattering heard from the engine when running</li>
                  <li>Siezed Engine, Very bad!</li>
                </React.Fragment>
              }
              info2Title="Possible Repairs Needed"
              info2List={
                <React.Fragment>
                  <li>Change Oil every 3,000 or, if sythentic, every 5,000 miles</li>
                  <li>Worse case scenario, need complete engine replacement because of not replacing oil at recommended intervals</li>
                  <li>Oil level, pressure and viscosity effects the variable valve timing's operation</li>
                </React.Fragment>
              }
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairItems 
              cardImage={OilChange}
              cardTitle="Oil Change and General Maintenance"
              cardDescription="There are many moving parts to the internals of your engine that rely on the proper type and level of oil"
            />
          </div>
        </div>  
        {/* end of twelth row Oil and Maintenance row */}
        <hr />
          
        {/* Suspension row */}
        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairItems 
              cardImage=''
              cardTitle="Suspension Repair"
              cardDescription="Your suspension is what your tires rely on to keep contact with the road"
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairDescriptions 
              info1Title="Signs of Suspension Issues"
              info1List={
                <React.Fragment>
                  <li>When vehicle is jounced it doesn't return to normal ride height quickly</li>
                  <li>Tires tread is scalloped or worn abnormally</li>
                  <li>Audible binding or popping noise heard when turning the stearing wheel</li>
                </React.Fragment>
              }
              info2Title="Possible Repairs Needed"
              info2List={
                <React.Fragment>
                  <li>Shocks are worn out and not leveling vehicle</li>
                  <li>Ball joints and or tie rods are lose and worn allowing the tire to not sit in propper position</li>
                  <li>Sway bar links are making noise when hitting bumps</li>
                  <li>**Important** After suspension work it is always a must to then get an alignment done on vehicle to make sure tires and vehicle are tracking straight and tires wear properly</li>
                </React.Fragment>
              }
            />
          </div>
        </div>   
        {/* end of thirteenth row Suspension row */}
        <hr />
        
        {/* Tire row */}
        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairDescriptions 
              info1Title="Signs of Tire trouble"
              info1List={
                <React.Fragment>
                  <li>Tire is losing air and going flat</li>
                  <li>Tire wear is choppy and an audible rumbling is heard driving down the road</li>
                  <li>Tire tread is very worn</li>
                </React.Fragment>
              }
              info2Title="Possible Needed Repairs"
              info2List={
                <React.Fragment>
                  <li>Possible something in tire tread that requires either a plug or patch depending where it is located in tire</li>
                  <li>Tire may need to be balanced and suspension checked for tightness</li>
                  <li>Tire needs to be replaced due to low tread depth</li>
                </React.Fragment>
              }
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairItems 
              cardImage={Tire}
              cardTitle="Tire Repair and Replacement"
              cardDescription="Tires are what keep you and your family in contact with the road. Their care and upkeep are crucial to safety"
            />
          </div>
        </div>  
        {/* end of fourteenth row Tire row */}
        <hr />
          
        {/* Transmission row */}
        <div className="row">
          <div className="col-md-5 ml-auto">
            <RepairItems 
              cardImage={Transmission}
              cardTitle="Transmission Flush and Repair"
              cardDescription="You need to be able to rely on your vehicles transmission to get from point a to point b. Proper maintenance on your transmission is crucial to it's reliability"
            />
          </div>
          <div className="col-md-5 mr-auto">
            <RepairDescriptions 
              info1Title="Signs of Transmission Troubles"
              info1List={
                <React.Fragment>
                  <li>Transmission begins to bang into gear</li>                  
                  <li>Transmission won't shift into gears at all - this is bad</li>
                  <li>Check Engine Light is illuminated because of transmission</li>
                </React.Fragment>
              }
              info2Title="Possible Needed Repairs"
              info2List={
                <React.Fragment>
                  <li>Transmission needs to be serviced by replacing the transmission filter and replacing the fluid</li>
                  <li>Transmission needs to be rebuilt to address worn internals</li>
                  <li>Worse case scenario transmission needs to be replaced</li>
                </React.Fragment>
              }
            />
          </div>
        </div>     
        {/* end of fifteenth row Transmission row */}
      </div>
    </div>
  )
}