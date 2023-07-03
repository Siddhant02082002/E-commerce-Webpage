import classes from "./paymentsItem.module.css";
import amazonFullfiled from "../../Assets/images/amazonFullfiled.png";
const PaymentsItem = (props) => {
  const price = `Rs ${props.price.toFixed(2)}`;
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
      </div>
    </div>
  );
};
export default PaymentsItem;
