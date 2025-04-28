import React from "react";

const Card = ({ title, icon, name }) => {
  return (
    <div className="col-lg-6">
      <div className="media align-items-start">
        <span className="p-3 border border-primary-light rounded-circle me-3">
          {icon}
        </span>
        <div className="media-body">
          <span className="d-block text-black font-w600 mb-1">{title}</span>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
