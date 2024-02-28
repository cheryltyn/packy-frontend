import React, { useState, useEffect } from 'react';
import { getAll, deleteOne } from '../api/package.ts';
import PackageCard from './PackageCard.tsx';
import { PackageData } from '../types/types.ts';
import { useContext } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';

const PackagesList: React.FC = () => {
  const [packages, setPackages] = useState<PackageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const user = useContext(UserContext);
  const [fronterror, setFrontError] = useState<string>("")
  const [activeFilter, setActiveFilter] = useState<string>('All'); 

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {

        if (!user) {
          navigate('/login'); 
          return;
        }
        
        const data = await getAll(user._id, activeFilter);
        setPackages(data || []);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error && error.message === 'Packages not found for the specified user') {
          setPackages([]);
        } else {
          console.error('Error fetching data:', error);
          setFrontError('Failed to fetch packages. Please try again later.');
        }
        setLoading(false);
      }
    };
  
    fetchData();
  }, [activeFilter]);
  
  console.log(packages)

  const handleDelete = async (packageId: string) => {
    try {
      await deleteOne(packageId);
      setPackages(prevPackages => prevPackages.filter(pkg => pkg._id !== packageId));
    } catch (error) {
      console.error('Error deleting package:', error);
      // Optionally handle errors here, such as displaying an error message to the user
    }
  };

  return (
    <div className="container mt-5 d-flex flex-column align-items-center min-vh-100">
      <h1 className='title'>My Packages</h1>

      <div className="mb-3">
        <button className={`btn ${activeFilter === 'All' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setActiveFilter('All')}>All</button>
        <span className="mx-2"></span>
        <button className={`btn ${activeFilter === 'Fitness' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setActiveFilter('Fitness')}>Fitness</button>
        <span className="mx-2"></span> 
        <button className={`btn ${activeFilter === 'Beauty' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setActiveFilter('Beauty')}>Beauty</button>
      </div>

      
      {loading ? (
        <div>Loading...</div>
      ) : packages.length === 0 ? (
        <div>No packages found. {fronterror} </div>
      ) : (
        <div className="package-list">
          {packages.map((packageData) => (
            <PackageCard
              key={packageData._id}
              data={packageData}
              onDelete={(packageId) => handleDelete(packageId)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PackagesList;
