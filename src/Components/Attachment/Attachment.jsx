import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import { AttachmentStyle } from './Attachment.module.scss';

const Attachment = (props) => (
  <>
    <li className = { AttachmentStyle }>  
      <p>
        <img src = {props.image} alt = ''/>
        {props.title}
        <a href='{props.downloadWord}'><FontAwesomeIcon icon={faCloudDownloadAlt} /></a>
        <a href='{props.downloadPdf}'><FontAwesomeIcon icon={faEye} /></a>
      </p>
    </li>
  </>
);

export default Attachment;