import React from 'react';
import { Card, Button, CardTitle, CardText, CardColumns } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons';

function FAQ(props) {

  function handleClickAWIP(e) {
    window.open("https://advancingwomeninproduct.org");
  }
  
  function handleClickGladwell(e) {
    window.open("https://www.google.com/books/edition/Blink/VKGbb1hg8JAC?hl=en&gbpv=0");
  }

  function handleClickReddit(e) {
    window.open("https://www.reddit.com/r/cscareerquestions/comments/6fzaua/down_leveling/");
  }

  return (
    <div>
      <CardColumns>
        <Card body inverse color="primary">
            <CardTitle>What is AWIP 2.0?</CardTitle>
            <CardText>AWIP (Advancing Women in Product) is a global nonprofit with almost 12,000 members of all backgrounds.
            Its mission is to increase equality of opportunity in tech industry leadership through skills-based programming, 
            networking, and innovation.  AWIP 2.0 is just one of many AWIP initiatives.</CardText>
            <Button onClick={handleClickAWIP}>
              Visit AWIP's Website&ensp;<FontAwesomeIcon icon={faGlobe} />
            </Button>
        </Card>
        <Card body inverse color="success">
            <CardTitle>How Reliable Are Your Certificates?</CardTitle>
            <CardText>AWIP 2.0 is an example of cognitive "thin slicing," which is the principle behind interviews.
            A sufficiently experienced person can, by listening to another person for a very short length of time, predict
            their future performance with a remarkable degree of accuracy.
            </CardText>
            <Button onClick={handleClickGladwell}>
              Read More with Google Books&ensp;<FontAwesomeIcon icon={faBookOpen} />
            </Button>
        </Card>
        <Card body inverse color="info">
            <CardTitle>Why Would I Do This?</CardTitle>
            <CardText>Tech companies uplevel or downlevel candidates all the time.  By providing you an expert, outside appraisal
            of your level at a Google or AWS, you will have greater certainty and confidence at any negotiation.  Or, if your
            certificate level seems too low, implement your interviewer's written feedback so it won't be an issue when it matters.</CardText>
            <Button onClick={handleClickReddit}>
              Read an Example on Reddit&ensp;<FontAwesomeIcon icon={faRedditAlien} />
            </Button>
        </Card>
      </CardColumns>
    </div>
  );
};

export default FAQ;