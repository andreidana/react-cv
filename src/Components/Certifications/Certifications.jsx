import React from 'react';

import StringTitle from '../StringTitle/StringTitle';
import Certification from './Certification/Certification';
import certificationsList from '../../StaticData/certifications';

const Certifications = () => {
  const title = 'CERTIFICATIONS';

  return (
    <>
      <StringTitle title={title} />
      {
        certificationsList.map(
          certification => <Certification key={certification.idx} {...certification} />
        )
      }
    </>
  );
};

export default Certifications;
