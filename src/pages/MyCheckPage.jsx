import React from 'react'
import Navbar from './Navbar'
import MyCheck from './MyCheck'
import New from './MyChecks'
import Mc from './Mc'
import Logoutup from './Logoutup'

const MyCheckPage = () => {
  return (
    <>
    
    <div className='d-flex '>
    <div>
    <Navbar/>
    </div>
    <div style={{width:'100%'}}>
    <Logoutup/>
    <Mc />
    </div>

    {/* <MyCheck/> */}
    </div>
    {/* <New/> */}
    </>
  )
}

export default MyCheckPage