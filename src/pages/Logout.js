import React, { useEffect } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Logout() {
  const navigate=useNavigate();
  useEffect( ()=>{
    async function logout() {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('../login');
        return;
      }
      const response=await axios.post(`${process.env.REACT_APP_API_URL}/logout`,{}, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      console.log(response);
      if (!response.data.success) {
        navigate('../login');
        return;
      }
      localStorage.removeItem('token');
      navigate('../login');
    }
    logout();
  }, [navigate])

  return (
    <div>Logout</div>
  )
}

export default Logout