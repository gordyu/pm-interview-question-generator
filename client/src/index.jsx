import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
/* Local Imports */
import GoogleLogin from 'react-google-login';
import Trust from "./home/trust.jsx";
import Jumbo from "./home/jumbotron.jsx";
import Ambassadors from "./home/carousel.jsx";
import FAQ from "./home/FAQ.jsx";
/* 1. Schedule the Meeting */
import ESchedule from "./interviewee/schedule/eSchedule.jsx";
import RSchedule from "./interviewer/schedule/rSchedule.jsx";
/* 2. Have the Interview */
import EInterview from "./interviewee/interview/eInterview.jsx";
import RInterview from "./interviewer/interview/rInterview.jsx";

function errorGoogle(error) {
  console.log('Google login failed with error', error);
}

function responseGoogle(response) {
  if (response === null) return;
  else {
    //console.log('responseGoogle this is', this);
    let profile = response["profileObj"];
    let email = profile["email"];
    //console.log('Google email is', email);
    if (email.includes('@advancingwomeninproduct.org')) {
      this.setState({ permissions: 'interviewer' });
      this.setState({ redirect: 'schedule' });
      console.log('hello interviewer!');
    }
    else {
      this.setState({ permissions: 'interviewee' });
      this.setState({ redirect: 'schedule' });
      console.log('hello interviewee!');
    }
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      permissions: 'none',
      redirect: 'none'
    }; 
  }

  render() {
    return (
      <Router>
         { this.state.redirect === 'schedule' ? <Redirect to='/schedule' /> :
            this.state.redirect === 'interview' ? <Redirect to='/meeting' /> :
              <Redirect to='/' /> }
        <Switch>
          <Route path='/schedule'>
            { this.state.permissions === 'interviewee' ? <ESchedule /> :
                this.state.permissions == 'interviewer' ? <RSchedule /> :
                  <Home /> }
          </Route>
          <Route path='/interview'>
            { this.state.permissions === 'interviewee' ? <EInterview /> :
                this.state.permissions === 'interviewer' ? <RInterview /> :
                  <Home /> } 
          </Route>
          <Route path='/'>
            <div className='home'>
              { /* console.log('at fresh load, this is', this) */ }
              <Trust />
              <Jumbo />
              <span style={{display: 'flex', justifyContent: 'center'}}>
                <GoogleLogin
                  clientId="967595854678-5hfgveg74mdslobjc9ggvvlupeds8vmr.apps.googleusercontent.com"
                  buttonText="Log In or Sign Up for Your Interview and Certificate"
                  theme="dark"
                  cookiePolicy={'single_host_origin'}
                  // Per https://stackoverflow.com/questions/51984016/react-google-login and https://stackoverflow.com/questions/44291806/trouble-accessing-props-in-callback-function-of-google-login-using-react-google
                  // Causes error 'Cannot read property 'bind' of undefined', meaning 'this' here is undefined
                  onSuccess={responseGoogle.bind(this)}
                  onFailure={errorGoogle.bind(this)}
                />
              </span>
              <br />
              <h2>
                Get Certified 
              </h2>
              <span>
                <Container style={{display: 'flex', justifyContent: 'center', alignItems: "center", padding: "0"}}>
                  <Row>
                    <Col>
                      <img src='./sampleCerts/APM.png' width="250"/>
                    </Col>
                    <Col>
                      <img src='./sampleCerts/PM.png' width="250"/>
                    </Col>
                    <Col>
                      <img src='./sampleCerts/SRPM.png' width="250"/>
                    </Col>
                  </Row>
                </Container>
              </span>
              <br />
              <h2>
                By an AWIP Ambassador
              </h2>
              <Container style={{display: 'flex', justifyContent: 'center'}}>
                <Ambassadors style={{
                    backgroundColor: "grey", 
                    textAlign: "center",
                    display: "inline-block" 
                }} />
              </Container>
              <br />
              <h2>
                FAQ
              </h2>
              <FAQ />
              <br />
              <span style={{display: 'flex', justifyContent: 'center'}}>Need help?  Email AWIP2.0.0 at Gmail.</span>
            </div>
          </Route>
        </Switch> 
      </Router>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));