
export interface SearchItem{
    id: number,
    name: string
}

interface DropdownItemProps{
    item: SearchItem;
}

const DropdownItem = ({item}: DropdownItemProps) => {
  return (
    <div className="search-bar__dropdown-item">
        {item.name}
    </div>
  );
};

export default DropdownItem;
