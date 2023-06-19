import React from "react";

const SimpleCard = ({ text }) => {
  return (
    <a href={`/products/categories/${text}`}>
      <div
        className="card p-2"
        style={{
          width: "18rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          textAlign: "center",
        }}
      >
        {/* <img
          style={{ width: "40px", objectFit: "contain" }}
          src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
          className="card-img-top"
          alt="..."
        /> */}
        <div className="card-body">
          <p className="card-text">{text.toUpperCase()}</p>
        </div>
      </div>
    </a>
  );
};

export default SimpleCard;
