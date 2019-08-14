import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import './Attachment.module.scss';

const Attachment = (props) => (
  <>
    <li className = 'li-style'>  
      <p>
        <img src = '{props.image}' alt = ''/>
        {props.title}
        <a href='{props.downloadPdf}'><FontAwesomeIcon icon={faEye} /></a>
        <a href='{props.downloadWord}'><FontAwesomeIcon icon={faCloudDownloadAlt} /></a>
      </p>
    </li>
  </>
);

export default Attachment;