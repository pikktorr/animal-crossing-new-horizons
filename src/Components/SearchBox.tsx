import React, { ChangeEvent } from "react";

type ISearchBoxProps = {
  id: string;
  placeholder?: string;
  searchField: string;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ id, placeholder, handleSearchChange, searchField }: ISearchBoxProps) => {
  return (
    <div className="search-div pa2">
      <input
        id={id}
        className="pa2 ba bw3 br3 b--light-yellow bg-washed-yellow w5"
        type="search"
        placeholder={placeholder}
        onChange={handleSearchChange}
        value={searchField}
      />
    </div>
  );
};

export default SearchBox;
