import React from 'react';

export const RepairDescriptions = (props) => {
  return (
    <React.Fragment>
      {props.info1List !=='' &&
        <div className="info info-horizontal">
          <div className="icon icon-warning">
            <i className="now-ui-icons ui-1_simple-remove" />
          </div>
          <div className="description">
            <h4 className="info-title">
              {props.info1Title}
            </h4>
            <ul className="description">
              {props.info1List}
            </ul>
          </div>
        </div>
      }
      <div className="info info-horizontal">
        <div className="icon icon-success">
          <i className="now-ui-icons ui-2_settings-90" />
        </div>
        <div className="description">
          <h4 className="info-title">
            {props.info2Title}
          </h4>
          <ul className="description">
            {props.info2List}
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}