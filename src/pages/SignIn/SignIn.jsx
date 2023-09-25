import { useState, useRef } from "react";
import { google, apple } from "../../assets/index";
import { SocialBar, Button } from "../../components";
import "./SignIn.css";

import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  googleProvider,
} from "../../utils/firebase";

const SignIn = ({ setUser }) => {
  const [signUp, setSignUp] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        const user = userCredential;
        console.log(user);
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setUser(user);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signin">
      <div className="logo-container">
        <h1>logo</h1>
      </div>
      <div className="signin-container">
        <div className="left-container">
          <div className="board-container">
            <h1>Board.</h1>
          </div>
        </div>
        <div className="signin-card-container">
          <div className="signin-card">
            <div className="signin-heading">
              <h1>Sign In</h1>
              <p>Sign into your account</p>
            </div>
            <div className="signin-options">
              <Button
                img={google}
                platform={"Google"}
                onClick={signInWithGoogle}
              />
              <Button img={apple} link={""} platform={"Apple"} />
            </div>
            <div className="signin-form-container">
              <form action="" className="signin-form">
                <div className="email-container input">
                  <label htmlFor="email">Email address</label>
                  <input ref={emailRef} id="email" type="text" />
                </div>
                <div className="password-container input">
                  <label htmlFor="password">Password</label>
                  <input ref={passwordRef} id="password" type="password" />
                </div>
                <div className="forgot-container">
                  <a>Forgot Password?</a>
                </div>
                <div className="submit-container">
                  {signUp ? (
                    <button
                      type="submit"
                      className="sumbit-button"
                      onClick={register}
                    >
                      Sign Up
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="sumbit-button"
                      onClick={signIn}
                    >
                      Sign In
                    </button>
                  )}
                </div>
              </form>
            </div>
            <div
              className="create-account-container"
              onClick={() => {
                setSignUp((prev) => !prev);
              }}
            >
              {signUp ? (
                <p className="register">
                  Already have an acccount? <span>Sign In</span>
                </p>
              ) : (
                <p className="register">
                  Don't have an account? <span>Register here</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="socialbar-container">
        <SocialBar />
      </div>
    </div>
  );
};

export default SignIn;
