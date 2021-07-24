import React from "react";

const FormInput = ({ label, type, placeholder, inputId, onChangeInp }) => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor={inputId} className="form-label">
          {label}
        </label>
        <input
          placeholder={placeholder}
          type={type}
          className="form-control"
          id={inputId}
          onChange={(e) => onChangeInp(e.target)}
        />
      </div>
    </div>
  );
};

export default FormInput;
