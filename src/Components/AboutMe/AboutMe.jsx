import React from 'react';

import StringTitle from '../StringTitle/StringTitle';
import PersonalData from '../PersonalData/PersonalData';

const AboutMe = () => {
  const title = 'ABOUT ME';
  const descriptionTitle = `FULL STACK DEVELOPER`;
  const servicesTitle = `SERVICES`;

  return (
    <>
      <StringTitle title = {title}/>
      <PersonalData />
      <StringTitle title = {descriptionTitle}/>
      <StringTitle title = {servicesTitle}/>
    </>
  );
};

export default AboutMe;