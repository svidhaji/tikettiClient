import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import './styles.scss';

import useNav from 'hooks/nav';
import { useApp } from 'contexts/app-context';
import { PATH_LOGIN } from 'constants/paths';

export default function MainLayout(props) {
  const { currentUser } = useApp();
  const location = useLocation();
  const { goTo } = useNav();
  const [showState] = useState(true);

  useEffect(() => {
    if (!currentUser && location.pathname !== PATH_LOGIN) {
      goTo(PATH_LOGIN);
    }
  }, [currentUser, goTo, location.pathname]);
  return (
    <>
      {showState && (
        <div className='main-layout-container'>
          <Header />
          {props.children}
          <Footer />
        </div>
      )}
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.any
};
