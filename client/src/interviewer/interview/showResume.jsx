import React from 'react';
import { PDFReader } from 'reactjs-pdf-reader';
 
function showResume(props) {
  return (
    <div style={{ overflow:'scroll', height:"600" }}>
      <PDFReader url="./resumes/gordon.pdf" scale="1.2"/>
    </div>
  );
};
 
export default showResume;