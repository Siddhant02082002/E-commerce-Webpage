import classes from "./Login.module.css";
import amazonlogo from "../../Assets/images/amazon-png-logo-vector-6695.png";
import Card from "../UI/Card";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { auth } from "../../firebase";
import CartContext from "../../Store/cart-context";

const Login = (props) => {
  const cartCtx = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const userState = cartCtx.user;
  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
          cartCtx.setUser(true);
          console.log(userState);
        }
      })
      .catch((error) => alert(error.message));
      
  };
  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
          cartCtx.setUser(true);
        }
      })
      .catch((error) => alert(error.message));

  };
  return (
    <div className={classes.login}>
      <Link to="/">
        <img src={amazonlogo} alt=""></img>
      </Link>
      <Card className={classes.input__container}>
        <h1>Sign in</h1>
        <form>
          <label>Email or mobile Phone nuber</label>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
          <label>Password</label>
          <input
            type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          <button
            type="submit"
            onClick={signIn}
            className={classes.login__button}
          >
            Continue
          </button>
        </form>
        <p className={classes.terms_condition}>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <h5>Need help</h5>
      </Card>
      <p className={classes.newAmazon}>New to Amazon?</p>
      <button className={classes.create__account} onClick={register}>
        Create your Amazon account
      </button>
    </div>
  );
};
export default Login;
