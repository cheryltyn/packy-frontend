import React, { useState } from 'react';
import {createOne} from '../api/package.ts';
import { useContext } from 'react'
import { UserContext } from '../App'; 
import { createdData } from '../types/types.ts'; 
import { useNavigate } from 'react-router-dom'; 

const AddPackageForm: React.FC = () => {
  const user = useContext(UserContext);

  const [formData, setFormData] = useState<createdData>({
    packageName: '',
    expiryDate: '',
    numberOfSessionsLeft: '', 
    numberOfSessionsTotal: '',
    packageType: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target; 
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handlePackageTypeChange = (type: string) => {
    setFormData(prevState => ({
      ...prevState,
      packageType: type
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(formData); 
      await createOne(formData, user._id); 
      navigate('/packages'); 
    } catch (error) {
      console.error('Error creating package:', error);
      // Handle error if needed
    }
  };
  return (
    <div className="container mt-5 d-flex flex-column align-items-center min-vh-100">
      <div className="w-100" style={{ maxWidth: '500px' }}> 
        <h1 className="title text-center mb-4">Add Package</h1>
        <form onSubmit={handleSubmit} className="w-100">
          <div className="mb-3">
            <label htmlFor="packageName" className="form-label">Name</label>
            <input type="text" className="form-control" id="packageName" value={formData.packageName} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
            <input type="date" className="form-control" id="expiryDate" value={formData.expiryDate} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="numberOfSessionsLeft" className="form-label">Number of Sessions Left</label>
            <input type="number" className="form-control" id="numberOfSessionsLeft" value={formData.numberOfSessionsLeft} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="numberOfSessionsTotal" className="form-label">Number of Sessions Total</label>
            <input type="number" className="form-control" id="numberOfSessionsTotal" value={formData.numberOfSessionsTotal} onChange={handleChange} />
          </div>
          <div className="mb-4" role="group" aria-label="Package type">
            <label htmlFor="packageType" className="form-label d-block">Type </label>
            <div className="d-flex ">
              <button type="button" className={`btn ${formData.packageType === 'Fitness' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handlePackageTypeChange('Fitness')}>Fitness</button>
              <button type="button" className={`btn ${formData.packageType === 'Beauty' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handlePackageTypeChange('Beauty')}>Beauty</button>
              <button type="button" className={`btn ${formData.packageType === 'Others' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handlePackageTypeChange('Others')}>Others</button>
            </div>
            </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
  
};

export default AddPackageForm;
