import React, { useContext} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/HomePage/Home";
import Header from "./Components/Header/Header";
import ShopingCart from "./Components/Shopping/ShoppingCart";
import CartProvider from "./Store/CartProvider";
import Login from "./Components/Login/Login";
import Payments from "./Components/Payments/Payments";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        {/* <ProductsAPI apiKey="YOUR_API_KEY" /> */}
        <Header></Header>
        <Home />
      </div>
    ),
  },
  {
    path: "/checkout",
    element: (
      <div>
        <Header />
        <ShopingCart/>
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/payments",
    element: (
      <div>
        <Payments></Payments>
      </div>
    ),
  },
]);
function App() {
  return (
    <CartProvider>
        <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  );
}
export default App;
