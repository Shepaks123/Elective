import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { useNavigate, Link } from 'react-router-dom';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from 'mdb-react-ui-kit';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); 
    navigate('/login'); 
  };

  return (
    <MDBBreadcrumbItem onClick={handleLogout}>
      <a  href=" " style={{ color: '#0c8026' }}>Logout</a>
    </MDBBreadcrumbItem>
  );
};

export default function Profile({ favorites = [] }) {
  return (
    <section style={{ backgroundColor: '#0c8026' }}>
      <MDBContainer className="py-5">
        {/* Breadcrumb and Logout */}
        <MDBRow>
          <MDBCol >
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
              <Link to="/dashboard">
                <a href=" " style={{ color: '#0c8026' }}>Home</a>
                </Link>
              </MDBBreadcrumbItem>
              <Logout />
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
              
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          {/* Left Section - User Info */}
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid
                />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn outline className="ms-1" style={{ color: '#0c8026', borderColor: '#0c8026' }}>
                    Edit Profile
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          {/* Right Section - Profile Details and Favorites */}
          <MDBCol lg="8">
            {/* Profile Details */}
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Johnathan Smith</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">example@example.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      Bay Area, San Francisco, CA
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            {/* Favorite Games */}
            <MDBRow>
              <MDBCard className="mb-4">
                <div style={styles.profileContainer}>
                  <h2 style={styles.header}>My Favorite Games</h2>
                  {favorites && favorites.length === 0 ? (
                    <p style={styles.noFavorites}>
                      You haven't selected any favorite games yet.
                    </p>
                  ) : (
                    <div style={styles.favoritesContainer}>
                      {favorites.map((game) => (
                        <div key={game.title} style={styles.favoriteCard}>
                          <img
                            src={game.image}
                            alt={game.title}
                            style={styles.favoriteImage}
                          />
                          <h3 style={styles.favoriteTitle}>{game.title}</h3>
                          <p style={styles.favoriteGenres}>
                            {game.genres.join(', ')}
                          </p>
                          <p style={styles.favoriteReleaseDate}>
                            Released: {game.releaseDate}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </MDBCard>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

const styles = {
  profileContainer: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    maxWidth: '800px',
    margin: '20px auto',
    textAlign: 'center',
  },
  header: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  noFavorites: {
    fontSize: '18px',
    color: '#777',
  },
  favoritesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  favoriteCard: {
    width: '200px',
    padding: '10px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  favoriteImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  },
  favoriteTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '10px',
  },
  favoriteGenres: {
    fontSize: '14px',
    color: '#555',
    marginTop: '5px',
  },
  favoriteReleaseDate: {
    fontSize: '12px',
    color: '#888',
    marginTop: '5px',
  },
  aLink:{
    color:'#0c8026',
  }
};
