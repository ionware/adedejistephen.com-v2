import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
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
              <AniLink
                paintDrip
                direction='down'
                duration={1}
                hex='#82F9A1'
                bg='#0B1115'
                to='/'
                aria-label='Home'>
                <BiHomeAlt />
              </AniLink>
            </li>
            <li>
              <AniLink
                paintDrip
                direction='down'
                duration={1}
                hex='#82F9A1'
                bg='#0B1115'
                to='/articles'
                aria-label='Articles'>
                <BsBook />
              </AniLink>
            </li>
            <li>
              <AniLink
                paintDrip
                direction='down'
                duration={1}
                hex='#82F9A1'
                bg='#0B1115'
                to='/about'
                aria-label='About'>
                <BsPerson />
              </AniLink>
            </li>
            <li>
              <AniLink
                paintDrip
                direction='down'
                duration={1}
                hex='#82F9A1'
                bg='#0B1115'
                to='/#contact'
                aria-label='Contact'>
                <BsChatSquareDots />
              </AniLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
