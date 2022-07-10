import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import Particle from "../particle";
import "./login.css";

function Login({ setIsAuth }) {
  let naviagte = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      //   localStorage.setItem("isAuth", true);
      setIsAuth(true);
      naviagte("/home");
    });
  };

  return (
    <div className="">
      <Particle />
      <p className="title absolute text-[10rem]  float-left">Hub</p>
      <br />
      <p className="title text-[15rem] text-white float-right">IT</p>
      <p className="absolute inset-x-0 bottom-16 h-16 text-4xl">
        Sign In with Google
      </p>
      <button
        className="buttom absolute inset-x-0 bottom-0 h-16 text-3xl bg-white"
        onClick={signInWithGoogle}
      >
        Google
      </button>
    </div>
  );
}

export default Login;
