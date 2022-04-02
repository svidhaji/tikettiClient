import React from 'react';
import { string } from 'prop-types';

const IconTiketti = ({ fill = '#fff' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='124'
    height='36'
    viewBox='0 0 124 36'
    fill={fill}
  >
    <defs>
      <filter id='prefix__a'>
        <feColorMatrix
          in='SourceGraphic'
          values='0 0 0 0 0.999913 0 0 0 0 1.000000 0 0 0 0 0.999881 0 0 0 1.000000 0'
        />
      </filter>
    </defs>
    <g
      fill='none'
      fillRule='evenodd'
      filter='url(#prefix__a)'
      transform='translate(-126 -17)'
    >
      <g fill='#1A1919'>
        <g>
          <path
            d='M78.523 21.171c.06-.51.1-1.026.1-1.554 0-7.013-5.438-12.697-12.146-12.697-6.709 0-12.147 5.684-12.147 12.697 0 7.013 5.365 12.698 12.637 12.698 5.306 0 9.573-3.133 11.449-7.613l-5.24-1.663c-1.006 2.673-3.266 4.356-6.209 4.356-3.659 0-6.374-2.399-6.944-6.224h18.5zm-5.854-4.177H60.196c.812-3.328 3.245-5.305 6.28-5.305 3.02 0 5.387 2.047 6.193 5.305zM10.362 23.817v-11.1h4.953v-5.06h-4.953V.336H5.106v3.659h-.003l.003.024c0 2.027-1.632 3.619-3.652 3.632v.002H.311v5.062h4.413v12.035c0 4.47 2.745 6.88 7.158 6.88 2.06 0 3.482-.125 3.482-.125v-4.765s-1.177.073-1.962.073c-2.108 0-3.04-.884-3.04-2.997M107.309 23.817v-11.1h4.952v-5.06h-4.952V.336h-5.257v3.659h-.002l.002.024c0 2.027-1.632 3.619-3.652 3.632v.002h-1.143v5.062h4.413v12.035c0 4.47 2.746 6.88 7.159 6.88 2.059 0 3.481-.125 3.481-.125v-4.765s-1.177.073-1.962.073c-2.108 0-3.04-.884-3.04-2.997M90.22 23.817v-11.1h4.952v-5.06H90.22V.336h-5.257v3.659h-.002l.002.024c0 2.027-1.631 3.619-3.651 3.632v.002h-1.144v5.062h4.413v12.035c0 4.47 2.746 6.88 7.159 6.88 2.06 0 3.481-.125 3.481-.125v-4.765s-1.177.073-1.961.073c-2.108 0-3.04-.884-3.04-2.997'
            transform='translate(126 17) translate(0 3.523)'
          />
        </g>
        <path
          d='M44.328 21.299L54.134 11.18 46.583 11.18 37.414 20.857 37.414 3.861 31.775 3.861 31.775 35.102 37.414 35.102 37.414 28.421 40.356 25.327 47.367 35.102 54.33 35.102zM20.443 35.102L26.082 35.102 26.082 11.18 20.443 11.18zM19.56 3.885c0 2.064 1.668 3.685 3.678 3.685 2.06 0 3.727-1.621 3.727-3.685 0-2.063-1.667-3.733-3.727-3.733-2.01 0-3.677 1.67-3.677 3.733M117.39 35.102L123.028 35.102 123.028 11.18 117.39 11.18zM116.507 3.885c0 2.064 1.667 3.685 3.678 3.685 2.059 0 3.726-1.621 3.726-3.685 0-2.063-1.667-3.733-3.726-3.733-2.01 0-3.678 1.67-3.678 3.733'
          transform='translate(126 17)'
        />
      </g>
    </g>
  </svg>
);

IconTiketti.propTypes = {
  fill: string
};

export default IconTiketti;
