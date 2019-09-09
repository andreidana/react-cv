import React from 'react';

import StringTitle from '../StringTitle/StringTitle';
import Certification from './Certification/Certification';

const Certifications = () => {
  const title = 'CERTIFICATIONS';

  return (
    <>
      <StringTitle title = {title}/>
      <Certification/>
    </>
  );
};

export default Certifications;