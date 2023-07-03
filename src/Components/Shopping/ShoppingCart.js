import { useContext } from "react";
import Card from "../UI/Card";
import classes from "./ShoppingCart.module.css";
import CartContext from "../../Store/cart-context";
import ShoppingCartProducts from "./ShoppingCartProducts";
import { Link } from 'react-router-dom'
const CheckOut = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `Rs ${cartCtx.totalAmount.toFixed(2)}`;
  const UserState = cartCtx.user;
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <ShoppingCartProducts
          id = {item.id}
          key={item.id}
          title={item.name}
          price={item.price}
          amount={item.amount}
          image={
            item.image
          } /*onRemove={cartItemRemoveHandeler.bind(null,item.id)} onAdd={cartItemAddHandeler.bind(null,item)}*/
        ></ShoppingCartProducts>
      ))}
    </ul>
  );

  return (
    <div className={classes.checkout}>
      <Card className={classes.checkout__left}>
        <h2 className={classes.checkout__title}>Shopping Cart</h2>
        {UserState ? (
          <div>
            {cartItems}
            <div className={classes.subtotal}>
              <h3>{totalAmount}</h3>
              <p>Subtotal ({cartCtx.amount} items): </p>
            </div>
          </div>
        ) : (
          <div className={classes.subtotal}>Login To Continue</div>
        )}
      </Card>
      <Card className={classes.checkout__right}>
        <h2>Subtotal {totalAmount}</h2>
        <span>
          <input type="checkbox"></input>
          <p>This order contain gift</p>
        </span>
        <Link to="/payments">
          <button>Proceed to Buy</button>
        </Link>
      </Card>
    </div>
  );
};
export default CheckOut;
