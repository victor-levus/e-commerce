import _ from "lodash";
import { useContext, useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import Cards from "../components/Cards";
import { ProductContext } from "../context/ProductContext";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Loading from "../components/Loading";
import SimpleCard from "../components/SimpleCard";

const HomePage = () => {
  const { productData: data, categories } = useContext(ProductContext);
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

  const filterByCollection = (e) => {
    const filterByCategory = _.filter(data, function (o) {
      return o.category === e.target.innerHTML.toLowerCase();
    });

    setProductData(filterByCategory);
    console.log(filterByCategory);
  };

  if (data.length === 0) return <Loading />;

  return (
    <>
      <div className="upper-page">
        <NavBar
          categories={categories}
          onClick={(c) => filterByCollection(c)}
        />
        {categories.length === 0 ? (
          <Loading />
        ) : (
          <div className="category--list">
            {categories.map((o) => (
              // <h1>ada</h1>
              <SimpleCard text={o} key={o} />
            ))}
          </div>
        )}
        <div className="homepage pt-5">
          <SearchInput onChange={filterData} />
          {data.length === 0 ? (
            <Loading />
          ) : (
            <>
              <Cards productData={productData} />
            </>
          )}
        </div>
      </div>
      <div className="footer--cover">
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
