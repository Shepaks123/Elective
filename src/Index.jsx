import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // to navigate to other pages
import NotificationModal from './NotificationModal'; // Import the modal
import './Dashboard.css'; // Import the CSS file
import generalsImage from './image/CommandConquerGeneralsZero-Hour (1).jpg';
import heroImage from './image/hero.png';
import back4BloodImage from './image/back-4-blood.jpg';
import godOfWarImage from './image/god-of-war-listing-thumb-01-ps4-us-12jun17.png';
import theRoom4OldSins from './image/capsule_616x353.jpg';
import Left4Dead2 from './image/capsule_616x353 (1).jpg';
import genshinImpactImage from './image/76593-1-1.jpg';
import jordanImage from './image/N23_MJ_Cover_1200x630.png';
import marvelAvengersImage from './image/mavels-avengers.jpg';
import profileIcon from './image/green.jpg'; // Profile image

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [previewGame, setPreviewGame] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [gameToDownload, setGameToDownload] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State to control profile panel visibility

  const navigate = useNavigate(); // Hook to navigate to other pages

  const games = [
    { title: 'GENERALS', genres: ['Action', 'Adventure', 'Open World'], releaseDate: 'January 1, 2023', image: generalsImage },
    { title: 'CAR RACING', genres: ['Racing', 'Simulation'], releaseDate: 'February 10, 2023', image: heroImage },
    { title: 'Back 4 Blood', genres: ['Action', 'Co-op', 'Shooter'], releaseDate: 'October 12, 2023', image: back4BloodImage },
    { title: 'God of War', genres: ['Action', 'Adventure'], releaseDate: 'June 23, 2023', image: godOfWarImage },
    { title: 'The Room 4: Old Sins', genres: ['Puzzle'], releaseDate: 'December 15, 2023', image: theRoom4OldSins },
    { title: 'Left 4 Dead 2', genres: ['Shooter', 'Zombie'], releaseDate: 'November 17, 2023', image: Left4Dead2 },
    { title: 'Genshin Impact', genres: ['RPG', 'Action'], releaseDate: 'September 23, 2023', image: genshinImpactImage },
    { title: 'Jordan', genres: ['Sports', 'Action'], releaseDate: 'May 5, 2023', image: jordanImage },
    { title: 'Marvel Avengers', genres: ['Action', 'Adventure'], releaseDate: 'July 1, 2023', image: marvelAvengersImage },
  ];

  const genres = Array.from(new Set(games.flatMap((game) => game.genres))).sort();
  const gamesPerPage = 8;

  const filteredGames = games.filter(
    (game) =>
      (selectedCategory === 'All' || game.genres.includes(selectedCategory)) &&
      game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);

  const handlePreview = (game) => setPreviewGame(game);

  const handleDownload = (game) => {
    if (!isLoggedIn) {
      setShowNotification(true);
      setGameToDownload(game);
    } else {
      const link = document.createElement('a');
      link.href = game.image;
      link.download = `${game.image.split('/').pop()}`;
      link.click();
    }
  };

  const handleContinueAsGuest = () => {
    const link = document.createElement('a');
    link.href = gameToDownload.image;
    link.download = `${gameToDownload.image.split('/').pop()}`;
    link.click();
    setShowNotification(false);
  };

  const handleLogin = () => {
    navigate('/login'); // Use navigate to go to the login page
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Handle logging out
    setIsProfileOpen(false); // Close the profile panel after logging out
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredGames.length / gamesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen); // Toggle the profile panel
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h1>GREEN FROG</h1>
        {isLoggedIn ? (
          <div className="profile-icon" onClick={handleProfileClick}>
            <img src={profileIcon} alt="Profile" className="profile-image" />
          </div>
        ) : (
          <div className="auth-buttons">
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
            <button className="signup-button" onClick={() => navigate('/signup')}>
              Sign Up
            </button>
          </div>
        )}
      </nav>

      {/* Game list, filters, and other components */}
      <div className="filters-container">
        <select
          className="select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="search-bar"
          placeholder="Search for a game..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="game-cards-container">
        {currentGames.length > 0 ? (
          currentGames.map((game, index) => (
            <div className="game-card" key={index}>
              <img src={game.image} alt={game.title} className="game-image" />
              <h3 className="game-title">{game.title}</h3>
              <p className="game-genres">{game.genres.join(', ')}</p>
              <p className="game-release-date">{game.releaseDate}</p>
              <button className="preview-button" onClick={() => handlePreview(game)}>
                Preview
              </button>
              <button className="download-button" onClick={() => handleDownload(game)}>
                Download
              </button>
            </div>
          ))
        ) : (
          <p>No games found.</p>
        )}
      </div>

      <div className="pagination">
        <button
          className="pagination-button"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="page-number">Page {currentPage}</span>
        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(filteredGames.length / gamesPerPage)}
        >
          Next
        </button>
      </div>

      {/* Render Notification Modal */}
      {showNotification && (
        <NotificationModal
          message="You need to log in to download games. Continue as guest or log in to save your downloads."
          onContinueAsGuest={handleContinueAsGuest}
          onClose={handleCloseNotification}
        />
      )}

      {/* Profile Slide-In */}
      <div className={`profile-panel ${isProfileOpen ? 'open' : ''}`}>
        <div className="profile-options">
          <button onClick={() => navigate('/profile')}>Profile</button>
          <button onClick={() => navigate('/settings')}>Settings</button>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
