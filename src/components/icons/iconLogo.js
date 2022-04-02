import React from 'react';
import { string } from 'prop-types';

const IconLogo = ({ fill = '#903260' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 79.28 79.28' fill={fill}>
    <defs>
      <style>.cls-1</style>
    </defs>
    <g data-name='Layer 2'>
      <g data-name='Layer 1'>
        <path
          className='cls-1'
          d='M52.86,52.86A26.43,26.43,0,1,1,26.43,26.43,26.43,26.43,0,0,1,52.86,52.86'
        />
        <path className='cls-1' d='M52.86,79.28a26.43,26.43,0,0,0,0-52.85Z' />
        <path className='cls-1' d='M0,26.43a26.43,26.43,0,0,1,52.86,0Z' />
        <path
          className='cls-1'
          d='M52.86,26.43H79.28A26.42,26.42,0,0,0,52.86,0Z'
        />
      </g>
    </g>
  </svg>
);

IconLogo.propTypes = {
  fill: string
};

export default IconLogo;
