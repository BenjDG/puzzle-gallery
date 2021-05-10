import axios from 'axios';

const API = {
  login: (username, password) => {
    const obj = {
      username: username,
      password: password
    };
    return axios.post('/api/auth/login', obj);
  },
  register: (username, password) => {
    const obj = {
      username: username,
      password: password
    };
    return axios.post('/api/auth/register', obj);
  },
  logout: function () {
    return axios.get('api/auth/logout');
  },
  save: function (form) {
    return axios.post('api/puzzle/', form, { headers: {'content-type': 'multipart/form-data'} }).catch(err=>console.error(err));
  },
  findAll: function () {
    return axios.get('api/puzzle/');
  },

}

export default API;