import React from 'react';
import PropTypes from 'prop-types';
import pdf from '../../../Assets/pdf-icon.jpg';
import Attachment from '../../Attachment/Attachment';
import Image from '../../Image/Image';
import { ListStyle } from './Certification.module.scss';

const Certification = ({
  logo, name, emitent, dateAchieved, description,
}) => (
  <div className="mt-2 mb-2">
    <div className="row">
      <div className="col-md-2">
        <Image path={logo} height={50} />
      </div>
      <div className="col-md-8">
        <div className="row">{name}</div>
        <div className="row">{emitent}</div>
      </div>
      <div className="col-md-2 mt-3">{dateAchieved}</div>
    </div>
    <br />
    <div className="container"><p>{description}</p></div>
    <div className="container mb-2"><ul className={ListStyle}><Attachment image={pdf} title={name} /></ul></div>
    <hr />
  </div>
);

Certification.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  emitent: PropTypes.string.isRequired,
  dateAchieved: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Certification;
