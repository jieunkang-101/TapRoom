import React from 'react';
import PropTypes from 'prop-types';

function Header(props){
  return (
    <div className="jumbotron">
      <h1 className="headerText">TAP ROOM</h1> 
      <button onClick = {() => props.onClickAddNewTap()} className="btn btn-outline-info">Add New Tap</button>
    </div>
  );

}

Header.prototypes = {
  onClickAddNewTap: PropTypes.func
}

export default Header;