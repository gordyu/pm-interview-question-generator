import React from 'react';
import { PDFReader } from 'reactjs-pdf-reader';
 
function Resume(props) {
  return (
    <div style={{ overflow:'scroll', height:"600" }}>
      <PDFReader url="./resumes/gordon.pdf" scale="1.2"/>
    </div>
  );
};
 
export default Resume;