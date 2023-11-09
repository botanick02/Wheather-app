import React from "react";
import { ReactComponent as SearchIcon } from "../img/svg/search.svg";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." className="search-bar__input" />
      <div className="search-bar__submit">
        <SearchIcon/>
      </div>
    </div>
  );
};

export default SearchBar;
