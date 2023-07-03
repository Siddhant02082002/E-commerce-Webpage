import { useContext, useState } from "react";
import classes from "./Payments.module.css";
import CartContext from "../../Store/cart-context";
import PaymentsItem from "./paymentsItem";
import AmazonLogo from "../../Assets/images/AmazonLogoBlack.png";
import DebitCard from "./PaymentOptions/DebitCard";
import NetBanking from "./PaymentOptions/NetBanking";
import OtherUPIapps from "./PaymentOptions/OtherUPIapps";

const Payments = () => {
  const cartCtx = useContext(CartContext);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>

      {cartCtx.items.map((item) => (
        <PaymentsItem
          title={item.name}
          price={item.price}
          amount={item.amount}
          image={item.image}
          key={item.id}
        ></PaymentsItem>
      ))}
    </ul>
  );

  return (
    <div className={classes.payment}>
      <div className={classes.Header}>
        <img
          className={classes.header__logo}
          src={AmazonLogo}
          alt="amazonLogo"
        ></img>
        <h1>Checkout</h1>
      </div>
      <div className={classes.detailsContainer}>
        <div className={classes.payment__container}>
          <div className={classes.address__section}>
            <h2>1 Select a Delivery Address</h2>
            <div className={classes.address__section__box}>
              <h3>Your address</h3>
            </div>
          </div>
          <div className={classes.address__section}>
            
            <h2>2 Review Items</h2>
            <div className={classes.address__section__box}>{cartItems}</div>
          </div>
          <div className={classes.address__section}>
            <h2>3 Payment method</h2>
            <div className={classes.address__section__box}>
              <div className={classes.paymentsOption}>
                <div className={classes.paymentOptionBox}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={selectedPaymentMethod === "card"}
                    onChange={handlePaymentMethodChange}
                  />
                  <label>Credit or debit Card</label>
                  {selectedPaymentMethod === "card" ? <DebitCard></DebitCard>:""}
                </div>
                <div className={classes.paymentOptionBox}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="netBanking"
                    checked={selectedPaymentMethod === "netBanking"}
                    onChange={handlePaymentMethodChange}
                  />
                  <label>Net Banking</label>
                  {selectedPaymentMethod === "netBanking" ? <NetBanking></NetBanking>:""}
                </div>
                <div className={classes.paymentOptionBox}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="otherUPI"
                    checked={selectedPaymentMethod === "otherUPI"}
                    onChange={handlePaymentMethodChange}
                  />
                  <label>Other UPI Apps</label>
                  {selectedPaymentMethod === "otherUPI" ? <OtherUPIapps></OtherUPIapps>:""}
                </div>
                <div className={classes.paymentOptionBox}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="emi"
                    checked={selectedPaymentMethod === "emi"}
                    onChange={handlePaymentMethodChange}
                  />
                  <label>EMI</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cashOnDelivery"
                    checked={selectedPaymentMethod === "cashOnDelivery"}
                    onChange={handlePaymentMethodChange}
                  />
                  <label>Cash on Delivery/Pay on Delivery</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.summary__section}>
          <div className={classes.summary__section__first}>
            <button>Use this Address</button>
            <p>
              Choose a shipping address and payment method to calculate
              shipping, handling, and tax.
            </p>
          </div>
          <div className={classes.summary__section__second}>
            <h3>Order Summary</h3>
          </div>
          <div className={classes.summary__section__third}>
            <h2 className={classes.orederTotal}>Order Total: </h2>
            <h2 className={classes.orderAmt}>{cartCtx.totalAmount}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
