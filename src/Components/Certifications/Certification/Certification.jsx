import React from 'react';
import pdf from '../../../Assets/pdf-icon.jpg';
import Attachment from '../../Attachment/Attachment';

const Certification = props => {
  return (
    <div>
      <div className='row'>
        <div className='col-md-2'>{props.logo}</div>
        <div className='col-md-8'>{props.name}</div>
        <div className='col-md-2'>{props.dateAchieved}</div>
      </div>
      <div className='row'><p>{props.emitent}</p></div>
      <div className='row'><p>{props.description}</p></div>
      <div className='row'><Attachment  image = {pdf} title = {props.name}/></div>
    </div>
  );
};

export default Certification;