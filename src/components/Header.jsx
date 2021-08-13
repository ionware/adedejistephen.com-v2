import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export default function Header() {
  return (
    <div className='mb-7 md:mb-20 flex justify-between items-center content-center py-8 md:py-10'>
      <div>
        <AniLink
          paintDrip
          direction='down'
          duration={1}
          hex='#82F9A1'
          to='/'
          bg='#0B1115'
          className='font-bold text-2xl font-cursive '>
          Adedeji Stephen
        </AniLink>
      </div>
      <div className='hidden md:block'>
        <nav>
          <ul className='flex font-medium text-lg'>
            <li className='mr-5 md:mr-10'>
              <AniLink
                cover
                direction='down'
                duration={1}
                bg='#82F9A1'
                to='/articles'
                className='hover:text-red-400 transition-colors duration-500'>
                Articles
              </AniLink>
            </li>
            <li className='mr-5 md:mr-10'>
              <AniLink
                paintDrip
                direction='down'
                duration={1}
                hex='#82F9A1'
                bg='#0B1115'
                to='/#projects'
                className='hover:text-green-400 transition-colors duration-500'>
                Projects
              </AniLink>
            </li>
            <li className='mr-5 md:mr-10'>
              <AniLink
                paintDrip
                direction='down'
                duration={1}
                hex='#82F9A1'
                bg='#0B1115'
                to='/about'
                className='hover:text-pink-400 transition-colors duration-500'>
                About
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
                className='btn'>
                Contact
              </AniLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
