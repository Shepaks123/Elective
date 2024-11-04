import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sample game data with 16 games
  const games = [
    { title: 'Game Title 1', genres: ['Action', 'Adventure', 'Open World'], releaseDate: 'January 1, 2023', image: 'path/to/game-image1.jpg' },
    { title: 'Game Title 2', genres: ['Racing', 'Simulation'], releaseDate: 'February 10, 2023', image: 'path/to/game-image2.jpg' },
    { title: 'Game Title 3', genres: ['FPS', 'Action', 'Multiplayer'], releaseDate: 'March 15, 2023', image: 'path/to/game-image3.jpg' },
    { title: 'Game Title 4', genres: ['Strategy', 'Single-player'], releaseDate: 'April 20, 2023', image: 'path/to/game-image4.jpg' },
    { title: 'Game Title 5', genres: ['Puzzle', 'Casual'], releaseDate: 'May 5, 2023', image: 'path/to/game-image5.jpg' },
    { title: 'Game Title 6', genres: ['Horror', 'Survival'], releaseDate: 'June 15, 2023', image: 'path/to/game-image6.jpg' },
    { title: 'Game Title 7', genres: ['Sports', 'Multiplayer'], releaseDate: 'July 7, 2023', image: 'path/to/game-image7.jpg' },
    { title: 'Game Title 8', genres: ['RPG', 'Fantasy'], releaseDate: 'August 20, 2023', image: 'path/to/game-image8.jpg' },
    { title: 'Game Title 9', genres: ['Platformer', 'Indie'], releaseDate: 'September 10, 2023', image: 'path/to/game-image9.jpg' },
    { title: 'Game Title 10', genres: ['Simulation', 'Sandbox'], releaseDate: 'October 15, 2023', image: 'path/to/game-image10.jpg' },
    { title: 'Game Title 11', genres: ['Action', 'Adventure'], releaseDate: 'November 1, 2023', image: 'path/to/game-image11.jpg' },
    { title: 'Game Title 12', genres: ['Strategy', 'Puzzle'], releaseDate: 'December 1, 2023', image: 'path/to/game-image12.jpg' },
    { title: 'Game Title 13', genres: ['Horror', 'Indie'], releaseDate: 'January 15, 2024', image: 'path/to/game-image13.jpg' },
    { title: 'Game Title 14', genres: ['Open World', 'Adventure'], releaseDate: 'February 5, 2024', image: 'path/to/game-image14.jpg' },
    { title: 'Game Title 15', genres: ['Racing', 'Multiplayer'], releaseDate: 'March 20, 2024', image: 'path/to/game-image15.jpg' },
    { title: 'Game Title 16', genres: ['Simulation', 'Sandbox'], releaseDate: 'April 10, 2024', image: 'path/to/game-image16.jpg' },
  ];

  // Filter games based on selected category
  const filteredGames = selectedCategory === 'All' 
    ? games 
    : games.filter(game => game.genres.includes(selectedCategory));

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
          {['All', 'Action', 'Adventure', 'Episodic', 'Horror', 'Open World', 'Racing', 'Sports', 'Stealth', 'Sandbox', 'Strategy', 'Simulation'].map((category) => (
            <button key={category} className="category-link" onClick={() => setSelectedCategory(category)}>
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Game Grid */}
      <section className="game-grid">
        {filteredGames.map((game) => (
          <div className="game-card" key={game.title}>
            <img src={game.image} alt={game.title} className="game-image" />
            <h3>{game.title}</h3>
            <p>{game.genres.join(', ')}</p>
            <span>Release Date: {game.releaseDate}</span>
            <button className="download-button">Download</button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
