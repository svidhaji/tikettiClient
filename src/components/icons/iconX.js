import React from 'react';
import { string } from 'prop-types';

const IconX = ({ fill = '#000' }) => (
  <svg
    style={{ height: '15px' }}
    fill={fill}
    className='icon-x'
    viewBox='0 0 24 24'
  >
    <path d='M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z' />
    <path d='M0 0h24v24h-24z' fill='none' />
  </svg>
);

IconX.propTypes = {
  fill: string
};

export default IconX;
