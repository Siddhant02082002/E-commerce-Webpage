import classes from "./OtherUPIapps.module.css";

const OtherUPIapps = () => {
  return (
    <div className={classes.box}>
      <label>Please enter your UPI ID</label>
      <div className={classes.inputs}>
        <input></input>
        <button>Verify</button>
      </div>
    </div>
  );
};
export default OtherUPIapps;
