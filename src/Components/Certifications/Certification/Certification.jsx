import React from 'react';
import pdf from '../../../Assets/pdf-icon.jpg';
import Attachment from '../../Attachment/Attachment';
import Image from '../../Image/Image';

const Certification = props => {
  return (
    <div>
      <div className='row'>
        <div className='col-md-2'>
          <Image path = {props.logo} height = {50}></Image>
        </div>
        <div className='col-md-8'>
          <div className="row">{props.name}</div>
          <div className="row">{props.emitent}</div>
        </div>
        <div className='col-md-2'>{props.dateAchieved}</div>
      </div>
      <br/>
      <div className='row'><p>{props.description}</p></div>
      <div className='row'><Attachment image = {pdf} title = {props.name}/></div>
    </div>
  );
};

export default Certification;