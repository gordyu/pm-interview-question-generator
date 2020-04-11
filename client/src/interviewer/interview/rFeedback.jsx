import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function RFeedback() {
  return (
    <Form>
      <h2>Feedback</h2>
      <FormGroup>
        <Label for="exampleSelect">Was the interviewee on time?</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Yes</option>
          <option>No, less than 5 minutes late</option>
          <option>No, more than 5 mintues late</option>
          <option>No, more than 5 mintues late and I need to leave</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">What is the interviewee doing well?</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">What might the interviewee improve?</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">What level is this interviewee at Google or AWS?</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>APM</option>
          <option>PM</option>
          <option>SRPM</option>
          <option>PPM</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Would you recommend this candidate at that level?</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Yes, 100%</option>
          <option>Yes, with a few improvements</option>
          <option>Maybe, depends on the context</option>
          <option>Not without substantial improvements</option>
          <option>No</option>
        </Input>
      </FormGroup>
      <Button color="success">Submit</Button>
    </Form>
  );
}

export default RFeedback;