import * as React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Intro from '../components/Intro';
import RecentArticles from '../components/RecentArticles';
import Projects from '../components/Projects';
import Chatter from '../components/Chatter';
import Footer from '../components/Footer';

export default function IndexPage() {
  return (
    <div>
      <SEO />
      <div className='container'>
        <Header />
        <Intro />
        <RecentArticles />
        <Projects />
      </div>
      <Chatter />
      <div className='container'>
        <Footer />
      </div>
    </div>
  );
}
