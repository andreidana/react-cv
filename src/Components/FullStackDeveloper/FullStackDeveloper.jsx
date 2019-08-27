import React from 'react';
import moment from 'moment';

import { FullStackDeveloperStyle } from './FullStackDeveloper.module.scss';

const FullStackDeveloper = () => {
  const hireDate = moment('2011-03-02');
  const currentDate = moment();
  const description = `Experienced Full Stack Developer with ${currentDate.diff(hireDate, 'years')} years in the industry and high-level proficiency in the following programs: Javascript, Angular 2+, SQL, C#, React, Java, expertise with HTML and CSS. I am very familiar and experienced with Web Application Architecture and have worked with a good number of successful development teams.`;

  return (
    <>
      <div className = { FullStackDeveloperStyle }>
        <p>{description}</p>
      </div> 
    </>
  );
};

export default FullStackDeveloper;