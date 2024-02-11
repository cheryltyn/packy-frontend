import React from 'react';

const ProfileCard: React.FC = () => {
  // Replace with actual user data
  const userData = {
    name: "Alvart Ainstain",
    email: "alvart.ainstain@gmail.com",
    ongoing: 5,
    totalComplete: 25,
    // Add the path to the user's profile picture
    profilePictureUrl: 'path_to_profile_picture.jpg'
  };

  return (
    <div className="container mt-5 d-flex flex-column align-items-center min-vh-100">
      <div className="card-body">
        <h1 className="title">My Profile</h1>
        <img src={userData.profilePictureUrl} alt="Profile" className="rounded-circle" style={{ width: '100px', height: '100px' }} />
        <h3 className="mt-3 username">{userData.name}</h3>
        <div className="d-flex justify-content-around my-3">
          <div>
            <i className="bi bi-clock large-icon"></i>
            <div>{userData.ongoing}</div>
            <div>On Going</div>
          </div>
          <div>
            <i className="bi bi-check-circle large-icon"></i>
            <div>{userData.totalComplete}</div>
            <div>Total Complete</div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">Name</label>
          <input type="text" className="form-control" id="userName" value={userData.name} readOnly />
        </div>
        <div className="mb-3">
          <label htmlFor="userEmail" className="form-label">Email</label>
          <input type="email" className="form-control" id="userEmail" value={userData.email} readOnly />
        </div>
        <div className="d-grid">
            <button type="submit" className="btn btn-primary">Edit User</button>
          </div>
      </div>
    </div>
  );
};

export default ProfileCard;
