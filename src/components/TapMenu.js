import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';

function TapMenu(props) {
  return (
    <>
      {props.tapMenu.map((tap) =>
        <Tap
          key={tap.id}
          id={tap.id}
          img={tap.img}
          name={tap.name}
          brand={tap.brand}
          price={tap.price}
          abv={tap.abv}
        />
      )};
    </>
  )
}

TapMenu.prototype = {
  tapMenu: PropTypes.array,
  
}

export default TapMenu;