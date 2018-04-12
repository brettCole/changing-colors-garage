import React from 'react';
import { RepairDescriptions } from './RepairDescriptions';

export const RepairItems = (props) => {
  
  return (
    <div 
      className="card card-background card-background-product card-raised" 
      style={{backgroundImage: `url(${ props.cardImage })`}}
    >
      <div className="card-body">
        <h2 className="card-title">
          {props.cardTitle}
        </h2>
        <p className="card-description">
          {props.cardDescription}
        </p>
      </div>
    </div>
  )
}
