import React from 'react';
import PropTypes from 'prop-types';

function Tap(props) {


  return (
    <div className= "tap">
      <img src={props.img}></img>
      <ul>
        <li>name: {props.name}</li>
        <li>brand: {props.brand}</li>
        <li>price: {props.price}</li>
        <li>ABV: {props.abv}</li>
        <li>Left Pints: {props.pints}</li>
      </ul>
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
