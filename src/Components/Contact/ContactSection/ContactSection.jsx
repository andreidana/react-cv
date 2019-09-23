import React from 'react';

const ContactSection = props => {
  return (
    <>
      <div className='row'>
        <p>{props.icon}</p>
      </div>
      <div className='row'>
        <p>{props.text}</p>
      </div>
    </>
  );
};

export default ContactSection;