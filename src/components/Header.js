import React from 'react';
import PropTypes from 'prop-types';

function Header(props){
  return (
    <div className="jumbotron" id="jumbo">
      <div className="headerText">
        <h1>TAP ROOM</h1> 
      </div>
      <div className="button-right">
        <button onClick={() => props.onClickToHome()} className="btn btn-outline-info">Menu</button>
        <button onClick={() => props.onClickAddNewTap()} className="btn btn-outline-info">Add New Tap</button>
      </div>
    </div>
  );

}

Header.prototypes = {
  onClickToHome: PropTypes.func,
  onClickAddNewTap: PropTypes.func
}

export default Header;