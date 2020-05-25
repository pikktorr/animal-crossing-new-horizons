import React from "react";

const SearchBox = ({ searchChange }) => {
  console.log("SearchBox");
  return (
    <div className="search-div pa2">
      <input
        className="pa2 ba bw3 br3 b--light-yellow bg-washed-yellow w5"
        type="search"
        name=""
        id=""
        placeholder="search villagers"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
