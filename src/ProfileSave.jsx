import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from 'mdb-react-ui-kit';

const ProfileSave = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { fullName, email, phone, address, profileImage } = location.state || {};

  const navigateHome = () => {
    navigate('/'); // Navigate to home
  };

  return (
    <section className="profile-save-section">
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="8" className="mx-auto">
            <MDBCard>
              <MDBCardBody>
                <h3 className="mb-4">Profile Saved</h3>
                <div className="text-center mb-4">
                  <img
                    src={profileImage || 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'}
                    alt="avatar"
                    className="rounded-circle mx-auto"
                    style={{ width: '150px' }}
                  />
                </div>
                <MDBRow className="mb-4">
                  <MDBCol sm="3">Full Name:</MDBCol>
                  <MDBCol sm="9">{fullName}</MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol sm="3">Email:</MDBCol>
                  <MDBCol sm="9">{email}</MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol sm="3">Phone:</MDBCol>
                  <MDBCol sm="9">{phone}</MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol sm="3">Address:</MDBCol>
                  <MDBCol sm="9">{address}</MDBCol>
                </MDBRow>

                <div className="d-flex justify-content-end">
                  <MDBBtn onClick={navigateHome} color="primary">
                    Go to Home
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default ProfileSave;
