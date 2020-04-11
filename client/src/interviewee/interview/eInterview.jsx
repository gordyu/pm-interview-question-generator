import React from 'react';
import EFeedback from "./eFeedback.jsx";

class EInterview extends React.Component {
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
            <UploadResume />
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

export default EInterview;