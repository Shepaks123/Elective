import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NotificationModal from './NotificationModal'; // Assuming this is another component you're importing
import profileIcon from './image/green.jpg'; // Profile image

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [previewGame, setPreviewGame] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [gameToDownload, setGameToDownload] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State to control edit modal visibility
  const [profileName, setProfileName] = useState('User'); // State to store the user's name
  const [profileImage, setProfileImage] = useState(profileIcon); // State to store the profile image
  const [favoriteGames, setFavoriteGames] = useState([]); // State to store the favorite games

  const navigate = useNavigate(); // Hook to navigate to other pages

  const games = [
    { title: 'GENERALS', genres: ['Action', 'Adventure', 'Open World'], releaseDate: 'January 1, 2023', image: 'src/image/CommandConquerGeneralsZero-Hour (1).jpg' },
    { title: 'CAR RACING', genres: ['Racing', 'Simulation'], releaseDate: 'February 10, 2023', image: 'src/image/hero.png' },
    { title: 'BACK 4 BLOOD', genres: ['FPS', 'Action', 'Multiplayer'], releaseDate: 'March 15, 2023', image: 'src/image/back-4-blood.jpg' },
    { title: 'GOD OF WAR', genres: ['Strategy', 'Single-player'], releaseDate: 'April 20, 2023', image: 'src/image/god-of-war-listing-thumb-01-ps4-us-12jun17.png' },
    { title: 'THE ROOM 4 OLD SINS', genres: ['Puzzle', 'Casual'], releaseDate: 'May 5, 2023', image: 'src/image/capsule_616x353.jpg' },
    { title: 'LEFT 4 DEAD 2', genres: ['Horror', 'Survival'], releaseDate: 'June 15, 2023', image: 'src/image/capsule_616x353 (1).jpg' },
    { title: '2K23 JORDAN EDITION', genres: ['Sports', 'Multiplayer'], releaseDate: 'June 7, 2023', image: 'src/image/N23_MJ_Cover_1200x630.png' },
    { title: 'GENSHIN IMPACT', genres: ['RPG', 'Fantasy'], releaseDate: 'August 20, 2023', image: 'src/image/76593-1-1.jpg' },
    { title: 'INSIDE', genres: ['Platformer', 'Indie'], releaseDate: 'September 10, 2023', image: 'src/image/maxresdefault.jpg' },
    { title: 'THE SIM 4', genres: ['Simulation', 'Sandbox'], releaseDate: 'October 15, 2023', image: 'src/image/EGS_TheSims4_ElectronicArts_S1_2560x1440-330b00849edfdacc61578d1486f47b31.jpeg' },
    { title: 'SPIDER-MAN 2', genres: ['Action', 'Adventure'], releaseDate: 'November 1, 2023', image: 'src/image/Marvels-Spider-Man-2_Key-Art.jpeg' },
    { title: 'FISHDOM', genres: ['Strategy', 'Puzzle'], releaseDate: 'December 1, 2023', image: 'src/image/maxresdefault (1).jpg' },
    { title: 'FIVE NIGHT AT FREDDY', genres: ['Horror', 'Indie'], releaseDate: 'January 15, 2024', image: 'src/image/capsule_616x353 (2).jpg' },
    { title: 'GTA VI', genres: ['Open World', 'Adventure'], releaseDate: 'February 5, 2024', image: 'src/image/GTA-6-Game.png' },
    { title: 'NEED FOR SPEED', genres: ['Racing', 'Multiplayer'], releaseDate: 'March 20, 2024', image: 'src/image/Need-for-Speed-2015-header-art.jpg' },
 
    { title: 'MARVEL AVENGERS', genres: ['Action', 'Adventure', 'Open World'], releaseDate: 'January 8, 2021', image: 'src/image/mavels-avengers.jpg' },
    { title: 'MXGP', genres: ['Racing', 'Simulation'], releaseDate: 'February 8, 2021', image: 'src/image/mxgp-2019-the-official-motocross-videogame-pc-game-steam-cover.jpg' },
    { title: 'EMPIRE OF SIN', genres: ['FPS', 'Action', 'Multiplayer'], releaseDate: 'March 15, 2023', image: 'src/image/empire-of-sin-make-it-count-pc-mac-game-steam-europe-cover.jpg' },
    { title: 'AMONG US', genres: ['Strategy', 'Single-player'], releaseDate: 'April 20, 2023', image: 'src/image/unnamed.jpg' },
    { title: 'STRAY', genres: ['Puzzle', 'Casual'], releaseDate: 'May 5, 2023', image: 'src/image/hq720.jpg' },
    { title: 'SELF ISOLATION', genres: ['Horror', 'Survival'], releaseDate: 'June 15, 2023', image: 'src/image/maxresdefault (2).jpg' },
    { title: 'FIFA WORLD', genres: ['Sports', 'Multiplayer'], releaseDate: 'June 7, 2023', image: 'src/image/FIFA_World_Version_8_title_screen.jpg' },
    { title: 'BALDUR GATE 3', genres: ['RPG', 'Fantasy'], releaseDate: 'August 20, 2023', image: 'src/image/apps.16348.13979283744563866.8ade8915-d9bd-4323-a968-869ea471a077.jpg' },
    { title: 'CELESTE', genres: ['Platformer', 'Indie'], releaseDate: 'September 10, 2023', image: 'src/image/header.jpg' },
    { title: 'PROJECT WINGMAN', genres: ['Simulation', 'Sandbox'], releaseDate: 'October 15, 2023', image: 'src/image/Blog-Update-Project-Wingman-Launch.jpg' },
    { title: 'HAVEN', genres: ['Action', 'Adventure'], releaseDate: 'November 1, 2023', image: 'src/image/a1865a93-e4a6-40b1-981f-3d7d722fe73c.jpeg' },
    { title: 'RAFT', genres: ['Strategy', 'Puzzle'], releaseDate: 'December 1, 2023', image: 'src/image/raft.jpeg' },
    { title: 'BROKEN LINES', genres: ['Horror', 'Indie'], releaseDate: 'January 15, 2024', image: 'src/image/capsule_616x353 (3).jpg' },
    { title: 'GEARS 5', genres: ['Open World', 'Adventure'], releaseDate: 'February 5, 2024', image: 'src/image/maxresdefault (3).jpg' },
    { title: 'WRECKFEST', genres: ['Racing', 'Multiplayer'], releaseDate: 'March 20, 2024', image: 'src/image/wreckfest-complete-edition-complete-edition-pc-game-steam-cover.jpg' },
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
    if (!game) {
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

  const handleLogout = () => {
    // Handle logging out
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

  const toggleProfilePanel = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const openEditModal = () => {
    setIsEditModalOpen(true); // Open the edit modal
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false); // Close the edit modal
  };

  const handleProfileUpdate = () => {
    setIsEditModalOpen(false); // Close the modal
    // You can add any further logic here to save the changes to the profile (e.g., updating in a database)
  };

  // Add game to favorites
  const handleFavorite = (game) => {
    setFavoriteGames((prevFavorites) => {
      if (prevFavorites.includes(game.title)) {
        return prevFavorites.filter((fav) => fav !== game.title); // Remove from favorites if already added
      } else {
        return [...prevFavorites, game.title]; // Add to favorites if not added
      }
    });
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h1>GREEN FROG</h1>
        <div className="profile-container">
          <img
            src={profileImage}
            alt="Profile"
            className="profile-image"
            onClick={toggleProfilePanel} // Toggle profile panel visibility on click
          />
          {isProfileOpen && (
            <div className="profile-details">
              <p>{profileName}'s Profile</p>
              <p>Favorites: {favoriteGames.length}</p>
              <button onClick={openEditModal}>Edit Profile</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </nav>

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Profile</h2>
            <label>
              Name:
              <input
                type="text"
                value={profileName}
                onChange={(e) => setProfileName(e.target.value)}
                placeholder="Enter your name"
              />
            </label>
            <label>
              Profile Image URL:
              <input
                type="text"
                value={profileImage}
                onChange={(e) => setProfileImage(e.target.value)}
                placeholder="Enter image URL"
              />
            </label>
            <button onClick={handleProfileUpdate}>Save Changes</button>
            <button onClick={closeEditModal}>Cancel</button>
          </div>
        </div>
      )}

      {/* Filters and search */}
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

      {/* Game cards */}
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
              <button
                className={`fav-button ${favoriteGames.includes(game.title) ? 'favorited' : ''}`}
                onClick={() => handleFavorite(game)}
              >
                {favoriteGames.includes(game.title) ? 'Unfavorite' : 'Add to Favorite'}
              </button>
            </div>
          ))
        ) : (
          <p>No games found.</p>
        )}
      </div>

      {/* Preview Modal (Centered) */}
      {previewGame && (
        <div className="preview-modal-overlay">
          <div className="preview-modal">
            <h2>{previewGame.title} - Preview</h2>
            <img src={previewGame.image} alt={previewGame.title} className="preview-image" />
            <p>Genres: {previewGame.genres.join(', ')}</p>
            <p>Release Date: {previewGame.releaseDate}</p>
            <button onClick={() => setPreviewGame(null)}>Close Preview</button>
          </div>
        </div>
      )}

      {/* Pagination */}
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Prev
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(filteredGames.length / gamesPerPage)}
        >
          Next
        </button>
      </div>
      
      {/* Notification Modal */}
      {showNotification && (
        <NotificationModal
          game={gameToDownload}
          onClose={handleCloseNotification}
          onContinueAsGuest={handleContinueAsGuest}
        />
      )}
    </div>
  );
};

