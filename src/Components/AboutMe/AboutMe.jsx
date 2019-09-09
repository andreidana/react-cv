import React from 'react';

import StringTitle from '../StringTitle/StringTitle';
import PersonalData from '../PersonalData/PersonalData';
import Teamleader from '../TeamLeader/Teamleader';
import FullStackDeveloper from '../FullStackDeveloper/FullStackDeveloper';

const AboutMe = () => {
  const title = 'ABOUT ME';
  const teamLeaderTitle = `TEAM LEADER`;
  const descriptionTitle = `FULL STACK DEVELOPER`;

  return (
    <>
      <StringTitle title = {title}/>
      <PersonalData />
      <StringTitle title = {teamLeaderTitle}/>
      <Teamleader />
      <StringTitle title = {descriptionTitle}/>
      <FullStackDeveloper />
    </>
  );
};

export default AboutMe;