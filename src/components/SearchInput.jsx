import React from "react";

const SearchInput = ({ filterData }) => {
  return (
    <div className="search-input">
      <input onChange={filterData} placeholder="Search Products" type="text" />
    </div>
  );
};

export default SearchInput;
