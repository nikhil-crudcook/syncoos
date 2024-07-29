import React from 'react'
import { Link } from 'react-router-dom'
import './Splash.css'

import syncoosb from '../assets/syncoosb.png'
import check3one from '../assets/check3one.png'

const Comp = () => {
  return (
    <div className='bg-primary-customm col-6 vh-100 '>
    <div className='mt-5 ms-3'>
      <Link to='/new'><img src={syncoosb} alt='syncoos'></img></Link>
    </div>
      <h1 className='text-success text-center fw-bold m-2 auth-header'>Smart and Simple<br></br> check writer</h1>
      <p className='text-center text-black-50 fw-600 m-5'>Create and print checks with ease using Synccheck.</p>
      <img src={check3one}  className='image-wrapper img-fluid mt-3' alt='check3one'></img>
    </div>
  )
}

export default Comp