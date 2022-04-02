import Axios from 'axios';

const service = Axios.create({
  baseURL: 'https://9zotxjwwed.execute-api.eu-west-1.amazonaws.com/staging'
});

export default service;
