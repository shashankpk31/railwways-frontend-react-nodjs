import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import bg1 from '../assets/Home1.jpg'
import bg2 from '../assets/Home2.jpg'
import bg3 from '../assets/Home3.jpg'
import bg4 from '../assets/Home4.jpg'
import {Link} from 'react-router-dom'


function LandingPage() {
  const [index, setIndex] = useState(0);

  const data = [
    {
      title: "Welcome to RailWways, the fastest and easiest way to book your train tickets online. With RailWway, you can:",
      desciption: "Effortlessly plan your train travel with real-time availability, secure booking, flexible options, and journey updates.",
      image: bg1
    },
    {
      title: "How to book your train tickets with RailWways in 4 simple steps:",
      desciption: "Secure your ideal train ticket in a few clicks: simply enter stations and dates, select your preferred option, provide passenger details, pay seamlessly, confirm with IRCTC, and receive instant booking confirmation by email.",
      image: bg2
    },
    {
      title: "Why choose RailWways for your train ticket booking?",
      desciption: "Trustworthy, lightning-fast train bookings , enjoyed by 50+ million users, with helpful features and 24/7 support - your one-stop shop for stress-free rail travel.",
      image: bg3
    },
    {
      title: "RailWways is more than just a train ticket booking app. We also offer:",
      desciption: "Go beyond ticketing with RailYatri - explore train schedules, seat layouts, and travel intel through our Rail Wisdom community and informative blog, enriching your entire train journey.",
      image: bg4
    }
  ]
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevValue) => prevValue < data.length - 1 ? prevValue + 1 : 0);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id='landing-page'>
      <Navbar />
      <div className='home' style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${data[index].image})`
      }}>
        <h3>{data[index].title}</h3>
        <p className='features'>{data[index].desciption}</p>
        <div className='actions'>
          <Link className='actionbtn' to="../register">Signup</Link>
          <Link className='actionbtn' to="../login">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage