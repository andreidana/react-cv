import React from 'react';
import { faEnvelopeOpen, faMobile, faMapMarker } from '@fortawesome/free-solid-svg-icons';

import StringTitle from '../StringTitle/StringTitle';
import ContactSection from './ContactSection/ContactSection';
import MapsIntegration from './MapsIntegration/MapsIntegration';
import MailSection from '../MailSection/MailSection';

const Contact = () => {
  const title = 'CONTACT';
  const mailTitle = 'SAY HELLO';

  return (
    <>
      <StringTitle title={title} />
      <div className="row">
        <ContactSection icon={faMobile} text="+40727776494" />
        <ContactSection icon={faMapMarker} text="Str. Fagetului, Sect. 4, Bucharest, Romania" />
        <ContactSection icon={faEnvelopeOpen} text="andrei.dana87@gmail.com" />
      </div>
      <MapsIntegration />
      <StringTitle title={mailTitle} />
      <MailSection />
    </>
  );
};

export default Contact;
