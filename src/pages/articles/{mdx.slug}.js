import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PropTypes from 'prop-types';
import SEO from '../../components/SEO';
import Heading1 from '../../components/Typography/Heading1';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ArticleLayout from '../../components/ArticleLayout';

export default function ArticleTemplate({ data }) {
  const { frontmatter, body, timeToRead, slug } = data.mdx;

  const { url } = data.site.siteMetadata;

  return (
    <div>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        url={`${url}/${slug}`}
        article
      />
      <div className='container'>
        <Header />
        <div>
          <ArticleLayout>
            <div>
              <Heading1 className='mb-3'>{frontmatter.title}</Heading1>
              <span className='md:text-lg text-blue50'>
                {frontmatter.date} · {timeToRead}mins read
              </span>
            </div>
            <div className='mt-8 md:mt-14'>
              <MDXRenderer>{body}</MDXRenderer>
            </div>
          </ArticleLayout>
        </div>
      </div>
      <div className='bg-dark10 py-3 md:py-10'>
        <div className='container'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: { eq: $id }) {
      body
      slug
      timeToRead
      tableOfContents
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
    site {
      siteMetadata {
        url
      }
    }
  }
`;

ArticleTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};
