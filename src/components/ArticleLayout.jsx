import React from 'react';
import PropTypes from 'prop-types';

export default function ArticleLayout({ children, className }) {
  return (
    <div className={`article-container mb-10 md:mb-16 ${className}`}>
      {children}
    </div>
  );
}

ArticleLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ArticleLayout.defaultProps = {
  className: ``,
};
