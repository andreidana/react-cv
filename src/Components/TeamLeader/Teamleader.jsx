import React from 'react';

import { TeamLeaderStyle } from './TeamLeader.module.scss';

const Teamleader = () => {
  const teamLeaderDescription = `I work with a team of passionate devs and come from a background of software development myself. I'll always be a facilitator of new and bold ideas for anyone in the team, encouraging them to take initiative, and come up with solutions to any problems that might arise.

  I'm an avid consumer of anything related to technology, always reading and deep-diving into new tech trends. Though sometimes lack of time is a factor, I am always taking it as a challenge to keep pushing myself forward, acquiring new skills every day. 
  
  My motto in life is: "Do it once, do it right!". `;

  return (
    <>
      <div className={TeamLeaderStyle}>
        <p>{teamLeaderDescription}</p>
      </div>
    </>
  );
};

export default Teamleader;
