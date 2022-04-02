import React from 'react';
import { element } from 'prop-types';

import './styles.scss';

const Button = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

Button.propTypes = {
  children: element
};
export default Button;
