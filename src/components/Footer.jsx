import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='spacer mb-16 md:mb-0 text-sm md:text-base'>
      <footer className='py-6'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-end'>
          <div className='order-2 md:order-1'>
            <p>
              Developed by{' '}
              <span className='text-white font-medium'>Adedeji Stephen</span>.
              Designed by{' '}
              <a
                href='https://www.figma.com/community/file/824810955262478067'
                target='_blank'
                rel='noreferrer'
                className='font-medium text-white'>
                Ryan Warner
              </a>
              .
            </p>
            <p>
              Built with{' '}
              <a
                href='https://gatsbyjs.com'
                target='_blank'
                rel='noreferrer'
                className='font-medium underline text-glow20'>
                Gatsby
              </a>
              . Hosted on{' '}
              <a
                href='https://netlify.com'
                target='_blank'
                rel='noreferrer'
                className='font-medium underline text-red-400'>
                Netlify
              </a>
              .
            </p>
          </div>
          <div className='mb-3 md:mb-0 order-1 md:order-2'>
            <ul className='flex text-2xl md:text-xl'>
              <li className='mr-5'>
                <a
                  href='https://github.com/ionware'
                  target='_blank'
                  rel='noreferrer'>
                  <FaGithub />
                </a>
              </li>
              <li className='mr-5'>
                <a href='https://linkedin.com/in/ionware' rel='noreferrer'>
                  <FaLinkedinIn />
                </a>
              </li>
              <li className=''>
                <a href='https://twitter.com/ionwarez' rel='noreferrer'>
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
