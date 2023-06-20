import React from "react";

const CategoryForm = ({ onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <input
          onChange={onChange}
          type="text"
          className="form-control"
          id="category"
          name="category"
        />
      </div>

      <button type="submit" className="btn btn-secondary submit--button">
        Submit
      </button>
    </form>
  );
};

export default CategoryForm;
