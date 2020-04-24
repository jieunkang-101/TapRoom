import React from 'react';
import PropTypes from 'prop-types';

function Tap(props) {

  return (
    <div className= "col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img src={props.img} height="180" alt="Brand"></img>
        </div>
        <div className="card-content">
          <ul>
            <li>Brand: <strong>{props.brand}</strong></li>
            <li>Name: <strong>{props.name}</strong></li>
            <li>price: <strong>{props.price}</strong> $</li>
            <li>ABV: <strong>{props.abv}</strong> % ABV</li>
            <li>Left Pints: <strong>{props.pints}</strong></li>
          </ul>
        </div>
      </div>  
    </div>
  )
}

Tap.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  pints: PropTypes.number,
  id: PropTypes.string,
};

export default Tap;
