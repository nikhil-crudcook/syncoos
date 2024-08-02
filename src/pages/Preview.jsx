import React from 'react'
import './Preview.css'

const numberToWords = (num) => {
  const a = [
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
    "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
  ];
  const b = [
    "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
  ];

  const numToWords = (n) => {
    if (n < 20) return a[n];
    if (n < 100) return b[Math.floor(n / 10)] + (n % 10 ? " " + a[n % 10] : "");
    if (n < 1000) return a[Math.floor(n / 100)] + " Hundred" + (n % 100 ? " and " + numToWords(n % 100) : "");
    if (n < 1000000) return numToWords(Math.floor(n / 1000)) + " Thousand" + (n % 1000 ? " " + numToWords(n % 1000) : "");
    if (n < 1000000000) return numToWords(Math.floor(n / 1000000)) + " Million" + (n % 1000000 ? " " + numToWords(n % 1000000) : "");
    return numToWords(Math.floor(n / 1000000000)) + " Billion" + (n % 1000000000 ? " " + numToWords(n % 1000000000) : "");
  };

  if (num === 0) return "Zero";
  return numToWords(num);
};

const Preview = ({open,formData}) => {

  const { bankAccount,payee, amount,checkNumber, memo, issueDate } = formData;

  return (
    <div className="check-preview">
      <div className="header">
        <div className="sender-info">
          <p>{payee}</p>
        </div>
        <div><h3>{bankAccount}</h3></div>
        <div className="checkNumber">
          <span>No. : {checkNumber}</span>
        </div>
      </div>
      <div className="date">
          <p>Date: {issueDate}</p>
        </div>
      <div className="body">
        <div className="payee">
          <p>PAY TO THE ORDER OF: {payee}</p>
          <hr style={{borderColor:"green", marginRight: '13px', width: 'calc(100% - 13px)', borderWidth: '1px 0 0 0', borderStyle: 'solid'}}></hr>
        </div>
        <div className="amount">
          $ <span  className='px-2 py-1' style={{border:'2px solid green'}}>{amount}</span>
        </div>
        <div className="amount-text">
          <p>{amount === "0" ? "Zero And Zero Cent*****" : numberToWords(amount)} DOLLARS</p>
          <hr style={{borderColor:'green'}}></hr>
        </div>
        <div className="memo">
          <p>Memo: {memo}</p>
        </div>
      </div>
      <div className="foooter">
        <p>AUTHORIZED SIGNATURE</p>
      </div>
    </div>
  )
}

export default Preview