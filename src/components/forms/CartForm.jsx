import React from "react";

const CartForm = ({ onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User
        </label>
        <input
          onChange={onChange}
          type="text"
          className="form-control"
          id="userId"
          name="userId"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="products" className="form-label">
          Products
        </label>
        <input
          onChange={onChange}
          type="text"
          className="form-control"
          id="products"
          name="products"
        />
      </div>

      <button type="submit" className="btn btn-secondary submit--button">
        Submit
      </button>
    </form>
  );
};

export default CartForm;
