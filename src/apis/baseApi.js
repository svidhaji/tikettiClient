import axios from 'axios';

const request = async (config) => {
  return axios({
    ...config,
    headers: {
      ...config.headers,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
};

const tiketti = {
  get: async (url, params, headers) =>
    request({ url, method: 'get', params, headers }),
  post: async (url, data, headers) =>
    request({ url, method: 'post', data, headers }),
  put: async (url, data, headers) =>
    request({ url, method: 'put', data, headers })
};

export default tiketti;
