import React from 'react';
import { PackageComponentProps } from '../types/types.ts'; 
import { Link } from 'react-router-dom';

const PackageCard: React.FC<PackageComponentProps> = ({data, onDelete}) => {

  const percentageLeft = (data.numberOfSessionsLeft / data.numberOfSessionsTotal) * 100;

  const warningStyle = {
    color: percentageLeft > 50 ? 'red' : percentageLeft < 20 ? 'green' : 'inherit' 
  };

  const dueDate = new Date(data.expiryDate);
  const currentDate = new Date();
  const timeDifference = dueDate.getTime() - currentDate.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

  const warningStyleDueDate = {
    color: daysDifference < 30 ? 'black' : 'inherit' 
  };

  const expiryText = daysDifference < 0 ? 'Package has expired' : daysDifference < 30 ? 'Package is expiring in less than 30 days' : '';

  return (
    <div className="container mt-4">
      <div className="card rounded-5 border border-light" style={{ width: '400px' }}>
        <div className="card-body">
          <h5 className="card-title">{data.packageName}</h5>
          <p className="card-text">Sessions Left: <span style={warningStyle}>{data.numberOfSessionsLeft}/{data.numberOfSessionsTotal}</span></p>
          <p className="card-text">Due: <span style={warningStyleDueDate}>{data.expiryDate}</span></p>
          <p className="card-text">Type: {data.packageType}</p>
          <p className="card-text" style={{ color: 'red', fontWeight: 'bold' }}>{expiryText}</p>
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
