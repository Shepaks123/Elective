import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login'; // Import Login component
import SignUp from './Components/SignUp'; // Import SignUp component
import Dashboard from './Dashboard'; // Import Dashboard component
import Index from './Index'; // Import the Index component
import ProfileEdit from './ProfileEdit'; // Import ProfileEdit component for editing profile
import Profile from './Profile'; // Import Profile component for viewing profile
import ProfileSave from './ProfileSave'; // Import ProfileSave component to display saved profile data
import Favorites from './Favorites'; // Import Favorites component

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

        {/* Profile Edit Route */}
        <Route path="/profile/edit" element={<ProfileEdit />} />

        {/* Profile Route */}
        <Route path="/profile" element={<Profile />} />

        {/* Profile Save Route */}
        <Route path="/profileSave" element={<ProfileSave />} /> {/* Profile save page */}

        {/* Favorites Route */}
        <Route path="/favorites" element={<Favorites />} /> {/* Favorites page */}
      </Routes>
    </Router>
  );
};

export default App;
