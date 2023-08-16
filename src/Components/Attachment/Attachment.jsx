import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import { AttachmentStyle } from './Attachment.module.scss';

const Attachment = ({ image, title }) => (
  <>
    <li className={AttachmentStyle}>
      <p>
        <img src={image} alt="" />
        {title}
        <a href="{props.downloadWord}"><FontAwesomeIcon icon={faCloudDownloadAlt} /></a>
        <a href="{props.downloadPdf}"><FontAwesomeIcon icon={faEye} /></a>
      </p>
    </li>
  </>
);

Attachment.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Attachment;
