import React from 'react';

import StringTitle from '../StringTitle/StringTitle';
import ContactSection from './ContactSection/ContactSection';
import MapsIntegration from './MapsIntegration/MapsIntegration';
import MailSection from '../MailSection/MailSection';

const Contact = () => {
  const title = 'CONTACT';
  const mailTitle = 'SAY HELLO';
  const classes = 'col-md-4 text-center';

  return (
    <>
      <StringTitle title = {title}/>
      <ContactSection className={classes} icon='phone' text='+40727776494'></ContactSection>
      <ContactSection className={classes} icon='adress' text='Str. Fagetului, Sect. 4, Bucharest, Romania'></ContactSection>
      <ContactSection className={classes} icon='e-mail' text='andrei.dana87@gmail.com'></ContactSection>
      <MapsIntegration></MapsIntegration>
      <StringTitle title = {mailTitle}/>
      <MailSection></MailSection>
    </>
  );
};

export default Contact;