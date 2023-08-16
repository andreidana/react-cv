import { NavLink } from 'react-router-dom';
import {
  faUser, faBook, faLightbulb, faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';

import NavbarItem from './navbar-item';

import styles from './navbar.module.scss';

const Navbar = () => (
  <nav className={styles.MenuWrapper}>
    <div>
      <ul>
        <li><NavLink to="/"><NavbarItem icon={faUser} itemName="ABOUT ME" /></NavLink></li>
        <li><NavLink to="/professional-experience"><NavbarItem icon={faBook} itemName="PROFESSIONAL EXPERIENCE" /></NavLink></li>
        <li><NavLink to="/skills"><NavbarItem icon={faLightbulb} itemName="SKILLS" /></NavLink></li>
        <li><NavLink to="/certifications"><NavbarItem icon={faGraduationCap} itemName="CERTIFICATIONS" /></NavLink></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
