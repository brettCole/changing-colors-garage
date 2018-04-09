import React from 'react';

const RepairItems = (props) => {
  debugger;
  return (
    <div>
      <div className="row">
        <div className="col-md-5 ml-auto">
          <div 
            className="card card-background card-background-product card-raised" 
            style={{backgroundImage: `url(${ props.cardImageLeft })`}}
          >
            <div className="card-body">
              <h2 className="card-title">
                {props.cardTitleLeft}
              </h2>
              <p className="card-description">
                {props.cardDescriptionLeft}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-5 mr-auto">
          <div className="info info-horizontal"></div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-5 ml-auto mt-5">
          <div className="info info-horizontal"></div>  
        </div>
        <div className="col-md-5 mr-auto">
          <div 
            className="card card-background card-background-product card-raised" 
            style={{backgroundImage: `url(${ props.cardImageRight })`}}
          >
          <div className="card-body">
            <h2 className="card-title">
              {props.cardTitleRight}
            </h2>
            <p className="card-description">
              {props.cardDescriptionRight}
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RepairItems;