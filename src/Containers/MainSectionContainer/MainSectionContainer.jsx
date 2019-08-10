import React from 'react';

import ProfessionalDetailsContainer from '../ProfessionalDetailsContainer/ProfessionalDetailsContainer';
import DetailsContainer from '../DetailsContainer/DetailsContainer';
import Title from '../../Components/Title/Title';

import { MainSection, TitleSection } from './MainSectionContainer.module.scss';

const MainSectionContainer = () => {
  const createMarinSectionStyle = () => ['container', MainSection].join(' ')
  const createTitleStyle = () => ['col-md-12', TitleSection].join(' ')

  return (
    <div className = {createMarinSectionStyle()}>
      <div className = 'row'>
        <div className = {createTitleStyle()}>
          <Title/>
        </div>
        <div className = 'col-md-4'>
          <ProfessionalDetailsContainer/>
        </div>
        <div className = 'col-md-8'>
          <DetailsContainer/>
        </div>
      </div>
    </div>
  );
}

export default MainSectionContainer;
