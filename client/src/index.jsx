import React from "react";
import ReactDOM from "react-dom";
import regeneratorRuntime from "regenerator-runtime"; //enables async. Do not remove.
let res;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      product: '', customer: '', amazon: '', facebook: '', microsoft: '', google: '',
      facebookPercent: '', facebookPerson: '', microsoftPerson: ''
    }; 
  }

  async componentDidMount() {
    res = await fetch(`http://localhost:5000/random`)
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
        <p>Using the first 200  white cards from Cards Against Humanity&trade;</p>
        <div>
          <h2>Universal PM Interview Question</h2>
          <p>{`Design the ${this.state.product} for ${this.state.customer}`}.</p>
        </div>
        <div>
          <h2>Amazon Interview Quesiton</h2>
          <p>{`Tell me about a time when you ${this.state.amazon}.`}</p>
        </div>
        <div>
          <h2>Facebook Interview Question</h2>
          <p>{`Usage of ${this.state.facebook} is down ${this.state.facebookPercent}%. How would you explain this to Mark Zuckerberg?`}</p>
        </div>
        <div>
          <h2>Microsoft Interview Question</h2>
          <p>{`Explain ${this.state.microsoft} to ${this.state.microsoftPerson}.`}</p>
        </div>
        <div>
          <h2>Google Interview Question</h2>
          <p>{`Solve ${this.state.google}.`}</p>
        </div>
        <button>Again!</button>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));