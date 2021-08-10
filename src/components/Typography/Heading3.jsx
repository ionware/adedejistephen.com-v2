import React from 'react';
import PropTypes from 'prop-types';

export default function Heading3({ children, className }) {
  return (
    <h3 className={`font-bold text-xl md:text-2xl ${className}`}>{children}</h3>
  );
}

Heading3.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Heading3.defaultProps = {
  className: '',
};
