import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faAmazon, faMicrosoft, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Banner() {
  return (
    <div style={{color: "white", background: "#a662d1" }}>
      <h1 style={{textAlign: "center" }}>
        Interview and Get Certified
      </h1>
      <p>
        &ensp;&middot;&ensp;Take a practice PM interview with an Advancing Women in Product Ambassador.<br/>
        &ensp;&middot;&ensp;Receive an AWIP certificate showing your level at at a <FontAwesomeIcon icon={faGoogle}/>,&ensp; 
        <FontAwesomeIcon icon={faAmazon}/>,&ensp; <FontAwesomeIcon icon={faMicrosoft}/>, or 
        &ensp;<FontAwesomeIcon icon={faFacebook}/>.<br/>
        &ensp;&middot;&ensp;You decide whether to show the certificate or not.<br/>
        &ensp;&middot;&ensp;Schedule your interview today!<br/>
      </p>
    </div>
  );
};

export default Banner;