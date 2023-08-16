import React from 'react';

import StringTitle from '../../StringTitle/StringTitle';
import Jobs from '../Job/Job';
import experience from '../../../../_old/src/StaticData/experience';

const ProfessionalExperience = () => {
  const title = 'PROFESSIONAL EXPERIENCE';

  return (
    <>
      <StringTitle title={title} />
      <Jobs experienceList={experience} />
    </>
  );
};

export default ProfessionalExperience;
