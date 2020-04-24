import React from 'react';
import PropTypes from 'prop-types';

function Tap(props) {
  var cardStyle = {
    marginRight: 'auto',
    marginLeft: 'auto',
    height: '380px',
    width: '280px'
  };

  return (
    <div className= "col s12 m6 l4">
      <div style={cardStyle} className="card">
        <div className="card-image">
          <img src={props.img} height="180"></img>
        </div>
        <div className="card-content">
          <ul>
            <li>name: <strong>{props.name}</strong></li>
            <li>brand: <strong>{props.brand}</strong></li>
            <li>price: <strong>{props.price}</strong></li>
            <li>ABV: <strong>{props.abv}</strong></li>
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
