import React from "react";
import classes from "./DebitCard.module.css";
const DebitCard = () => {
  return (
    <div className={classes.box}>
      <div className={classes.left}>
        <div className={classes.labels}>
          <label id='1'>Card number</label>
          <label id='2'>Name on card</label>
          <label id='3'>Expiry date</label>
        </div>
        <div className={classes.input}>
          <input></input>
          <input></input>
          <input
            type="month"
            id="start"
            name="start"
            min="2018-03"
            value="2018-05"
          ></input>
        </div>
      </div>
    </div>
  );
};
export default DebitCard;
