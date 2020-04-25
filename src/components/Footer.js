import React from 'react';
import PropTypes from 'prop-types';

function Footer(props){
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer-right">  
          <a href="https://www.linkedin.com/in/jieun--kang/"><i className="fa fa-linkedin"></i></a>
          <a href="http://www.github.com/jieunkang-101"><i className="fa fa-github"></i></a>
        </div>
        <div className="footer-left">
          <p className="footer-links">
            <a className="link-1" onClick={() => props.onClickToHome()}>Home</a>
            <a href="mailto:jieunkang101@gmail.com">Contact</a>
          </p>
          <p>Jieun Kang &copy; 2020</p>
        </div>
      </div>
    </React.Fragment>
  );  
}

Footer.prototypes = {
  onClickToHome: PropTypes.func,
  onClickAddNewTap: PropTypes.func
}

export default Footer;

