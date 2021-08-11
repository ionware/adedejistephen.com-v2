import React from 'react';
import { Link } from 'gatsby';
import { BiHomeAlt } from 'react-icons/bi';
import { BsBook, BsPerson, BsChatSquareDots } from 'react-icons/bs';

export default function MobileMenu() {
  return (
    <div
      className='fixed md:hidden w-full bg-dark10 text-blue50 py-5 px-10 z-20'
      style={{ bottom: 0 }}>
      <div>
        <nav>
          <ul className='flex justify-between items-center text-center text-2xl'>
            <li>
              <Link to='/' aria-label='Home'>
                <BiHomeAlt />
              </Link>
            </li>
            <li>
              <Link to='/articles' aria-label='Articles'>
                <BsBook />
              </Link>
            </li>
            <li>
              <Link to='/about' aria-label='About'>
                <BsPerson />
              </Link>
            </li>
            <li>
              <Link to='/#contact' aria-label='Contact'>
                <BsChatSquareDots />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
