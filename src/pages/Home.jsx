import React from 'react'
import Sidebar from './Sidebar'
import CreateCheck from './CreateCheck'
import MyCheck from './MyCheck';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    

    <Sidebar/>
    <CreateCheck/>

    <Routes>
      <Route path="/create-check" element={<CreateCheck/>}/>
      <Route path="/my-checks" element={<MyCheck/>}/>
    </Routes>

    </>
  )
}

export default Home