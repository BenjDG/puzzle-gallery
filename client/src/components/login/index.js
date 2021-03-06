import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../../services/API';
import { UseUserProvider } from '../../services/userContext';
import './styles.css';

export default function Login () {
  const history = useHistory();
  const { setUser } = UseUserProvider();

  const [login, setLogin] = useState({
    username: '',
    password: ''
  });
  const [err, setErr] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLogin(prevValue => ({ ...prevValue, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    history.push('/register');
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.login(login.username, login.password)
      .then(result => {
        if (result.status === 200) {
          // console.log(result);
          setUser({
            id: result?.data?.id,
            username: result?.data?.username
          });
          history.push('/gallery');
        } else {
          setErr('An error occured.  Please check your username and password.');
          console.error(result.status);
        }
      }).catch(err => {
        setErr('An error occured.  Please check your username and password.');
        console.error(err);
      });
    setLogin({
      username: '',
      password: ''
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={login.username} onChange={handleInputChange} /><br /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={login.password} onChange={handleInputChange} /><br /><br />
        <input type="submit" value="Submit" onClick={handleFormSubmit} />
      </form>
      <h1>{err}</h1>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}