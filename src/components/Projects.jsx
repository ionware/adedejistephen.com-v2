import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import Heading3 from './Typography/Heading3';

export default function Projects() {
  return (
    <div className='spacer'>
      <div className='mb-8' id='projects'>
        <Heading3>Projects</Heading3>
      </div>
      <div>
        <div
          className='bg-blue20 px-6 py-8 border-l-4 border-red-600'
          style={{ borderRadius: '8px' }}>
          <h4 className='text-2xl font-medium mb-6'>CNETv</h4>
          <p className='mb-10'>
            An online coworking community for indie hackers, entreprenuers, and
            founders. Chat live with app developers, designers, and mentors.
            Access video courses and tutorials.
          </p>
          <a href='#//endregion' target='_blank' className='btn'>
            Open <FiExternalLink className='inline-block' />
          </a>
        </div>
      </div>
    </div>
  );
}
