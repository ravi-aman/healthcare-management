import React from "react";

const Input = ({ name, type, handleChange }) => {
  return (
    <div className="col-xl-6">
      <div className="form-group">
        <label className="col-form-label">{name}:</label>
        <input
          size={16}
          type={type}
          placeholder={name}
          className="form-control"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Input;
