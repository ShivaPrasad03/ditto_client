import { FaRegSmileWink } from "react-icons/fa";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { Mail, Lock, UserRound } from "lucide-react";
import { HashLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import logo from "./Asset_1.svg";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";

import "./SignUp.css";

export default function SignUp() {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const title = ["Welcome To Ditto", "Hey! Ditto"];
  const location = useLocation();
  const param = location.state;
  const [bool, setBool] = useState(param);

  useEffect(() => {
    if (param === null) {
      setBool(1);
    }
  }, [param]);

  const boolFun = () => {
    bool === 1 ? setBool(2) : setBool(1);
  };
  const usernameChange = (event) => {
    setDetails({ ...details, username: event.target.value });
  };
  const emailChange = (event) => {
    setDetails({ ...details, email: event.target.value });
  };
  const passwordChange = (event) => {
    setDetails({ ...details, password: event.target.value });
  };
  const confirmPasswordChange = (event) => {
    setDetails({ ...details, confirmPassword: event.target.value });
  };
  const onSubmit = async () => {
    setLoader(true);
    if (bool === 2 && details.password !== details.confirmPassword) {
      setError("Password & Confirm Password are not matched");
    } else {
      const { username, email, password } = details;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      };

      if (bool === 1) {
        const res = await fetch(
          "https://ditto-server.onrender.com/login",
          options
        );
        // const res = await fetch("http://localhost:3001/login", options);
        const data = await res.json();
        console.log(data);
        const { token } = data;

        setLoader(false);
        if (res.status === 200) {
          setError("");
          Cookies.set("token", token, { expires: 30 });
          navigate("/feed", { replace: true });
        } else {
          setError(data.message);
        }
      } else {
        const res = await fetch(
          "https://ditto-server.onrender.com/signup",
          options
        );
        const data = await res.json();
        console.log(data);
        setLoader(false);
        if (res.status === 200) {
          navigate("/login", { replace: true });
        }
      }
    }
  };

  return (
    <div className="signup-container">
      <div style={{ textAlign: "center" }}>
        <img className="logo-image" src={logo} alt="logo" />
        <div className="card">
          <div className="tabs">
            <p
              onClick={boolFun}
              className={`${bool === 1 ? "active-tab" : ""} tab-btn`}
            >
              Login
            </p>
            <p
              onClick={boolFun}
              className={`${bool === 2 ? "active-tab" : ""} tab-btn`}
            >
              SignUp
            </p>
          </div>
          <h1 className="title">
            {bool === 1 ? title[1] : title[0]}{" "}
            {bool === 2 ? <FaRegFaceSmileBeam /> : <FaRegSmileWink />}{" "}
          </h1>

          <div className={`input-cont ${bool === 1 ? "disable" : ""}`}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="email"
              onChange={usernameChange}
              value={details.username}
              placeholder="username"
            />
            <UserRound className="icon" size={16} color="#005bea" />
          </div>
          <div className="email input-cont">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              onChange={emailChange}
              value={details.email}
              placeholder="email"
            />
            <Mail className="icon" size={16} color="#005bea" />
          </div>
          <div className="password input-cont">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              onChange={passwordChange}
              value={details.password}
              placeholder="password"
            />
            <Lock className="icon" size={16} color="#005bea" />
          </div>
          <div className={`input-cont ${bool === 1 ? "disable" : ""}`}>
            <label htmlFor="confirm password">Confirm Password</label>
            <input
              id="confirm password"
              type="password"
              onChange={confirmPasswordChange}
              value={details.confirmPassword}
              placeholder="confirm password"
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="checkbox">
              <input
                id="checkbox"
                type="checkbox"
                onClick={(event) => console.log(event.target.checked)}
              />
              <label htmlFor="checkbox">Remember Me</label>
            </div>
            <button
              className={`forgot-password ${bool === 2 ? "disable" : ""}`}
            >
              Forgot Your Password?
            </button>
          </div>

          <button className="submit" onClick={onSubmit}>
            Submit
          </button>
          <p
            style={{
              fontSize: "10px",
              color: "red",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {error}
          </p>
          {loader && (
            <div className="loader">
              <HashLoader color="#005bea" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
