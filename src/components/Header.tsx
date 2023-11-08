import React from "react";
import SearchBar from "../elements/SearchBar";
import UnitSwitcher from "../elements/UnitSwitcher";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <b>W</b>eather
      </div>
      <SearchBar />
      <UnitSwitcher />
    </div>
  );
};

export default Header;
