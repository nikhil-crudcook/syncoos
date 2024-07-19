import React from 'react'
import Navbar from './Navbar'
import CreateCheck from './CreateCheck'
import Cc from './Cc'
import Logoutup from './Logoutup'


const CreatePage = () => {
  return (
    <>
    
    <div className='d-flex'>
        <Navbar/>
        {/* <CreateCheck/> */}
        <div>
        <Logoutup/>
        <Cc/>
        </div>
        
    </div>
    </>
  )
}

export default CreatePage