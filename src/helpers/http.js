import {default as axios} from 'axios';
import {API_URL} from '@env';

console.log(API_URL);

const http = () =>
  axios.create({
    baseURL: API_URL,
  });

export default http;
