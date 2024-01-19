import { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../img/svg/search.svg";
import SearchDropdown from "./SearchDropdown";
import { LocationFetchDataMini, fetchCities } from "../api/locationsApi";
import { useAppDispatch } from "../store/useAppDispatch";
import { fetchLocationById } from "../store/Location/Location.slice";

const SearchBar = () => {
  const [searchInput, setSearchBarInput] = useState("");
  const [searchItems, setSearchItems] = useState<LocationFetchDataMini[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const getSearchItems = async () => {
      setSearchItems(await fetchCities(searchInput));
    };

    if (searchInput) {
      getSearchItems();
    } else {
      setSearchItems([]);
    }
  }, [searchInput]);

  const fetchLocation = (id: number) => {
    setSearchBarInput("");
    setSearchItems([]);
    dispatch(fetchLocationById({ id }));
  };

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
      <SearchDropdown items={searchItems} onItemClick={fetchLocation} />
    </div>
  );
};

export default SearchBar;
