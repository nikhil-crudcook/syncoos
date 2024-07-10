import React from 'react'
import syncoos from '../assets/syncoos.png';
import check3 from '../assets/check3.png';
import pcheck from '../assets/pcheck.png';
import playstore from '../assets/playstore.png'
import checkv  from '../assets/checkv.png'
import bankOfAmerica from '../assets/bank1.png'
import chase from '../assets/bank2.png'
import tdBank from '../assets/bank3.png'
import citizensBank from '../assets/bank4.png'

import './Splash.css'

const Splash = () => {
  return (
    <div className="p-0 m-0 bg-transparent">
    <div className='header-section bg-primary-custom pt-2 ps-2'>

    <nav className='mb-0'>
    <img src={syncoos} alt="syncoosImage"/>
    </nav>
    <hr></hr>
    <div className='absolute-cont text-center my-5'>
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
    <div className='d-flex flex-row text-center align-items-center justify-content-center mt-5 pt-5'>
    <div className='writer-feature text-white-50 text-center d-flex flex-row align-items-center justify-content-center  flex-column my-3'>
    <div className="icon light-bg d-flex align-items-center justify-content-center my-3">
          <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V15C0 15.5304 0.210714 16.0391 0.585786 16.4142C0.960859 16.7893 1.46957 17 2 17H20C20.5304 17 21.0391 16.7893 21.4142 16.4142C21.7893 16.0391 22 15.5304 22 15V2C22 1.46957 21.7893 0.960859 21.4142 0.585786C21.0391 0.210714 20.5304 0 20 0ZM2 2H20V15H2V2ZM20 0V2H2V0H20ZM20 15H2V2H20V15ZM20 0H2V2H20V0ZM15 5H12V7H15V5ZM12 9H15V11H12V9Z" fill="#E7FEAB" />
          </svg>
        </div>
    <h3 className='text-white'>Address Book</h3>
    <p>Stores contact information of frequently used payees, making it easy to write and print checks quickly.</p></div>
    <div className='text-white-50'><h3 className='text-white'>Cloud Sync</h3>Allows users to access their check writing data from multiple devices and locations.</div>
    <div className='text-white-50'><h3 className='text-white'>Check Printing</h3>Ability to print multiple checks at once, saving time and improving efficiency.</div>
    <div className='text-white-50'><h3 className='text-white'>Customizable Layout</h3>Custom layout to make check writing process more personalised and user-friendly.</div>

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
          <h2 className="display-5 fw-bold">Save signatures and be in complete control over your checks</h2>
          <p className="lead text-muted">Allow users to sign checks electronically using a mouse, touch screen, or stylus, and save their signatures for future use.</p>
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