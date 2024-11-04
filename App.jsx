// App.jsx
import React from 'react';
import './App.css'; // Import CSS for styling

function App() {
  return (
    <div className="app-container">
      <header className="hero-section">
        <h1>Welcome to My Cool Website</h1>
        <p>Your one-stop destination for awesomeness</p>
        <button className="cta-button">Get Started</button>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Feature 1</h2>
          <p>Explore amazing content with ease.</p>
        </div>
        <div className="feature">
          <h2>Feature 2</h2>
          <p>Connect with friends and share your ideas.</p>
        </div>
        <div className="feature">
          <h2>Feature 3</h2>
          <p>Stay up-to-date with the latest trends.</p>
        </div>
      </section>
      <footer className="footer">
        <p>Made with ❤️ by [Your Name]</p>
      </footer>
    </div>
  );
}

export default App;
