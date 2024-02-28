import React from 'react';
import { PackageComponentProps } from '../types/types.ts'; 
import { Link } from 'react-router-dom';

const PackageCard: React.FC<PackageComponentProps> = ({data, onDelete}) => {


  return (
    <div className="container mt-4">
      <div className="card rounded-5 border border-light" style={{ width: '400px' }}>
        <div className="card-body">
          <h5 className="card-title">{data.packageName}</h5>
          <p className="card-text">Sessions: {data.numberOfSessionsLeft}/{data.numberOfSessionsTotal}</p>
          <p className="card-text">Due: {data.expiryDate}</p>
          <p className="card-text">Type: {data.packageType}</p>
          <div className="mt-3">
            <div className="d-inline">
              <Link to={`/editpackage/${data._id}`}>
                <button className="btn btn-secondary ml-2">Edit</button>
              </Link>
            </div>
            <div className="d-inline" style={{ marginLeft: '10px' }}>
                <button className="btn btn-secondary ml-2" onClick={() => onDelete(data._id)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
