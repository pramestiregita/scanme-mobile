import http from '../helpers/http';
import qs from 'qs';

export default {
  login: (data) => ({
    type: 'LOGIN',
    payload: http().post('user/login', qs.stringify(data)),
  }),
  get: (id) => ({
    type: 'GET',
    payload: http().get(`user/get/${id}`),
  }),
  update: (id, data) => ({
    type: 'UPDATE',
    payload: http().put(`user/edit/${id}`, qs.stringify(data)),
  }),
  delete: (id) => ({
    type: 'LOGIN',
    payload: http().post(`user/delete/${id}`),
  }),
};
