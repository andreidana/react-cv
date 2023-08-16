import React from 'react';
import positions from '../../StaticData/positions';

import { TeamLeaderStyle } from './TeamLeader.module.scss';

const Teamleader = () => (
  <>
    <div className={TeamLeaderStyle}>
      <p>{positions.teamLeader}</p>
    </div>
  </>
);

export default Teamleader;
