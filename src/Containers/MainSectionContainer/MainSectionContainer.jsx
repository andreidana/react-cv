import React from 'react';

import ProfessionalDetailsContainer from '../ProfessionalDetailsContainer/ProfessionalDetailsContainer';
import DetailsContainer from '../DetailsContainer/DetailsContainer';
import Title from '../../Components/Title/Title';

const MainSectionContainer = () => {
  const headingText = 'RESUME';

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Title text={headingText} />
        </div>
        <div className="col-md-4">
          <ProfessionalDetailsContainer />
        </div>
        <div className="col-md-8">
          <DetailsContainer />
        </div>
      </div>
    </div>
  );
};

export default MainSectionContainer;
