import React, { useEffect, useState } from "react";
import HomePage from "./pages/Home";
import "./style.scss";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import { ProductContext } from "./context/ProductContext";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ProductContext.Provider value={{ data, setData }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductPage />}></Route>
            <Route path="/">{/* <Home /> */}</Route>
          </Routes>
        </BrowserRouter>
      </ProductContext.Provider>
    </>
  );
};

export default App;
