import React from 'react';
import moment from 'moment';

import { PersonalInfo } from './PersonalData.module.scss';

const PersonalData = () => {
  const birthDate = moment('1987-06-30');
  const hireDate = moment('2011-03-02');
  const currentDate = moment();
  const details = [{ key: 'NAME', value: 'Andrei Danã' },
    { key: 'AGE', value: currentDate.diff(birthDate, 'years') },
    { key: 'LOCATION', value: 'Bucharest, Romania' },
    { key: 'EXPERIENCE', value: `${currentDate.diff(hireDate, 'years')} years` },
    { key: 'DEGREE', value: 'Master' },
    { key: 'CAREER LEVEL', value: 'Senior-Level' },
    { key: 'PHONE', value: '(+40) 727-776494' },
    { key: 'E-MAIL', value: 'andrei.dana87@gmail.com' }];

  return (
    <>
      <ul className={PersonalInfo}>
        {details.map(detail => (
          <li key={detail.key}>
            <p>
              <span>{detail.key}</span>
              {detail.value}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PersonalData;
