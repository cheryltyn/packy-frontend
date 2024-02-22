import React, { useState } from 'react';
import { PackageComponentProps } from '../types/types.ts'; 
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const PackageCard: React.FC<PackageComponentProps> = ({data}) => {

    const [showModal, setShowModal] = useState(false);
  
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleDelete = () => {
      // Add delete logic here
      // This function will be called when the user confirms deletion
      // You can close the modal after deleting the item
      handleCloseModal();
    };
  
    

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
            <div className="d-inline">
                <button className="btn btn-secondary ml-2">Delete</button>
            </div>
            <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
