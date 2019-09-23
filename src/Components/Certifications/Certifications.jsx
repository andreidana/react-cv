import React from 'react';

import StringTitle from '../StringTitle/StringTitle';
import Certification from './Certification/Certification';

const Certifications = () => {
  const title = 'CERTIFICATIONS';
  const certification = {
    logo: 'logo',
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