import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, title, img, address } = service;
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <img style={{minHeight:'250px'}} className="img-fluid card-img" src={img} alt={title} />
            <div className="card-body">
              <h2>{title}</h2>
              <p>{address.substring(0, 100)}</p>
            </div>
            <div className="card-footer">
                <Link className="btn btn-outline-success" to={`/details/${id}`}>Details</Link>
            </div>
           </div>
        </div>
    );
};

export default Service;