import React, { useState, useEffect } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { useNavigate, Link } from 'react-router-dom';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBInput,
  MDBBtn,
} from 'mdb-react-ui-kit';

const ProfileEdit = () => {
  const navigate = useNavigate();
  
  // State to hold the profile data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  // Fetch existing profile data from localStorage when component mounts
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('profileData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  // Handle input change and update form data state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Save changes to localStorage
  const handleSaveChanges = () => {
    localStorage.setItem('profileData', JSON.stringify(formData)); // Save updated data
    console.log('Profile changes saved.', formData);
    navigate('/profile'); // Navigate back to profile page
  };

  return (
    <section className="profile-edit-section">
      <MDBContainer className="py-5">
        {/* Breadcrumb */}
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <Link to="/" className="breadcrumb-link" style={{ color: "#0c8026" }}>
                  Home
                </Link>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Edit Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        {/* Profile Edit Form */}
        <MDBRow>
          <MDBCol lg="8" className="mx-auto">
            <MDBCard>
              <MDBCardBody>
                <h3 className="mb-4">Edit Profile</h3>
                <form>
                  {/* Full Name */}
                  <MDBRow className="mb-4">
                    <MDBCol sm="3">
                      <label htmlFor="fullName" className="form-label">
                        Full Name
                      </label>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBInput
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                      />
                    </MDBCol>
                  </MDBRow>

                  {/* Email */}
                  <MDBRow className="mb-4">
                    <MDBCol sm="3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBInput
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </MDBCol>
                  </MDBRow>

                  {/* Phone */}
                  <MDBRow className="mb-4">
                    <MDBCol sm="3">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBInput
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </MDBCol>
                  </MDBRow>

                  {/* Address */}
                  <MDBRow className="mb-4">
                    <MDBCol sm="3">
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBInput
                        id="address"
                        name="address"
                        type="text"
                        placeholder="Enter your address"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </MDBCol>
                  </MDBRow>

                  {/* Buttons */}
                  <div className="d-flex justify-content-end">
                    <MDBBtn
                      outline
                      className="me-2"
                      color="danger"
                      onClick={() => navigate('/profile')} // Navigates to Profile page
                    >
                      Cancel
                    </MDBBtn>
                    <MDBBtn onClick={handleSaveChanges}>Save Changes</MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default ProfileEdit;
