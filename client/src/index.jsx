import React from "react";
import ReactDOM from "react-dom";
import regeneratorRuntime from "regenerator-runtime"; //enables async. Do not remove.

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      product: '', customer: '', amazon: '', facebook: '', microsoft: '', google: '',
      facebookPercent: '', facebookPerson: '', microsoftPerson: ''
    }; 
  }

  async componentDidMount() {
    const res = await fetch(`http://localhost:5000/random`)
      .then(res => res.json())
      .then(res => {
        //console.log('Got this from the server', res);
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
        //console.log('state is now', this.state);
      })
  }

  render() {
    return (
      <div>
        <h1>PM Interviews Against Humanity</h1>
        <p>Inspired by the first 200 white cards from Cards Against Humanity&trade;</p>
        <button>Gimme More Questions!</button>
        <div className='question'>
          <h2>Universal PM Interview Question</h2>
          <p>{`Design ${this.state.product} for ${this.state.customer}`}.</p>
        </div>
        <div className='question'>
          <h2>Amazon Interview Question</h2>
          <p>{`Tell me about a time when you were ${this.state.amazon}.`}</p>
        </div>
        <div className='question'>
          <h2>Facebook Interview Question</h2>
          <p>{`Rates for ${this.state.facebook} are down ${this.state.facebookPercent}%.`}</p>
          <p>{`How would you explain this to ${this.state.facebookPerson}?`}</p>
        </div>
        <div className='question'>
          <h2>Microsoft Interview Question</h2>
          <p>{`Explain ${this.state.microsoft} to ${this.state.microsoftPerson}.`}</p>
        </div>
        <div className='question'>
          <h2>Google Interview Question</h2>
          <p>{`Solve ${this.state.google}.`}</p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));