import React from 'react';
//import '../App.css';

function Footer(){
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer-left">
          <p>Jieun Kang &#9400; 2020</p>
        </div>
        <div className="footer-right">  
          <a href="https://www.linkedin.com/in/jieun--kang/"><i class="fa fa-linkedin"></i></a>
          <a href="http://www.github.com/jieunkang-101"><i class="fa fa-github"></i></a>
        </div>
      </div>
    </React.Fragment>
  );  
}
export default Footer;