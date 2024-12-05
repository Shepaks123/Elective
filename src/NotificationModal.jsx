import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotificationModal.css'; // Ensure styles are correct

const NotificationModal = ({ message, onContinueAsGuest, onClose }) => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login'); // Redirect to the login page
    onClose(); // Close the notification modal
  };

  return (
    <div className="notification-modal-overlay">
      <div className="notification-modal">
        <div className="modal-content">
          <p>{message}</p>
          <div className="modal-actions">
            <button className="btn-continue" onClick={onContinueAsGuest}>Continue as Guest</button>
            <button className="btn-login" onClick={handleLoginRedirect}>Log In</button>
            <button className="btn-close" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
