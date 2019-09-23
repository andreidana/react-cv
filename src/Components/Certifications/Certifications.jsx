import React from 'react';

import StringTitle from '../StringTitle/StringTitle';
import Certification from './Certification/Certification';
import psm from '../../Assets/Certifications/psmi.png';

const Certifications = () => {
  const title = 'CERTIFICATIONS';
  const certification = {
    logo: psm,
    name: 'Scrum Master I',
    dateAchieved: '2018-09-10',
    emitent: 'Scrum.org',
    description: 'Certified scrum master dude',
  }

  return (
    <>
      <StringTitle title = {title}/>
      <Certification {...certification}/>
    </>
  );
};

export default Certifications;