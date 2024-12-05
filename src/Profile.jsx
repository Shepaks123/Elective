import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from 'mdb-react-ui-kit';


const Profile = () => {
  const [profileData, setProfileData] = useState({});
  const [downloadHistory, setDownloadHistory] = useState([]);
  const [favoriteGames, setFavoriteGames] = useState([]);

  // Fetch profile data, download history, and favorite games from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('profileData'));
    if (data) {
      setProfileData(data);
    }

    const history = JSON.parse(localStorage.getItem('downloadHistory')) || [];
    setDownloadHistory(history);

    const favorites = JSON.parse(localStorage.getItem('favoriteGames')) || [];
    setFavoriteGames(favorites);
  }, []);

  // Delete a download history item
  const deleteHistoryItem = (index) => {
    const updatedHistory = [...downloadHistory];
    updatedHistory.splice(index, 1);
    setDownloadHistory(updatedHistory);
    localStorage.setItem('downloadHistory', JSON.stringify(updatedHistory));
  };

  // Delete a favorite game
  const deleteFavoriteGame = (index) => {
    const updatedFavorites = [...favoriteGames];
    updatedFavorites.splice(index, 1);
    setFavoriteGames(updatedFavorites);
    localStorage.setItem('favoriteGames', JSON.stringify(updatedFavorites));
  };

  return (
    <section className="profile-section">
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="8" className="mx-auto">
            <MDBCard>
              <MDBCardBody>
                {/* Navigation Buttons */}
                <div className="d-flex justify-content-start mb-4">
                  <Link to="/">
                    <MDBBtn color="success">Home</MDBBtn>
                  </Link>
                  <Link to="/favorites">
                    <MDBBtn color="primary" className="ms-2">Favorites</MDBBtn>
                  </Link>
                </div>

                <h3 className="mb-4">My Profile</h3>
                <div className="text-center mb-4">
                  <img
                    src={profileData.profileImage || 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'}
                    alt="avatar"
                    className="rounded-circle mx-auto"
                    style={{ width: '150px' }}
                  />
                </div>
                <MDBRow className="mb-4">
                  <MDBCol sm="3">Full Name:</MDBCol>
                  <MDBCol sm="9">{profileData.fullName}</MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol sm="3">Email:</MDBCol>
                  <MDBCol sm="9">{profileData.email}</MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol sm="3">Phone:</MDBCol>
                  <MDBCol sm="9">{profileData.phone}</MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol sm="3">Address:</MDBCol>
                  <MDBCol sm="9">{profileData.address}</MDBCol>
                </MDBRow>

                {/* Download History */}
                <div className="mb-4">
                  <h4>Download History</h4>
                  {downloadHistory.length > 0 ? (
                    <ul>
                      {downloadHistory.map((game, index) => (
                        <li key={index} className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            {/* Displaying the profile image as the game's image */}
                            <img
                              src={profileData.profileImage || 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'}
                              alt={game.name}
                              className="me-3"
                              style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                            />
                            <span>{game.name} - {new Date(game.downloadDate).toLocaleString()}</span>
                          </div>
                          <MDBBtn
                            color="danger"
                            size="sm"
                            onClick={() => deleteHistoryItem(index)}
                          >
                            Delete
                          </MDBBtn>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No downloads yet.</p>
                  )}
                </div>

                {/* Favorite Games */}
                {/* Display favorite games if needed */}

                {/* Edit Button */}
                <div className="d-flex justify-content-end">
                  <Link to="/profile/edit">
                    <MDBBtn>Edit Profile</MDBBtn>
                  </Link>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default Profile;
