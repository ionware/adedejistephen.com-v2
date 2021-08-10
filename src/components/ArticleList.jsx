import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function ArticleList({ date, title, excerpt, link }) {
  return (
    <Link to={link} className='block group w-full md:w-4/6 lg:w-4/6 mb-14'>
      <span className='text-sm' style={{ color: '#7AB6D9' }}>
        {date}
      </span>
      <h3 className='font-bold text-xl md:text-2xl mb-5 mt-1'>{title}</h3>
      <p className='md:text-lg mb-5 group-hover:text-text20'>{excerpt}</p>
      <span className='text-sm' style={{ color: '#7AB6D9' }}>
        Read more...
      </span>
    </Link>
  );
}

ArticleList.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
