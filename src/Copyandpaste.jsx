import React, { useState } from 'react';
import NotificationModal from './NotificationModal'; // Import the new modal
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

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [previewGame, setPreviewGame] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // For handling login status
  const [showNotification, setShowNotification] = useState(false); // State to manage notification visibility
  const [gameToDownload, setGameToDownload] = useState(null); // Game to download after user chooses

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
    { title: 'GENERALS', genres: ['Action', 'Adventure', 'Open World'], releaseDate: 'January 1, 2023', image: generalsImage },
    { title: 'CAR RACING', genres: ['Racing', 'Simulation'], releaseDate: 'February 10, 2023', image: heroImage },
    { title: 'Back 4 Blood', genres: ['Action', 'Co-op', 'Shooter'], releaseDate: 'October 12, 2023', image: back4BloodImage },
    { title: 'God of War', genres: ['Action', 'Adventure'], releaseDate: 'June 23, 2023', image: godOfWarImage },
    { title: 'The Room 4: Old Sins', genres: ['Puzzle'], releaseDate: 'December 15, 2023', image: theRoom4OldSins },
    { title: 'Left 4 Dead 2', genres: ['Shooter', 'Zombie'], releaseDate: 'November 17, 2023', image: Left4Dead2 },
    { title: 'Genshin Impact', genres: ['RPG', 'Action'], releaseDate: 'September 23, 2023', image: genshinImpactImage },
    { title: 'Jordan', genres: ['Sports', 'Action'], releaseDate: 'May 5, 2023', image: jordanImage },
    { title: 'Marvel Avengers', genres: ['Action', 'Adventure'], releaseDate: 'July 1, 2023', image: marvelAvengersImage },
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

  const gamesPerPage = 5;

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
      // Show custom modal asking user to log in or continue as guest
      setShowNotification(true);
      setGameToDownload(game);
    } else {
      // Proceed with normal download if logged in
      const link = document.createElement('a');
      link.href = game.image;
      link.download = `${game.image.split('/').pop()}`;
      link.click();
    }
  };

  const handleContinueAsGuest = () => {
    // Guest download: Download the file but don't save history
    const link = document.createElement('a');
    link.href = gameToDownload.image;
    link.download = `${gameToDownload.image.split('/').pop()}`;
    link.click();
    setShowNotification(false); // Hide notification after download
  };

  const handleLogin = () => {
    window.location.href = '/login'; // Redirect to login page
  };

  const handleCloseNotification = () => {
    setShowNotification(false); // Close the notification modal
  };

  // Pagination handlers
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

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h1>GREEN FROG</h1>
      </nav>

      <section className="game-list-section">
        <div className="filters-container">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="select"
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search games..."
            className="search-bar"
          />
        </div>

        <div className="game-cards-container">
          {currentGames.map((game) => (
            <div key={game.title} className="game-card">
              <img src={game.image} alt={game.title} className="game-image" />
              <h3 className="game-title">{game.title}</h3>
              <p className="game-genres">{game.genres.join(', ')}</p>
              <p className="game-release-date">{game.releaseDate}</p>
              <button
                className="preview-button"
                onClick={() => handlePreview(game)}
              >
                Preview
              </button>
              <button
                className="download-button"
                onClick={() => handleDownload(game)}
              >
                Download
              </button>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="page-button"
          >
            Prev
          </button>
          <span className="page-number">{currentPage}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(filteredGames.length / gamesPerPage)}
            className="page-button"
          >
            Next
          </button>
        </div>
      </section>

      {showNotification && (
        <NotificationModal
          message="You need to log in or continue as a guest to download this game."
          onContinueAsGuest={handleContinueAsGuest}
          onLogin={handleLogin}
          onClose={handleCloseNotification}
        />
      )}

      {previewGame && (
        <div className="modal" onClick={() => setPreviewGame(null)}>
          <div className="modal-content">
            <h2>{previewGame.title}</h2>
            <img
              src={previewGame.image}
              alt={previewGame.title}
              className="modal-image"
            />
            <p>{previewGame.genres.join(', ')}</p>
            <p>{previewGame.releaseDate}</p>
            <button
              className="close-preview"
              onClick={() => setPreviewGame(null)}
            >
              Close Preview
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
