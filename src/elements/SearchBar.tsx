import { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../img/svg/search.svg";
import SearchDropdown from "./SearchDropdown";
import { LocationFetchDataMini, fetchCities } from "../api/locationsApi";



const SearchBar = () => {
  const [searchInput, setSearchBarInput] = useState("");
  const [searchItems, setSearchItems] = useState<LocationFetchDataMini[]>([]);


  useEffect(() => {
    const getSearchItems = async () => {
      setSearchItems(await fetchCities(searchInput))
    }

    if (searchInput){
      getSearchItems();
    }
  }, [searchInput])



  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        className="search-bar__input"
        value={searchInput}
        onChange={(value) => setSearchBarInput(value.target.value)}
      />
      <div className="search-bar__submit">
        <SearchIcon />
      </div>
      <SearchDropdown items={searchItems} />
    </div>
  );
};

export default SearchBar;
