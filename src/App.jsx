import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import FAQ from './FAQ';
import Download from './Download';
import generalsImage from './image/CommandConquerGeneralsZero-Hour (1).jpg';
import heroImage from './image/hero.png';
import back4BloodImage from './image/back-4-blood.jpg';
import godOfWarImage from './image/god-of-war-listing-thumb-01-ps4-us-12jun17.png';


function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  const [previewGame, setPreviewGame] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const gamesPerPage = 6;

  const games = [
    { title: 'GENERALS', genres: ['Action', 'Adventure', 'Open World'], releaseDate: 'January 1, 2023', image: generalsImage },
    { title: 'CAR RACING', genres: ['Racing', 'Simulation'], releaseDate: 'February 10, 2023', image: heroImage },
    { title: 'BACK 4 BLOOD', genres: ['FPS', 'Action', 'Multiplayer'], releaseDate: 'March 15, 2023', image: back4BloodImage },
    { title: 'GOD OF WAR', genres: ['Strategy', 'Single-player'], releaseDate: 'April 20, 2023', image: godOfWarImage },
    // More games...
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

  const filteredGames = selectedCategory === 'All'
    ? games.filter(game => game.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : games.filter(game => game.genres.includes(selectedCategory) && game.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);

  const nextPage = () => {
    if (currentPage * gamesPerPage < filteredGames.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const showGamePreview = (game) => {
    setPreviewGame(game);
    setShowPreview(true);
  };

  const closePreview = () => {
    setShowPreview(false);
    setPreviewGame(null);
  };

  return (
    <Router>
      <div style={styles.appContainer}>
        <header style={styles.navbar}>
          <div style={styles.logoContainer}>
            <img src="src/image/cute-frog-retro-vintage-cartoon-260nw-2466628697-removebg-preview.png" alt="Green Frog Logo" style={styles.logoImage} />
            <h1 style={styles.logoText}>Green Frog</h1>
          </div>
          <nav style={styles.navLinks}>
            <Link to="/" style={styles.navLink}>Home</Link>
            <Link to="/faq" style={styles.navLink}>FAQ</Link>
            <Link to="/contact" style={styles.navLink}>Contact</Link>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <section style={styles.searchSection}>
                  <input 
                    type="text" 
                    placeholder="Search for games..." 
                    style={styles.searchBar} 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                  />
                  <button style={styles.searchButton}>Search</button>
                </section>

                <section style={styles.categoriesSection}>
                  <h2 style={styles.categoriesSectionHeading}>Browse by Category</h2>
                  <div style={styles.categories}>
                    {['All', 'Action', 'Adventure', 'Horror', 'Racing', 'Sports', 'Strategy', 'Simulation'].map((category) => (
                      <button
                        key={category}
                        style={styles.categoryLink}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </section>

                <section style={styles.gameGrid}>
                  {currentGames.map((game) => (
                    <div style={styles.gameCard} key={game.title}>
                      <img src={game.image} alt={game.title} style={styles.gameImage} />
                      <h3>{game.title}</h3>
                      <p>{game.genres.join(', ')}</p>
                      <span>Release Date: {game.releaseDate}</span>
                      <div>
                        <Link to={`/download/${game.title}`} style={styles.downloadButton}>Download</Link>
                        <button onClick={() => showGamePreview(game)} style={styles.previewButton}>Preview</button>
                      </div>
                    </div>
                  ))}
                </section>

                <div style={styles.paginationControls}>
                  <button onClick={prevPage} style={styles.paginationButton} disabled={currentPage === 1}>Back</button>
                  <button onClick={nextPage} style={styles.paginationButton} disabled={currentPage * gamesPerPage >= filteredGames.length}>Next</button>
                </div>
              </>
            }
          />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/download/:gameTitle" element={<Download games={games} />} />
        </Routes>

        {showPreview && previewGame && (
          <div style={styles.modal}>
            <div style={styles.modalContent}>
              <button onClick={closePreview} style={styles.closeButton}>X</button>
              <h2>{previewGame.title}</h2>
              <img src={previewGame.image} alt={previewGame.title} style={styles.previewImage} />
              <p><strong>Genres:</strong> {previewGame.genres.join(', ')}</p>
              <p><strong>Release Date:</strong> {previewGame.releaseDate}</p>
              <p><strong>About the Game:</strong> This is where you can add a brief description or other details.</p>
              <div>
                <button onClick={closePreview} style={styles.previewButton}>Back</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

const styles = {
  appContainer: {
    padding: '5px',
    textAlign: 'center',
    alignItems: 'center',
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#008000',
    color: 'white',
    padding: '5px 5px',
    borderRadius: '5px',
    marginBottom: '5px',
    fontSize: '1rem',
    width: '100%', // Full width of the screen
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    width: '100px',
    height: '100px',
    marginRight: '0rem',
  },
  logoText: {
    color: 'white',
    fontSize: '2rem',
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
    fontSize: '1.2rem',
    transition: 'color 0.3s ease',
  },
  searchSection: {
    display: 'flex',
    justifyContent: 'center',
    margin: '30px 0',
  },
  searchBar: {
    padding: '12px 16px',
    width: '100%',
    maxWidth: '500px',
    border: '2px solid #008000',
    borderRadius: '4px 0 0 4px',
    outline: 'none',
  },
  searchButton: {
    padding: '12px 24px',
    backgroundColor: '#008000',
    color: 'white',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
  },
  categoriesSection: {
    textAlign: 'center',
    margin: '30px auto',
  },
  categoriesSectionHeading: {
    fontSize: '26px',
    marginBottom: '20px',
    color: '#008000',
  },
  categories: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  categoryLink: {
    padding: '10px 20px',
    margin: '5px',
    border: '1px solid #008000',
    borderRadius: '5px',
    backgroundColor: '#f5f5f5',
    color: '#070707',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  gameGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center',
    padding: '20px 0',
  },
  gameCard: {
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '300px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  gameImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '15px',
  },
  downloadButton: {
    padding: '10px 20px',
    backgroundColor: '#008000',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  previewButton: {
    padding: '10px 20px',
    marginTop: '10px',
    backgroundColor: '#ff6600',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  nextButton: {
    padding: '12px 24px',
    backgroundColor: '#008000',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '30px',
  },
  paginationControls: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  paginationButton: {
    padding: '10px 20px',
    backgroundColor: '#008000',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '0 10px',
  },
  modal: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    width: '80%',
    maxWidth: '600px',
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#ff0000',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
  },
  previewImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '15px',
  }
};

export default App;
