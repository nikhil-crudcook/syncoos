import React from 'react'
import FetchUser from './FetchUser'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Logoutup = () => {

const [isAuthenticated, setIsAuthenticated] = useState(false);
const [token, setToken] = useState('');
const [user,setUser]=useState({firstName:'',lastName:''});
const navigate=useNavigate();

useEffect(() => {
  const storedToken = localStorage.getItem('token');
  if (storedToken) {
    setToken(storedToken);
    setIsAuthenticated(true);
    FetchUser(storedToken).then(userData=>{
      if(userData){
        setUser(userData);
      }
    });
  }
}, []);

const handleLogin = (token) => {
  setToken(token);
  setIsAuthenticated(true);
  localStorage.setItem('token', token);
  FetchUser(token).then((userData) => {
    if (userData) {
      setUser(userData);
    }
  });
};

const handleLogout = () => {
  setToken('');
  setIsAuthenticated(false);
  localStorage.removeItem('token');
  navigate('/new');
};

const getInitials=(firstName,lastName)=>{
  if(firstName && lastName){
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  }
  return '';
}

  return (
    <div>
    <nav>
    <ul>
      
        <li>
        <div class="hstack gap-3">

        <div class="p-2 ms-auto">
        {user.firstName} {user.lastName}
        </div>
        <div className="p-2">
              <button className="btn btn-outline-success">
                {getInitials(user.firstName, user.lastName)}
              </button>
              </div>
<div class="vr"></div>
<div class="p-2"><button onClick={handleLogout} className="btn btn-success">Logout</button></div>
</div>
          
        </li>
    </ul>
  </nav>
  </div>
  )
}

export default Logoutup