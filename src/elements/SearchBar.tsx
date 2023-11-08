import React from "react";
import { ReactComponent as SearchIcon } from "../img/svg/search.svg";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" className="search-bar__input" />
      <div className="search-bar__submit">
        <SearchIcon/>
      </div>
    </div>
  );
};

export default SearchBar;
