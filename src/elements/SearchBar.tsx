import { ReactComponent as SearchIcon } from "../img/svg/search.svg";
import SearchDropdown from "./SearchDropdown";

const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
];

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        className="search-bar__input"
      />
      <div className="search-bar__submit">
        <SearchIcon />
      </div>
      <SearchDropdown items={items} />
    </div>
  );
};

export default SearchBar;
