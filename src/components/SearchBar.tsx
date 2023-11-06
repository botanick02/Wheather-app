const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" className="search-bar__input" />
      <button className="search-bar__submit">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
