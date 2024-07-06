// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import GoogleLoginComponent from './GoogleLoginComponent';

// const Login = ({ onLogin }) => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/login', formData);
//       console.log('Login response:', response.data);
//       onLogin(response.data.access_token);
//       navigate("/");
//     } catch (error) {
//       console.error('Error logging in:', error);
//     }
//   };

//   const handleGoogleLoginSuccess = async (token) => {
//     try {
//       const response = await axios.post('http://localhost:8080/api/auth/google', { token });
//       console.log('Google login response:', response.data);
//       onLogin(response.data.access_token);
//       navigate("/");
//     } catch (error) {
//       console.error('Error logging in with Google:', error);
//     }
//   };

//   return (
//     <div className="container col-4 mb-3">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group mb-4">
//           <label>Username</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             className="form-control"
//             placeholder="Username*"
//             required
//           />
//         </div>
//         <div className="form-group mb-4">
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="form-control"
//             placeholder="Password*"
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-success mb-3">Login</button>
//         <p>Don't have an account? <Link to="/register">Register</Link></p>
//       </form>
//       <div className="my-3">
//         <GoogleLoginComponent onLoginSuccess={handleGoogleLoginSuccess} />
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import GoogleLoginComponent from './GoogleLoginComponent';




const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login', formData);
      console.log('Login response:', response.data);
      // Call the onLogin function passed from the parent component
      onLogin(response.data.access_token);
      
      navigate("/");
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleGoogleLoginSuccess = async (token) => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/google', { token });
      console.log('Google login response:', response.data);
      onLogin(response.data.access_token);
      navigate("/");
    } catch (error) {
      console.error('Error logging in with Google:', error);
    }
  };

  return (
    <div className="container col-4 mb-3">
      <h2>Login</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
        <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control"
            placeholder="Username*"
            required
          />
        </div>
        <div className="form-group mb-4">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            placeholder="Password*"
            required
          />
        </div>
        <button type="submit" className="btn btn-success mb-3">Login</button>
        
        <p>Don't have an account?<Link to="/register">Register</Link></p>
      </form>
      <div className="my-3">
        <GoogleLoginComponent onLoginSuccess={handleGoogleLoginSuccess} />
      </div>
    </div>
  );
};

export default Login;
