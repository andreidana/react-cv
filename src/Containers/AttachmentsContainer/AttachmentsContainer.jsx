import React from 'react'
import pdf from '../../Assets/pdf-icon.jpg';
import word from '../../Assets/word-icon.jpg';
import Attachment from '../../Components/Attachment/Attachment';
import './AttachmentsContainer.module.scss';

const AttachmentsContainer = () => {
  const pdfTitle = 'Curriculum Vitae.pdf';
  const wordTitle = 'Curriculum Vitae.docx';

  return (
    <>
      <ul className = 'list-style-none'>  
        <Attachment image = {pdf} title = {pdfTitle}/>
        <Attachment image = {word} title = {wordTitle}/>
      </ul>
    </>
  );
};

export default AttachmentsContainer;