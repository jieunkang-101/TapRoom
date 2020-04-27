import React from 'react';
import PropTypes from 'prop-types';

function Header(props){
  return (
    <>
    <div className="container-fluid">
      <div className="jumbotron" id="jumbo">
        <div className="headerText">
          <h1>TAP ROOM</h1> 
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" onClick={() => props.onClickToHome()}><strong></strong></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" onClick={() => props.onClickToHome()}>Menu <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => props.onClickAddNewTap()}>AddNewTap</a>
            </li>
          </ul>
        </div>  
      </nav>
    </div>
    <br></br>
    <br></br>
    </>
  );
}

Header.prototypes = {
  onClickToHome: PropTypes.func,
  onClickAddNewTap: PropTypes.func
}

export default Header;