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
  save: function (formData) {
    return axios.post('api/puzzle/', formData);
  },
  findAll: function () {
    return axios.get('api/puzzle/');
  },

}

export default API;