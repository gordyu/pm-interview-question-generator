import React from 'react';
import { Jumbotron} from 'reactstrap';

const Jumbo = (props) => {
  return (
    <Jumbotron style={{ padding:"5px", backgroundColor: '#a662d1' }}>
      <h1 className="display-3" style={{textAlign: 'center'}}>Get AWIP Certified</h1>
      <hr className="my-2" />
      <p className="lead">Take a practice interview with the experienced PMs of Advancing Women in Product's PM community.  Receive a AWIP certificate showing your level at Google or AWS.  You decide whether to show it or not.  Sign up today!</p>
    </Jumbotron>
  );
};

export default Jumbo;