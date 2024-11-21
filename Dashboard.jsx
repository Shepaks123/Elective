import React, { useState } from 'react';
import generalsImage from './image/CommandConquerGeneralsZero-Hour (1).jpg';
import heroImage from './image/hero.png';
import back4BloodImage from './image/back-4-blood.jpg';
import godOfWarImage from './image/god-of-war-listing-thumb-01-ps4-us-12jun17.png';
import theRoom4OldSins from './image/capsule_616x353.jpg';
import Left4Dead2 from './image/capsule_616x353 (1).jpg';
import genshinImpactImage from './image/76593-1-1.jpg';

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [previewGame, setPreviewGame] = useState(null);

  const games = [
    { title: 'GENERALS', genres: ['Action', 'Adventure', 'Open World'], releaseDate: 'January 1, 2023', image: generalsImage },
    { title: 'CAR RACING', genres: ['Racing', 'Simulation'], releaseDate: 'February 10, 2023', image: heroImage },
    { title: 'BACK 4 BLOOD', genres: ['FPS', 'Action', 'Multiplayer'], releaseDate: 'March 15, 2023', image: back4BloodImage },
    { title: 'GOD OF WAR', genres: ['Strategy', 'Single-player'], releaseDate: 'April 20, 2023', image: godOfWarImage },
    { title: 'THE ROOM 4 OLD SINS', genres: ['Puzzle', 'Casual'], releaseDate: 'May 5, 2023', image: theRoom4OldSins },
    { title: 'LEFT 4 DEAD 2', genres: ['Horror', 'Survival'], releaseDate: 'June 15, 2023', image: Left4Dead2 },
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

  const gamesPerPage = 5;
  const filteredGames =
    selectedCategory === 'All'
      ? games.filter((game) => game.title.toLowerCase().includes(searchQuery.toLowerCase()))
      : games.filter(
          (game) =>
            game.genres.includes(selectedCategory) &&
            game.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);

  const handlePreview = (game) => {
    setPreviewGame(game);
  };

  const handleDownload = (image) => {
    const link = document.createElement('a');
    link.href = image;
    link.download = 'game-image.jpg'; // Default download name
    link.click();
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

  return (
    <div style={styles.dashboardContainer}>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <div style={styles.logoContainer}>
          <img
            src="project/src/image/cute-frog-retro-vintage-cartoon-260nw-2466628697-removebg-preview.png" // Replace with your actual logo path
            alt="Logo"
            style={styles.logoImage}
          />
          <span style={styles.logoText}>GreenFrog</span>
        </div>
        <div style={styles.navLinks}>
          <a href="#home" style={styles.navLink}>
            Home
          </a>
          <a href="#categories" style={styles.navLink}>
            Categories
          </a>
          <a href="#about" style={styles.navLink}>
            About Us
          </a>
        </div>
      </nav>


      <section style={styles.searchSection}>
        <input
          type="text"
          placeholder="Search for games..."
          style={styles.searchBar}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </section>

      <section id="categories" style={styles.categoriesSection}>
        <h2>Categories</h2>
        <div style={styles.categories}>
          {['All', 'Action', 'Adventure', 'Racing', 'FPS', 'Sports', 'Horror'].map((category) => (
            <button
              key={category}
              style={styles.categoryButton}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section id="games" style={styles.gamesList}>
        {currentGames.length > 0 ? (
          currentGames.map((game) => (
            <div key={game.title} style={styles.gameCard}>
              <h3>{game.title}</h3>
              <p>Genres: {game.genres.join(', ')}</p>
              <p>Release Date: {game.releaseDate}</p>
              <button onClick={() => handlePreview(game)} style={styles.previewButton}>Preview</button>
              <button onClick={() => handleDownload(game.image)} style={styles.downloadButton}>Download</button>
            </div>
          ))
        ) : (
          <p style={styles.noResults}>No games found. Try another search or category.</p>
        )}
      </section>

      <div style={styles.pagination}>
        <button onClick={handlePreviousPage} style={styles.pageButton} disabled={currentPage === 1}>
          Back Page
        </button>
        <button onClick={handleNextPage} style={styles.pageButton} disabled={currentPage >= Math.ceil(filteredGames.length / gamesPerPage)}>
          Next Page
        </button>
      </div>

      {previewGame && (
        <div style={styles.previewModal}>
          <h2>{previewGame.title} - Preview</h2>
          <img src={previewGame.image} alt={previewGame.title} style={styles.previewImage} />
          <p>Genres: {previewGame.genres.join(', ')}</p>
          <p>Release Date: {previewGame.releaseDate}</p>
          <button onClick={() => setPreviewGame(null)} style={styles.closePreview}>Close Preview</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  dashboardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',  // Horizontally center the content
    justifyContent: 'center',  // Vertically center the content
    padding: '30px',
    textAlign: 'center',
    minHeight: '100vh',  // Make sure it takes full viewport height
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#f4f4f4',  // Optional background color to contrast with the white cards
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#008000',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',  // Centers navbar horizontally
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    width: '80px',
    height: '80px',
    marginRight: '10px',
  },
  logoText: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
  },
  searchSection: {
    display: 'flex',
    justifyContent: 'center',  // Center the search bar horizontally
    margin: '30px 0',
    width: '100%',
  },
  searchBar: {
    padding: '12px 16px',
    width: '100%',
    maxWidth: '500px',  // Limit search bar width
    border: '2px solid #008000',
    borderRadius: '4px',
    outline: 'none',
  },
  categoriesSection: {
    textAlign: 'center',
    margin: '30px auto',
    width: '100%',
    maxWidth: '1200px',
  },
  categories: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  categoryButton: {
    margin: '5px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#008000',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  gamesList: {
    display: 'flex',
    justifyContent: 'center',  // Horizontally center the game cards
    flexWrap: 'wrap',
    gap: '20px',
    margin: '30px auto',
    width: '100%',
    maxWidth: '1200px',
  },
  gameCard: {
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
    width: '200px',  // Set fixed width for game cards
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  previewButton: {
    backgroundColor: '#008000',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '10px',
  },
  downloadButton: {
    backgroundColor: '#ff5722',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '10px',
  },
  noResults: {
    marginTop: '20px',
    color: '#555',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',  // Center pagination buttons
    gap: '20px',
    marginTop: '20px',
  },
  pageButton: {
    padding: '10px 20px',
    backgroundColor: '#008000',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  previewModal: {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translateX(-50%)',  // Center modal horizontally
    backgroundColor: 'white',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    zIndex: '100',
    width: '80%',
    maxWidth: '800px',
  },
  previewImage: {
    width: '100%',
    maxHeight: '400px',
    objectFit: 'cover',
    marginBottom: '20px',
  },
  closePreview: {
    padding: '10px 20px',
    backgroundColor: '#ff5722',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};


export default Dashboard;
