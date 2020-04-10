import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Example = (props) => {
  return (
    <Form>
      <h2>Feedback required for certificate</h2>
      <FormGroup>
        <Label for="exampleSelect">Was the interviewer on time?</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Yes</option>
          <option>No, less than 10 minutes late</option>
          <option>No, more than 10 mintues late</option>
          <option>No, more than 10 mintues late and I need to leave</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">How do you feel you performed?</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>5 - Among the best I've given</option>
          <option>4 - Top 20% performance </option>
          <option>3 - Representative of my everday skill</option>
          <option>2 - Will approach differently next time</option>
          <option>1 - Yikes, let's never speak of this again</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">How do you feel the interviewer performed?</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>5 - Welcoming, engaged, challenging</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1 - Would avoid this person in the future</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Please share feedback to improve this experience:</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <Button color="success">Submit</Button>
    </Form>
  );
}

export default Example;