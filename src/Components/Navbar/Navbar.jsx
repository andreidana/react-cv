import React, { Component } from 'react';
import {MenuWrapper, MenuContent} from './Navbar.module.scss';

class Navbar extends Component {
  render() {
    return (
      <nav className={ MenuWrapper }>
        <div className={ MenuContent }>
          <ul>
            <li><a>About</a></li>
            <li><a>Professional Experience</a></li>
            <li><a>Skills</a></li>
            <li><a>Certifications</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
