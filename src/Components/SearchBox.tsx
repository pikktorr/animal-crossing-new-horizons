import React, { ChangeEvent } from "react";

type ISearchBoxProps = {
  id: string;
  placeholder?: string;
  searchField: string;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ id, placeholder, handleSearchChange, searchField }: ISearchBoxProps) => {
  return (
    <div className="bg-yellow-200 p-2 w-56 text-center rounded-xl m-auto">
      <input
        id={id}
        className="w-52 p-2 rounded-md"
        type="search"
        placeholder={placeholder}
        onChange={handleSearchChange}
        value={searchField}
      />
    </div>
  );
};

export default SearchBox;
