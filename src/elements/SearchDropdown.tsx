import DropdownItem, { SearchItem } from "./DropdownItem";

interface SearchDropdownProps {
  items: SearchItem[];
  onItemClick: (id: number) => void;
}

const SearchDropdown = ({ items, onItemClick }: SearchDropdownProps) => {
  return (
    <div className="search-bar__dropdown">
      {items.map((item) => (
        <DropdownItem item={item} key={item.id} onClick={onItemClick}/>
      ))}
    </div>
  );
};

export default SearchDropdown;
