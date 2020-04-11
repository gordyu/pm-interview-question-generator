import RCalendar from './rCalendar.jsx';

class RSchedule extends React.Component {
    render() {
      return(  
        <div className="interviewer-dashboard">
          <h2>
            Please enter the times you are available. Thank you!
          </h2>
          <span style={{display: 'flex', justifyContent: 'center', alignItems: "center", padding: "0"}}>
            <RCalendar />
          </span>
        </div>
      );
    }
  }

  export default RSchedule;