import React from "react";
import Card from "./Card";

const Cards = ({ productData }) => {
  return (
    <div className="cards-container">
      {productData.map((d) => (
        <Card key={d.id} d={d} />
      ))}
    </div>
  );
};

export default Cards;
