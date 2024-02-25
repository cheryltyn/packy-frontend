import React, { useState, useEffect } from 'react';
import { getAll, deleteOne } from '../api/package.ts';
import PackageCard from './PackageCard.tsx';
import { PackageData } from '../types/types.ts';
import { useContext } from 'react';
import { UserContext } from '../App';

const PackagesList: React.FC = () => {
  const [packages, setPackages] = useState<PackageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState("")
  const user = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAll(user._id);
        setPackages(data || []);
        setLoading(false);
      } catch (error) {
        if (error.message === 'Packages not found for the specified user') {
          // Handle "Packages not found" error
          setPackages([]);
        } else {
          console.error('Error fetching data:', error);
          setError('Failed to fetch packages. Please try again later.');
        }
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  
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
      {loading ? (
        <div>Loading...</div>
      ) : packages.length === 0 ? (
        <div>No packages found.</div>
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
