import React from 'react';
import Trust from '../../home/trust.jsx';
import UploadResume from './uploadResume.jsx';
import ECalendar from './eCalendar.jsx';

class ESchedule extends React.Component {
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
            <ECalendar />
          </span>
        </div>
      );
    }
  }

  export default ESchedule;