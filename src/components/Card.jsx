import React from "react";
import { Link } from "react-router-dom";

const Card = ({ d }) => {
  return (
    <Link to={`/products/${d.id}`} className="card--box">
      <div className="image">
        <img src={d.image} alt="" />
      </div>
      <p className="title">{d.title.slice(0, 50)}</p>
      <p className="price">
        {" "}
        {(d.price * 450).toLocaleString("en-US", {
          style: "currency",
          currency: "NGN",
        })}
      </p>
    </Link>
  );
};

export default Card;
