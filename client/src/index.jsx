import React from "react";
import ReactDOM from "react-dom";
import regeneratorRuntime from "regenerator-runtime"; //enables async

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      product: '', customer: '', amazon: '', facebook: '', microsoft: '', google: '',
      facebookPercent: '', facebookPerson: '', microsoftPerson: ''
      }; 
  }

  async componentDidMount() {
    const res = await fetch("http://localhost:5000/");
    this.setState.product = res[0];
  }

  render() {
    return (
      <div>
        <h1>PM Interviews Against Humanity</h1>
        <p>Using the first 200 Cards Against Humanity White Cards</p>
        <h2>Universal PM Interview Question</h2>
        <p>Design a {this.state.product} for {this.state.customer}.</p>
        <h2>Amazon Interview Quesiton</h2>
        <p>Tell me about a time when you {this.state.amazon}.</p>
        <h2>Facebook Interview Question</h2>
        <p>Usage of {this.state.facebook} is down {Math.floor(Math.Random()*(20-10+1))+10}%. How would you explain this to Mark Zuckerberg?</p>
        <h2>Microsoft Interview Question</h2>
        <p></p>
        <h2>Google Interviews Question</h2>
        <p>Solve {this.state.google}.</p>
        <button>Again!</button>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));