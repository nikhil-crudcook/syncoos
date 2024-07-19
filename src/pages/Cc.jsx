import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Grid from '@mui/material/Grid';
import './Cc.css';

const CreateCheck = () => {
  const [formData, setFormData] = useState({
    bankAccount: '',
    payee: '',
    amount: '',
    checkNumber: '',
    issueDate: '',
    invoiceId: '',
    memo: '',
    tags: '',
    status: 'Draft'
  });

  const [isFormFilled, setIsFormFilled] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      issueDate: today,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData, [name]: value };
      checkIfFormIsFilled(updatedFormData);
      return updatedFormData;
    });
  };

  const checkIfFormIsFilled = (data) => {
    const isFilled = Object.values(data).some(value => value !== '' && value !== 'Draft');
    setIsFormFilled(isFilled);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); // Retrieve the token from local storage

    try {
      const response = await axios.post('http://localhost:8080/api/checks', formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Include the token in the request headers
        },
      });
      console.log('Response from server:', response.data);
      // Reset form if needed
      setFormData({
        bankAccount: '',
        payee: '',
        amount: '',
        checkNumber: '',
        issueDate: '',
        invoiceId: '',
        memo: '',
        tags: '',
        status: 'Draft'
      });
      setIsFormFilled(false);
    } catch (error) {
      console.error('Error creating check', error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      <div>
      <div className="my-3 hstack">
        <h2 className='mx-4'>Create Check</h2>
        <div className='ms-auto'>
          <Tooltip title="Help">
            <IconButton>
              <HelpOutlineIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <hr className="mx-4"></hr>
      <p className="mx-4">Want to sign with signature?</p>
      <div className="hstack gap-2 mx-4">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Yes
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            No
          </label>
        </div>
      </div>

      <form className="row g-3 my-4 p-4" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              select
              label="Select Bank Account"
              name="bankAccount"
              value={formData.bankAccount}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              SelectProps={{
                native: true,
              }}
            //   InputProps={{ style: { height: 40 } }}
            >
              <option value="">Select Bank Account</option>
              <option value="account1">Account 1</option>
              <option value="account2">Account 2</option>
            </TextField>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              select
              label="Select Payee"
              name="payee"
              value={formData.payee}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              SelectProps={{
                native: true,
              }}
            //   InputProps={{ style: { height: 40 } }}
            >
              <option value="">Select Payee</option>
              <option value="payee1">Payee 1</option>
              <option value="payee2">Payee 2</option>
            </TextField>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              label="Amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            //   InputProps={{ style: { height: 40 } }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              label="Check Number"
              name="checkNumber"
              value={formData.checkNumber}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            //   InputProps={{ style: { height: 40 } }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              label="Issue Date"
              name="issueDate"
              type="date"
              value={formData.issueDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              fullWidth
            //   InputProps={{ style: { height: 40 } }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              label="Invoice ID"
              name="invoiceId"
              value={formData.invoiceId}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            //   InputProps={{ style: { height: 40 } }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              label="Memo"
              name="memo"
              value={formData.memo}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            //   InputProps={{ style: { height: 40 } }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              select
              label="Select Tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              SelectProps={{
                native: true,
              }}
            //   InputProps={{ style: { height: 40 } }}
            >
              <option value="">Select Tags</option>
              <option value="tag1">Tag 1</option>
              <option value="tag2">Tag 2</option>
            </TextField>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              select
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              SelectProps={{
                native: true,
              }}
            //   InputProps={{ style: { height: 40 } }}
            >
              <option value="Draft">Draft</option>
              <option value="Submitted">Submitted</option>
            </TextField>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="mt-4 mb-0">
  <Grid item xs={12} md={6}>
    <Grid container spacing={2} justifyContent="flex-start">
      <Grid item>
        <Button type="submit" variant="outlined" sx={{ border: '1px solid black', color: 'black' }} disabled={!isFormFilled}>Save & Print</Button>
      </Grid>
      <Grid item>
        <Button type="submit" variant="contained" color="success" disabled={!isFormFilled}>Save</Button>
      </Grid>
    </Grid>
  </Grid>
  <Grid item xs={12} md={6}>
    <Grid container spacing={2} justifyContent="flex-end">
      <Grid item>
        <Button type="button" variant="outlined" sx={{ border: '1px solid black', color: 'black' }}>Preview</Button>
      </Grid>
      <Grid item>
        <Button type="button" variant="outlined"  sx={{ border: '1px solid black', color: 'black' }}>Add Check</Button>
      </Grid>
    </Grid>
  </Grid>
</Grid>

          {/* <Grid container spacing={2} justifyContent="space-between" className="mt-4">
          
            <Grid item>
              <Button type="submit" variant="outlined" disabled={!isFormFilled}>Save & Print</Button>
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" color="success" disabled={!isFormFilled}>Save</Button>
            </Grid>
            
            <Grid item>
              <Button type="button" variant="outlined">Preview</Button>
            </Grid>
            <Grid item>
              <Button type="button" variant="outlined">Add Check</Button>
              </Grid>
        </Grid> */}
    </form>
    </div>
  </>
  );
}

export default CreateCheck;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Tooltip from '@mui/material/Tooltip';
// import IconButton from '@mui/material/IconButton';
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import TextField from '@mui/material/TextField';
// import InputAdornment from '@mui/material/InputAdornment';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import Grid from '@mui/material/Grid';
// import './Cc.css'

// const CreateCheck = () => {
//   const [formData, setFormData] = useState({
//     bankAccount: '',
//     payee: '',
//     amount: '',
//     checkNumber: '',
//     issueDate: '',
//     invoiceId: '',
//     memo: '',
//     tags: '',
//     status: 'Draft'
//   });

