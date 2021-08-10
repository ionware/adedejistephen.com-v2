import React from 'react';
import { Link } from 'gatsby';
import { BiHomeAlt } from 'react-icons/bi';
import { BsBook, BsPerson, BsChatSquareDots } from 'react-icons/bs';

export default function MobileMenu() {
  return (
    <div
      className='fixed md:hidden w-full text-blue50 py-5 px-10 z-20'
      style={{ bottom: 0, backgroundColor: '#0B1115' }}>
      <div>
        <nav>
          <ul className='flex justify-between items-center text-center text-2xl'>
            <li>
              <Link to='/'>
                <BiHomeAlt />
              </Link>
            </li>
            <li>
              <Link to='/articles'>
                <BsBook />
              </Link>
            </li>
            <li>
              <Link to='/about'>
                <BsPerson />
              </Link>
            </li>
            <li>
              <Link to='/#contact'>
                <BsChatSquareDots />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
