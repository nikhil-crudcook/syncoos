import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Tooltip  from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const MyCheck = () => {
  const [checks, setChecks] = useState([]);

  useEffect(() => {
    
    const fetchChecks = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/api/checks', {
          headers: {
            'Authorization': `Bearer ${token}` 
          }
        });
        setChecks(response.data);
      } catch (error) {
        console.error('Error fetching checks', error);
      }
    };

    fetchChecks();
  }, []);

  return (
    <div style={{width:'100%',padding:'6px'}}>
    <div className='my-3'>
    <div className='hstack'>
      <h2>Check List</h2>
      <Tooltip  className='ms-auto' title="Help">
      <IconButton>
        <HelpOutlineIcon />
      </IconButton>
    </Tooltip>
    </div>

      <hr></hr>
      <div className='hstack'>
      <p>Below is the list  of all your checks.</p>
      <Link to='/create-check' className='ms-auto'><Button 
      variant="contained" 
      color="primary" 
      startIcon={<AddIcon />} 
      // style={{ backgroundColor: '#1E3A61', color: '#fff' }}
    >
      New
    </Button>
    </Link>
      </div>
      </div>
      <table className="table ">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Check Number</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Payee</th>
            <th>Issue Date</th>
            <th>Tags</th>
            <th>Bank Account</th>
            <th>Invoice ID</th>
            <th>Memo</th>
          </tr>
        </thead>
        <tbody>
          {checks.map((check) => (
            <tr key={check.id}>
            <td>{check.checkNumber}</td>
            <td>{check.status}</td>
            <td>{check.amount}</td>
            <td>{check.payee}</td>
            <td>{check.issueDate}</td>
            <td>{check.tags}</td>
              {/* <td>{check.id}</td>
              <td>{check.bankAccount}</td>
              <td>{check.payee}</td>
              <td>{check.amount}</td>
              <td>{check.checkNumber}</td>
              <td>{check.issueDate}</td>
              <td>{check.invoiceId}</td>
              <td>{check.memo}</td>
              <td>{check.tags}</td>
              <td>{check.status}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCheck;


// import React from 'react'
// import plus_icon from '../assets/plus_icon.png'

// const MyCheck = () => {
//   return (
//     <>
//     <div className="m-4 hstack ">
//     <h2>My Check/ </h2>
//     <div className="col-2">
//     <select id="inputState" className="form-select">
//       <option selected>All Checks</option>
//       <option>...</option>
//     </select>
//     </div>
//     <div className='ms-auto'>
//     <button type="button" class="btn btn-outline-dark "
//         data-bs-toggle="tooltip" data-bs-placement="top"
//         data-bs-custom-class="custom-tooltip"
//         data-bs-title="This top tooltip is themed via CSS variables.">
//   ?
// </button>
//     </div>
//     </div>
//     <hr className="mx-4"></hr>
// <div className="hstack">
//     <p className="m-4">Below is the list of all your checks.</p>
//     <button type="button" class="btn btn-outline-secondary mx-2 ms-auto" disabled>Mail</button>
//     <button type="button" class="btn btn-outline-secondary mx-2" disabled>Email</button>
//     <button type="button" class="btn btn-primary mx-4"><a className="nav-link active" aria-current="page" href="create-check"><img src={plus_icon} className="me-2 w-25"></img>New</a></button>
// </div>

//     <table class="table m-4">
//   <thead class="table-light">
//     <th>Check No.</th>
//     <th>Status</th>
//     <th>Amount</th>
//     <th>Payee Name</th>
//     <th>Issued Date</th>
//     <th>Account Nick Name</th>
//     <th>Tags</th>
//     <th>Actions</th>
//   </thead>
//   <tbody>

//     <tr>
//         <td>V1</td>
//         <td>
//         <select id="inputState" className="form-select">
//       <option selected>Blank</option>
//       <option>...</option>
//     </select>
//         </td>
//         <td>V3</td>
//         <td>V3</td>
//         <td>V3</td>
//         <td>V3</td>
//         <td>V3</td>
//         <td>
        
//   <div class="dropdown me-1">
//     <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
      
//     </button>
//     <ul class="dropdown-menu">
//       <li><a class="dropdown-item" href="#">Edit</a></li>
//       <li><a class="dropdown-item" href="#">Delete</a></li>
//     </ul>
//   </div>
//         </td>

//     </tr>

//     <tr>
//         <td>V1</td>
//         <td>
//         <select id="inputState" className="form-select">
//       <option selected>Blank</option>
//       <option>...</option>
//     </select>
//         </td>
//         <td>V3</td>
//         <td>V3</td>
//         <td>V3</td>
//         <td>V3</td>
//         <td>V3</td>
//         <td>
        
//   <div class="dropdown me-1">
//     <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
      
//     </button>
//     <ul class="dropdown-menu">
//       <li><a class="dropdown-item" href="#">Edit</a></li>
//       <li><a class="dropdown-item" href="#">Delete</a></li>
//     </ul>
//   </div>
//         </td>

//     </tr>

//   </tbody>
// </table>
//     </>
//   )
// }

// export default MyCheck