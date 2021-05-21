import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { userSlice } from "./features/userSlice";
import { auth, provider } from "./firebase/firebase";
import { login } from "./features/userSlice";
import "./Login.css";

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
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.dribbble.com/users/2113992/screenshots/14510264/media/37a62d305ca45e21f00f40adc9016b36.gif"
          alt=""
        />
        <Button onClick={signIn} color="primary">
          login
        </Button>
      </div>
    </div>
  );
}

export default Login;
