// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Hook from react-router-dom

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve saved credentials from localStorage (assuming they exist)
    const savedEmail = localStorage.getItem('userEmail');
    const savedPassword = localStorage.getItem('userPassword');

    // Basic validation
    if (email === savedEmail && password === savedPassword) {
      alert('Login successful!');
      navigate('/dashboard');  // Navigate to appaccount route
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={styles.heading}>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
        <div style={styles.linkContainer}>
          <p>
            Don't have an account?{' '}
            <span style={styles.link} onClick={() => navigate('/signup')}>Sign Up</span>
          </p>
        </div>
      </form>
    </div>
  );
};

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
    },
    input: {
      display: 'block',
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '16px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#008000',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      width: '100%',
    },
    linkContainer: {
      marginTop: '20px',
    },
    link: {
      color: '#008000',
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  };
  

export default Login;
