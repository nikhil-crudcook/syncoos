import React from 'react'
import syncoos from '../assets/syncoos.png';
import check3 from '../assets/check3.png';
import pcheck from '../assets/pcheck.png';
const Splash = () => {
  return (
    <div className="bg-primary p-0 m-0 bg-transparent">
    <nav>
    <img src={syncoos} alt="syncoosImage"/>
    </nav>
    <div className='absolute-cont text-center mt-5'>
    <p className='headline-txt yellow-green-txt mb-0'>All-in-one check writer for everyone</p>
    <h1 className='my-2'>Smart and simple<br/>
    check writer</h1>
    <p>Create and print checks with ease using our check writer application.</p>
    </div>
    <img src={check3} alt="check3"/>

    <div className='absolute-cont text-center mt-5'>
    <p className='headline-txt yellow-green-txt mb-0'>Why Synccheck ?</p>
    <h1 className='my-2'>The only check writer app
    <br/>
    you’ll ever need</h1>
    <p>Our check writer is user-friendly and easy to use.</p>
    </div>
    <div className='d-flex flex-row align-items-center justify-content-center mt-5 pt-5'>
    <div className='writer-feature text-center d-flex flex-row align-items-center justify-content-center  flex-column mt-5 pt-5'>Stores contact information of frequently used payees, making it easy to write and print checks quickly.</div>
    <div>Allows users to access their check writing data from multiple devices and locations.</div>
    <div>Ability to print multiple checks at once, saving time and improving efficiency.</div>
    <div>Custom layout to make check writing process more personalised and user-friendly.</div>

    </div>
    <div>
        <h1 className='text-black text-start'>Super Convenient<br/>
        Check writer</h1>
        <p className='txt-left'>
        The ultimate solution for hassle-free transactions. With its intuitive interface and seamless integration, it simplifies check-writing tasks, saving you time and effort. Say goodbye to manual calculations and enjoy a smooth and efficient payment experience
        </p>
    </div>
    <div>
        <img src={pcheck} alt='pcheck'/>
    </div>

    </div>
    
  )
}

export default Splash