import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
// import ProtectedPage from './pages/ProtectedPage'; // A protected page after login
import Home from './pages/Home';
import MyCheck from './pages/MyCheck';
import CreateCheck from './pages/CreateCheck';
import { Navigate } from 'react-router-dom';

import Navbar from './pages/Navbar';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (token) => {
    setToken(token);
    setIsAuthenticated(true);
    localStorage.setItem('token', token);
  };

  const handleLogout = () => {
    setToken('');
    setIsAuthenticated(false);
    localStorage.removeItem('token');
  };

  return (
    
    <Router>
      <nav>
        <ul>
          {!isAuthenticated && (
            <>
            <nav class="navbar bg-body-tertiary">
  <form class="container-fluid justify-content-start">
    <button class="btn btn-outline-info me-2" type="button"><Link to="/register" className="text-decoration-none">Register</Link></button>
    <button class="btn btn-sm btn-outline-info" type="button"><Link to="/login" className="text-decoration-none">Login</Link></button>
  </form>
</nav>
              {/* <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li> */}
            </>
          )}
          {isAuthenticated && (
            <li>
            <div class="hstack gap-3">
  {/* <div class="p-2">First item</div> */}
  <div class="p-2 ms-auto">NB</div>
  <div class="vr"></div>
  <div class="p-2"><button onClick={handleLogout} className="btn btn-secondary">Logout</button></div>
</div>
              
            </li>
          )}
        </ul>
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/create-check" element={<CreateCheck />} />
            <Route path="/my-checks" element={<MyCheck />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/register" />} />
        )}
        {/* {isAuthenticated && <Route path="/" element={<Home />} />}
        {isAuthenticated && <Route path="/my-checks" element={<MyCheck/>}/>}
        {isAuthenticated && <Route path="/create-check" element={<CreateCheck />} />} */}
        {/* {isAuthenticated && <Route path="/my-checks" element={<MyCheck/>}/>} */}
        {/* <Route path="/my-checks" element={<MyCheck/>}/> */}
        {/* <Route path="/" element={Home/} /> */}
      </Routes>
    </Router>
    
  );
};

export default App;


// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Home from './pages/Home';
// import CreateCheck from './pages/CreateCheck';
// import MyCheck from './pages/MyCheck';
// import Register from './pages/Register';
// import Login from './pages/Login';


// function App() {


//     return (
//       <Router>
      
      
//         <Routes>
//         <Route path="/register" element={<Register/>} />
//         <Route path="/login" element={<Login/>} />
//         <Route path="/" element={<Home/>} />
//         <Route path="/create-check" element={<CreateCheck/>} />
//         <Route path="/my-checks" element={<MyCheck/>} />
//         </Routes>
      
//       </Router>
//     );
// }

// export default App
