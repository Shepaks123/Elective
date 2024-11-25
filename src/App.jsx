import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login'; // Import Login component
import SignUp from './Components/SignUp'; // Import SignUp component
import Dashboard from './Dashboard'; // Import Dashboard component
import Index from './Index'; // Import the Index component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={<Login />} />
        
        {/* Sign Up Route */}
        <Route path="/signup" element={<SignUp />} />
        
        {/* Dashboard Route */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Index Route (Home) */}
        <Route path="/" element={<Index />} /> {/* Default home page */}
      </Routes>
    </Router>
  );
};

export default App;
