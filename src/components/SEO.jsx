import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

export default function SEO({ title, description, url, image, article }) {
  const { site } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate
          defaultImage: image
          defaultDescription: description
          siteUrl: url
          twitterName
        }
      }
    }
  `);

  const {
    defaultTitle,
    defaultDescription,
    titleTemplate,
    defaultUrl,
    defaultImage,
    twitterName,
  } = site.siteMetadata;

  return (
    <Helmet title={title || defaultTitle} titleTemplate={titleTemplate}>
      <meta name='description' content={description || defaultDescription} />
      <meta property='og:url' content={url || defaultUrl} />
      <meta
        property='og:description'
        content={description || defaultDescription}
      />
      <meta
        property='og:image'
        content={`${defaultUrl}${image || defaultImage}`}
      />
      {(article ? true : null) && <meta property='og:type' content='article' />}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title || defaultTitle} />
      <meta
        name='twitter:description'
        content={description || defaultDescription}
      />
      <meta
        name='twitter:image'
        content={`${defaultUrl}${image || defaultImage}`}
      />
      {twitterName && <meta name='twitter:creator' content={twitterName} />}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: '',
  description: '',
  url: '',
  image: '',
  article: false,
};
