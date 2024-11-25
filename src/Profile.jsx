import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileInfo, setProfileInfo] = useState({
    username: 'User123',
    email: 'user123@example.com',
    profilePicture: 'https://via.placeholder.com/150', // Replace with actual profile picture URL
  });

  const toggleProfile = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`profile-container ${isOpen ? 'open' : ''}`}>
      <button className="profile-button" onClick={toggleProfile}>
        {isOpen ? 'Close Profile' : 'Open Profile'}
      </button>

      {isOpen && (
        <div className="profile-details">
          <div className="profile-header">
            <img
              className="profile-picture"
              src={profileInfo.profilePicture}
              alt="Profile"
            />
            <div className="profile-header-text">
              <h2>{profileInfo.username}</h2>
              <p>{profileInfo.email}</p>
            </div>
          </div>
          <div className="profile-actions">
            <button>Edit Profile</button>
            <button>Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
