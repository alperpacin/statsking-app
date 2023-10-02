import classes from "./region-dropdown.module.css";
import { useDispatch } from "react-redux";
import {
  updateRegionOpen,
  updateRegionValue,
} from "@/store/slices/searchBarSlice";
import { useRef } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import { Skeleton } from "../ui/skeleton";

const Dropdown = ({ items, searchBarState }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const closeDropdown = () => {
    dispatch(updateRegionOpen(false));
  };

  useOutsideClick(ref, null, closeDropdown);

  const toggleDropdown = () => {
    dispatch(updateRegionOpen(!searchBarState.region.open));
  };

  const handleItemClick = (item) => {
    dispatch(updateRegionOpen(false));
    dispatch(updateRegionValue(item));
  };

  return (
    <div className={`${classes["dropdown"]}`} ref={ref}>
      {searchBarState.region.value ? (
        <div className={classes["dropdown-header"]} onClick={toggleDropdown}>
          <span className="font-bold text-white text-[14px] sm:text-[16px] bg-accent py-1 px-1 rounded-sm">
            {searchBarState.region.value?.label}
          </span>
        </div>
      ) : (
        <Skeleton className="w-[48px] h-8" />
      )}

      <div
        className={`${classes["dropdown-body"]} ${
          searchBarState.region.open && classes["open"]
        }`}
      >
        {items.map((item) => (
          <div
            className={classes["dropdown-item"]}
            onClick={(e) => handleItemClick(item)}
            key={item.code}
          >
            <span
              className={`font-light text-sm w-100 text-white ${
                item.code === searchBarState.region.value?.code
                  ? "bg-accent"
                  : "bg-transparent"
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
