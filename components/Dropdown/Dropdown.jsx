import { useState } from "react";
import classes from "./Dropdown.module.css";
import Image from "next/image";

const Dropdown = ({ items }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className={`${classes["dropdown"]}`}>
      <div className={classes["dropdown-header"]} onClick={toggleDropdown}>
        <Image
          src={selectedItem.image}
          alt={`selected logo`}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>
      <div
        className={`${classes["dropdown-body"]} ${isOpen && classes["open"]}`}
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
