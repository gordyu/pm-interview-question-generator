import React from "react";
import ReactDOM from "react-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { madlibs: [] }; 
  }

  async componentDidMount() {
    const res = await fetch("http://localhost:5000/");
    this.setState({ madlibs: res });
  }

  render() {
    return (
      <div>
        <h2>Universal PM Interview Question</h2>
        <p></p>
        <h2>Amazon Interview Quesiton</h2>
        <p></p>
        <h2>Facebook Interview Question</h2>
        <p></p>
        <h2>Microsoft Interview Question</h2>
        <p></p>
        <h2>Google Interviews Question</h2>
        <p></p>
        <button>Again!</button>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));