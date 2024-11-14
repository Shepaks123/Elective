// Contact.jsx
import React from 'react';

const Contact = () => {
  // Inline styles
  const styles = {
    container: {
      backgroundColor: '#f4f4f4', // Light background color
      color: '#333', // Dark text color
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '600px',
      margin: '40px auto', // Center the container with auto margin
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
    },
    heading: {
      fontSize: '2rem',
      color: '#16a34a', // Green color for the title
      textAlign: 'center',
      marginBottom: '15px',
    },
    subheading: {
      fontSize: '1.1rem',
      color: '#555', // Slightly lighter text color
      marginBottom: '15px',
      textAlign: 'center',
    },
    list: {
      listStyleType: 'none', // Remove default bullet points
      padding: 0,
    },
    listItem: {
      fontSize: '1.1rem',
      margin: '10px 0',
      color: '#333',
      textAlign: 'center',
    },
    listItemIcon: {
      marginRight: '10px',
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <p style={styles.subheading}>Feel free to reach out to us:</p>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <span style={styles.listItemIcon}>📧</span> Email: support@greenfrog.com
        </li>
        <li style={styles.listItem}>
          <span style={styles.listItemIcon}>📞</span> Phone: +123-456-7890
        </li>
        <li style={styles.listItem}>
          <span style={styles.listItemIcon}>🏠</span> Address: 123 Green Street, Frog City
        </li>
      </ul>
    </div>
  );
}

export default Contact;
