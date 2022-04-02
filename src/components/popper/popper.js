import React, { useLayoutEffect, useRef } from 'react';
import { string, shape } from 'prop-types';
import { createPopper } from '@popperjs/core';

import './styles.scss';

const createPopperDefault = {
  placement: 'bottom',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 8]
      }
    }
  ]
};

const Popper = ({
  tooltipText,
  elementId,
  tooltipId,
  popperProps = createPopperDefault
}) => {
  const elementRef = useRef();
  const tooltipRef = useRef();

  useLayoutEffect(() => {
    elementRef.current = document.querySelector(`#${elementId}`);
    tooltipRef.current = document.querySelector(`#${tooltipId}`);

    createPopper(elementRef.current, tooltipRef.current, popperProps);
    return () => {
      elementRef.current = null;
      tooltipRef.current = null;
    };
  }, [elementId, popperProps, tooltipId]);

  return (
    <div className='popper-wrapper' id={tooltipId} role='tooltip'>
      {tooltipText}
      <div id='arrow' data-popper-arrow />
    </div>
  );
};

Popper.propTypes = {
  tooltipText: string,
  elementId: string,
  tooltipId: string,
  popperProps: shape()
};

export default Popper;
