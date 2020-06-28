import React from "react";
import ReactDOM from "react-dom";
import regeneratorRuntime from "regenerator-runtime"; //enables async. Do not remove.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon, faFacebook, faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faUserTie, faMobileAlt, faChessQueen, faChartLine, faCalculator } from '@fortawesome/free-solid-svg-icons';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      behavioral: '', design: '', strategy: '', execution: '', estimation: ''
    }; 
  }

  async componentDidMount() {
    const res = await fetch(`/random`)
      .then(res => res.json())
      .then(res => {
        const madlibs = res;
        this.setState( {behavioral: madlibs[0]} );
        this.setState( {design: madlibs[1]} );
        this.setState( {strategy: madlibs[2]} );
        this.setState( {execution: madlibs[3]} );
        this.setState( {estimation: madlibs[4]} );
      })
  }

  render() {
    return (
      <div>
        <h1>AWIP's Real <FontAwesomeIcon icon={faAmazon} /> <FontAwesomeIcon icon={faFacebook} /> <FontAwesomeIcon icon={faGoogle} /> <FontAwesomeIcon icon={faMicrosoft} /> PM Interview Questions</h1>
        <p>Be creative: alter companies, products, and other details to suit your needs!</p>
        <div className='question'>
          <h2><FontAwesomeIcon icon={faUserTie} />{` Behavioral (Leadership & Drive)`}</h2>
          <p>{`${this.state.behavioral}`}</p>
        </div>
        <div className='question'>
          <h2><FontAwesomeIcon icon={faMobileAlt} />{` Product Design (Product Sense)`}</h2>
          <p>{`${this.state.design}`}</p>
        </div>
        <div className='question'>
          <h2><FontAwesomeIcon icon={faChessQueen} />{` Strategy`}</h2>
          <p>{`${this.state.strategy}`}</p>
        </div>
        <div className='question'>
          <h2><FontAwesomeIcon icon={faChartLine} />{` Execution (Data Analysis)`}</h2>
          <p>{`${this.state.execution}`}</p>
        </div>
        <div className='question'>
          <h2><FontAwesomeIcon icon={faCalculator} />{` Estimation`}</h2>
          <p>{`${this.state.estimation}`}</p>
        </div>
        <button onClick={()=>window.location.reload(true)}>Another Set of Questions, Please</button>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));