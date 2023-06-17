import React, { useEffect, useState } from "react";
import HomePage from "./pages/Home";
import "./style.scss";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import { ProductContext } from "./context/ProductContext";
import axios from "axios";
import ProductByCategoryPage from "./pages/ProductByCategoryPage";

const App = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const options = {
        method: "GET",
        url: "https://fakestoreapi.com/products",
      };

      const response = await axios.request(options);
      setData(response.data);

      const allCategories = response.data.reduce(
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
      <ProductContext.Provider value={{ data, categories, setData }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductPage />}></Route>
            <Route
              path="/products/categories/:category"
              element={<ProductByCategoryPage />}
            />
          </Routes>
        </BrowserRouter>
      </ProductContext.Provider>
    </>
  );
};

export default App;