export default Index;



// CSS styles (Embedded)
const styles = `
/* Modal Overlay */
.preview-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Dark background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Modal */
.preview-modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  text-align: center;
  position: relative;
}

/* Image Styling */
.preview-image {
  width: 100%;
  height: auto;
  margin-bottom: 15px;
}

.preview-modal h2 {
  margin-bottom: 15px;
}

.preview-modal button {
  padding: 10px 20px;
  border: none;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.preview-modal button:hover {
  background-color: #45a049;
}

  .dashboard-container {
    font-family: 'Arial', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: #f9f9f9;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #333;
    padding: 10px;
    color: white;
  }
  .navbar h1 {
    margin: 0;
    font-size: 1.5rem;
  }
  .profile-container {
    position: relative;
  }
  .profile-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  .profile-image:hover {
    transform: scale(1.1);
  }
  .profile-details {
    position: absolute;
    top: 50px;
    right: 0;
    background-color: white;
    border: 1px solid #ccc;
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .profile-details p {
    margin: 0 0 10px;
  }
  .profile-details button {
    background-color: #333;
    color: white;
    border: none;
    padding: 5px 10px;
    margin-top: 10px;
    cursor: pointer;
  }
  .profile-details button:hover {
    background-color: #555;
  }
  .filters-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    gap: 10px;
  }
  .select {
    padding: 5px 10px;
    font-size: 1rem;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .search-bar {
    padding: 5px 10px;
    font-size: 1rem;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .game-cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  .game-card {
    width: 220px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  .game-card:hover {
    transform: scale(1.05);
  }
  .game-image {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ccc;
  }
  .game-title {
    font-size: 1.2rem;
    margin: 10px;
  }
  .game-genres,
  .game-release-date {
    font-size: 0.9rem;
    margin: 5px 10px;
    color: #555;
  }
  .preview-button,
  .download-button {
    padding: 10px 20px;
    border: none;
    background-color: #28a745;
    color: white;
    cursor: pointer;
    width: 100%;
    font-size: 1rem;
    border-radius: 5px;
    margin: 10px 0;
  }
  .preview-button:hover,
  .download-button:hover {
    background-color: #218838;
  }
  .pagination {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }
  .pagination button {
    padding: 10px 20px;
    border: 1px solid #ccc;
    background-color: #f0f0f0;
    cursor: pointer;
    font-size: 1rem;
  }
  .pagination button:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    width: 100%;
  }
  .modal h2 {
    margin-bottom: 20px;
  }
  .modal label {
    display: block;
    margin: 10px 0;
  }
  .modal input {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    margin: 5px 0;
  }
  .modal button {
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1rem;
    margin-top: 20px;
  }
  .modal button:hover {
    background-color: #218838;
  }
`;

// Injecting the styles into the document
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
