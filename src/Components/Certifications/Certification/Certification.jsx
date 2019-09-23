import React from 'react';
import pdf from '../../../Assets/pdf-icon.jpg';
import Attachment from '../../Attachment/Attachment';
import Image from '../../Image/Image';
import { ListStyle } from './Certification.module.scss';

const Certification = props => {
  return (
    <div className='mt-2'>
      <div className='row'>
        <div className='col-md-2'>
          <Image path = {props.logo} height = {50}></Image>
        </div>
        <div className='col-md-8'>
          <div className="row">{props.name}</div>
          <div className="row">{props.emitent}</div>
        </div>
        <div className='col-md-2 mt-3'>{props.dateAchieved}</div>
      </div>
      <br/>
      <div className='container'><p>{props.description}</p></div>
      <div className='container mb-2'><ul className={ ListStyle }><Attachment image = {pdf} title = {props.name}/></ul></div>
    </div>
  );
};

export default Certification;