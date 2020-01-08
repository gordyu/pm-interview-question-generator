import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
/* Home Libraries */
import GoogleLogin from 'react-google-login';
import Trust from "./home/trust.jsx";
import Jumbo from "./home/jumbotron.jsx";
import Ambassadors from "./home/carousel.jsx";
import FAQ from "./home/FAQ.jsx";
/* Dashboard Libraries */
import UploadResume from "./dashboard/uploadResume.jsx";
import Schedule from "./dashboard/schedule.jsx";
/* Meeting Libraries */
import RFeedback from "./meeting/rFeedback.jsx";
import EFeedback from "./meeting/eFeedback.jsx";
import Resume from "./meeting/resume.jsx";

const errorGoogle = (error) => {
  // console.log(this);
  console.log('Google login failed with error', error);
}

const responseGoogle = (response) => {
  if (response === null) return;
  else {
    // Console logging Google's response
    // response = JSON.stringify(response);
    console.log('responseGoogle this is', this);
    // console.log('Google profile is', response["profileObj"]);
    var profile = response["profileObj"];
    var email = profile["email"];
    console.log('Google email is', email);
    // React Router
    if (email.includes('@advancingwomeninproduct.org')) {
      this.setState({ permissions: 'interviewer' });
      console.log('hello interviewer!');
    }
    else {
      this.setState({ permissions: 'interviewee' });
      console.log('hello interviewee!');
    } 
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      permissions: 'none' 
    }; 
    /* Following code creates error: Cannot read property 'bind' of undefined (the first this causes error)
    this.GoogleLogin = this.GoogleLogin.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
    */
  }
 
  render(){
    return (
      <Router>
        <Switch>
          <Route path="/dashboard">
            { this.state.permissions === 'none' ? <Home /> :
                this.state.permissions === 'interviewee' ? <EDashboard /> : 
                  <RDashboard /> }
          </Route>
          <Route path="/meeting">
            { this.state.permissions === 'none' ? <Home /> :
                this.state.permissions === 'interviewee' ? <RMeeting /> : 
                  <RMeeting /> }  
          </Route>
          <Route path="/">
            <div className="home">
              { console.log('at fresh load, this is', this) };
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
                  onSuccess={() => this.responseGoogle}
                  onFailure={() => this.errorGoogle}
                  /* Previous Pra direction
                  onSuccess={responseGoogle.bind(this)}
                  onFailure={errorGoogle.bind(this)}
                  */
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

class EDashboard extends React.Component {
  render() {
    return(  
      <div className="interviewee-dashboard">
        <Trust />
        <h2>
          Step 1 of 2: Upload your resume
        </h2>
        <UploadResume />
        <br />
        <h2>
          Step 2 of 2: Schedule your interview
        </h2>
        <span style={{display: 'flex', justifyContent: 'center', alignItems: "center", padding: "0"}}>
          <Schedule />
        </span>
      </div>
    );
  }
}

class RDashboard extends React.Component {
  render() {
    return(  
      <div className="interviewer-dashboard">
        <Trust />
        <h2>
          Setup Step 1 of 2: Upload your resume
        </h2>
        <UploadResume />
        <br />
        <h2>
          Setup Step 2 of 2: Schedule your interview
        </h2>
        <span style={{display: 'flex', justifyContent: 'center', alignItems: "center", padding: "0"}}>
          <Schedule />
        </span>
      </div>
    );
  }
}

class EMeeting extends React.Component {
  render() {
    return(
      <div className="interviewee-meeting">
        <Container>
          <Row>
          <Col xs="9">
            <h2>Interview Room</h2>
            <div className="iframe-container" style={{overflow: "hidden", paddingTop: "56.25%", position: "relative"}}>
              <iframe allow="microphone; camera" style={{border: "0", height: "100%", left: "0", position: "absolute", top: "0", width: "100%"}} 
                src="https://success.zoom.us/wc/join/2128331552" frameBorder="0"></iframe>
            </div>
            <br />
            <h2>Your Resume</h2>
            <Resume />
          </Col>
          <Col xs="3">
            <EFeedback />
          </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

class RMeeting extends React.Component {
  render() {
    return(
      <div className="interviewer-meeting">
        <Container>
          <Row>
          <Col xs="9">
            <h2>Interview Room</h2>
            <div className="iframe-container" style={{overflow: "hidden", paddingTop: "56.25%", position: "relative"}}>
              <iframe allow="microphone; camera" style={{border: "0", height: "100%", left: "0", position: "absolute", top: "0", width: "100%"}} 
                src="https://success.zoom.us/wc/join/2128331552" frameBorder="0"></iframe>
            </div>
            <br />
            <h2>Interviewee's Resume</h2>
            <Resume />
          </Col>
          <Col xs="3">
            <RFeedback />
          </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));