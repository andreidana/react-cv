import React from 'react';

import StringTitle from '../../StringTitle/StringTitle';
import Jobs from '../Job/Job';
import education from '../../../../_old/src/StaticData/education';

const AcademicBackground = () => {
  const title = 'ACADEMIC BACKGROUND';

  return (
    <>
      <StringTitle title={title} />
      <Jobs experienceList={education} />
    </>
  );
};

export default AcademicBackground;
