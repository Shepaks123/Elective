import React from 'react';
import { useParams } from 'react-router-dom';

function Download({ games }) {
  const { gameTitle } = useParams();
  // Ensure games is an array and gameTitle exists
  const game = games && games.find(g => g.title.toLowerCase() === gameTitle.toLowerCase());

  if (!game) {
    return <div style={styles.errorMessage}>Game not found</div>;
  }

  return (
    <div style={styles.downloadPage}>
      <h2 style={styles.downloadTitle}>{game.title}</h2>
      <img src={game.image} alt={game.title} style={styles.downloadImage} />
      <p style={styles.downloadGenres}>Genres: {game.genres.join(', ')}</p>
      <p style={styles.downloadRelease}>Release Date: {game.releaseDate}</p>

      <div style={styles.downloadBox}>
        <p style={styles.downloadLabel}>Download File</p>
        <button style={styles.downloadButton}>Download Now</button>
      </div>
    </div>
  );
}

const styles = {
  downloadPage: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '20px auto',
    maxWidth: '600px',
  },
  downloadTitle: {
    fontSize: '2rem',
    marginBottom: '15px',
    color: '#333',
  },
  downloadImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '15px',
  },
  downloadGenres: {
    fontSize: '1.1rem',
    marginBottom: '10px',
    color: '#555',
  },
  downloadRelease: {
    fontSize: '1.1rem',
    marginBottom: '20px',
    color: '#555',
  },
  downloadBox: {
    backgroundColor: '#008000',
    padding: '15px',
    borderRadius: '8px',
  },
  downloadLabel: {
    fontSize: '1.2rem',
    color: 'white',
    marginBottom: '10px',
  },
  downloadButton: {
    padding: '10px 20px',
    backgroundColor: '#ff6600',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  errorMessage: {
    color: 'red',
    fontSize: '1.5rem',
    textAlign: 'center',
    marginTop: '20px',
  }
};

export default Download;
