import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='logo-name'>
                <img src={logo} id='railwways-logo' alt='railwways-logo' />
                Railwways
            </div>
            <div className='nav-items'>
                <Link className='nav-item' to={'/'}>Home</Link>
                <Link className='nav-item' to={'/about'}>About</Link>
                <Link className='nav-item' to={'/service'}>Service</Link>
                <Link className='nav-item' to={'/contactus'}>ContactUs</Link>
            </div>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
        </nav>
    )
}

export default Navbar