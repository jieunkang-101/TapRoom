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
        {/* <div className="button-right">
          <button onClick={() => props.onClickToHome()} className="btn btn-outline-info">Menu</button>
          <button onClick={() => props.onClickAddNewTap()} className="btn btn-outline-info">Add New Tap</button>
        </div> */}
      </div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" onClick={() => props.onClickToHome()}><strong></strong></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" onClick={() => props.onClickToHome()}>Menu <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => props.onClickAddNewTap()}>AddNewTap</a>
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