import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./Header.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import CartContext from "../../Store/cart-context";
import { auth } from "../../firebase";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const userState = cartCtx.user;
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const signOutHandler = () => {
    if(userState) {
      if (window.confirm("Are you sure you want to sign out?"))
      {
        auth.signOut();
        cartCtx.setUser(false);
      }
    }
  };

  return (
    <div className={classes.Main_header}>
      <div className={classes.header}>
        <Link to="/">
          <img
            className={classes.header__logo}
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazonLogo"
          ></img>
        </Link>
        <div className={classes.header__search}>
          <input className={classes.header__searchInput} type="text"></input>
          <SearchIcon className={classes.header__searchIcon}></SearchIcon>
        </div>
        <div className={classes.header_nav}>
            <Link to = "/login" className={classes.header__option} onClick={signOutHandler}>
              <span className={classes.header__optionLineOne}>
                {userState ? "Hello User":"Hello Guest"}
              </span>
              <div to="/login" className={classes.header__optionLineTwo}>
                {userState ? auth.currentUser.email : "Sign In"}
              </div>
            </Link>
          <div className={classes.header__option}>
            <span className={classes.header__optionLineOne}>Returns</span>
            <span className={classes.header__optionLineTwo}>& Orders</span>
          </div>
          <div className={classes.header__option}>
            <span className={classes.header__optionLineOne}>your</span>
            <span className={classes.header__optionLineTwo}>Prime</span>
          </div>
          {userState ? (
            <Link to="/checkout">
              <div className={classes.header__optionalBasket}>
                <ShoppingCartIcon></ShoppingCartIcon>
                <span className={classes.header__optionLineTwo__basketCount}>
                  {numberOfCartItems}
                </span>
              </div>
            </Link>
          ) : (
            <Link to="/login">
              <div className={classes.header__optionalBasket}>
                <ShoppingCartIcon></ShoppingCartIcon>
                <span className={classes.header__optionLineTwo__basketCount}>
                  0
                </span>
              </div>
            </Link>
          )}
        </div>
      </div>
      <div className={classes.Catagories}>
        <span className={classes.Catagories__product}>Amazon miniTV</span>
        <span className={classes.Catagories__product}>Sell</span>
        <span className={classes.Catagories__product}>Best Sellers</span>
        <span className={classes.Catagories__product}>Amazon miniTV</span>
      </div>
    </div>
  );
};

export default Header;
