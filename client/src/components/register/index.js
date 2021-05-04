import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../../services/API';
import './styles.css';

export default function Register () {
  const history = useHistory();

  const [login, setLogin] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [err, setErr] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLogin(prevValue => ({ ...prevValue, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(login.username);
    if (login.password === login.confirmPassword) {
      API.register(login.username, login.password)
      .then(() => history.push('/login'))
      .catch((err) => {
        console.error(err);
      });
    } else {
      setErr(err);
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={login.username} onChange={handleInputChange} /><br /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={login.password} onChange={handleInputChange} /><br /><br />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" value={login.confirmPassword} onChange={handleInputChange} /><br /><br />
        <input type="submit" value="Submit" onClick={handleFormSubmit} />
      </form>
      <h1>{err}</h1>
    </div>
  );
}