import React from 'react';
import PropTypes from 'prop-types';

function Header(props){
  return (
    <div className="jumbotron" id="jumbo">
      <h1 className="headerText">TAP ROOM</h1> 
      <button onClick={() => props.onClickToHome()} className="btn btn-outline-info">Menu</button>
      <button onClick={() => props.onClickAddNewTap()} className="btn btn-outline-info">Add New Tap</button>
    </div>
  );

}

Header.prototypes = {
  onClickToHome: PropTypes.func,
  onClickAddNewTap: PropTypes.func
}

export default Header;