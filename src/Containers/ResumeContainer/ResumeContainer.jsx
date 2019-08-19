import React, { Component } from 'react';

import Navbar from '../../Components/Navbar/Navbar';
import MainSectionContainer from '../MainSectionContainer/MainSectionContainer';
 
class ResumeComponent extends Component {

  render() {
    return (
      <>
        <Navbar />
        <MainSectionContainer/>
      </>
    );
  }
}

export default ResumeComponent;
