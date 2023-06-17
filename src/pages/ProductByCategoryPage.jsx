import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { ProductContext } from "../context/ProductContext";
import SearchInput from "../components/SearchInput";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const ProductByCategoryPage = () => {
  const params = useParams();
  const { data, categories } = useContext(ProductContext);
  const [categoryData, setCategoryData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    filterByCollection();
  }, [data]);

  const filterByCollection = (e) => {
    if (data.length === 0) return <h2>No Product available</h2>;

    const filterByCategory = _.filter(data, function (o) {
      return o.category === params.category.toLowerCase();
    });

    if (filterByCategory.length === 0)
      return <h2>No Product available in the selected category</h2>;

    setProductData(filterByCategory);
    setCategoryData(filterByCategory);
  };

  const filterData = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    if (categoryData.length === 0) return <h2>No product in the selected </h2>;

    if (!value) return setProductData(categoryData);

    const newData2 = _.filter(categoryData, function (o) {
      return o.title.toLowerCase().includes(value.toLowerCase());
    });

    setProductData(newData2);

    return;
  };

  //   console.log("Params");
  //   console.log(params.category);
  //   console.log("--------------------------");
  //   console.log("All Data");
  //   console.log(data);
  //   console.log("---------------------------");
  //   console.log("Data by Category");
  //   console.log(searchInput);
  //   console.log(productData);

  if (productData.length === 0) return <Loading />;

  return (
    <>
      <NavBar categories={categories} />

      <div className="homepage">
        <SearchInput onChange={filterData} />
        <h3 className="category-title my-4">{params.category} Products</h3>
        {productData.length === 0 ? (
          <Loading />
        ) : (
          <>
            <Cards productData={productData} />
          </>
        )}
      </div>
      <div className="footer--cover">
        <Footer />
      </div>
    </>
  );
};

export default ProductByCategoryPage;
