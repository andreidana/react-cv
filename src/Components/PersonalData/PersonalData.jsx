import React from 'react';

import { PersonalInfo } from './PersonalData.module.scss';

const PersonalData = () => {
  const details = [{key: 'NAME', value: 'Andrei Danã'},
  {key: 'AGE', value: '32'}, // TODO calculate automatically based on birth date
  {key: 'LOCATION', value: 'Bucharest, Romania'},
  {key: 'EXPERIENCE', value: '9 years'}, // TODO calculate automatically based on first hire date
  {key: 'DEGREE', value: 'Master'},
  {key: 'CAREER LEVEL', value: 'Senior-Level'},
  {key: 'PHONE', value: '(+40) 727-776494'},
  {key: 'E-MAIL', value: 'andrei.dana87@gmail.com'}];

  return (
    <>
      <ul className = {PersonalInfo}>
        {details.map(detail => <li>
          <p><span>{detail.key}</span>{detail.value}</p>
        </li>)}
      </ul>
    </>
  );
};

export default PersonalData;