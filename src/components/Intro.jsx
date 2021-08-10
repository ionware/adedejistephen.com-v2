import React from 'react';
import Heading1 from './Typography/Heading1';

export default function Intro() {
  return (
    <div className='w-full md:w-5/6 spacer'>
      <Heading1 className='text-glow10 mb-5 md:mb-10 glow-text-shadow'>
        I’m Adedeji Stephen, a full-stack software engineer.
      </Heading1>
      <p className='md:text-lg md:font-medium leading-8 w-full md:w-5/6'>
        Although I love the Backend more. I specialize in rapidly prototyping
        software companies and web applications. I talk about my journey on
        Twitter, commit code to Github, and take shots on Dribbble.
      </p>
    </div>
  );
}
