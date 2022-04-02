import { ADMIN_AUTH_HEADER } from 'constants/headers';

export const buildAuthHeader = (accessToken = '') => {
  return {
    [ADMIN_AUTH_HEADER]: accessToken
  };
};
