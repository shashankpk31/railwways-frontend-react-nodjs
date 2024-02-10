import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';// Include `axios` for HTTP requests

// Assuming your backend uses POST /confirm-email/:token
const ConfirmEmail = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!token) {
      setError('Token not available. Please check your email.');
    }
  }, [token]);

  const handleConfirmEmail = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/confirm-email/${token}`);
      console.log(response);
      if (response.data.success) {
        setSuccess(true);
        setTimeout(() => {
          navigate('../welcome');
        }, 3000);
      } else {
        setError('Invalid token. Please request a new email confirmation.');
      }
    } catch (error) {
      console.error('Error confirming email:', error);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="confirm-email-container">
      { error ? (
        <div className="error-message">
          <p>{error}</p>
          <p>
            If you didn't receive an email, you can request a new one
            <a href="your-email-confirmation-url">here</a>.
          </p>
        </div>
      ) : success ? (
        <div className="success-message">
          <img src="your-logo.png" alt="Logo" />
          <p>Email confirmed successfully!</p>
          <p>You will be redirected to your home page shortly.</p>
        </div>
      ) : (
        <button className='btn-confirm-email' onClick={handleConfirmEmail}>Confirm Email</button>
      )}
    </div>
  );
};

export default ConfirmEmail;