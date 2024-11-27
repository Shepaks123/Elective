import React, { useState } from 'react';
// Import images from 'src/image' directory
import generalsImage from './image/CommandConquerGeneralsZero-Hour (1).jpg';
import heroImage from './image/hero.png';
import back4BloodImage from './image/back-4-blood.jpg';
import godOfWarImage from './image/god-of-war-listing-thumb-01-ps4-us-12jun17.png';
import theRoom4OldSins from './image/capsule_616x353.jpg';
import Left4Dead2 from './image/capsule_616x353 (1).jpg';
import genshinImpactImage from './image/76593-1-1.jpg';
import jordanImage from './image/N23_MJ_Cover_1200x630.png';  // Example of imported image
import marvelAvengersImage from './image/mavels-avengers.jpg'; // Example of imported image

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
    { title: '2K23 JORDAN EDITION', genres: ['Sports', 'Multiplayer'], releaseDate: 'June 7, 2023', image: jordanImage },
    { title: 'GENSHIN IMPACT', genres: ['RPG', 'Fantasy'], releaseDate: 'August 20, 2023', image: genshinImpactImage },
    { title: 'INSIDE', genres: ['Platformer', 'Indie'], releaseDate: 'September 10, 2023', image: 'src/image/maxresdefault.jpg' },
    { title: 'THE SIM 4', genres: ['Simulation', 'Sandbox'], releaseDate: 'October 15, 2023', image: 'src/image/EGS_TheSims4_ElectronicArts_S1_2560x1440-330b00849edfdacc61578d1486f47b31.jpeg' },
    { title: 'SPIDER-MAN 2', genres: ['Action', 'Adventure'], releaseDate: 'November 1, 2023', image: 'src/image/Marvels-Spider-Man-2_Key-Art.jpeg' },
    { title: 'FISHDOM', genres: ['Strategy', 'Puzzle'], releaseDate: 'December 1, 2023', image: 'src/image/maxresdefault (1).jpg' },
    { title: "FIVE NIGHT AT FREDDY'S: Into the Pit", genres: ['Horror', 'Indie'], releaseDate: 'January 15, 2024', image: 'src/image/capsule_616x353 (2).jpg' },
    { title: 'GTA VI', genres: ['Open World', 'Adventure'], releaseDate: 'February 5, 2024', image: 'src/image/GTA-6-Game.png' },
    { title: 'NEED FOR SPEED', genres: ['Racing', 'Multiplayer'], releaseDate: 'March 20, 2024', image: 'src/image/Need-for-Speed-2015-header-art.jpg' },
    { title: 'MARVEL AVENGERS', genres: ['Action', 'Adventure', 'Open World'], releaseDate: 'January 8, 2021', image: marvelAvengersImage },
    // Add more games if needed
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

  const filteredGames = games.filter((game) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const lowerCaseTitle = game.title.toLowerCase();
    return (
      (selectedCategory === 'All' || game.genres.includes(selectedCategory)) &&
      (lowerCaseTitle.includes(lowerCaseQuery) || 
       game.genres.some((genre) => genre.toLowerCase().includes(lowerCaseQuery)))
    );
  });
  

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
          <h1>GREEN FROG</h1>
        </div>
      </nav>

      {/* Game List Section */}
      <section style={styles.gameListSection}>
        <div style={styles.filtersContainer}>
          {/* Category and Search Filters */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={styles.select}
          >
            <option value="All">All</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Racing">Racing</option>
            <option value="Strategy">Strategy</option>
            <option value="Simulation">Simulation</option>
            <option value="Horror">Horror</option>
            <option value="RPG">RPG</option>
            <option value="FPS">FPS</option>
            <option value="Multiplayer">Multiplayer</option>
          </select>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search games..."
            style={styles.searchBar}
          />
        </div>

        {/* Game Cards */}
        <div style={styles.gameCardsContainer}>
          {currentGames.map((game) => (
            <div key={game.title} style={styles.gameCard}>
              <img src={game.image} alt={game.title} style={styles.gameImage} />
              <h3 style={styles.gameTitle}>{game.title}</h3>
              <p style={styles.gameGenres}>{game.genres.join(', ')}</p>
              <p style={styles.gameReleaseDate}>{game.releaseDate}</p>
              <button style={styles.previewButton} onClick={() => handlePreview(game)}>
                Preview
              </button>
              <button style={styles.downloadButton} onClick={() => handleDownload(game.image)}>
                Download
              </button>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div style={styles.pagination}>
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            style={styles.pageButton}
          >
            Prev
          </button>
          <span style={styles.pageNumber}>{currentPage}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(filteredGames.length / gamesPerPage)}
            style={styles.pageButton}
          >
            Next
          </button>
        </div>
      </section>

      {/* Game Preview Modal */}
      {previewGame && (
        <div style={styles.modal} onClick={() => setPreviewGame(null)}>
          <div style={styles.modalContent}>
            <h2>{previewGame.title}</h2>
            <img src={previewGame.image} alt={previewGame.title} style={styles.modalImage} />
            <p>{previewGame.genres.join(', ')}</p>
            <p>{previewGame.releaseDate}</p>
            <button style={styles.closePreview} onClick={() => setPreviewGame(null)}>
              Close Preview
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  dashboardContainer: {
    fontFamily: 'Arial, sans-serif',
  },
  navbar: {
    backgroundColor: '#0c8026',
    color: 'white',
    padding: '15px',
    textAlign: 'center',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0c8026',
  },
  logo: {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  },
  gameListSection: {
    padding: '20px',
  },
  filtersContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  select: {
    padding: '8px 12px',
    fontSize: '16px',
  },
  searchBar: {
    padding: '8px 12px',
    width: '200px',
    fontSize: '16px',
  },
  gameCardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gameCard: {
    width: '200px',
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  gameImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  },
  gameTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  gameGenres: {
    fontSize: '14px',
    color: '#777',
  },
  gameReleaseDate: {
    fontSize: '12px',
    color: '#888',
  },
  previewButton: {
    padding: '8px 12px',
    marginTop: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  downloadButton: {
    padding: '8px 12px',
    marginTop: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  pageButton: {
    padding: '10px',
    margin: '0 10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  pageNumber: {
    fontSize: '16px',
    alignSelf: 'center',
  },
  modal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '20px',
    borderRadius: '8px',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  modalImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  },
  closePreview: {
    marginTop: '10px',
    padding: '8px 12px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Dashboard;
