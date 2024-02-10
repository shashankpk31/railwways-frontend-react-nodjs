import React from 'react'
import logo from '../assets/404-Not-found.png'

function NotFound() {
  return (
    <div className='not-found-page'>
      <img src={logo} alt='404-Not-found-img' />
      <h1>404 Page not found.</h1>
    </div>
  )
}

export default NotFound