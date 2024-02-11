import React, { useState } from 'react';

const EditProfileForm: React.FC = () => {
  // State for the form fields
  const [name, setName] = useState('Alvart Ainstain');
  const [email, setEmail] = useState('alvart.ainstain@gmail.com');

  // Handlers for the form fields
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  // Handlers for form submission and user deletion
  const handleEditUser = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit your form data
    console.log('Edit User:', { name, email });
  };

  const handleDeleteUser = () => {
    // Delete user logic
    console.log('Delete User');
  };

  return (
    <div className="card text-center">
      <div className="card-body">
        <h2 className="title">Edit Profile</h2>
        <div className="profile-picture-container mb-3">
          <img src="path_to_profile_picture.jpg" alt="Profile" className="rounded-circle" />
          <i className="bi bi-camera"></i>
        </div>
        <h3 className="mb-3 username">{name}</h3>
        <form onSubmit={handleEditUser}>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">Name</label>
            <input type="text" className="form-control" id="userName" value={name} onChange={handleNameChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="userEmail" className="form-label">Email</label>
            <input type="email" className="form-control" id="userEmail" value={email} onChange={handleEmailChange} />
          </div>
          <div className="d-grid gap-2 mb-3">
            <button type="submit" className="btn btn-primary">Edit User</button>
            <button type="button" className="btn btn-danger" onClick={handleDeleteUser}>Delete User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileForm;
