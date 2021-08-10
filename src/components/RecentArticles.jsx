import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Heading3 from './Typography/Heading3';

export default function RecentArticles() {
  return (
    <div className='spacer'>
      <div className='flex justify-between pb-3 mb-6 border-b border-blue20'>
        <Heading3>Latest Articles</Heading3>
        <Link to='/' className='uppercase text-sm'>
          View all
        </Link>
      </div>
      {/** articles listing */}
      <div className='w-full md:w-4/6'>
        <Article
          title='Reducing cognitive load by theming my tools'
          date='September 08, 2019'
          icon='/images/atom.png'
        />
        <Article
          title='Code splitting & lazy loading a server side rendered React app'
          date='September 08, 2019'
        />
        <Article
          title='Easy project switching with Itermocil & command line shortcuts'
          date='September 08, 2019'
        />
      </div>
    </div>
  );
}

function Article({ title, date, icon }) {
  return (
    <Link to='/' className='flex group mb-8 transition-colors duration-500'>
      <div className='mr-3'>
        <img src={icon} alt='img' width={24} height={24} />
      </div>
      <div>
        <h4 className='text-lg font-medium'>{title}</h4>
        <span className='text-blue50 text-sm'>{date}</span>
      </div>
    </Link>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Article.defaultProps = {
  icon: '/images/article.png',
};
