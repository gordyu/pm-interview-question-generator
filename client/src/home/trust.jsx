import React from 'react';
import { Alert } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";

const icon = <FontAwesomeIcon icon={ faGooglePlusG } />;

export default class Trust extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
        <span style={{color: "#d32323"}}>{icon}</span> &nbsp; &nbsp;
        <b>This is a prototype.</b> Interviews booked will not take place.
      </Alert>
    );
  }
}