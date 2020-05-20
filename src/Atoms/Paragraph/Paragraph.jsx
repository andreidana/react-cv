import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ innerText }) => (<p className="mt-2">{innerText}</p>);

Paragraph.propTypes = {
  innerText: PropTypes.string.isRequired,
};

export default Paragraph;
