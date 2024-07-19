// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import Home from './pages/Home';
// import MyCheck from './pages/MyCheck';
// import CreateCheck from './pages/CreateCheck';
// import Navbar from './pages/Navbar';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [token, setToken] = useState('');

//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken) {
//       setToken(storedToken);
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const handleLogin = (token) => {
//     setToken(token);
//     setIsAuthenticated(true);
//     localStorage.setItem('token', token);
//   };

//   const handleLogout = () => {
//     setToken('');
//     setIsAuthenticated(false);
//     localStorage.removeItem('token');
//   };

//   return (
//     <Router>
//       <Navbar handleLogout={handleLogout} isAuthenticated={isAuthenticated} />
//       <Routes>
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login onLogin={handleLogin} />} />
//         <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />}>
//           <Route path="create-check" element={<CreateCheck />} />
//           <Route path="my-checks" element={<MyCheck />} />
//         </Route>
//         <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
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
import FetchUser from './pages/FetchUser';
import Splash from './pages/Splash';
import Comp from './pages/Comp';
import CreatePage from './pages/CreatePage';
import MyCheckPage from './pages/MyCheckPage';
import Logoutup from './pages/Logoutup';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');
  const [user,setUser]=useState({firstName:'',lastName:''});

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
      FetchUser(storedToken).then(userData=>{
        if(userData){
          setUser(userData);
        }
      });
    }
  }, []);

  const handleLogin = (token) => {
    setToken(token);
    setIsAuthenticated(true);
    localStorage.setItem('token', token);
    FetchUser(token).then((userData) => {
      if (userData) {
        setUser(userData);
      }
    });
  };

  const handleLogout = () => {
    setToken('');
    setIsAuthenticated(false);
    localStorage.removeItem('token');
  };

  const getInitials=(firstName,lastName)=>{
    if(firstName && lastName){
      return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    }
    return '';
  }

  console.log(isAuthenticated);

  return (
    
    <Router>
    {/* {isAuthenticated && <Logoutup/>} */}
      {/* <nav>
        <ul>
          
<Splash/>
<Comp/>
          {isAuthenticated && (
            <li>
            <div class="hstack gap-3">
  
  <div class="p-2 ms-auto">
            {user.firstName} {user.lastName}
  </div>
  <div className="p-2">
                  <button className="btn btn-outline-success">
                    {getInitials(user.firstName, user.lastName)}
                  </button>
                  </div>
  <div class="vr"></div>
  <div class="p-2"><button onClick={handleLogout} className="btn btn-success">Logout</button></div>
</div>
              
            </li>
          )}
        </ul>
      </nav> */}
      
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login onLogin={handleLogin} />} />
        <Route exact path="/new" element={<Splash />} />

        {isAuthenticated ? (
          <>
          {console.log("abc")}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/create-check" element={<CreatePage />} />
            <Route exact path="/my-checks" element={<MyCheckPage />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/new" />} />
          
        )}
        
        {/* <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />}>
          <Route path="create-check" element={<CreateCheck />} />
          <Route path="my-checks" element={<MyCheck />} />
        </Route>
        <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} /> */}
        {/* ////////////////////////////////////////////////////////////// */}
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
