import React from 'react'
import Navbar from './Navbar'
import img from '../assets/about.jpeg'

function About() {
  return (
    <div>
        <Navbar/>
        <section className='about-section'>
            <h2>About</h2>
            <div className='about-section-content'>
              <img src={img} alt='about-section-img'/>
              <div className='about-section-text'>
                <p>Welcome to the Railway Seat Reservation System, your one-stop platform for booking train tickets conveniently and efficiently. Our system is committed to making your railway travel experience seamless and hassle-free.</p>
                <div className='about-subtext'>
                  <p>Easy ticket booking</p>
                  <p>Multiple booking options</p>
                  <p>Real-time updates</p>
                  <p>Secure transactions</p>
                  <p>Flexible payment methods</p>
                  <p>24/7 customer support</p>
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}

export default About