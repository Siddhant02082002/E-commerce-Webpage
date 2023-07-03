import classes from "./ShppingCartProduct.module.css";
import amazonFullfiled from "../../Assets/images/amazonFullfiled.png";
import DropDownButton from "./dropDownButton";
import CartContext from "../../Store/cart-context";
import { useContext } from "react";
const CheckOutProduct = (props) => {
  const price = `Rs ${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);
  const deleteItemfromCartHandler = () => {
    cartCtx.deleteItem(props.id);
  };
  return (
    <div className={classes.product}>
      <div className={classes.image}>
        <img src={props.image} alt=""></img>
      </div>
      <div className={classes.info}>
        <div className={classes.info__main}>
          <h2> {props.title} </h2>
          <h3>{price}</h3>
          <div className={classes.info__shipping}>
            <span className={classes.info__instock}>In stock</span>
            <img src={amazonFullfiled} alt=""></img>
            <span className={classes.info__freeShipping}>
              Eligible for FREE Shipping
            </span>
            <span className={classes.info__giftCheckbox}>
              <input type="checkbox"></input>
              <p>This order contain gift</p>
            </span>
          </div>
        </div>
        <div className={classes.nav}>
          <DropDownButton amount={props.amount} id={props.id}></DropDownButton>
          <button onClick={deleteItemfromCartHandler}>Delete</button>
          <button >Save for Later</button >
          <button >See more like this</button >
          <button >Share</button >
        </div>
      </div>
    </div>
  );
};
export default CheckOutProduct;
