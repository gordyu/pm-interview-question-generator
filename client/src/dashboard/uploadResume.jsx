import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';

const uploadResume = (props) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Form>
        <FormGroup>
          <Label for="uploadResume">In PDF format.  Your interviewer will see it during your interview.</Label>
          <Input type="file" name="file" id="uploadResume" /> 
           &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <Button color="success">Upload Resume&ensp;<FontAwesomeIcon icon={faFileUpload} /></Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default uploadResume;