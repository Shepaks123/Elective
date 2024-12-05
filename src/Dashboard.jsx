import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // to navigate to the profile page
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
import profileIcon from './image/green.jpg'; // Add a placeholder for profile icon image

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [previewGame, setPreviewGame] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [gameToDownload, setGameToDownload] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // To control profile panel visibility

  const navigate = useNavigate(); // Hook to navigate to other pages

  const games = [
    { title: 'GENERALS', genres: ['Action', 'Adventure', 'Open World'], releaseDate: 'January 1, 2023', image: generalsImage },
    { title: 'CAR RACING', genres: ['Racing', 'Simulation'], releaseDate: 'February 10, 2023', image: heroImage },
    { title: 'BACK 4 BLOOD', genres: ['FPS', 'Action', 'Multiplayer'], releaseDate: 'March 15, 2023', image: back4BloodImage },
    { title: 'GOD OF WAR', genres: ['Strategy', 'Single-player'], releaseDate: 'April 20, 2023', image: godOfWarImage },
    { title: 'THE ROOM 4 OLD SINS', genres: ['Puzzle', 'Casual'], releaseDate: 'May 5, 2023', image: theRoom4OldSins },
    { title: 'LEFT 4 DEAD 2', genres: ['Horror', 'Survival'], releaseDate: 'June 15, 2023', image: Left4Dead2 },
    { title: '2K23 JORDAN EDITION', genres: ['Sports', 'Multiplayer'], releaseDate: 'June 7, 2023', image: jordanImage },
    { title: 'GENSHIN IMPACT', genres: ['RPG', 'Fantasy'], releaseDate: 'August 20, 2023', image: genshinImpactImage },
    { title: 'INSIDE', genres: ['Platformer', 'Indie'], releaseDate: 'September 10, 2023', image: 'src/image/maxresdefault.jpg' },
    { title: 'THE SIM 4', genres: ['Simulation', 'Sandbox'], releaseDate: 'October 15, 2023', image: 'src/image/EGS_TheSims4_ElectronicArts_S1_2560x1440-330b00849edfdacc61578d1486f47b31.jpeg' },
    { title: 'SPIDER-MAN 2', genres: ['Action', 'Adventure'], releaseDate: 'November 1, 2023', image: 'src/image/Marvels-Spider-Man-2_Key-Art.jpeg' },
    { title: 'FISHDOM', genres: ['Strategy', 'Puzzle'], releaseDate: 'December 1, 2023', image: 'src/image/maxresdefault (1).jpg' },
    { title: 'FIVE NIGHT AT FREDDY', genres: ['Horror', 'Indie'], releaseDate: 'January 15, 2024', image: 'src/image/capsule_616x353 (2).jpg' },
    { title: 'GTA VI', genres: ['Open World', 'Adventure'], releaseDate: 'February 5, 2024', image: 'src/image/GTA-6-Game.png' },
    { title: 'NEED FOR SPEED', genres: ['Racing', 'Multiplayer'], releaseDate: 'March 20, 2024', image: 'src/image/Need-for-Speed-2015-header-art.jpg' },
    { title: 'HALO INFINITE', genres: ['FPS', 'Action', 'Sci-Fi'], releaseDate: 'December 8, 2021', image: 'src/image/HaloInfinite.jpg' },
    { title: 'DOOM ETERNAL', genres: ['Action', 'Shooter', 'Horror'], releaseDate: 'March 20, 2020', image: 'src/image/DoomEternal.jpg' },
    { title: 'THE LAST OF US PART II', genres: ['Action', 'Adventure', 'Drama'], releaseDate: 'June 19, 2020', image: 'src/image/TheLastOfUs2.jpg' },
    { title: 'MINECRAFT', genres: ['Sandbox', 'Survival'], releaseDate: 'November 18, 2011', image: 'src/image/Minecraft.jpg' },
    { title: 'RED DEAD REDEMPTION 2', genres: ['Action', 'Adventure', 'Open World'], releaseDate: 'October 26, 2018', image: 'src/image/RDR2.jpg' },
    { title: 'FALLOUT 4', genres: ['RPG', 'Post-apocalyptic'], releaseDate: 'November 10, 2015', image: 'src/image/Fallout4.jpg' },
    { title: 'DEATH STRANDING', genres: ['Action', 'Adventure', 'Sci-Fi'], releaseDate: 'November 8, 2019', image: 'src/image/DeathStranding.jpg' },
    { title: 'MORTAL KOMBAT 11', genres: ['Fighting', 'Action'], releaseDate: 'April 23, 2019', image: 'src/image/MortalKombat11.jpg' },
    { title: 'OVERWATCH 2', genres: ['FPS', 'Multiplayer', 'Action'], releaseDate: 'October 4, 2022', image: 'src/image/Overwatch2.jpg' },
    { title: 'Apex Legends', genres: ['Battle Royale', 'FPS', 'Multiplayer'], releaseDate: 'February 4, 2019', image: 'src/image/ApexLegends.jpg' } 
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

  const handlePreview = (game) => setPreviewGame(game); // Set the game to preview

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

  const handleClosePreview = () => setPreviewGame(null); // Close preview modal

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h1>GREEN FROG</h1>
        {isLoggedIn ? (
          <div className="profile-icon">
            <img
              src={profileIcon}
              alt="Profile"
              className="profile-image"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            />
          </div>
        ) : (
          <div className="auth-buttons">
            <button className="login-button" onClick={() => navigate('/login')}>Login</button>
            <button className="signup-button" onClick={() => navigate('/signup')}>Sign Up</button>
          </div>
        )}
      </nav>

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
              <button className="preview-button" onClick={() => handlePreview(game)}>Preview</button>
              <button className="download-button" onClick={() => handleDownload(game)}>Download</button>
            </div>
          ))
        ) : (
          <p>No games found.</p>
        )}
      </div>
      <div className="pagination">
  <button
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
  >
    Previous
  </button>
  <span>{currentPage}</span>
  <button
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={currentPage * gamesPerPage >= filteredGames.length}
  >
    Next
  </button>
</div>


      {/* Render the Preview Modal */}
      {previewGame && (
  <div className={`modal-overlay ${previewGame ? "active" : ""}`} onClick={() => setPreviewGame(null)}>
    <div className="preview-modal" onClick={(e) => e.stopPropagation()}>
      <h2>{previewGame.title}</h2>
      <img src={previewGame.image} alt={previewGame.title} />
      <p>Genres: {previewGame.genres.join(", ")}</p>
      <p>Release Date: {previewGame.releaseDate}</p>
      <button onClick={() => setPreviewGame(null)}>Close</button>
    </div>
  </div>
)}

      {/* Notification Modal */}
      {showNotification && gameToDownload && (
        <NotificationModal
          game={gameToDownload}
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
