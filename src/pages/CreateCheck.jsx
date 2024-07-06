import React from 'react';
import  axios from 'axios';
import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/checks', formData);
      console.log(response.data);
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
    } catch (error) {
      console.error('Error creating check', error);
    }
  };

  return (
    <>

    <div className="my-3 hstack">
    <h2 className='mx-4'>Create Check</h2>
    <div className='ms-auto'>
    <Tooltip title="Help">
      <IconButton>
        <HelpOutlineIcon />
      </IconButton>
    </Tooltip>
    {/* <button type="button" class="btn btn-outline-dark mx-4"
        data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="This top tooltip is themed via CSS variables.">
  ?
</button> */}
    </div>
    </div>
    <hr className="mx-4"></hr>
    
    <p className="mx-4">Want to sign with signature?</p>
    <div className="hstack gap-2 mx-4">
    <div className="form-check">
  <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" for="flexRadioDefault1">
    Yes
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked/>
  <label className="form-check-label" for="flexRadioDefault2">
    No
  </label>
</div>
</div>

<form className="row g-3 my-4 p-4" onSubmit={handleSubmit}>
      <div className="col-md-4">
        <select name="bankAccount" value={formData.bankAccount} onChange={handleChange} className="form-select">
          <option value="">Select Bank Account</option>
          <option value="account1">Account 1</option>
          <option value="account2">Account 2</option>
        </select>
      </div>
      <div className="col-md-4">
        <select name="payee" value={formData.payee} onChange={handleChange} className="form-select">
          <option value="">Select Payee</option>
          <option value="payee1">Payee 1</option>
          <option value="payee2">Payee 2</option>
        </select>
      </div>
      <div className="col-md-4 hstack">
        
        <input
          type="text"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Amount"
        />
        <AttachMoneyIcon/>
      </div>
      <div className="col-md-4">
        <input
          type="text"
          name="checkNumber"
          value={formData.checkNumber}
          onChange={handleChange}
          className="form-control"
          placeholder="Check Number*"
        />
      </div>
      <div className="col-md-4">
        <input
          type="date"
          name="issueDate"
          value={formData.issueDate}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="col-md-4">
        <input
          type="text"
          name="invoiceId"
          value={formData.invoiceId}
          onChange={handleChange}
          className="form-control"
          placeholder="Invoice ID"
        />
      </div>
      <div className="col-md-4 ">
        <input
          type="text"
          name="memo"
          value={formData.memo}
          onChange={handleChange}
          className="form-control"
          placeholder="Memo"
        />
      </div>
      <div className="col-md-4">
        <select name="tags" value={formData.tags} onChange={handleChange} className="form-select">
          <option value="">Select Tags</option>
          <option value="tag1">Tag 1</option>
          <option value="tag2">Tag 2</option>
        </select>
      </div>
      <div className="col-md-4">
        <select name="status" value={formData.status} onChange={handleChange} className="form-select">
          <option value="Draft">Draft</option>
          <option value="Submitted">Submitted</option>
        </select>
      </div>
      <button type="submit" className="btn btn-outline-dark col-2 mx-2">Save & Print</button>
      <button type="submit" className="btn btn-outline-dark col-1">Save</button>
      <button type="button" className="btn btn-outline-dark col-1 ms-auto">Preview</button>
      <button type="button" className="btn btn-outline-dark col-2 mx-2">Add Check</button>
    </form>

    {/* <form className="row g-3 my-4 p-4">
    <div className="col-md-4"> */}
    {/* <label for="inputState" className="form-label">State</label> 
    <select id="inputState" className="form-select">
      <option selected>Select Bank Account</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-4">
    {/* <label for="inputState" className="form-label">State</label> */}
    {/* <select id="inputState" className="form-select">
      <option selected>Select Payee</option>
      <option>...</option>
    </select>
  </div> */}
  {/* <div className="col-md-4">
    
    <input type="text" className="form-control" id="amount4" placeholder="Enter Amount"/>
  </div> */}
  {/* <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div> */}

  {/* SECOND ROW ///////////////////////////////////////////////////////////////////////////*/}
  {/* <div className="col-md-4">
    
    <input type="text" className="form-control" id="amount4" placeholder="Check Number*"/>
  </div>
  <div className="col-md-4">
    
    <input type="date" className="form-control" id="amount4" placeholder="Check Number*"/>
  </div>
  <div className="col-md-4">
    
    <input type="text" className="form-control" id="amount4" placeholder="Invoice ID"/>
  </div> */}

  {/* THIRD ROW//////////////////////////////////////////////////////////////////// */}
  {/* <div className="col-md-4 my-4">
    
    <input type="text" className="form-control" id="amount4" placeholder="Memo"/>
  </div>
  <div className="col-md-4">
    
    <select id="inputState" className="form-select">
      <option selected>Select Tags</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-4"> */}
    
    {/* <select id="inputState" className="form-select">
      <option selected>Draft</option>
      <option>...</option>
    </select>
  </div>
  
  
  
<button type="button" class="btn btn-outline-secondary col-2 mx-2" disabled>Save & Print</button>
<button type="button" class="btn btn-outline-dark col-1">Save</button>
<button type="button" class="btn btn-outline-dark col-1 ms-auto">Preview</button>
<button type="button" class="btn btn-outline-dark col-2 mx-2 ">Add Check</button>

</form>  */}


  {/* <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div> */}
  {/* <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div> */}
  {/* <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div> */}

    </>

  )
}

export default CreateCheck