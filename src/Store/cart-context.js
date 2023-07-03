import React from "react";

const CartContext = React.createContext(
    {
        items: [],
        totalAmount: 0,
        addItem: (item) => {},
        removeItem: (id,newAmount) => {},
        setUser: (auth) => {},
        deleteItem: (id) => {},
        user: null,
    }
);

export default CartContext;