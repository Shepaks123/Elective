// src/App.js
import React, { useEffect }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';  // Import Login component
import SignUp from './Components/SignUp';  // Import SignUp component
import Dashboard from './Dashboard';  // Import AppAccount component
import Profile from './Components/Profile';

const App = () => {
  useEffect(() => {
    document.title = "GreenFrog";
  },[]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Login page */}
        <Route path="/login" element={<Login />} /> {/* Login page */}
        <Route path="/signup" element={<SignUp />} /> {/* Sign Up page */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* App Account page */}
        <Route path="/profile" element={<Profile />} /> {/* Profile page */}
      </Routes>
    </Router>
  );
};

export default App;
