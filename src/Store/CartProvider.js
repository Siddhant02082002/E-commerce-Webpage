import { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartState = {
  items: [],
  totalAmount: 0,
  user: false,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      user: state.user,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - (existingItem.price*existingItem.amount)+(existingItem.price*action.amt)
    let updatedItems;
    updatedItems = [...state.items];
    const updatedItem = {...existingItem, amount: action.amt};
    updatedItems[existingCartItemIndex] = updatedItem;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      user: state.user,
    };
  }
  if (action.type === "DELETE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - (existingItem.price)*(existingItem.amount);
    let updatedItems = state.items.filter((item) => item.id !== action.id);
    return{
      items: updatedItems,
      user: state.user,
      totalAmount: updatedTotalAmount,
    }
  }
  if (action.type === "SET_USER") {
    let updatedItems = [...state.items];
    console.log(action.user);
    return {
      items: updatedItems,
      user: action.user,
      totalAmount: state.totalAmount,
    };
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemfromCartHandler = (id,newAmount) => {
    dispatchCartAction({ type: "REMOVE", id: id ,amt: newAmount});
  };
  const addUserHandler = (auth) => {
    dispatchCartAction({ type: "SET_USER", user: auth });
  };
  const deleteItemfromCartHandler = (id) => {
    dispatchCartAction({type: 'DELETE', id: id});
  }
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemfromCartHandler,
    setUser: addUserHandler,
    deleteItem: deleteItemfromCartHandler,
    user: cartState.user,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
