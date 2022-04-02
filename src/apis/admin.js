import tiketti from './baseApi';

const defaults = {
  url: process.env.REACT_APP_API_URL_ADMIN
};

export const authenticate = async (password) => {
  try {
    const url = `${defaults.url}/admin/authenticate`;

    const adminUser = await tiketti.post(url, {
      password
    });

    return adminUser.data;
  } catch (error) {
    throw new Error(error);
  }
};
