import React from 'react';

export const RepairDescriptions = (props) => {
  return (
    <React.Fragment>
      <div className="info info-horizontal">
        <div className="description">
          <h4 className="info-title">
            {props.info1Title}
          </h4>
          <ul className="description">
            {props.info1List}
          </ul>
        </div>
      </div>
      <div className="info info-horizontal">
        <div className="description">
          <h4 className="info-title">
            {props.info2Title}
          </h4>
          <ul className="description">
            {props.info2List}
          </ul>
        </div>
      </div>
      <div className="info info-horizontal"></div>
    </React.Fragment>
  )
}