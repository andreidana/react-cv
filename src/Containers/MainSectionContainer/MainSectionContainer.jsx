import React from 'react';

import ProfessionoalDetailsContainer from '../ProfessionalDetailsContainer/ProfessionoalDetailsContainer';
import DetailsContainer from '../DetailsContainer/DetailsContainer';
import Title from '../../Components/Title/Title';

import { MainSection, TitleSection } from './MainSectionContainer.module.scss';

const MainSectionContainer = () => {
  const createMarinSectionStyle = () => ['container', MainSection].join(' ')
  const createTitleStyle = () => ['col-md-12', TitleSection].join(' ')

  return (
    <div className = {createMarinSectionStyle()}>
      <div className = 'row'>
        <div className = 'col-md-12'>
          <Title/>
        </div>
        <div className = 'col-md-3'>
          <ProfessionoalDetailsContainer/>
        </div>
        <div className = 'col-md-9'>
          <DetailsContainer/>
        </div>
      </div>
    </div>
  );
}

export default MainSectionContainer;