//   useEffect(() => {
//     const today = new Date().toISOString().split('T')[0];
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       issueDate: today,
//     }));
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token'); // Retrieve the token from local storage
    
//     try {
//       const response = await axios.post('http://localhost:8080/api/checks', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}` // Include the token in the request headers
//         },
//       });
//       console.log('Response from server:', response.data);
//       // Reset form if needed
//       setFormData({
//         bankAccount: '',
//         payee: '',
//         amount: '',
//         checkNumber: '',
//         issueDate: '',
//         invoiceId: '',
//         memo: '',
//         tags: '',
//         status: 'Draft'
//       });
//     } catch (error) {
//       console.error('Error creating check', error.response ? error.response.data : error.message);
//     }
//   };

//   return (
//     <>
//     <div>
//       <div className="my-3 hstack">
//         <h2 className='mx-4'>Create Check</h2>
//         <div className='ms-auto'>
//           <Tooltip title="Help">
//             <IconButton>
//               <HelpOutlineIcon />
//             </IconButton>
//           </Tooltip>
//         </div>
//       </div>
//       <hr className="mx-4"></hr>
//       <p className="mx-4">Want to sign with signature?</p>
//       <div className="hstack gap-2 mx-4">
//         <div className="form-check">
//           <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
//           <label className="form-check-label" htmlFor="flexRadioDefault1">
//             Yes
//           </label>
//         </div>
//         <div className="form-check">
//           <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
//           <label className="form-check-label" htmlFor="flexRadioDefault2">
//             No
//           </label>
//         </div>
//       </div>

//       <form className="row g-3 my-4 p-4" onSubmit={handleSubmit}>
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={6} lg={4}>
//             <TextField
//               select
//               label="Select Bank Account"
//               name="bankAccount"
//               value={formData.bankAccount}
//               onChange={handleChange}
//               variant="outlined"
//               fullWidth
//               SelectProps={{
//                 native: true,
//               }}
//             //   InputProps={{ style: { height: 40 } }}
//             >
//               <option value="">Select Bank Account</option>
//               <option value="account1">Account 1</option>
//               <option value="account2">Account 2</option>
//             </TextField>
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//             <TextField
//               select
//               label="Select Payee"
//               name="payee"
//               value={formData.payee}
//               onChange={handleChange}
//               variant="outlined"
//               fullWidth
//               SelectProps={{
//                 native: true,
//               }}
//             //   InputProps={{ style: { height: 40 } }}
//             >
//               <option value="">Select Payee</option>
//               <option value="payee1">Payee 1</option>
//               <option value="payee2">Payee 2</option>
//             </TextField>
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//             <TextField
//               label="Amount"
//               name="amount"
//               value={formData.amount}
//               onChange={handleChange}
//               variant="outlined"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <AttachMoneyIcon />
//                   </InputAdornment>
//                 ),
//               }}
//               fullWidth
//             //   InputProps={{ style: { height: 40 } }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//             <TextField
//               label="Check Number"
//               name="checkNumber"
//               value={formData.checkNumber}
//               onChange={handleChange}
//               variant="outlined"
//               fullWidth
//             //   InputProps={{ style: { height: 40 } }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//             <TextField
//               label="Issue Date"
//               name="issueDate"
//               type="date"
//               value={formData.issueDate}
//               onChange={handleChange}
//               InputLabelProps={{ shrink: true }}
//               variant="outlined"
//               fullWidth
//             //   InputProps={{ style: { height: 40 } }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//             <TextField
//               label="Invoice ID"
//               name="invoiceId"
//               value={formData.invoiceId}
//               onChange={handleChange}
//               variant="outlined"
//               fullWidth
//             //   InputProps={{ style: { height: 40 } }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//             <TextField
//               label="Memo"
//               name="memo"
//               value={formData.memo}
//               onChange={handleChange}
//               variant="outlined"
//               fullWidth
//             //   InputProps={{ style: { height: 40 } }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//             <TextField
//               select
//               label="Select Tags"
//               name="tags"
//               value={formData.tags}
//               onChange={handleChange}
//               variant="outlined"
//               fullWidth
//               SelectProps={{
//                 native: true,
//               }}
//             //   InputProps={{ style: { height: 40 } }}
//             >
//               <option value="">Select Tags</option>
//               <option value="tag1">Tag 1</option>
//               <option value="tag2">Tag 2</option>
//             </TextField>
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//             <TextField
//               select
//               label="Status"
//               name="status"
//               value={formData.status}
//               onChange={handleChange}
//               variant="outlined"
//               fullWidth
//               SelectProps={{
//                 native: true,
//               }}
//             //   InputProps={{ style: { height: 40 } }}
//             >
//               <option value="Draft">Draft</option>
//               <option value="Submitted">Submitted</option>
//             </TextField>
//           </Grid>
//         </Grid>
//         <Grid container spacing={2} justifyContent="flex-end" className="mt-4">
//           <Grid item>
//             <Button type="submit" variant="outlined">Save & Print</Button>
//           </Grid>
//           <Grid item>
//             <Button type="submit" variant="outlined">Save</Button>
//           </Grid>
//           <Grid item>
//             <Button type="button" variant="outlined">Preview</Button>
//           </Grid>
//           <Grid item>
//             <Button type="button" variant="outlined">Add Check</Button>
//           </Grid>
//         </Grid>
//       </form>
//       </div>
//     </>
//   );
// }

// export default CreateCheck;
