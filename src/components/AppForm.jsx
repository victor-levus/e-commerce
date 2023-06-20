import React from "react";

const AppForm = ({ label, name, type, onChange }) => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input
          onChange={onChange}
          type={type}
          className="form-control"
          id={name}
          name={name}
        />
      </div>

      <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {name}
        </label>
        <input
          onChange={onChange}
          type={type}
          className="form-control"
          id={name}
          name={name}
        />
      </div>

      <button type="submit" className="btn btn-secondary">
        Submit
      </button>
    </form>
  );
};

export default AppForm;
