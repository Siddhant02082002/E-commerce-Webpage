import React, { useContext, useState } from "react";
import classes from "./dropDownButton.module.css";
import CartContext from "../../Store/cart-context";

const quantity = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
  { value: 6 },
  { value: 7 },
];


const DropdownButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const closeDropdown = () => {
    setIsOpen(false);
  };
  const SelectHandler = (newAmt) => {
    closeDropdown();
    cartCtx.removeItem(props.id,newAmt);
  };

  return (
    <div className={classes.dropdown}>
      <button
        onClick={toggleDropdown}
        className={classes.dropbtn}
        id="quantity-button"
      >
        Qty: {props.amount}
      </button>
      {isOpen && (
        <div className={classes["dropdown-content"]}>
          {quantity.map((item) => {
            return (
              <ul id="quantity-list">
                <li key={item.id}>
                  <button onClick={() => SelectHandler(item.value)}>
                    {item.value}
                  </button>
                </li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
