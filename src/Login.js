import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import login from "./features/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
          alt=""
        />
      </div>

      <Button variant="contained" color="primary" onClick={signIn}>
        Login
      </Button>
    </div>
  );
}

export default Login;
