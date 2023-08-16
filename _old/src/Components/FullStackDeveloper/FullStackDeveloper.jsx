import React from 'react';
import positions from '../../StaticData/positions';

import { FullStackDeveloperStyle } from './FullStackDeveloper.module.scss';

const FullStackDeveloper = () => (
  <>
    <div className={FullStackDeveloperStyle}>
      <p>{positions.fullStackDeveloper}</p>
    </div>
  </>
);

export default FullStackDeveloper;
