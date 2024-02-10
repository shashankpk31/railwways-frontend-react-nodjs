import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import axios from 'axios';

function Registration() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    cnfpassword: '',
    email: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    aadharNumber: ''
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();


  const handleGetUser = async (token) => {
    await axios.get(`${process.env.REACT_APP_API_URL}/welcome`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      if (response != null && response.data != null && response.data.user) {
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

    if (credentials['password'] === credentials['cnfpassword']) {
      await axios.post(`${process.env.REACT_APP_API_URL}/register`, {
        username: credentials['username'],
        password: credentials['password'],
        cnfpassword: credentials['cnfpassword'],
        email: credentials['email'],
        phoneNumber: credentials['phoneNumber'],
        firstName: credentials['firstName'],
        lastName: credentials['lastName'],
        gender: credentials['gender'],
        dateOfBirth: credentials['dateOfBirth'],
        aadharNumber: credentials['aadharNumber'],
        address: credentials['address']
      }).then(async (response) => {
        localStorage.setItem('token', response.data.token);
        let token = localStorage.getItem('token');
        if (token) {
          handleGetUser(token)
        }
      }).catch(error => {
        if (error != null && error.response != null && error.response.data != null) {
          if (error.response.data.message === "Invalid  password") {
            setError('Please Check you password');
          } else if (error.response.data.message === "Invalid user") {
            setError('Please Check you Username or Email');
          } else {
            setError(error.response.data.message);
          }
        }
      })
    } else {
      setError('password and confirm password is not same')
    }
  }

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className='register-container'>
      <div className='register-form-container'>
        <header><img src={logo} alt='logo-img' id='railwways-logo' /> Registration</header>
        <div className='error'>{error} </div>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Username' name='username' value={credentials['username']} onChange={handleChange} />
          <input type='password' placeholder='Password' name='password' value={credentials['password']} onChange={handleChange} />
          <input type='password' placeholder='Confirm Password' name='cnfpassword' value={credentials['cnfpassword']} onChange={handleChange} />
          <input type='email' placeholder='Email' name='email' value={credentials['email']} onChange={handleChange} />
          <input type='tel' placeholder='Phone Number' name='phoneNumber' value={credentials['phoneNumber']} onChange={handleChange} />
          <input type='text' placeholder='firstName' name='firstName' value={credentials['firstName']} onChange={handleChange} />
          <input type='text' placeholder='lastName' name='lastName' value={credentials['lastName']} onChange={handleChange} />
          <input type='date' placeholder='Date of Birth' name='dateOfBirth' value={credentials['dateOfBirth']} onChange={handleChange} />
          <select name='gender' value={credentials['gender']} onChange={handleChange}>
            <option value=''>select gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='others'>Others</option>
          </select>
          <input type='number' placeholder='Aadhar Number' name='aadharNumber' value={credentials['aadharNumber']} onChange={handleChange} />
          <input type='text' placeholder='Address' name='address' onChange={handleChange} />
          <input type='submit' id='signup' />
        </form>
        <div className='alt-auth-options'>
          Already have an account? <Link className='altlink' to='../login'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Registration