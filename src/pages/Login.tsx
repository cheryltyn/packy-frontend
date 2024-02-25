import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { handleLogin } from '../api/user.ts'
import { LoginData } from '../types/types.ts'; 
import { Link, useNavigate } from 'react-router-dom';


const SignUpForm: React.FC = () => {
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState<LoginData>({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await handleLogin(loginForm);
      if (response.message === 'Login successful') {
        navigate('/package');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  // Update form data as user types
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
    console.log(loginForm)
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
        <Link to="/signup" className="redirect-link">
            <span className="link-text">Sign up here</span>
        </Link>
          <h2 className="text-center mb-4 title" > Login </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={loginForm.email}
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
                value={loginForm.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary btn-lg">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
