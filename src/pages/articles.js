import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Heading1 from '../components/Typography/Heading1';
import ArticleList from '../components/ArticleList';

export default function Articles() {
  return (
    <div className='container'>
      <SEO title='Knowledge is light' />
      <Header />
      <div className='spacer'>
        <Heading1>Articles</Heading1>
      </div>
      <div className='spacer mt-8 md:mt-14'>
        <ArticleList
          date='September 08, 2019'
          title='Code splitting & lazy loading a server side rendered React app'
          link='/'
          excerpt='Reasoning, approach, and goals Goals Faster initial load times. Users only download the code they need for the features they are using. This…'
        />

        <ArticleList
          date='September 08, 2019'
          title='Easy project switching with Itermocil & command line shortcuts'
          link='/'
          excerpt='Reasoning, approach, and goals Goals Faster initial load times. Users only download the code they need for the features they are using. This…'
        />

        <ArticleList
          date='September 08, 2019'
          title='Code splitting & lazy loading a server side rendered React app'
          link='/'
          excerpt='Reasoning, approach, and goals Goals Faster initial load times. Users only download the code they need for the features they are using. This…'
        />

        <ArticleList
          date='September 08, 2019'
          title='Easy project switching with Itermocil & command line shortcuts'
          link='/'
          excerpt='Reasoning, approach, and goals Goals Faster initial load times. Users only download the code they need for the features they are using. This…'
        />
      </div>
    </div>
  );
}
