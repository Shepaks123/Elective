import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'; // Import Navigate for redirection

const SignUp = () => {
  const [isSignedUp, setIsSignedUp] = useState(false); // State to track sign-up status
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    address: '',
    password: '',
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    // Save the form data to localStorage on sign-up
    localStorage.setItem('profileData', JSON.stringify(formData)); // Save data to localStorage
    console.log(formData); // For demonstration, log the form data
    setIsSignedUp(true); // Set sign-up status to true on successful sign-up
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (isSignedUp) {
    return <Navigate to="/" />; // Redirect to the home page after sign-up
  }

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h1 style={styles.heading}>Sign Up</h1>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        <div style={styles.linkContainer}>
          <p>
            Already have an account? <a href="/login" style={styles.link}>Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

// Styles for the SignUp form
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f7fc',
  },
  form: {
    width: '400px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
  linkContainer: {
    textAlign: 'center',
    marginTop: '10px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default SignUp;
