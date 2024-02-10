import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import About from './pages/About';
import Service from './pages/Service';
import NotFound from './pages/NotFound';
import ContactUs from './pages/ContactUs';
import LandingPage from './pages/LandingPage';
import ConfirmEmail from './pages/ConfirmEmail';
import Registration from './pages/Registration';
import ResetPassword from './pages/ResetPassword'
import ForgotPassword from './pages/ForgotPassword'
import Logout from './pages/Logout';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path='/contactus' element={<ContactUs/> } />
        <Route path='/service' element={<Service /> } />
        <Route path='/register' element={<Registration /> } />
        <Route path='/login' element={<Login /> } />
        <Route path='/forget-password' element={<ForgotPassword /> } />
        <Route path='/reset-password' element={<ResetPassword /> } />
        <Route path='/welcome' element={<Home /> } />
        <Route path='/logout' element={<Logout /> } />
        <Route path='/confirm-email/:token' element={<ConfirmEmail /> } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
