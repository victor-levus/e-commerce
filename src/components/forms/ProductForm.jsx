import React from "react";

const ProductForm = ({ onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Product Name
        </label>
        <input
          onChange={onChange}
          type="text"
          className="form-control"
          id="title"
          name="title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          onChange={onChange}
          type="text"
          className="form-control"
          id="dwscription"
          name="dwscription"
        />
      </div>

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

      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          onChange={onChange}
          type="number"
          className="form-control"
          id="price"
          name="price"
        />
      </div>

      <button type="submit" className="btn btn-secondary submit--button">
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
