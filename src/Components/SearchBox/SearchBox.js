import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa2 ba bw3 br3 b--light-yellow bg-washed-yellow"
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
