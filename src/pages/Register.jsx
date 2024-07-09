import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
    role: 'ADMIN'
  });

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
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
        role: 'ADMIN'
      });
      navigate('/login');
    } catch (error) {
      console.error('Error registering user', error);
    }
  };

  return (
    <div className="container col-md-4">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-control"
            placeholder="First Name"
            required
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-control"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control"
            placeholder="Username"
            required
          />
        </div>
        <div className="form-group mb-3">
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
        <div className="form-group mb-3">
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="form-control"
            placeholder="Confirm Password*"
            required
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-success mb-2">Register</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default Register;

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