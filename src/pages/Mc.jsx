import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

import SnackbarComponent from './Snackbar';
import { Chip } from '@mui/material';

import './MyCheck.css'


function Row(props) {
  const { row, onDelete } = props;
  const [open, setOpen] = useState(false);


  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.checkNumber}</TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell>{row.amount}</TableCell>
        <TableCell>{row.payee}</TableCell>
        <TableCell>{row.issueDate}</TableCell>
        <TableCell>{row.tags}</TableCell>
        <TableCell>{row.bankAccount}</TableCell>
        <TableCell>{row.invoiceId}</TableCell>
        <TableCell>{row.memo}</TableCell>
        <TableCell>
            <IconButton aria-label="delete" size="small" onClick={()=>onDelete(row.id)}>
                <DeleteIcon/>
            </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              {/* <Typography variant="h6" gutterBottom component="div">
                Check Details
              </Typography> */}
              <Table size="small" aria-label="purchases">
                {/* <TableHead>
                  <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell align="right">Value</TableCell>
                  </TableRow>
                </TableHead> */}
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">Bank Account</TableCell>
                    <TableCell align="right">{row.bankAccount}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">Invoice ID</TableCell>
                    <TableCell align="right">{row.invoiceId}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">Memo</TableCell>
                    <TableCell align="right">{row.memo}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const MyCheck = () => {
  const [checks, setChecks] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

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


  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8080/api/checks/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setChecks(checks.filter((check) => check.id !== id));
      setSnackbarMessage("Check Deleted Successfully");
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error deleting check', error);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };


  return (
    
    <div className="me-5" style={{width:'100%', padding:'10px'}}>
      <div className='my-3'>
        <div className='hstack'>
          <h2>Check List</h2>
          <Tooltip className='ms-auto' title="Help">
            <IconButton>
              <HelpOutlineIcon />
            </IconButton>
          </Tooltip>
        </div>
        <hr></hr>
        <div className='hstack'>
          <p>Below is the list  of all your checks.</p>
          <Link to='/create-check' className='ms-auto'>
            <Button variant="contained" color="primary" startIcon={<AddIcon />}>
              New
            </Button>
          </Link>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead sx={{ backgroundColor: '#f5f5f5'}}>
            <TableRow>
              <TableCell />
              <TableCell sx={{fontWeight:'bold'}}>Check Number</TableCell>
              <TableCell sx={{fontWeight:'bold'}}>Status</TableCell>
              <TableCell sx={{fontWeight:'bold'}}>Amount</TableCell>
              <TableCell sx={{fontWeight:'bold'}}>Payee</TableCell>
              <TableCell sx={{fontWeight:'bold'}}>Issue Date</TableCell>
              <TableCell sx={{fontWeight:'bold'}}>Tags</TableCell>
              <TableCell sx={{fontWeight:'bold'}}>Bank Account</TableCell>
              <TableCell sx={{fontWeight:'bold'}}>Invoice ID</TableCell>
              <TableCell sx={{fontWeight:'bold'}}>Memo</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {checks.map((check) => (
              <Row key={check.id} row={check} onDelete={handleDelete}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <SnackbarComponent
      open={snackbarOpen}
      message={snackbarMessage}
      severity="success"
      handleClose={handleSnackbarClose}
      />
    </div>
  );
};

export default MyCheck;
