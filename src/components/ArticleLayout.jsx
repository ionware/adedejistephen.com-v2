import React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import * as Mdx from './MdxComponents';

export default function ArticleLayout({ children, className }) {
  const mdxComponents = {
    h1: Mdx.H1,
    h2: Mdx.H2,
    h3: Mdx.H3,
    h4: Mdx.H4,
    h5: Mdx.H5,
    h6: Mdx.H6,
    p: Mdx.P,
    blockquote: Mdx.Blockquote,
    strong: Mdx.Strong,
    delete: Mdx.Del,
    a: Mdx.Link,
    em: Mdx.Em,
    ol: Mdx.Ol,
    ul: Mdx.Ul,
    li: Mdx.Li,
  };

  return (
    <MDXProvider components={mdxComponents}>
      <div className={`article-container mb-10 md:mb-16 ${className}`}>
        {children}
      </div>
    </MDXProvider>
  );
}

ArticleLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ArticleLayout.defaultProps = {
  className: ``,
};
