import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import hero from '../assets/Home2.jpg'


const navItems = [
  { name: 'Home', path: '/welcome' },
  { name: 'Book Tickets', path: '/book' },
  { name: 'My Reservations', path: '/reservations' },
  { name: 'Profile', path: '/profile' },
  { name: 'Logout', path: '/logout' },
];

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    src: '',
    dst: '',
    date:''
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('search kar liye');
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="home-container">
      {isLoggedIn && (
        <>
          <nav className='home-navbar'>
            <div className='logo-name '>
              <img src={logo} alt='railwlogo' id='railwways-logo' /> Railwways
            </div>
            <ul className='home-navbar-navitems'>
              {navItems.map((item) => (
                <Link className='navitem' key={item.name} to={item.path}>{item.name}</Link>
              ))}
            </ul>
          </nav>
          <div className='home-section' style={{ background: `url(${hero})` }}>
            <div className="search-train-comp">
              <h4>Search for Trains</h4>
              <form className='search-train-form' onSubmit={handleSubmit}>
                <label htmlFor="sourceStation">Source Station:</label>
                <input
                  type="text"
                  placeholder="Source Station or Code"
                  value={formData['src']}
                  onChange={handleChange}
                />
                <label htmlFor="destinationStation">Destination Station:</label>
                <input
                  type="text"
                  placeholder="Destination Station or Code"
                  value={formData['dst']}
                  onChange={handleChange}
                />
                <label htmlFor="destinationStation">Date :</label>
                <input
                  type="Date"
                  placeholder="Select the date of journey"
                  value={formData['date']}
                  onChange={handleChange}
                />
                <button type="submit">Search</button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;