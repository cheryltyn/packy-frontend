import React, { useState, useEffect } from 'react';
import {getAll} from '../api/package.ts';
import PackageCard from './PackageCard.tsx';
import { PackageData } from '../types/types.ts'; 

// interface Package {
//   // Define the type for your package object
//   // For example:
//   id: number;
//   name: string;
//   // Add other properties as needed
// }

const PackagesList: React.FC = () => {
  const [packages, setPackages] = useState<PackageData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAll(); 
        setPackages(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []); 


  return (
    <div className="container mt-5 d-flex flex-column align-items-center min-vh-100">
      <h1 className='title'>My Packages</h1>
      <div className="package-list">
        {packages.map((packageData) => (
          <PackageCard data={packageData} />
        ))}
      </div>
    </div>
  );
};

export default PackagesList;
