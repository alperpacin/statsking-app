import { updateGameOpen, updateGameValue } from "@/store/slices/searchBarSlice";
import classes from "./game-dropdown.module.css";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import { Skeleton } from "../ui/skeleton";

const Dropdown = ({ items, searchBarState }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const closeDropdown = () => {
    dispatch(updateGameOpen(false));
  };

  useOutsideClick(ref, null, closeDropdown);

  const toggleDropdown = () => {
    dispatch(updateGameOpen(!searchBarState.game.open));
  };

  const handleItemClick = (item) => {
    dispatch(updateGameOpen(false));
    dispatch(updateGameValue(item));
  };

  return (
    <div className={`${classes["dropdown"]}`} ref={ref}>
      <div className={classes["dropdown-header"]} onClick={toggleDropdown}>
        {searchBarState.game.value ? (
          <Image
            src={searchBarState.game.value?.image}
            alt={`selected logo`}
            fill
            sizes="100vw"
            className="object-contain"
          />
        ) : (
          <Skeleton />
        )}
      </div>
      <div
        className={`${classes["dropdown-body"]} ${
          searchBarState.game.open && classes["open"]
        }`}
      >
        {items.map((item) => (
          <div
            className={classes["dropdown-item"]}
            onClick={(e) => handleItemClick(item)}
            key={item.id}
          >
            <Image
              src={item.image}
              alt={`selected logo`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
