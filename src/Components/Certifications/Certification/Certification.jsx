import React from 'react';
import pdf from '../../../Assets/pdf-icon.jpg';
import Attachment from '../../Attachment/Attachment';

const Certification = () => {
  const certificationTitle = 'certification.pdf';

  return (
    <div>
      <div className='row'>
        <div className='col-md-2'>Logo</div>
        <div className='col-md-8'>Name</div>
        <div className='col-md-2'>Date achieved</div>
      </div>
      <div className='row'><p>Emmitent</p></div>
      <div className='row'><p>Description</p></div>
      <div className='row'><Attachment  image = {pdf} title = {certificationTitle}/></div>
    </div>
  );
};

export default Certification;