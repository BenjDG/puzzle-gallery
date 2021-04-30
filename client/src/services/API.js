import axios from 'axios';

const API = {
  login: (email, password) => {
    const obj = {
      email: email,
      password: password
    };
    return axios.post('/api/auth/login', obj);
  },
  logout: function () {
    return axios.get('api/auth/logout');
  },
}

export default API;