import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Comp from './Comp';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [isChecked, setIsChecked] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  const validateForm = () => {
  let valid = true;
  const newErrors = {};

  // const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

  if (!formData.firstName) {
    newErrors.firstName = 'First name is required';
    valid = false;
  }

  if (!formData.lastName) {
    newErrors.lastName = 'Last name is required';
    valid = false;
  }

  if (!formData.username) {
    newErrors.username = 'Email is required';
    valid = false;
  }

  if (!formData.password) {
    newErrors.password = 'Password is required';
    valid = false;
  } else if (formData.password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters';
    valid = false;
  }
  // else if(!hasSpecialChar.test(formData.password)){
  //   newErrors.password='Password must contain atleast one special char';
  //   valid=false;
  // }

  if (!formData.confirmPassword) {
    newErrors.confirmPassword = 'Confirm password is required';
    valid = false;
  } else if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = 'Passwords do not match';
    valid = false;
  }

  setErrors(newErrors);
  return valid;
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const { confirmPassword, ...dataToSend } = formData;

    try {
      const response = await axios.post('http://localhost:8080/register', dataToSend);
      console.log(response.data);

      // Reset form if needed
      setFormData({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
      });
      navigate('/login');
    } catch (error) {
      console.error('Error registering user', error);
    }
  };

  return (
    <div className='d-flex flex-row justify-content-center align-items-center'> 
      <Comp/>
      <div className="container col-md-4">
        <h1>Sign Up</h1>
        <h6 className='text-black-50 mb-3'>Write checks with confidence, wherever you are.</h6>
        <form onSubmit={handleSubmit}>

          <div className="form-group mb-3">
            <TextField
              type="text"
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              // required
              // error={!!errors.firstName}
              // helperText={errors.firstName}
            />
            {errors.firstName && <div className="text-danger" style={{fontSize:'0.75rem',position:'absolute'}}><p>{errors.firstName}</p></div>}
          </div>

          <div className="form-group mb-3">
            <TextField
              type="text"
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              // required
              // error={!!errors.lastName}
              // helperText={errors.lastName}
            />
            {errors.lastName && <div className="text-danger" style={{fontSize:'0.75rem',position:'absolute'}}><p>{errors.lastName}</p></div>}
          </div>

          <div className="form-group mb-3">
            <TextField
              type="text"
              label="Email"
              name="username"
              value={formData.username}
              onChange={handleChange}
              fullWidth
              // required
              // error={!!errors.username}
              // helperText={errors.username}
            />
            {errors.username && <div className="text-danger" style={{fontSize:'0.75rem',position:'absolute'}}><p>{errors.username}</p></div>}
          </div>

          <div className="form-group mb-3">
            <TextField
              type={isPasswordVisible ? 'text' : 'password'}
              label='Password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              fullWidth
              // required
              // error={!!errors.password}
              // helperText={errors.password}
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
            {errors.password && <div className="text-danger" style={{fontSize:'0.75rem',position:'absolute'}}><p>{errors.password}</p></div>}
          </div>

          <div className="form-group mb-3">
            <TextField
              type={isConfirmPasswordVisible ? 'text' : 'password'}
              label='Confirm Password'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              fullWidth
              // required
              // error={!!errors.confirmPassword}
              // helperText={errors.confirmPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton aria-label='toggle confirm password visibility' onClick={toggleConfirmPasswordVisibility}>
                      {isConfirmPasswordVisible ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            {errors.confirmPassword && <div className="text-danger" style={{fontSize:'0.75rem',position:'absolute'}}><p>{errors.confirmPassword}</p></div>}
          </div>

          <div className='form-check'>
            <input type="checkbox" className="form-check-input" id="termsCheckbox" checked={isChecked} onChange={handleCheckboxChange} />
            <label className="form-check-label" htmlFor="termsCheckbox">
              By clicking here, I state that I have read and understood the{' '}
              <Link to="https://checkwriter.synccos.com/terms" className='text-decoration-none'>terms and conditions</Link>.
            </label>
          </div>

          <button type="submit" className="btn btn-success mb-2 w-100" disabled={!isChecked}>Register</button>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Register;

// import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import Comp from './Comp';
// import { IconButton, InputAdornment, TextField, Checkbox, FormControlLabel } from '@mui/material';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

// const Register = () => {
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
//   const navigate = useNavigate();

//   const validationSchema = Yup.object({
//     firstName: Yup.string().required('First name is required'),
//     lastName: Yup.string().required('Last name is required'),
//     username: Yup.string().email('Invalid email address').required('Email is required'),
//     password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref('password'), null], 'Passwords must match')
//       .required('Confirm password is required'),
//     terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
//   });

//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       username: '',
//       password: '',
//       confirmPassword: '',
//       terms: false,
//     },
//     validationSchema,
//     onSubmit: async (values, { resetForm }) => {
//       try {
//         const { confirmPassword, terms, ...dataToSend } = values;
//         const response = await axios.post('http://localhost:8080/register', dataToSend);
//         console.log(response.data);
//         resetForm();
//         navigate('/login');
//       } catch (error) {
//         console.error('Error registering user', error);
//       }
//     },
//   });

//   return (
//     <div className="d-flex flex-row justify-content-center align-items-center">
//       <Comp />
//       <div className="container col-md-4">
//         <h1>Sign Up</h1>
//         <h6 className="text-black-50 mb-3">Write checks with confidence, wherever you are.</h6>
//         <form onSubmit={formik.handleSubmit}>
//           <div className="form-group mb-3">
//             <TextField
//               type="text"
//               label="First Name"
//               name="firstName"
//               value={formik.values.firstName}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               fullWidth
//               error={formik.touched.firstName && Boolean(formik.errors.firstName)}
//               helperText={formik.touched.firstName && formik.errors.firstName}
//             />
//           </div>
//           <div className="form-group mb-3">
//             <TextField
//               type="text"
//               label="Last Name"
//               name="lastName"
//               value={formik.values.lastName}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               fullWidth
//               error={formik.touched.lastName && Boolean(formik.errors.lastName)}
//               helperText={formik.touched.lastName && formik.errors.lastName}
//             />
//           </div>
//           <div className="form-group mb-3">
//             <TextField
//               type="email"
//               label="Email"
//               name="username"
//               value={formik.values.username}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               fullWidth
//               error={formik.touched.username && Boolean(formik.errors.username)}
//               helperText={formik.touched.username && formik.errors.username}
//             />
//           </div>
//           <div className="form-group mb-3">
//             <TextField
//               type={isPasswordVisible ? 'text' : 'password'}
//               label="Password"
//               name="password"
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               fullWidth
//               error={formik.touched.password && Boolean(formik.errors.password)}
//               helperText={formik.touched.password && formik.errors.password}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
//                       {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </div>
//           <div className="form-group mb-3">
//             <TextField
//               type={isConfirmPasswordVisible ? 'text' : 'password'}
//               label="Confirm Password"
//               name="confirmPassword"
//               value={formik.values.confirmPassword}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               fullWidth
//               error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
//               helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}>
//                       {isConfirmPasswordVisible ? <Visibility /> : <VisibilityOff />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </div>
//           <div className="form-check mb-3">
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   name="terms"
//                   checked={formik.values.terms}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//               }
//               label={
//                 <>
//                   By clicking here, I state that I have read and understood the{' '}
//                   <Link to="https://checkwriter.synccos.com/terms" className="text-decoration-none">
//                     terms and conditions
//                   </Link>
//                   .
//                 </>
//               }
//             />
//             {formik.touched.terms && formik.errors.terms && (
//               <div className="text-danger" style={{ fontSize: '0.75rem' }}>
//                 <p>{formik.errors.terms}</p>
//               </div>
//             )}
//           </div>
//           <button type="submit" className="btn btn-success mb-2 w-100" disabled={!formik.values.terms}>
//             Register
//           </button>
//           <p>Already have an account? <Link to="/login">Login</Link></p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import Comp from './Comp';
// import { Checkbox, IconButton, InputAdornment, TextField } from '@mui/material';
// import {FaEye,FaEyeSlash} from 'react-icons/fa';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [error, setError] = useState({});

//   const[isChecked,setIsChecked]=useState(false);
//   const[isPasswordVisible,setIsPasswordVisible]=useState(false);
//   const[isConfirmPasswordVisible,setIsConfirmPasswordVisible]=useState(false);

//   const handleCheckboxChange=()=>{
//     setIsChecked(!isChecked);
//   }

//   const togglePasswordVisibility=()=>{
//     setIsPasswordVisible(!isPasswordVisible);
//   }

//   const toggleConfirmPasswordVisibility=()=>{
//     setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
//   }

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     setError({
//       ...error,
//       [e.target.name]: ''
//     });
//   };

//   const validateForm = () => {
//     let valid = true;
//     const newErrors = {};

//     if (!formData.firstName) {
//       newErrors.firstName = 'First name is required';
//       valid = false;
//     }

//     if (!formData.lastName) {
//       newErrors.lastName = 'Last name is required';
//       valid = false;
//     }

//     if (!formData.username) {
//       newErrors.username = 'Email is required';
//       valid = false;
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//       valid = false;
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//       valid = false;
//     }

//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword = 'Confirm password is required';
//       valid = false;
//     } else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//       valid = false;
//     }

//     setError(newErrors);
//     return valid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // if (formData.password !== formData.confirmPassword) {
//     //   setError('Passwords do not match');
//     //   return;
//     // }
//     if(!validateForm()){
//       return;
//     }

//     const { confirmPassword, ...dataToSend } = formData;

//     try {
//       const response = await axios.post('http://localhost:8080/register', dataToSend);
//       console.log(response.data);
//       // Reset form if needed
//       setFormData({
//         firstName: '',
//         lastName: '',
//         username: '',
//         password: '',
//         confirmPassword: '',
//       });
//       navigate('/login');
//     } catch (error) {
//       console.error('Error registering user', error);
//     }
//   };

//   return (
//     <div className='d-flex flex-row justify-content-center align-items-center'> 
//     <Comp/>
//     <div className="container col-md-4">
//       <h1>Sign Up</h1>
//       <h6 className='text-black-50 mb-3'>Write checks with confidence, wherever you are.</h6>
//       <form onSubmit={handleSubmit}>

//         <div className="form-group mb-3">
//         <TextField
//         type="text"
//         label="First Name"
//         name="firstName"
//         value={formData.firstName}
//         onChange={handleChange}
//         fullWidth
//         required
//         error={error.firstName}
//         helperText={error.firstName || ''}
//         />
//         </div>
        
//         <div className="form-group mb-3">
//         <TextField
//         type="text"
//         label="Last Name"
//         name="lastName"
//         value={formData.lastName}
//         onChange={handleChange}
//         fullWidth
//         required
//         error={error.lastName}
//         helperText={error.lastName || ''}
//         />
//         </div>
        
//         <div className="form-group mb-3">
//         <TextField
//         type="text"
//         label="Email"
//         name="username"
//         value={formData.username}
//         onChange={handleChange}
//         fullWidth
//         required
//         error={error.username}
//         helperText={error.username || ''}
//         />
//         </div>
        
//         {/* <div className="form-group mb-3">
//         <div className='input-group'>
//           <input
//             type={isPasswordVisible?"text":"password"}
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="form-control"
//             placeholder="Password*"
//             required
//           />
//           <div className='input-group-append'>
//           <button type="button"className="btn btn-outline-secondary" onClick={togglePasswordVisibility}>
//           {isPasswordVisible?<FaEyeSlash/> : <FaEye/>}
//           </button>
//           </div>
//           </div>
//         </div> */}
//         <div className="form-group mb-3">
//         <TextField
//         type={isPasswordVisible?'text':'password'}
//         label='Password'
//         name='password'
//         value={formData.password}
//         onChange={handleChange}
//         fullWidth
//         required
//         error={error.password}
//         helperText={error.password || ''}
//         InputProps={{
//           endAdornment:(
//             <InputAdornment position='end'>
//               <IconButton aria-label='toogle password visibility' onClick={togglePasswordVisibility}>
//                 {isPasswordVisible?<Visibility/> : <VisibilityOff/>}
//               </IconButton>
//             </InputAdornment>
//           )
//         }}
//         />
//         </div>
//         <div className="form-group mb-3">
//         <TextField
//         type={isConfirmPasswordVisible?'text':'password'}
//         label='Confirm Password'
//         name='confirmPassword'
//         value={formData.confirmPassword}
//         onChange={handleChange}
//         fullWidth
//         required
//         error={error.confirmPassword}
//         helperText={error.confirmPassword || ''}
//         InputProps={{ 
//           endAdornment:(
//             <InputAdornment position='end'>
//               <IconButton aria-label='toogle confirm password visibility' onClick={toggleConfirmPasswordVisibility}>
//                 {isConfirmPasswordVisible?<Visibility/> : <VisibilityOff/>}
//               </IconButton>
//             </InputAdornment>
//           )
//         }}
//         />
//         </div>
        
//         {error && <div className="alert alert-danger">{error}</div>}
//         {/* <div className='form-check d-flex align-items-center'>
//         <input type="checkbox" ></input><p>By clicking here, I state that I have read and understood the <Link to="https://checkwriter.synccos.com/terms">terms and conditions</Link></p>
//         </div> */}
//         <div className='form-check'>
//       <input type="checkbox" className="form-check-input" id="termsCheckbox" checked={isChecked} onChange={handleCheckboxChange} />
//       <label className="form-check-label" htmlFor="termsCheckbox">
//         By clicking here, I state that I have read and understood the{' '}
//         <Link to="https://checkwriter.synccos.com/terms" className='text-decoration-none'>terms and conditions</Link>.
//       </label>
//     </div>
//         <button type="submit" className="btn btn-success mb-2 w-100" disabled={!isChecked}>Register</button>
//         <p>Already have an account? <Link to="/login">Login</Link></p>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default Register;






// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate,Link } from 'react-router-dom';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     username: '',
//     password: '',
//     role: 'ADMIN'
//   });

//   const navigate=useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/register', formData);
//       console.log(response.data);
//       // Reset form if needed
//       setFormData({
//         firstName: '',
//         lastName: '',
//         username: '',
//         password: '',
//         role: 'ADMIN'
//       });
//       navigate('/login')
//     } catch (error) {
//       console.error('Error registering user', error);
//     }
//   };

//   return (

//     <div className="container col-md-4">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group mb-3">
//           {/* <label>First Name</label> */}
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             className="form-control"
//             placeholder="First Name"
//             required
//           />
//         </div>
//         <div className="form-group mb-3">
//           {/* <label>Last Name</label> */}
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             className="form-control"
//             placeholder="Last Name"
//             required
//           />
//         </div>
//         <div className="form-group mb-3">
//           {/* <label>Username</label> */}
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             className="form-control"
//             placeholder="Username"
//             required
//           />
//         </div>
//         <div className="form-group mb-3">
          
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
//         {/* <div className="form-group mb-3">
          
//           <select
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             className="form-control"
//           >
//           <option value="">Select Role</option>
//             <option value="ADMIN">ADMIN</option>
//             <option value="USER">USER</option>
//           </select>
//         </div> */}
//         <button type="submit" className="btn btn-success mb-2">Register</button>
//         <p>Already have an account?<Link to="/login">Login</Link></p>
//       </form>
//     </div>
//   );
// };

// export default Register;

// // import React from 'react'


// // const Register = () => {
// //   return (
// //     <div className="ms-3 mt-5 col-3">
    
// //     <h1 className="ms-5 p-4">Register</h1>
// //     {/* <p>WRITE CHECKS WITH CONFIDENCE............</p> */}
    
// //     <div className="mb-3 mt-4">
  
// //   <input className="form-control" type="text" id="formFile" placeholder="First Name*"/>
// // </div>
// // <div className="mb-3">
// // <input className="form-control" type="text" id="formFile" placeholder="Last Name*"/>
// // </div>
// // <div className="mb-3">
// // <input className="form-control" type="text" id="formFile" placeholder="Username*"/>
// // </div>
// // <div className="mb-3">
// // <input className="form-control" type="Password" id="formFile" placeholder="Password*"/>
// // </div>
// // <div className="mb-3">
// // <input className="form-control" type="Password" id="formFile" placeholder="Confirm Password*"/>
// // </div>
// // <div className="mb-3">
// // <select className="form-select">
// //           <option value="">Select Role</option>
// //           <option value="payee2">Admin</option>
// //         </select>
// // </div>
// // <button type="submit" class="btn btn-success">Submit</button>
    
// //     </div>

// //   )
// // }

// // export default Register