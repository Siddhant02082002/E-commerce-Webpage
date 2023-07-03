import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
// import CartContext from "../../Store/cart-context";
// import gameConsole from "../../Assets/images/71U-Q+N7PXL._SX3000_.jpg";
import asusRog from "../../Assets/productsImage/AsusRog.webp";
import amazonPrime from "../../Assets/images/amazonPrime.jpg";
import amazonEcho from "../../Assets/productsImage/AmazonEcho.webp";
import onrPlus from "../../Assets/productsImage/onePlus.jpg";
import theLeanStartup from "../../Assets/productsImage/theLeanStartup.webp";
import alienWare from "../../Assets/productsImage/Alienware.webp";
import Products from "./Products";
import sonyBravia from "../../Assets/productsImage/sonyBravia.jpg";
import APILayout from "./APILayoutRender";
const dummyProductList1 = [
  {
    id: "P1",
    title:
      "Echo Home Entertainment Bundle | Echo Studio + 2 Echo (4th Gen), Charcoal",
    price: 5999,
    image: amazonEcho,
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: "P2",
    title: "OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)",
    price: 19990,
    image: onrPlus,
    rating: "⭐⭐⭐⭐",
  },
  {
    id: "P3",
    title:
      "ASUS ROG Strix G16 (2023) Gaming Laptop, 16” 16:10 FHD 165Hz, GeForce RTX 4060, Intel Core i7-13650HX, 16GB DDR5, 512GB PCIe SSD, Wi-Fi 6E, Windows 11, G614JV-",
    price: 149000,
    image: asusRog,
    rating: "⭐⭐⭐⭐",
  },
  {
    id: "P4",
    title:
      "Alienware M15 R5 Gaming Laptop, 15.6 inch FHD 360Hz 1ms G-SYNC Display, AMD Ryzen R9 5900HX, GeForce RTX 3070, Killer WiFi, RGB Keyboard, Windows 11, Dark Side of The ",
    price: 210000,
    image: alienWare,
    rating: "⭐⭐⭐⭐",
  },
];
const dummyProductList2 = [
  {
    id: "Q1",
    title: "Sony PS5 PlayStation Console",
    image: sonyBravia,
    price: 19990,
    rating: "⭐⭐⭐⭐",
  },
  {
    id: "Q2",
    title: "The lean startup",
    price: 10.99,
    image: theLeanStartup,
    rating: "⭐⭐",
  },
];
const Home = (props) => {
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
  const productList1 = dummyProductList1.map((item) => (
    <Products
      id={item.id}
      title={item.title}
      price={item.price}
      image={item.image}
      rating={item.rating}
    ></Products>
  ));
  const productList2 = dummyProductList2.map((item) => (
    <Products
      id={item.id}
      title={item.title}
      price={item.price}
      image={item.image}
      rating={item.rating}
    ></Products>
  ));
  const productList3 = products.map((item) => (
    <APILayout
      id={item.id}
      title={item.title}
      price={item.price}
      image={item.image}
    ></APILayout>
  ));
  return (
    <div className={classes.home}>
      <div className={classes.home__container}>
        <img
          src={amazonPrime}
          className={classes.home__image}
          alt="gameConsole"
        ></img>
        <div className={classes.products__container}>
          <div className={classes.home_row}>{productList1}</div>
          <div className={classes.home_row}>{productList2}</div>
          <div className={classes.home_col}>{productList3}</div>
        </div>
      </div>
    </div>
  );
};
export default Home;
