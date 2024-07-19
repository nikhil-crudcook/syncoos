import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.checkNumber}
        </TableCell>
        <TableCell align="right">{row.status}</TableCell>
        <TableCell align="right">{row.amount}</TableCell>
        <TableCell align="right">{row.payee}</TableCell>
        <TableCell align="right">{row.issueDate}</TableCell>
        <TableCell align="right">{row.tags}</TableCell>
        <TableCell align="right">{row.bankAccount}</TableCell>
        <TableCell align="right">{row.invoiceId}</TableCell>
        <TableCell align="right">{row.memo}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const MyChecks = () => {
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
    <div>
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
          <p>Below is the list of all your checks.</p>
          <Link to='/create-check' className='ms-auto'>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
            >
              New
            </Button>
          </Link>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Check Number</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Payee</TableCell>
              <TableCell align="right">Issue Date</TableCell>
              <TableCell align="right">Tags</TableCell>
              <TableCell align="right">Bank Account</TableCell>
              <TableCell align="right">Invoice ID</TableCell>
              <TableCell align="right">Memo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {checks.map((check) => (
              <Row key={check.id} row={check} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyChecks;
