import React from 'react';
import { Card, Button, CardTitle, CardText, CardColumns } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBookOpen, faUsers, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons';

function FAQ() {

  function handleClickAWIP() {
    window.open("https://advancingwomeninproduct.org");
  }
  
  function handleClickGladwell() {
    window.open("https://www.google.com/books/edition/Blink/VKGbb1hg8JAC?hl=en&gbpv=0");
  }

  function handleClickReddit() {
    window.open("https://www.reddit.com/r/cscareerquestions/comments/6fzaua/down_leveling/");
  }

  function handleClickAWIPAmbassadors() {
    window.open("https://www.advancingwomeninproduct.org/ambassador-program");
  }

  function handleClickHarvard() {
    window.open("https://hbr.org/2014/08/why-women-dont-apply-for-jobs-unless-theyre-100-qualified");
  }

  return (
    <div>
      <CardColumns>
        <Card body inverse color="primary">
          <CardTitle>What is AWIP 2.0?</CardTitle>
          <CardText>
            AWIP (Advancing Women in Product) is a global nonprofit with almost 12,000 members of all genders and backgrounds.
            Its mission is to increase equality of opportunity in tech industry leadership through skills-based programming, 
            networking, and innovation.  AWIP 2.0 is just one of many AWIP initiatives.
          </CardText>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button onClick={handleClickAWIP}>
              Visit AWIP's Website&ensp;<FontAwesomeIcon icon={faGlobe} />
            </Button>
          </div>
        </Card>
        <Card body inverse color="success">
          <CardTitle>How Reliable Are Your Certificates?</CardTitle>
          <CardText>
            AWIP 2.0 is an example of cognitive "thin slicing," which is the principle behind all job interviews.
            A sufficiently experienced person can, by listening to another person for a very short length of time, predict
            their future performance with a remarkable degree of accuracy.
          </CardText>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button onClick={handleClickGladwell}>
              Read More About Thin Slicing on Google Books&ensp;<FontAwesomeIcon icon={faBookOpen} />
            </Button>
          </div>
        </Card>
        <Card body inverse color="info">
          <CardTitle>Why Would I Do This?</CardTitle>
          <CardText>
            Tech companies uplevel or downlevel candidates all the time. By providing you an expert, outside appraisal
            of your level at a Google or AWS, you will have greater certainty and confidence in any job search situation.  Or, if your
            certificate level seems low, implement your interviewer's written feedback so it won't be an issue when it matters.
          </CardText>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button onClick={handleClickReddit}>
              Read an Example on Reddit&ensp;<FontAwesomeIcon icon={faRedditAlien} />
            </Button>
          </div>
        </Card>
      </CardColumns>

      <CardColumns>
        <Card body inverse color="success">
          <CardTitle>Who Are the Interviewers?</CardTitle>
          <CardText>
            Advancing Women in Product facilitates tech industry leaders (AWIP Ambassadors) wishing to help the next generation of product managers by
            committing to donating a small amount of their valuable time. AWIP 2.0 maximizes their positive impact on someone's career in light of these time restrictions.
          </CardText>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button onClick={handleClickAWIPAmbassadors}>
              See AWIP's Ambassadors&ensp;<FontAwesomeIcon icon={faUsers} />
            </Button>
          </div>
        </Card>
        <Card body inverse color="info">
          <CardTitle>How Does AWIP 2.0 Advance Women?</CardTitle>
          <CardText>
            Men apply for jobs when they meet 60% of the qualifications, whereas women only apply when they meet 100%. 
            By certifying candidates at a particular level, AWIP 2.0 gives women an extra tool level the playing field.
          </CardText>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button onClick={handleClickHarvard}>
              Read More About This Gender Difference at Harvard Business Review&ensp;<FontAwesomeIcon icon={faGraduationCap} />
            </Button>
          </div>
        </Card>
        <Card body inverse color="primary">
          <CardTitle>How Should I Prepare?</CardTitle>
          <CardText>
            There are so many resources online for program manager interviews that finding the best sources can be difficult.
            AWIP works on this issue with its original programming. To follow this programming, join AWIP at the location below.
          </CardText>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button onClick={handleClickAWIP}>
              Visit AWIP's Website&ensp;<FontAwesomeIcon icon={faGlobe} />
            </Button>
          </div>
        </Card>        
      </CardColumns>
    </div>
  );
};

export default FAQ;