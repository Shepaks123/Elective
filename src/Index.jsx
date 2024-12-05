import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NotificationModal from './NotificationModal'; // Assuming this component exists
import profileIcon from './image/green.jpg'; // Default profile image

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [previewGame, setPreviewGame] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [gameToDownload, setGameToDownload] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [profileName, setProfileName] = useState('User');
  const [profileImage, setProfileImage] = useState(profileIcon);
  const [favoriteGames, setFavoriteGames] = useState([]);

  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('/profile/edit'); // Navigate to the ProfileEdit page when button is clicked
  };
  const handleProfile = () => {
    navigate('/profile'); // Navigate to the ProfileEdit page when button is clicked
  };

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
      (selectedCategory === "All" || game.genres.includes(selectedCategory)) &&
      game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);

  const handlePreview = (game) => setPreviewGame(game);
  const handleDownload = (game) => {
    // Get existing download history from localStorage
    const downloadHistory = JSON.parse(localStorage.getItem('downloadHistory')) || [];
    
    // Add new game to history with current date and time
    const gameDownload = {
      name: game.title,
      downloadDate: new Date().toISOString(), // Save current date in ISO format
    };
    downloadHistory.push(gameDownload);
    
    // Save updated history back to localStorage
    localStorage.setItem('downloadHistory', JSON.stringify(downloadHistory));
    
    // Proceed with download
    const link = document.createElement("a");
    link.href = game.image; // This should be the download URL of the game
    link.download = `${game.image.split("/").pop()}`; // Extract the file name from the URL
    link.click();
  };
  

  const handleLogout = () => {
    navigate("/login");
  };

  const toggleProfilePanel = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleFavorite = (game) => {
    const updatedFavorites = favoriteGames.includes(game.title)
      ? favoriteGames.filter(fav => fav !== game.title)
      : [...favoriteGames, game.title];
    
    setFavoriteGames(updatedFavorites);
    localStorage.setItem('favoriteGames', JSON.stringify(updatedFavorites));
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
            onClick={toggleProfilePanel}
          />
          {isProfileOpen && (
            <div className="profile-details">
              <p>{profileName}'s Profile</p>
            
              <button onClick={handleProfile}>Profile</button>
             
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
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
              <h3>{game.title}</h3>
              <p>{game.genres.join(", ")}</p>
              <p>{game.releaseDate}</p>
              <button onClick={() => handlePreview(game)}>Preview</button>
              <button onClick={() => handleDownload(game)}>Download</button>
              <button
                onClick={() => handleFavorite(game)}
                className={favoriteGames.includes(game.title) ? "favorited" : ""}
              >
                {favoriteGames.includes(game.title) ? "Unfavorite" : "Add to Favorites"}
              </button>
            </div>
          ))
        ) : (
          <p>No games found.</p>
        )}
      </div>

      <div className="pagination">
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>Prev</button>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredGames.length / gamesPerPage)))
          }
        >
          Next
        </button>
      </div>

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




      {showNotification && (
        <NotificationModal
          message="Please sign up or log in to download this game."
          onContinueAsGuest={handleContinueAsGuest}
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
    
      
      
  );
};  

export default Index;