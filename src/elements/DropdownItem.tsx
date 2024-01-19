export interface SearchItem {
  id: number;
  name: string;
}

interface DropdownItemProps {
  item: SearchItem;
  onClick: (id: number) => void
}

const DropdownItem = ({ item,  onClick }: DropdownItemProps) => {

  return (
    <div className="search-bar__dropdown-item" onClick={() => onClick(item.id)}>
      {item.name}
    </div>
  );
};

export default DropdownItem;
