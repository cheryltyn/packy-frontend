import React from 'react';
import { useEffect, useState } from 'react'
import { editUser, deleteUser, fetchUser } from '../api/user';
import { userData } from '../types/types.ts'; 
import { useContext } from 'react'
import { UserContext } from '../App'; 
import { updateToken } from '../utils/user'

const ProfileCard: React.FC = ({id}) => {

  const user = useContext(UserContext);
  
  const [userData, setUserData] = useState<userData>({
    name: "",
    email: "",
    password: "",
  });

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const user = await fetchUser(id);
  //       console.log(user) 
  //       setUserData(user); // Set user data in state
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   };

  //   fetchUserData();
  // }, [id]); 

  useEffect(() => {
    if (user) {
      setUserData({
        name: user.name,
        email: user.email,
        password: user.password,
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevState: userData)  => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }; 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editUser(userData)
    // updateToken(userData)
  };

  const onDelete = (e: React.FormEvent) => {
    e.preventDefault();
    deleteUser(userData.email)
  };

  return (
<div className="container mt-5 d-flex flex-column align-items-center min-vh-100">
  <div className="card-body">
    <h1 className="title">My Profile</h1>
    {/* <h3 className="mt-3 username">{userData.name}</h3> */}
    {/* <div className="d-flex justify-content-around my-3">
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
    </div> */}
    <form onSubmit={handleSubmit}> 
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" value={userData.name} onChange={handleChange} disabled/>
      </div>
      <div className="mb-3">
        <label htmlFor="userEmail" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" value={userData.email} onChange={handleChange} disabled />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" value={userData.password} onChange={handleChange} />
      </div>
      <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">Edit User</button> 
          <button type="button" className="btn btn-primary" onClick={onDelete} >Delete User</button> 
      </div>
    </form>
  </div>
</div>

  );
};

export default ProfileCard;
