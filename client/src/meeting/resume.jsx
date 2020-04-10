import React from 'react';
import { PDFReader } from 'reactjs-pdf-reader';
 
class Resume extends React.Component {
  render() {
    return (
      <div style={{ overflow:'scroll', height:"600" }}>
        <PDFReader url="./resumes/gordon.pdf" scale="1.2"/>
      </div>
    );
  }
};
 
export default Resume;