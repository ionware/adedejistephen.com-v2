import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Heading1 from '../../components/Typography/Heading1';
import ArticleList from '../../components/ArticleList';

export default function Articles({ data }) {
  const articles = data.allMdx?.nodes;
  console.log(articles);

  return (
    <div>
      <div className='container'>
        <SEO title='Knowledge is light' />
        <Header />
        <div className='spacer'>
          <Heading1>Articles</Heading1>
        </div>
        <div className='spacer mt-8 md:mt-14'>
          {articles.map(({ frontmatter, slug }) => (
            <ArticleList
              key={frontmatter.title}
              date={frontmatter.date}
              title={frontmatter.title}
              link={slug}
              excerpt={frontmatter.description || frontmatter.excerpt}
            />
          ))}
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
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
        slug
      }
    }
  }
`;

Articles.propTypes = {
  data: PropTypes.object.isRequired, // Gatsby query result.
};
