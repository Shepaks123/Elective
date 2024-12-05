import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'; // Import Navigate for redirection

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here...
    setIsLoggedIn(true); // Set login status to true on successful login
  };

  if (isLoggedIn) {
    return <Navigate to="/" />; // Redirect to the homepage (index.jsx) after successful login
  }

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h1 style={styles.heading}>Login</h1>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required style={styles.input} />
          <input type="password" placeholder="Password" required style={styles.input} />
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <div style={styles.linkContainer}>
          <p>
            Don't have an account? <a href="/signup" style={styles.link}>Sign up here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

// Styles for Login component (same as SignUp)
const styles = {
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: '20px', // Adds padding for smaller screens
    width: '100%', // Ensures full width for responsiveness
    height: '100vh', // Ensures the form takes the full viewport height
  },
  form: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '100%',
    maxWidth: '400px', // Limits form width for better responsiveness
  },
  heading: {
    marginBottom: '20px',
    color: '#008000',
    fontSize: '24px', // Adjust font size for better readability
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '16px',
    boxSizing: 'border-box', // Ensures padding is included in width
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#008000',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#005700', // Darker shade for hover effect
  },
  linkContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
  link: {
    color: '#008000',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default Login;
