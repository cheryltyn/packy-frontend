import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createUser} from '../api/user'
import { SignupData } from '../types/types.ts'; 
import { Link, useNavigate } from 'react-router-dom';

const SignUpForm: React.FC = () => {

  const navigate = useNavigate() 

  const [signupData, setSignupData] = useState<SignupData>({
    name: '',
    email: '',
    password: '',
  });


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const success = await createUser(signupData);
        console.log(signupData);
        if (success) {
            // Redirect to the login page after successful signup
            navigate('/login');
        } else {
        }
    } catch (error) {
        // Handle error if createUser fails
        console.error('Error signing up:', error);
    }
};

  // Update form data as user types
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
        <Link to="/login" className="redirect-link">
            <span className="link-text">Already a user? Log in here</span>
        </Link>
          <h2 className="text-center mb-4 title" > Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={signupData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={signupData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={signupData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary btn-lg">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
