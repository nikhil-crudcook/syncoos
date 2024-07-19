import React from 'react'
import Sidebar from './Sidebar'
import CreateCheck from './CreateCheck'
import MyCheck from './MyCheck';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useState } from 'react';
import Logoutup from './Logoutup';
import Cc from './Cc'
import CreatePage from './CreatePage';

const Home = () => {
  

  return (
    <>
    {/* <Sidebar/> */}
    {/* <Logoutup/> */}
    <CreatePage/>
    {/* <Navbar/>
    <Cc/> */}

    <Routes>
      <Route path="/create-check" element={<CreateCheck/>}/>
      <Route path="/my-checks" element={<MyCheck/>}/>
    </Routes>
    {/* <Outlet/> */}

    </>
  )
}

export default Home

// import React from 'react';
// import Sidebar from './Sidebar';
// import { Outlet, Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div>
//       <Sidebar />
//       <nav>
//         <ul>
//           <li>
//             <Link to="create-check">Create Check</Link>
//           </li>
//           <li>
//             <Link to="my-checks">My Checks</Link>
//           </li>
//         </ul>
//       </nav>
//       <Outlet /> {/* This will render the nested routes */}
//     </div>
//   );
// };

// export default Home;
