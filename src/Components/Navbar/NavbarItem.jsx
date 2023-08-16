import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavbarItem = ({ icon, itemName }) => (
  <>
    <FontAwesomeIcon icon={icon} />
    {itemName}
  </>
);

NavbarItem.propTypes = {
  icon: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
};

export default NavbarItem;
