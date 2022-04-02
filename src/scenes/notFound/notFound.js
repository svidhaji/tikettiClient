import React from 'react';

import { Redirect } from 'react-router-dom';
import { PATH_HOME } from 'constants/paths';

function NotFound() {
  return <Redirect to={PATH_HOME} />;
}

export default NotFound;
