import React from 'react';
import { Link } from 'gatsby';

export default function Header() {
  return (
    <div className='mb-10 md:mb-20 flex justify-between items-center content-center py-8 md:py-10'>
      <div>
        <Link
          to='/'
          className='font-bold text-2xl underline md:text-4xl font-cursive text-glow10'>
          AS
        </Link>
      </div>
      <div className='hidden md:block'>
        <nav>
          <ul className='flex font-medium text-lg'>
            <li className='mr-5 md:mr-10'>
              <Link
                to='/'
                className='hover:text-red-400 transition-colors duration-500'>
                Articles
              </Link>
            </li>
            <li className='mr-5 md:mr-10'>
              <Link
                to='/'
                className='hover:text-green-400 transition-colors duration-500'>
                Snippets
              </Link>
            </li>
            <li className='mr-5 md:mr-10'>
              <Link
                to='/'
                className='hover:text-pink-400 transition-colors duration-500'>
                About
              </Link>
            </li>
            <li>
              <Link to='/' className='btn'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
