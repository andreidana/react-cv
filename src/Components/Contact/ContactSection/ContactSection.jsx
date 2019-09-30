import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ContactSection.module.scss';

const ContactSection = props => {
  return (
    <div className={`col-md-4 ${styles.allignCenter}`}>
      <div className={`row ${styles.iconCircle}`}>
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <div className={`row ${styles.allignCenter}`}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default ContactSection;