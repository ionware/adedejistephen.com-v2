import React from 'react';
import PropTypes from 'prop-types';

export default function Heading2({ children, className }) {
  return (
    <h3 className={`font-bold text-3xl md:text-4xl ${className}`}>{children}</h3>
  );
}

Heading2.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Heading2.defaultProps = {
  className: '',
};
