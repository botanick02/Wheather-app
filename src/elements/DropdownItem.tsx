import { fetchLocation } from "../store/Location/Location.slice";
import { useAppDispatch } from "../store/useAppDispatch";

export interface SearchItem {
  id: number;
  name: string;
}

interface DropdownItemProps {
  item: SearchItem;
}

const DropdownItem = ({ item }: DropdownItemProps) => {
  const dispatch = useAppDispatch();

  const setCityForFetch = () => {
    dispatch(fetchLocation({ id: item.id }));
  };

  return (
    <div className="search-bar__dropdown-item" onClick={setCityForFetch}>
      {item.name}
    </div>
  );
};

export default DropdownItem;
