import React, { useEffect, useState } from "react";
import HomePage from "./pages/Home";
import "./style.scss";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import { ProductContext } from "./context/ProductContext";
import axios from "axios";
import ProductByCategoryPage from "./pages/ProductByCategoryPage";
import AdminAccountPage from "./pages/AdminAccountPage";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [productData, setProductData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const productOptions = {
        method: "GET",
        url: "https://fakestoreapi.com/products",
      };
      const userOptions = {
        method: "GET",
        url: "https://fakestoreapi.com/users",
      };
      const cartOptions = {
        method: "GET",
        url: "https://fakestoreapi.com/carts",
      };

      const productResponse = await axios.request(productOptions);
      setProductData(productResponse.data);

      const userResponse = await axios.request(userOptions);
      setUserData(userResponse.data);

      const cartResponse = await axios.request(cartOptions);
      setCartData(cartResponse.data);

      const allCategories = productResponse.data.reduce(
        (acc, product) => [...acc, product.category],
        []
      );

      const categories = allCategories.reduce(function (a, b) {
        if (a.indexOf(b) < 0) a.push(b);
        return a;
      }, []);

      setCategories(categories);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ProductContext.Provider
        value={{ productData, categories, userData, cartData }}
      >
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductPage />}></Route>
            <Route
              path="/products/categories/:category"
              element={<ProductByCategoryPage />}
            />
            <Route path="/account/user" element={<AdminAccountPage />} />
          </Routes>
        </BrowserRouter>
      </ProductContext.Provider>
    </>
  );
};

export default App;
