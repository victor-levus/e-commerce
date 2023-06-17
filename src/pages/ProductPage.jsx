import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import _ from "lodash";

import { ProductContext } from "../context/ProductContext";
import Card from "../components/Card";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const ProductPage = () => {
  const params = useParams();
  const { data, categories } = useContext(ProductContext);
  const [qtyNumber, setQtyNumber] = useState(1);

  const product = _.filter(data, function (o) {
    return o.id === parseInt(params.id);
  })[0];

  const decreaseQty = () => {
    return setQtyNumber(parseInt(qtyNumber) - 1);
  };

  const increaseQty = () => {
    return setQtyNumber(parseInt(qtyNumber) + 1);
  };

  if (!data) return <h3>Loading...</h3>;

  if (data.length === 0) return null;

  return (
    <>
      <NavBar categories={categories} cl />
      <div className="product-page konfig">
        <div className="page-container">
          <div className="product-detail">
            <div className="image-container">
              <img src={product.image} alt="" />
            </div>
            <div className="text">
              <h3 className="title">{product.title}</h3>
              <p className="category">Category: {product.category}</p>
              <br />
              <p className="price">
                {" "}
                {` ${(product.price * 450).toLocaleString("en-US", {
                  style: "currency",
                  currency: "NGN",
                })}`}
              </p>

              <div className="qty-selector">
                <p>Quantity:</p>
                <div className="qty-btn">
                  <button
                    disabled={qtyNumber <= 1}
                    onClick={decreaseQty}
                    className="qty-btn- borderL"
                  >
                    -
                  </button>
                  <div className="qty-figure borderL">{qtyNumber}</div>
                  <button
                    disabled={qtyNumber >= 20}
                    onClick={increaseQty}
                    className="qty-btn+ borderL"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="btn-container">
                <button className="btn btn1">Add to Cart</button>
                <button className="btn btn2">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="purchase-detail">
            <h4 className="sub-header">Description</h4>
            <p className="description">{product.description}</p>
          </div>

          <div className="other-products p-bg">
            <h3 className="sub-header">Similar Products</h3>
            <div className="card--container">
              {_.filter(data, function (o) {
                return o.category === product.category;
              }).map((d) => (
                <div key={d.id} className="card--content">
                  <Card d={d} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer--cover">
        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
