import DropdownItem, { SearchItem } from "./DropdownItem";

interface SearchDropdownProps {
  items: SearchItem[];
}

const SearchDropdown = ({ items }: SearchDropdownProps) => {
  
  return (
    <div className="search-bar__dropdown">
      {items.map((item) => (
        <DropdownItem item={item} key={item.id}/>
      ))}
    </div>
  );
};

export default SearchDropdown;
