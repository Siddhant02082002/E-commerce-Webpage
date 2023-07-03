import React, { useEffect, useState } from "react";
import Products from "./Products";
import classes from "./ProductsAPI.module.css";
const ProductsAPI = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const Prod1 = products.map((product) => (
    <Products
      id={product.id}
      title={product.title}
      price={product.price}
      image={product.image}
    ></Products>
  ));
  return (
    <div className={classes.scrollmenu}>
      <div className={classes.row1}>{Prod1};</div>
    </div>
  );
};

export default ProductsAPI;
