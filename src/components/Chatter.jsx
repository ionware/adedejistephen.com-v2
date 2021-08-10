import React from 'react';
import { GrChat } from 'react-icons/gr';
import Heading1 from './Typography/Heading1';

export default function Chatter() {
  return (
    <div className='spacer'>
      <div
        className='bg-blue20 text-center px-2 md:px-0 py-20 md:py-32'
        id='contact'>
        <Heading1 className='mb-6 md:mb-8 text-glow10'>
          What are you working on?
        </Heading1>
        <p className='mb-6 md:mb-8 md:text-lg'>
          Let’s have a conversation! I’d love to hear about what you’re <br />{' '}
          working on and find a way to work together.
        </p>
        <a
          href='google.com'
          className='btn text-blue10 bg-glow20 border-transparent hover:text-blue10'>
          <GrChat className='inline-block mr-1' /> Chat
        </a>
      </div>
    </div>
  );
}
