import React from 'react';
import PropTypes from 'prop-types';

export default function Heading1({ children, className }) {
  return <h3 className={`font-bold text-4xl md:text-5xl ${className}`}>{children}</h3>;
}

Heading1.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Heading1.defaultProps = {
  className: '',
};
