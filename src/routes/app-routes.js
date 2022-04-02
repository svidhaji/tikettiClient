import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import { PATH_HOME, PATH_LOGIN } from 'constants/paths';

const HomePage = lazy(async () => import('scenes/home/home'));
const LoginPage = lazy(async () => import('scenes/login/login'));
const NotFound = lazy(async () => import('scenes/notFound/notFound'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div />}>
      <Switch>
        <Route path={PATH_HOME} exact component={HomePage} />
        <Route path={PATH_LOGIN} exact component={LoginPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default withRouter(AppRoutes);
