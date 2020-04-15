import React from "react";
import ReactDOM from "react-dom";
import regeneratorRuntime from "regenerator-runtime"; //enables async. Do not remove.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon, faFacebook, faMicrosoft, faGoogle } from '@fortawesome/free-brands-svg-icons';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      product: '', customer: '', amazon: '', facebook: '', microsoft: '', google: '',
      facebookPercent: '', facebookPerson: '', microsoftPerson: ''
    }; 
  }

  async componentDidMount() {
    const res = await fetch(`/random`)
      .then(res => res.json())
      .then(res => {
        const madlibs = res;
        this.setState( {product: madlibs[0]} );
        this.setState( {customer: madlibs[1]} );
        this.setState( {amazon: madlibs[2]} );
        this.setState( {facebook: madlibs[3]} );
        this.setState( {microsoft: madlibs[4]} );
        this.setState( {google: madlibs[5]} );
        this.setState( {facebookPercent: madlibs[6]} );
        this.setState( {facebookPerson: madlibs[7]} );
        this.setState( {microsoftPerson: madlibs[8]} );
      })
  }

  render() {
    return (
      <div>
        <h1>PM Interview Question Generator</h1>
        <p>Inspired by sister site PM Interviews Against Humanity</p>
        <button autoFocus onClick={()=>window.location.reload(true)}>Gimme More Questions!</button>
        <div className='question'>
          <h2>Generic Interview Question</h2>
          <p>{`Design ${this.state.product} for ${this.state.customer}`}.</p>
        </div>
        <div className='question'>
          <h2><FontAwesomeIcon icon={faAmazon} />{` Amazon Interview Question`}</h2>
          <p>{`Tell me about a time when you demonstrated the leadership principle ${this.state.amazon}.`}</p>
        </div>
        <div className='question'>
          <h2><FontAwesomeIcon icon={faFacebook} />{` Facebook Interview Question`}</h2>
          <p>{`Rates for ${this.state.facebook} are down ${this.state.facebookPercent}%.`}</p>
          <p>{`How would you explain this to ${this.state.facebookPerson}?`}</p>
        </div>
        <div className='question'>
          <h2><FontAwesomeIcon icon={faMicrosoft} />{` Microsoft Interview Question`}</h2>
          <p>{`Explain ${this.state.microsoft} to ${this.state.microsoftPerson}.`}</p>
        </div>
        <div className='question'>
          <h2><FontAwesomeIcon icon={faGoogle} />{` Google Interview Question`}</h2>
          <p>{`Solve ${this.state.google} San Francisco.`}</p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));