// Download.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function Download({ games }) {
  const { gameTitle } = useParams();
  const game = games.find(g => g.title === gameTitle);

  if (!game) {
    return <div className="download-page">Game not found</div>;
  }

  return (
    <div className="download-page">
      <h2 className="download-title">{game.title}</h2>
      <img src={game.image} alt={game.title} className="download-image" />
      <p className="download-genres">Genres: {game.genres.join(', ')}</p>
      <p className="download-release">Release Date: {game.releaseDate}</p>

      <div className="download-box">
        <p className="download-label">Download File</p>
        <button className="download-button">Download Now</button>
      </div>
    </div>
  );
}

export default Download;
