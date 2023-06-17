import React from "react";

const SearchInput = ({ onChange }) => {
  return (
    <div className="search-input">
      <input onChange={onChange} placeholder="Search Products" type="text" />
    </div>
  );
};

export default SearchInput;
