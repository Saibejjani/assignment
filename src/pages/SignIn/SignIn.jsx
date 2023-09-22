import { useState } from "react";

import "./SignIn.css";
import { SocialBar, Button } from "../../components";
import { google, apple } from "../../assets/index";

const SignIn = () => {
  // const [accountLogin, setAccountLogin] = useState({});
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
              <Button img={google} link={""} platform={"Google"} />
              <Button img={apple} link={""} platform={"Apple"} />
            </div>
            <div className="signin-form-container">
              <form action="" className="signin-form">
                <div className="email-container input">
                  <label htmlFor="email">Email address</label>
                  <input id="email" type="text" />
                </div>
                <div className="password-container input">
                  <label htmlFor="password">Password</label>
                  <input id="password" type="password" />
                </div>
                <div className="forgot-container">
                  <a href="">Forgot Password?</a>
                </div>
                <div className="submit-container">
                  <button type="submit" className="sumbit-button">
                    Sign In
                  </button>
                </div>
              </form>
            </div>
            <div className="create-account-container">
              <p className="register">
                Don't have an account? <span>Register here</span>
              </p>
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
