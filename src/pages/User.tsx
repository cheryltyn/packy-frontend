import React from 'react';
import { getUser } from "../utils/user";
import { useEffect, useState } from 'react'
import { editUser } from '../api/user';

const ProfileCard: React.FC = () => {

  const [userData, setUserData] = useState({
    name: "",
    email: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  };

  useEffect(() => {
    const user = getUser()
    setUserData({
      name: user.name, 
      email: user.email, 
    })
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editUser(userData)
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
    <form onSubmit={handleSubmit}> {/* Add form element here */}
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" value={userData.name} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="userEmail" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" value={userData.email} onChange={handleChange}  />
      </div>
      <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">Edit User</button> 
          <button type="button" className="btn btn-primary">Logout</button> {/* Change type to button */}
      </div>
    </form>
  </div>
</div>

  );
};

export default ProfileCard;
