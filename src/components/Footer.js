import React from 'react';

function Footer(){
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer-left">
          <p>Jieun Kang &#9400; 2020</p>
        </div>
        <div className="footer-right">  
          <a href="https://www.linkedin.com/in/jieun--kang/"><i className="fa fa-linkedin"></i></a>
          <a href="http://www.github.com/jieunkang-101"><i className="fa fa-github"></i></a>
        </div>
      </div>
    </React.Fragment>
  );  
}
export default Footer;