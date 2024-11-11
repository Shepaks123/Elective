// FAQ.jsx
import React from 'react';

function FAQ() {
  const recentlyRequestedGames = [
    { title: 'Requested Game 1', releaseDate: 'November 5, 2023', imageUrl: '/path/to/image1.jpg' },
    { title: 'Requested Game 2', releaseDate: 'October 25, 2023', imageUrl: '/path/to/image2.jpg' },
    { title: 'Requested Game 3', releaseDate: 'October 15, 2023', imageUrl: '/path/to/image3.jpg' },
   
    // Add more requested games as needed
  ];

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-layout">
        <div className="faq-content">
          <div className="faq-item">
            <h3>What is Green Frog?</h3>
            <p>Green Frog is an online shop where users can download free games across various genres.</p>
          </div>
          <div className="faq-item">
            <h3>Are the games really free?</h3>
            <p>Yes, all games available on Green Frog are completely free to download and play.</p>
          </div>
          <div className="faq-item">
            <h3>How can I contact support?</h3>
            <p>You can reach us via email at support@greenfrog.com or call us at +123-456-7890.</p>
          </div>
          <div className="faq-item">
            <h3>How often are new games added?</h3>
            <p>We add new games every month. Keep checking back for the latest releases!</p>
          </div>
        </div>
      </div>

      <div className="recently-requested-container">
        <h2>Recently Requested Games</h2>
        {recentlyRequestedGames.map((game) => (
          <div className="recently-requested-item" key={game.title}>
            <img src={game.imageUrl} alt={game.title} className="requested-game-image" />
            <h3>{game.title}</h3>
            <p>Release Date: {game.releaseDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
