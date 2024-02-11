import React, { useState } from 'react';

const AddPackageForm: React.FC = () => {
  // State for the form fields
  const [packageName, setPackageName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [numberOfSessions, setNumberOfSessions] = useState('');
  const [packageType, setPackageType] = useState('');

  // Handlers for the form fields
  const handlePackageNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setPackageName(e.target.value);
  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => setExpiryDate(e.target.value);
  const handleNumberOfSessionsChange = (e: React.ChangeEvent<HTMLInputElement>) => setNumberOfSessions(e.target.value);
  const handlePackageTypeChange = (type: string) => setPackageType(type);

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit your form data
    console.log({ packageName, expiryDate, numberOfSessions, packageType });
  };

  return (
    <div className="container mt-5 d-flex flex-column align-items-center min-vh-100">
      <div className="w-100" style={{ maxWidth: '500px' }}> {/* Adjust max-width as needed */}
        <h1 className="title text-center mb-4">Add Package</h1>
        <form onSubmit={handleSubmit} className="w-100">
          <div className="mb-3">
            <label htmlFor="packageName" className="form-label">Name</label>
            <input type="text" className="form-control" id="packageName" value={packageName} onChange={handlePackageNameChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
            <input type="date" className="form-control" id="expiryDate" value={expiryDate} onChange={handleExpiryDateChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="numberOfSessions" className="form-label">Number of Sessions</label>
            <input type="number" className="form-control" id="numberOfSessions" value={numberOfSessions} onChange={handleNumberOfSessionsChange} />
          </div>
          <div className="mb-4" role="group" aria-label="Package type">
            <label htmlFor="packageType" className="form-label d-block">Type </label>
            <div className="d-flex ">
                <button type="button" className={`btn ${packageType === 'Fitness' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handlePackageTypeChange('Fitness')}>Fitness</button>
                <button type="button" className={`btn ${packageType === 'Beauty' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handlePackageTypeChange('Beauty')}>Beauty</button>
                <button type="button" className={`btn ${packageType === 'Others' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handlePackageTypeChange('Others')}>Others</button>
            </div>
            </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
  
};

export default AddPackageForm;
