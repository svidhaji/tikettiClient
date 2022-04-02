import React, { useState } from 'react';

import MainLayout from 'layouts/main-layout/main-layout';

import Input from 'components/input/input';
import Button from 'components/button/button';
import IconLoader from 'components/icons/iconLoader';

import { authenticate } from 'apis/admin';

import './styles.scss';
import { useApp } from 'contexts/app-context';
import useNav from 'hooks/nav';

import { PATH_HOME } from 'constants/paths';

import { useSpring, animated } from 'react-spring';

import Popper from 'components/popper/popper';

function Login() {
  const { goTo } = useNav();
  const { setCurrentUser } = useApp();

  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [codeError, setCodeError] = useState('');

  const animProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    await setCodeError('');

    try {
      const adminUser = await authenticate(password);

      if (adminUser) {
        await setCurrentUser(adminUser);
        goTo(PATH_HOME);
      }
    } catch (error_) {
      setCodeError(error_.message);
      setIsLoading(false);
    }
  };

  const handleOnChange = async (event) => {
    setPassword(event.target.value);
  };

  const popperProps = {
    tooltipText: codeError,
    elementId: 'password-input',
    tooltipId: 'password-tooltip',
    popperProps: {
      placement: 'top'
    }
  };

  return (
    <MainLayout>
      <animated.div style={animProps}>
        <div className='login-wrapper'>
          <div id='input-login-container' className='input-login-container'>
            <h1>Tiketti Admin</h1>
            <Input type='text' disabled value='admin' />
            <Input
              type='password'
              id='password-input'
              value={password}
              onChange={handleOnChange}
            />
            {codeError ? <Popper {...popperProps} /> : ''}

            <Button className='default-button' onClick={handleSubmit}>
              {isLoading ? <IconLoader /> : <label>Login</label>}
            </Button>
          </div>
        </div>
      </animated.div>
    </MainLayout>
  );
}

export default Login;
