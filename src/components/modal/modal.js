import React from 'react';
import { element, string, bool, func } from 'prop-types';

import Overlay from 'components/overlay/overlay';
import Button from 'components/elements/button/button';
import IconX from 'components/icons/iconX';
import { DISPLAY } from 'constants/display';
import './styles.scss';

const Modal = ({ show, closeCallback, children, size = '' }) => {
  const { BLOCK, NONE } = DISPLAY;

  const closeClick = () => {
    closeCallback();
  };
  return (
    <div className='modal-wrapper' style={{ display: show ? BLOCK : NONE }}>
      <Overlay>
        <div className={`modal-content ${size}`}>
          {children}
          <Button className='mw-close' onClick={closeClick}>
            <IconX />
          </Button>
        </div>
      </Overlay>
    </div>
  );
};

Modal.propTypes = {
  show: bool,
  closeCallback: func,
  children: element,
  size: string
};
export default Modal;
