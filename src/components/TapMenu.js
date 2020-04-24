import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';

function TapMenu(props) {


  return (
    <>
      <button onClick = {() => props.onClickAddNewTap()} className="btn btn-outline-info">Add New Tap</button>
      <div className="tapMenu">
        <div className="row">
          {props.tapMenu.map((tap) =>
            <Tap
              key={tap.id}
              id={tap.id}
              img={tap.img}
              name={tap.name}
              brand={tap.brand}
              price={tap.price}
              abv={tap.abv}
              pints={tap.pints}
            />
          )}
        </div>  
      </div>
    </>
  )
}

TapMenu.prototypes = {
  tapMenu: PropTypes.arrayOf(PropTypes.object),
  onClickAddNewTap: PropTypes.func
}

export default TapMenu;