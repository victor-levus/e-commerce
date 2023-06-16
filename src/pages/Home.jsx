import _ from "lodash";
import { useContext, useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import Cards from "../components/Cards";
import { ProductContext } from "../context/ProductContext";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const HomePage = () => {
  const { data } = useContext(ProductContext);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    setProductData(data);
  }, [data]);

  const filterData = (e) => {
    const searchInput = e.target.value;

    if (productData.length === 0 && data.length === 0)
      return <h4>No products</h4>;

    if (productData.length === 0 && !searchInput) return setProductData(data);

    if (!searchInput) return setProductData(data);

    const newData = _.filter(data, function (o) {
      return o.title.toLowerCase().includes(searchInput.toLowerCase());
    });

    setProductData(newData);
  };

  if (data.length === 0) return <h2>Loading...</h2>;
  return (
    <>
      <NavBar />
      <div className="homepage">
        <SearchInput filterData={filterData} />
        <Cards productData={productData} />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
