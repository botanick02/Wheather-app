import { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../img/svg/search.svg";
import SearchDropdown from "./SearchDropdown";
import { LocationFetchDataMini, fetchCities } from "../api/locationsApi";
import { useAppSelector } from "../store/useAppDispatch";



const SearchBar = () => {
  const [searchInput, setSearchBarInput] = useState("");
  const [searchItems, setSearchItems] = useState<LocationFetchDataMini[]>([]);
  const locationId = useAppSelector(state => state.Location.id);

  useEffect(() => {
    const getSearchItems = async () => {
      setSearchItems(await fetchCities(searchInput))
    }

    if (searchInput){
      getSearchItems();
    }
  }, [searchInput])

  useEffect(()=>{
    setSearchBarInput("");
    setSearchItems([]);
  }, [locationId])

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
