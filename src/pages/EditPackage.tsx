import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {editOne, fetchOne} from '../api/package.ts';
import { useNavigate } from 'react-router-dom'; 

const EditPackage: React.FC = () => {
  const { packageId } = useParams<{ packageId: string }>();
  const navigate = useNavigate();
  const [error, setError] = useState<string | undefined>(undefined);

  function formatDate(date: Date) {
    date = new Date(date);
    let year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
  
    month = month.toString().length < 2 ? "0" + month : month;
    day = day.toString().length < 2 ? "0" + day : day;
    return `${year}-${month}-${day}`;
  }

  const [formData, setFormData] = useState({
    packageName: '',
    expiryDate: '',
    numberOfSessionsLeft: '', 
    numberOfSessionsTotal: '',
    packageType: ''
  });

  useEffect(() => {
    if (!packageId) {
      // Handle the case where packageId is undefined
      setError('Package ID is missing.');
      return;
    }

    const fetchData = async () => {
      try {
        const data = await fetchOne(packageId);
        setFormData({
          packageName: data.packageName,
          expiryDate: formatDate(data.expiryDate),
          numberOfSessionsLeft: data.numberOfSessionsLeft.toString(),
          numberOfSessionsTotal: data.numberOfSessionsTotal.toString(),
          packageType: data.packageType
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data.');
      }
    };

    fetchData();
  }, [packageId]);

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

    const hasNullValues = Object.values(formData).some(value => value === null || value === '');

    if (hasNullValues) {
      setError('All fields are required.');
      return;
    }
    if (parseInt(formData.numberOfSessionsTotal) <= parseInt(formData.numberOfSessionsLeft)) {
      setError('Number of sessions total must be larger than number of sessions left.');
      return;
    }
    try {
      console.log(formData); 
      await editOne(packageId!, formData);
      navigate('/package'); 
    } catch (error) {
      console.error('Error editing package:', error);

    }
  };


  return (
    <div className="container mt-5 d-flex flex-column align-items-center min-vh-100">
      <div className="w-100" style={{ maxWidth: '500px' }}> 
        <h1 className="title text-center mb-4">Edit Package</h1>
         {error && <div className="text-danger mb-3">{error}</div>}
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

export default EditPackage;
