import React from 'react'
import { Link } from 'react-router-dom';
import syncoos from '../assets/syncoos.png';
import check3 from '../assets/check3.png';
import pcheck from '../assets/pcheck.png';
import playstore from '../assets/playstore.png'
import checkv  from '../assets/checkv.png'
import bankOfAmerica from '../assets/bank1.png'
import chase from '../assets/bank2.png'
import tdBank from '../assets/bank3.png'
import citizensBank from '../assets/bank4.png'
import email from '../assets/email.png'
import user from '../assets/user.png'

import './Splash.css'

const Splash = () => {
  return (
    <div className="p-0 m-0 bg-transparent">
    <div className='header-section bg-primary-custom pt-2 ps-2'>

    <nav className='mb-0'>
    <div className='hstack gap-5 me-4'>
    <img src={syncoos} alt="syncoosImage"/>
    {/* <div className='ms-auto gap-3'> */}
    <Link to='/login' className='text-decoration-none ms-auto yellow-green-txt'>Sign in</Link>
    <button className='btn btn-light'><Link to='/register' className='text-black text-decoration-none'>Get started</Link></button>
    {/* </div> */}
    </div>
    </nav>
    <hr className='my-2'></hr>
    <div className='absolute-cont text-center my-5 p-4'>
    <p className=' yellow-green-txt mb-0'>All-in-one check writer for everyone</p>
    <h2 className='headline-txt my-2 text-white'>Smart and simple<br/>
    check writer</h2>
    <p className='text-white-50'>Create and print checks with ease using our check writer application.</p>
    </div>
    <img src={check3} alt="check3"/>

    </div>
    
    <div className='middle-dark bg-middle-custom rounded-1'>
    <div className='absolute-cont text-center py-5'>
    <p className=' yellow-green-txt mb-0'>Why Synccheck ?</p>
    <h2 className='headline-txt my-2 text-white'>The only check writer
    app
    <br/>
    you’ll ever need</h2>
    <p className='text-white-50'>Our check writer is user-friendly and easy to use.</p>
    </div>
    <div className='d-flex flex-row text-center align-items-center justify-content-center my-5 p-5 mx-5'>
    <div className='writer-feature text-white-50 text-center d-flex flex-row align-items-center justify-content-center  flex-column my-5'>
    <div className="icon light-bg d-flex align-items-center justify-content-center my-3">
    <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V15C0 15.5304 0.210714 16.0391 0.585786 16.4142C0.960859 16.7893 1.46957 17 2 17H20C20.5304 17 21.0391 16.7893 21.4142 16.4142C21.7893 16.0391 22 15.5304 22 15V2C22 1.46957 21.7893 0.960859 21.4142 0.585786C21.0391 0.210714 20.5304 0 20 0V0ZM2 15V2H10V15H2ZM20 15H12V2H20V15ZM13 5.5H19V7H13V5.5ZM13 8H19V9.5H13V8ZM13 10.5H19V12H13V10.5Z" fill="#E7FEAB"></path></svg>
        </div>
    <h3 className='text-white'>Address Book</h3>
    <p>Stores contact information of frequently used payees, making it easy to write and print checks quickly.</p>
    </div>

    <div className='text-white-50'>
    <div className="icon light-bg d-flex align-items-center justify-content-center my-3">
    <svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.2917 12.4993V14.8118C32.6987 14.8118 35.4583 17.5714 35.4583 20.9785C35.4583 22.2427 35.0729 23.4143 34.4254 24.3856L32.745 22.7052C33.0071 22.181 33.1458 21.5952 33.1458 20.9785C33.1458 18.851 31.4192 17.1243 29.2917 17.1243V19.4368L25.8229 15.9681L25.7767 15.9218C25.8692 15.8448 25.9771 15.7831 29.2917 12.4993ZM29.2917 29.4577V27.1452C25.8846 27.1452 23.125 24.3856 23.125 20.9785C23.125 19.7143 23.5104 18.5427 24.1579 17.5714L25.8383 19.2518C25.5763 19.776 25.4375 20.3618 25.4375 20.9785C25.4375 23.106 27.1642 24.8327 29.2917 24.8327V22.5202L32.7604 25.9889L32.8067 26.0352C32.7142 26.1123 32.6063 26.1739 29.2917 29.4577ZM20.0879 21.7493H9.25C5.84292 21.7493 3.08333 18.9898 3.08333 15.5827C3.08333 12.1756 5.84292 9.41602 9.25 9.41602H10.3446C11.3621 5.85477 14.6458 3.24935 18.5 3.24935C23.125 3.24935 26.825 6.9031 26.9792 11.451C27.935 11.1273 28.9833 10.9577 30.0625 10.9577C32.0358 10.9577 33.8704 11.5435 35.4583 12.4993C34.1171 10.8035 32.1283 9.63185 29.8312 9.46227C28.7829 4.15893 24.1117 0.166016 18.5 0.166016C14.0446 0.166016 10.175 2.69435 8.24792 6.37893C3.6075 6.88768 0 10.8035 0 15.5827C0 20.6856 4.14708 24.8327 9.25 24.8327H20.8125C20.4117 23.8768 20.165 22.8285 20.0879 21.7493Z" fill="#E7FEAB"></path></svg>
        </div>
        <h3 className='text-white'>
        Cloud Sync
    </h3>
    <p>Allows users to access their check writing data from multiple devices and locations.</p>
    </div>
    
    <div className='text-white-50'>
    <div className="icon light-bg d-flex align-items-center justify-content-center my-3">
    <svg width="31" height="29" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.2916 8.33333C28.8508 8.33333 30.9166 10.3992 30.9166 12.9583V22.2083H24.7499V28.375H6.24992V22.2083H0.083252V12.9583C0.083252 10.3992 2.14909 8.33333 4.70825 8.33333H6.24992V0.625H24.7499V8.33333H26.2916ZM9.33325 3.70833V8.33333H21.6666V3.70833H9.33325ZM21.6666 25.2917V19.125H9.33325V25.2917H21.6666ZM24.7499 19.125H27.8333V12.9583C27.8333 12.1104 27.1395 11.4167 26.2916 11.4167H4.70825C3.86034 11.4167 3.16659 12.1104 3.16659 12.9583V19.125H6.24992V16.0417H24.7499V19.125ZM26.2916 13.7292C26.2916 14.5771 25.5978 15.2708 24.7499 15.2708C23.902 15.2708 23.2083 14.5771 23.2083 13.7292C23.2083 12.8812 23.902 12.1875 24.7499 12.1875C25.5978 12.1875 26.2916 12.8812 26.2916 13.7292Z" fill="#E7FEAB"></path></svg>
    </div>
    <h3 className='text-white'>Check Printing</h3><p>Ability to print multiple checks at once, saving time and improving efficiency.</p>
    </div>
    
    <div className='text-white-50'>
    <div class="icon light-bg d-flex align-items-center justify-content-center my-3"><svg width="37" height="29" viewBox="0 0 37 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.9167 0.625H7.70833C6.89058 0.625 6.10632 0.94985 5.52809 1.52809C4.94985 2.10632 4.625 2.89058 4.625 3.70833V9.875H7.70833V3.70833H33.9167V25.2917H7.70833V19.125H4.625V25.2917C4.625 26.1094 4.94985 26.8937 5.52809 27.4719C6.10632 28.0501 6.89058 28.375 7.70833 28.375H33.9167C34.7344 28.375 35.5187 28.0501 36.0969 27.4719C36.6751 26.8937 37 26.1094 37 25.2917V3.70833C37 2.89058 36.6751 2.10632 36.0969 1.52809C35.5187 0.94985 34.7344 0.625 33.9167 0.625ZM10.7917 19.125V16.0417H0V12.9583H10.7917V9.875L16.9583 14.5L10.7917 19.125ZM30.8333 16.0417H20.0417V12.9583H30.8333V16.0417ZM30.8333 9.875H20.0417V6.79167H30.8333V9.875ZM26.2083 22.2083H20.0417V19.125H26.2083V22.2083Z" fill="#E7FEAB"></path></svg></div>
    <h3 className='text-white'>Customizable Layout</h3>
    <p>Custom layout to make check writing process more personalised and user-friendly.</p></div>

    </div>
</div>




    <div className='row col-5 col-md-8 col-lg-7 position-relative  m-5 p-5'>
        <h1 className='text-black text-start'><b>Super convenient check writer</b></h1>
        <p className='text-left text-black-50'>
        The ultimate solution for hassle-free transactions. With its intuitive interface and seamless integration, it simplifies check-writing tasks, saving you time and effort. Say goodbye to manual calculations and enjoy a smooth and efficient payment experience
        </p>
    </div>
    {/* <div>
        <img src={pcheck} alt='pcheck'/>
    </div> */}

    <div class="container mt-5">
    <div class="row">
      <div class="col-lg-6 d-flex flex-column justify-content-between">
        <div class="feature-box bg-light-custom mb-4">
          <div class="d-flex align-items-center">
            <div class="feature-icon me-3">
              <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V15C0 15.5304 0.210714 16.0391 0.585786 16.4142C0.960859 16.7893 1.46957 17 2 17H20C20.5304 17 21.0391 16.7893 21.4142 16.4142C21.7893 16.0391 22 15.5304 22 15V2C22 1.46957 21.7893 0.960859 21.4142 0.585786C21.0391 0.210714 20.5304 0 20 0ZM2 2H20V15H2V2ZM20 0V2H2V0H20ZM20 15H2V2H20V15ZM20 0H2V2H20V0ZM15 5H12V7H15V5ZM12 9H15V11H12V9Z" fill="#E7FEAB" />
              </svg>
            </div>
            <div>
              <h5 class="mb-0">Check Printing</h5>
              <p class="mb-0">Check printing feature allows users to print multiple checks at once, saving time and improving efficiency.</p>
            </div>
          </div>
        </div>
        <div class="feature-box mb-4">
          <div class="d-flex align-items-center">
            <div class="feature-icon me-3">
              <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V15C0 15.5304 0.210714 16.0391 0.585786 16.4142C0.960859 16.7893 1.46957 17 2 17H20C20.5304 17 21.0391 16.7893 21.4142 16.4142C21.7893 16.0391 22 15.5304 22 15V2C22 1.46957 21.7893 0.960859 21.4142 0.585786C21.0391 0.210714 20.5304 0 20 0ZM2 2H20V15H2V2ZM20 0V2H2V0H20ZM20 15H2V2H20V15ZM20 0H2V2H20V0ZM15 5H12V7H15V5ZM12 9H15V11H12V9Z" fill="#E7FEAB" />
              </svg>
            </div>
            <div>
              <h5 class="mb-0">Cloud Sync</h5>
              <p class="mb-0">Cloud Sync feature allows users to access their check writing data from multiple devices and locations.</p>
            </div>
          </div>
        </div>
        <div class="feature-box">
          <div class="d-flex align-items-center">
            <div class="feature-icon me-3">
              <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V15C0 15.5304 0.210714 16.0391 0.585786 16.4142C0.960859 16.7893 1.46957 17 2 17H20C20.5304 17 21.0391 16.7893 21.4142 16.4142C21.7893 16.0391 22 15.5304 22 15V2C22 1.46957 21.7893 0.960859 21.4142 0.585786C21.0391 0.210714 20.5304 0 20 0ZM2 2H20V15H2V2ZM20 0V2H2V0H20ZM20 15H2V2H20V15ZM20 0H2V2H20V0ZM15 5H12V7H15V5ZM12 9H15V11H12V9Z" fill="#E7FEAB" />
              </svg>
            </div>
            <div>
              <h5 class="mb-0">Instant Check Cancellation</h5>
              <p class="mb-0">Instant check cancellation feature allows users to cancel checks that have not been processed yet, helping to prevent fraud or other financial risks.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <img src={pcheck} alt="Check Image" class="img-fluid rounded"/>
      </div>
    </div>
  </div>



  {/* <div className='container mt-5'>
  <div className='d-flex flex-column justify-content-between'>
  <img src={checkv} alt='checkv'/>
  <div className='d-flex flex-row'>
  <h1>Save signatures and be in complete control over your checks</h1>
  <p>Allow users to sign checks electronically using a mouse, touch screen, or stylus, and save their signatures for future use.</p>
  </div>
  </div>
  </div> */}

  <div className="container mt-5">
      <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
        <img src={checkv} alt="checkv" className="img-fluid rounded shadow-sm me-lg-4" />
        <div className="d-flex flex-column text-center text-lg-start mt-4 p-5 mt-lg-0">
          <h1 className="text-black">Save signatures and be in complete control over your checks</h1>
          <p className="lead text-muted">Allow users to sign checks electronically using a mouse, touch screen, or stylus, and save their signatures for future use.</p>
        </div>
      </div>
    </div>

    <div className='container my-5 d-flex flex-row align-items-center justify-content-between'>
    <div className='col-md-5'>
    <h1 className="text-black text-start">Email or print - it’s your choice</h1>
    <p className="lead text-muted">Whether you’re at home, at work, or on the go, our Sync check platform is accessible from your computer, tablet, or mobile device. With Sync check you can print or email your checks on the go.</p>
    </div>
      <img src={email} alt='email' className='img-fluid rounded'></img>
    </div>

    <div className='bg-middle-custom p-5 m-5 rounded-5 '>
    <div className='d-flex flex-row align-items-center justify-content-between'>
      <img src={user} alt='user' className='me-5'></img>
    <div>
    <h2 className='text-white'>CoFinance</h2>
      <h3 className='text-white'>“I’ve recently tried out check writer software and I was pleasantly surprised by its user-friendly interface and customizable features. It allowed me to easily write and print checks, store payee information, and track expenses.”</h3>
      <h5 className='yellow-green-txt'>Moe B., CEO CoFinance</h5>
    </div>
    </div>
    </div>

    {/* <div>
      <h1>Some of banks who accept us</h1>
      <p>Our checks are accepted by the world's leading banks, giving you the peace of mind that your transactions will be processed smoothly and reliably.</p>
    </div> */}

    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <div className="icon-container mb-3">
            {/* <img src={icon} alt="Icon" className="icon" /> */}
          </div>
          <h2 className="font-weight-bold">Some of banks who accept us</h2>
          <p className="text-muted">Our checks are accepted by the world's leading banks, giving you the peace of mind that your transactions will be processed smoothly and reliably.</p>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-6 d-flex align-items-center justify-content-center">
              <img src={bankOfAmerica} alt="Bank of America" className="img-fluid"/>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-center">
              <img src={chase} alt="Chase" className="img-fluid"/>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-6 d-flex align-items-center justify-content-center">
              <img src={tdBank} alt="TD Bank" className="img-fluid"/>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-center">
              <img src={citizensBank} alt="Citizens Bank" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div class="bg-middle-custom footer m-0 rounded-top-5 px-5">
    <div className='upper-footer py-5'>
    
    <div className='d-flex flex-row justify-content-between align-items-center'>
    <div className='d-flex flex-column'>
    <h3 className="text-white">
        Contact Information
      </h3>
      <p className='text-white-50'>Please contact us for any questions or assistance.</p>
    </div>
      
  
      <div className='contact-info text-white me-5'>
        <div className='d-flex flex-row align-items-center justify-content-start'><span className="contact-icon">&#9993;</span>support@synccos.com</div>
        <div><span className="contact-icon">&#9742;</span>+ 2 833 145678</div>
        <div><span className="contact-icon">&#127968;</span>Highland Mills NY</div>
        <div><img src={playstore} alt='Download'/><img src={playstore} alt='Download'/></div>
        </div>
        </div>
      </div>
      <hr/>
      <div className='d-flex justify-content-between'>
      <div className='d-flex flex-column'>
      <h2 className='text-white'>Stay Connected</h2>
      <p className='text-white-50'>Do not miss the chance to stay updated on all the new cool features and join out mail list today.</p>
      </div>
      <div className='mx-5'>
        <p className='yellow-green-txt'>Contact</p>
        <ul className='text-white'>
        <li>Contact</li>
        </ul>
      </div>
      <div className='mx-5'>
        <p className='yellow-green-txt'>Social</p>
        <ul className='text-white'>
        <li>Twitter</li>
        <li>Linkedin</li>
        <li>Facebook</li>
        <li>Instagram</li>
        </ul>

      </div>
      <div className='mx-5'>
        <p className='yellow-green-txt'>Legal</p>
        <ul className='text-white'>
        <li>Terms</li>
        <li>Privacy</li>
        </ul>
      </div>
      </div>
      <hr></hr>
      <div className='d-flex flex-row justify-content-between px-5 pb-3'>
        <img src={syncoos} alt='synccos'/>
        <p className='text-white-50'>Copyright: 2023 Check software. All Rights Reserved.</p>
      </div>
    </div>
    <hr></hr>
    
    </div>
    
  )
}

export default Splash