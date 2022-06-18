import React from "react";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import profile from "./resume.png";
import email from "./email.png";
import password from "./password.png";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";

const login = () => {
  return (
    <>
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="img">
              <div className="container-img">
                <img src={profile} alt="profile" className="profile" />
              </div>
            </div>
            <div>
              <h1>Login</h1>
              <br />
              <div>
                <img src={email} alt="email" className="email" />
                <input type="text" placeholder="user name" className="name" />
              </div>
              <div className="second-input">
                <img src={password} alt="password" className="email" />
                <input type="text" placeholder="password" className="name" />
              </div>
            </div>
            <div className="login-button">
              <button>Login</button>
            </div>

            <div>
              <p className="link">
                <a href="#">Forget password ?</a> or <a href="#">Sign up</a>
              </p>
            </div>
            <hr></hr>
            <div className="social">
            <img src={facebook} className="socialimg"></img>
            <img src={instagram} className="socialimg"></img>
            <img src={linkedin} className="socialimg"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default login;
