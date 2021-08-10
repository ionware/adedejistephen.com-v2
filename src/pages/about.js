import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Heading1 from '../components/Typography/Heading1';

export default function About() {
  return (
    <div className='container'>
      <SEO title='More about me' />
      <Header />
      <div className='mb-7 md:mb-10 lg:mb-14'>
        <Heading1>About</Heading1>
      </div>
      <div>
        <p>
          Arrgh! It always seems complicated for me to describe myself. I will
          come back to build this page later when I have a clearer head. But for
          now, here it is: I&apos;m just a simple, easy-going guy, passionate
          about learning how{' '}
          <span className='font-semibold text-green-400'>Digital</span> things
          work! Yeah,{' '}
          <span className='font-semibold text-red-400 underlined'>
            Computer
          </span>
          , you guessed right.
        </p>
      </div>
    </div>
  );
}
