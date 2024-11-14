import React from 'react';
import { Link } from 'react-router-dom';

function FAQ() {
  const recentlyRequestedGames = [
    { title: 'Requested Game 1', releaseDate: 'November 5, 2023', imageUrl: 'src/image/Marvels-Spider-Man-2_Key-Art.jpeg' },
    { title: 'Requested Game 2', releaseDate: 'October 25, 2023', imageUrl: 'src/image/N23_MJ_Cover_1200x630.png' },
    { title: 'Requested Game 3', releaseDate: 'October 15, 2023', imageUrl: 'src/image/mxgp-2019-the-official-motocross-videogame-pc-game-steam-cover.jpg' },
    // Add more requested games as needed
  ];

  // Inline styles for the component
  const styles = {
    appContainer: {
      padding: '5px',
      textAlign: 'center',
      alignItems: 'center',
    },
    faqContainer: {
      maxWidth: '70%',
      margin: '2rem auto',
      padding: '1rem',
    },
    faqHeading: {
      fontSize: '2rem',
      color: 'black', // Green color
      textAlign: 'center',
      marginBottom: '1rem',
      font: 'Arial',
    },
    faqItem: {
      marginBottom: '1.5rem',
    },
    faqItemTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: 'black',
    },
    faqItemText: {
      fontSize: '1rem',
      color: 'black',
      textAlign: 'center',
    },
    requestedGamesContainer: {
      maxWidth: '70%',
      margin: '2rem auto',
      padding: '1rem',
    },
    gameCard: {
      backgroundColor: 'white',
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    gameImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '1rem',
    },
    gameTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#333',
    },
    gameReleaseDate: {
      fontSize: '1rem',
      color: '#666',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '1.5rem',
      marginTop: '2rem',
    },

    // Responsive Styling for Navbar
    '@media (max-width: 768px)': {
      navbar: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '10px',
      },
      navLinks: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      navLink: {
        margin: '10px 0',
      },
    },
  };

  return (
    <div style={{ backgroundColor: 'white', color: 'black' }}>

      {/* Navbar */}

      {/* FAQ Content */}
      <div style={styles.faqContainer}>
        <h1 style={styles.faqHeading}>Frequently Asked Questions</h1>
        <div style={styles.faqItem}>
          <h2 style={styles.faqItemTitle}>What is Green Frog?</h2>
          <p style={styles.faqItemText}>Green Frog is a dynamic and user-friendly online platform offering an extensive collection of free games spanning various genres, including action, adventure, puzzle, simulation, RPG, and strategy. Whether you're into immersive single-player experiences, fast-paced multiplayer games, or casual mobile titles, Green Frog has something for everyone.
          Our mission is to provide high-quality, no-cost gaming experiences for players of all ages. The platform is designed to be easy to navigate, allowing users to quickly browse and download their favorite games directly to their devices. Each game is handpicked to ensure it meets our quality standards, offering you hours of fun without any hidden fees or subscription models.
          Green Frog is continually updated with new games, ensuring that our users always have fresh content to explore. With a wide variety of genres available, you'll find everything from classic retro games to the latest indie hits. All you need to do is browse, download, and enjoy it's that simple!
          </p>
        </div>
        <div style={styles.faqItem}>
          <h2 style={styles.faqItemTitle}>Are the games really free?</h2>
          <p style={styles.faqItemText}>Yes, all games available on Green Frog are completely free to download and play. There are no hidden charges, subscriptions, or premium versions. We believe in providing free access to great gaming experiences for everyone.</p>
        </div>
        <div style={styles.faqItem}>
          <h2 style={styles.faqItemTitle}>How can I contact support?</h2>
          <p style={styles.faqItemText}>You can reach us via email at support@greenfrog.com or call us at +123-456-7890.</p>
        </div>
        <div style={styles.faqItem}>
          <h2 style={styles.faqItemTitle}>How often are new games added?</h2>
          <p style={styles.faqItemText}>At Green Frog, we constantly strive to bring you fresh content. We add new games to our platform every month. Keep checking back regularly to discover new and exciting titles, ranging from indie gems to mainstream hits.</p>
        </div>
      </div>

      {/* Recently Requested Games */}
      <div style={styles.requestedGamesContainer}>
        <h1 style={styles.faqHeading}>Recently Requested Games</h1>
        <div style={styles.grid}>
          {recentlyRequestedGames.map((game) => (
            <div style={styles.gameCard} key={game.title}>
              <img src={game.imageUrl} alt={game.title} style={styles.gameImage} />
              <h3 style={styles.gameTitle}>{game.title}</h3>
              <p style={styles.gameReleaseDate}>Release Date: {game.releaseDate}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
