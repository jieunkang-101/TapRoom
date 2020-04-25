import React from "react";
import PropTypes from "prop-types"

function TapDetail(props){

  const { tap } = props;

  return (
    <>
      <div className="card detail-card">
        <h2>Tap Detail</h2>
        <ul>
          <li>Id: {tap.id}</li>
          <li>Brand: <strong>{tap.brand}</strong></li>
          <li>Name: <strong>{tap.name}</strong></li>
          <li>price: <strong>{tap.price}</strong> $</li>
          <li>ABV: <strong>{tap.abv}</strong> % ABV</li>
          <li>Left Pints: <strong>{tap.pints}</strong></li>
        </ul>
      </div>
      <div className="card-footer">
        
      </div>
    </>
  );
}  

TapDetail.prototypes= {
  tab: PropTypes.object,
}

export default TapDetail;