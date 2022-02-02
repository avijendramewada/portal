import React from "react";
import "../styles/login.css";
import { FaUser } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";

function Login() {
  return (
    <div className="form">
      <form>
        <p className="title">Login</p>
        <div className="input-container">
          <label className="label">
            <FaUser />{" "}
          </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>
            <HiLockClosed />
          </label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Login;
