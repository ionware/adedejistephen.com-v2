import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import Heading3 from './Typography/Heading3';

export default function RecentArticles() {
  const query = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            icon
          }
          slug
        }
      }
    }
  `);

  const articles = query.allMdx?.nodes || [];

  return (
    <div className='spacer'>
      <div className='flex justify-between pb-3 mb-6 border-b border-blue20'>
        <Heading3>Latest Articles</Heading3>
        <Link to='/articles' className='uppercase text-sm'>
          View all
        </Link>
      </div>
      {/** articles listing */}
      <div className='w-full md:w-4/6'>
        {articles.map(({ frontmatter, slug }) => (
          <Article
            key={frontmatter.title}
            title={frontmatter.title}
            date={frontmatter.date}
            icon={frontmatter.icon}
            link={`/articles/${slug}`}
          />
        ))}
      </div>
    </div>
  );
}

function Article({ title, date, icon, link }) {
  return (
    <Link to={link} className='flex group mb-8 transition-colors duration-500'>
      <div className='mr-3'>
        <img
          src={`/images/${icon || 'article.png'}`}
          alt='img'
          width={24}
          height={24}
        />
      </div>
      <div>
        <h4 className='text-lg font-medium'>{title}</h4>
        <span className='text-blue50 text-sm'>{date}</span>
      </div>
    </Link>
  );
}

Article.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Article.defaultProps = {
  icon: 'article.png',
};
