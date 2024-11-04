// App.jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">Green Frog</h1>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#faq">FAQ</a>
          <a href="#category">Categories</a>
          <a href="#games">Games</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Search Bar */}
      <section className="search-section">
        <input type="text" placeholder="Search for games..." className="search-bar" />
        <button className="search-button">Search</button>
      </section>

      {/* Categories */}
      <section className="categories-section" id="category">
        <h2>Browse by Category</h2>
        <div className="categories">
          <a href="#action" className="category-link">Action</a>
          <a href="#adventure" className="category-link">Adventure</a>
          <a href="#episodic" className="category-link">Episodic</a>
          <a href="#horror" className="category-link">Horror</a>
          <a href="#openworld" className="category-link">Open World</a>
          <a href="#racing" className="category-link">Racing</a>
          <a href="#sports" className="category-link">Sports</a>
          <a href="#stealth" className="category-link">Stealth</a>
          <a href="#sandbox" className="category-link">Sandbox</a>
          <a href="#strategy" className="category-link">Strategy</a>
          <a href="#simulation" className="category-link">Simulation</a>
          <a href="#hacking" className="category-link">Hacking</a>
        </div>
      </section>

      {/* Game Grid */}
      <section className="game-grid">
        <div className="game-card">
          <img src="path/to/game-image1.jpg" alt="Game 1" className="game-image" />
          <h3>Game Title 1</h3>
          <p>Action, Adventure, Open World</p>
          <span>Release Date: January 1, 2023</span>
          <button className="download-button">Download</button>
        </div>

        <div className="game-card">
          <img src="path/to/game-image2.jpg" alt="Game 2" className="game-image" />
          <h3>Game Title 2</h3>
          <p>Racing, Simulation</p>
          <span>Release Date: February 10, 2023</span>
          <button className="download-button">Download</button>
        </div>

        <div className="game-card">
          <img src="path/to/game-image3.jpg" alt="Game 3" className="game-image" />
          <h3>Game Title 3</h3>
          <p>FPS, Action, Multiplayer</p>
          <span>Release Date: March 15, 2023</span>
          <button className="download-button">Download</button>
        </div>

        <div className="game-card">
          <img src="path/to/game-image4.jpg" alt="Game 4" className="game-image" />
          <h3>Game Title 4</h3>
          <p>Strategy, Single-player</p>
          <span>Release Date: April 20, 2023</span>
          <button className="download-button">Download</button>
        </div>

        <div className="game-card">
          <img src="path/to/game-image5.jpg" alt="Game 5" className="game-image" />
          <h3>Game Title 5</h3>
          <p>Puzzle, Casual</p>
          <span>Release Date: May 5, 2023</span>
          <button className="download-button">Download</button>
        </div>

        <div className="game-card">
          <img src="path/to/game-image6.jpg" alt="Game 6" className="game-image" />
          <h3>Game Title 6</h3>
          <p>Horror, Survival</p>
          <span>Release Date: June 15, 2023</span>
          <button className="download-button">Download</button>
        </div>

        <div className="game-card">
          <img src="path/to/game-image7.jpg" alt="Game 7" className="game-image" />
          <h3>Game Title 7</h3>
          <p>Sports, Multiplayer</p>
          <span>Release Date: July 7, 2023</span>
          <button className="download-button">Download</button>
        </div>

        <div className="game-card">
          <img src="path/to/game-image8.jpg" alt="Game 8" className="game-image" />
          <h3>Game Title 8</h3>
          <p>RPG, Fantasy</p>
          <span>Release Date: August 20, 2023</span>
          <button className="download-button">Download</button>
        </div>

        <div className="game-card">
          <img src="path/to/game-image9.jpg" alt="Game 9" className="game-image" />
          <h3>Game Title 9</h3>
          <p>Platformer, Indie</p>
          <span>Release Date: September 10, 2023</span>
          <button className="download-button">Download</button>
        </div>

        <div className="game-card">
          <img src="path/to/game-image10.jpg" alt="Game 10" className="game-image" />
          <h3>Game Title 10</h3>
          <p>Simulation, Sandbox</p>
          <span>Release Date: October 15, 2023</span>
          <button className="download-button">Download</button>
        </div>
      </section>
    </div>
  );
}

export default App;
