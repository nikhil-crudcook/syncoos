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

// import React, { useState,useEffect} from 'react';
// import axios from 'axios';
// import { useNavigate,Link } from 'react-router-dom';
// import GoogleLoginComponent from './GoogleLoginComponent';
// import Comp from './Comp';
// import { IconButton, InputAdornment, TextField } from '@mui/material';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';




// const Login = ({ onLogin }) => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });

//   const[errors,setErrors]=useState({
//     username:'',
//     password:'',
//   })

//   const navigate=useNavigate();
//   const[isPasswordVisible,setIsPasswordVisible]=useState(false);

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };

//   const handleChange = (e) => {
//     const{name,value}=e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//     setErrors({
//       ...errors,
//       [name]:''
//     })
//   };


// const validateForm=()=>{
//   let valid=true;
//   const newErrors={};

//   if(!formData.username){
//     newErrors.username='Required';
//     valid=false;
//   }

//   if (!formData.password) {
//     newErrors.password = 'Password is required';
//     valid = false;
//   } else if (formData.password.length < 6) {
//     newErrors.password = 'Password must be at least 6 characters';
//     valid = false;
//   }

//   setErrors(newErrors);
//   return valid;
// }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/login', formData);
//       console.log('Login response:', response.data);
//       // Call the onLogin function passed from the parent component
//       onLogin(response.data.access_token);
      
//       navigate("/");
//     } catch (error) {
//       console.error('Error logging in:', error);
//     }
//   };

//   const handleGoogleLoginSuccess = (token) => {
//     // Send token to backend
//     fetch('http://localhost:8080/api/auth/google', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         // 'Authorization': `Bearer ${token}`
//       },
//       body: JSON.stringify({ token }),
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Login successful:', data);
//       // Save token, update UI, etc.
//       localStorage.setItem('token', data.access_token);
//       navigate('/');
//     })
//     .catch(error => {
//       console.error('Error during login:', error);
//     });
//   };

//   // const handleGoogleLoginSuccess = async (token) => {
//   //   try {
//   //     const response = await axios.post('http://localhost:8080/api/auth/google', { token });
//   //     console.log('Google login response:', response.data);
//   //     onLogin(response.data.access_token);
//   //     navigate("/");
//   //   } catch (error) {
//   //     console.error('Error logging in with Google:', error);
//   //   }
//   // };

//   return (
//     <div className='d-flex flex-row justify-content-center align-items-center'> 
//     <Comp/>
//     <div className="container col-4 mb-3">
//       <h1>Welcome Back</h1>
//       <h6 className='text-black-50 mb-5'>Write checks with confidence, wherever you are.</h6>
      
//       <form onSubmit={handleSubmit}>
//         {/* <div className="form-group mb-4">
//         <label>Username</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             className="form-control"
//             placeholder="Username*"
//             required
//           />
//         </div> */}
//         <div className="form-group mb-4">
//             <TextField
//               type="text"
//               label="Email Address"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               fullWidth
//               // required
//               // error={!!errors.username}
//               // helperText={errors.username}
//             />
//             {errors.username && <div className="text-danger" style={{fontSize:'0.75rem',position:'absolute'}}><p>{errors.username}</p></div>}
//           </div>
//         {/* <div className="form-group mb-4">
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
//         </div> */}
//         <div className="form-group mb-4">
//             <TextField
//               type={isPasswordVisible ? 'text' : 'password'}
//               label='Password'
//               name='password'
//               value={formData.password}
//               onChange={handleChange}
//               fullWidth
//               // required
//               // error={!!errors.password}
//               // helperText={errors.password}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position='end'>
//                     <IconButton aria-label='toggle password visibility' onClick={togglePasswordVisibility}>
//                       {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
//                     </IconButton>
//                   </InputAdornment>
//                 )
//               }}
//             />
//             {errors.password && <div className='text-danger' style={{fontSize:'0.75rem',position:'absolute'}}>{errors.password}</div>}
//           </div>

//         <button type="submit" className="btn btn-success mb-3 w-100" style={{transition: 'transform 0.2s ease-in-out'}}>Login</button>
        
//         <p>Don't have an account?<Link to="/register">Sign Up</Link></p>
//       </form>
//       <div className="my-3">
//         <GoogleLoginComponent onLoginSuccess={handleGoogleLoginSuccess} />
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Login;

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import GoogleLoginComponent from './GoogleLoginComponent';
import Comp from './Comp';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const validationSchema = Yup.object({
  username: Yup.string().required('Required').email("enter valid email"),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://localhost:8080/login', values);
        console.log('Login response:', response.data);
        onLogin(response.data.access_token);
        navigate("/");
      } catch (error) {
        console.error('Error logging in:', error);
      }
    },
  });

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleGoogleLoginSuccess = (token) => {
    fetch('http://localhost:8080/api/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Login successful:', data);
      localStorage.setItem('token', data.access_token);
      navigate('/');
    })
    .catch(error => {
      console.error('Error during login:', error);
    });
  };

  return (
    <div className='d-flex flex-row justify-content-center align-items-center'> 
      <Comp/>
      <div className="container col-4 mb-3">
        <h1>Welcome Back</h1>
        <h6 className='text-black-50 mb-5'>Write checks with confidence, wherever you are.</h6>
        
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group mb-4">
            <TextField
              type="text"
              label="Email Address"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </div>

          <div className="form-group mb-4">
            <TextField
              type={isPasswordVisible ? 'text' : 'password'}
              label='Password'
              name='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton aria-label='toggle password visibility' onClick={togglePasswordVisibility}>
                      {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </div>

          <button type="submit" className="btn btn-success mb-3 w-100" style={{transition: 'transform 0.2s ease-in-out'}}>Login</button>
          
          <p>Don't have an account?<Link to="/register">Sign Up</Link></p>
        </form>
        <div className="my-3">
          <GoogleLoginComponent onLoginSuccess={handleGoogleLoginSuccess} />
        </div>
      </div>
    </div>
  );
};

export default Login;

