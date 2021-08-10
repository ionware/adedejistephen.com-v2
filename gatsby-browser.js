/* eslint-disable react/prop-types,import/prefer-default-export */
import './src/css/app.css';
import React from 'react';
import MobileMenu from './src/components/MobileMenu';

export const wrapPageElement = ({ element, props }) => {
  return (
    <div className='page-wrapper' {...props}>
      {element}
      <MobileMenu />
    </div>
  );
};
