/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';

/**
 * Heading Elements (Heading 1 - Heading 6)
 */
export const H1 = (props) => (
  <h1
    className='font-bold leading-8 text-3xl md:text-4xl text-yellow-500 my-2'
    {...props}
  />
);

export const H2 = (props) => (
  <h2
    className='font-bold leading-8 text-2xl md:text-3xl text-yellow-500 my-2'
    {...props}
  />
);

export const H3 = (props) => (
  <h3 className='text-xl md:text-2xl text-yellow-500 my-2' {...props} />
);

export const H4 = (props) => (
  <h4 className='text-lg md:text-xl text-yellow-500 my-2' {...props} />
);

export const H5 = (props) => (
  <h5 className='text-lg md:text-xl text-yellow-500 my-2' {...props} />
);

export const H6 = (props) => (
  <h6 className='text-lg md:text-xl text-yellow-500 my-2' {...props} />
);

/**
 * Paragraphs, strong, blockquote, emphasis, etc.
 */
export const P = (props) => (
  <p
    className='text-lg md:text-xl leading-8 md:leading-8 my-6'
    {...props}
  />
);

export const Strong = (props) => (
  <strong className='text-lg md:text-xl font-medium text-blue-600' {...props} />
);

export const Em = (props) => (
  <em className='text-lg md:text-xl text-yellow-600 italic' {...props} />
);

export const Del = (props) => (
  <span className='text-lg md:text-xl text-red-600 line-through' {...props} />
);

export const Blockquote = (props) => (
  <blockquote
    className='text-lg md:text-xl my-2 md:my-3 p-3 md:p-5 bg-blue20 border-l-4 border-blue-600 rounded-lg'
    {...props}
  />
);

export const Link = (props) => (
  <a className='text-lg md:text-xl text-glow10 hover:underline' {...props} />
);

/**
 * Lists Elements.
 */
export const Ol = (props) => (
  <ol className='text-lg md:text-xl list-none list-outside' {...props} />
);

export const Ul = (props) => (
  <ul className='text-lg md:text-xl list-outside' {...props} />
);

export const Li = (props) => <li className='mb-2 ml-2 md:ml-4' {...props} />;
