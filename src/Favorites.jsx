import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';  // Import Link for navigation

const Favorites = () => {
  const [favoriteGames, setFavoriteGames] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteGames')) || [];
    setFavoriteGames(favorites);
  }, []);

  const deleteFavoriteGame = (index) => {
    const updatedFavorites = [...favoriteGames];
    updatedFavorites.splice(index, 1);
    setFavoriteGames(updatedFavorites);
    localStorage.setItem('favoriteGames', JSON.stringify(updatedFavorites));
  };

  return (
    <section className="favorites-section">
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="8" className="mx-auto">
            <MDBCard>
              <MDBCardBody>
                {/* Back Button */}
                <div className="d-flex justify-content-start mb-4">
                  <Link to="/profile">  {/* Or any other page you want to link back to */}
                    <MDBBtn color="secondary">Back</MDBBtn>
                  </Link>
                </div>

                <h3 className="mb-4">Favorite Games</h3>
                {favoriteGames.length > 0 ? (
                  <ul>
                    {favoriteGames.map((game, index) => (
                      <li key={index} className="d-flex justify-content-between align-items-center">
                        <span>{game}</span>
                        <MDBBtn
                          color="danger"
                          size="sm"
                          onClick={() => deleteFavoriteGame(index)}
                        >
                          Remove
                        </MDBBtn>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No favorite games yet.</p>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default Favorites;
