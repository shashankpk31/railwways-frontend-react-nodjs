import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import axios from 'axios';

function Login() {
  const [credentials, setCredentials] = useState({ userNameOrEmail: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleGetUser = async (token) => {
    await axios.get(`${process.env.REACT_APP_API_URL}/welcome`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      console.log(response);
      if (response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate('../welcome');
      } else {
        navigate('../login');
      }
    }).catch(error => {
      navigate('../login');
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
      usernameOrEmail: credentials['userNameOrEmail'],
      password: credentials['password']
    }).then((response) => {
      localStorage.setItem('token', response.data.token);
      let token = localStorage.getItem('token');
      if (token) {
        handleGetUser(token)
      }
    }).catch(error => {
      console.log(error)
      if (error.response.data.message === "Invalid  password") {
        setError('Please Check you password');
      } else if (error.response.data.message === "Invalid user") {
        setError('Please Check you Username or Email');
      } else {
        setError('Issue with server');
      }
      localStorage.removeItem('token');
    })
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className='login-container'>
      <div className='login-form-container'>
        <header><img src={logo} alt='logo-img' id='railwways-logo' /> Login</header>
        <div className='error'>{error} </div>
        <form onSubmit={handleSubmit}>
          <input name='userNameOrEmail' type='text' onChange={handleChange} id='userNameOrEmail' placeholder='username or email' value={credentials['userNameOrEmail']} />
          <input name='password' type='password' onChange={handleChange} id='password' placeholder='password' value={credentials['password']} />
          <Link className='altlink' to='../forget-password'>Forgot Password ?</Link>
          <input type='submit' id='login' />
        </form>
        <div className='alt-auth-options'>
          You don't have an account? <Link className='altlink' to='../register'>SignUp</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;