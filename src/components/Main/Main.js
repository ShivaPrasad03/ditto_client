import { useState, useEffect } from "react";
import { GoHomeFill } from "react-icons/go";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { RiSettings3Fill } from "react-icons/ri";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import logo from "./Asset_1.svg";
import profile from "./profile.jpg";
import "./Main.css";
export default function Main() {
  const [bool, setBool] = useState(1);
  const [sideMenu, setSideMenu] = useState(true);
  const [notification, setNotification] = useState(1);
  const like=(event)=>{
    const value = document.getElementById(event.target.id+"count").innerHTML
    document.getElementById(event.target.id+"count").innerHTML= +value+1
  }

  return (
    <div className="Main-container">
      <nav className="nav-feed">
        <button className="menu-btn" onClick={() => setSideMenu(true)}>
          <TiThMenu color="white" size={20} />
        </button>
        <div>
          <div className="search-cont">
            <input
              className="search-input"
              type="text"
              placeholder="search posts"
            />
            <button className="search-btn">Go Now</button>
          </div>
          <div className="notification">
            <IoNotificationsSharp color="white" size={20} />
            <div className="badge">{notification}</div>
          </div>
          <div className="profile">
            <div
              style={{
                backgroundImage: `url(${profile})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "35px",
                height: "35px",
                borderRadius: "40px",
                cursor: "pointer",
              }}
            ></div>
            <div className="profile-dropdown">
              <h1>DittoID: DITTO0001</h1>
              <h1>Name: Shiva Prasad</h1>
              <h1>Mail: shiva@mail,com</h1>
            </div>
          </div>
        </div>
      </nav>
      <div className="feed-container">
        <div
          className="sidebar"
          style={{ left: `${sideMenu ? "0" : "-200px"}` }}
        >
          <div className="logo-close-btn">
            <button
              className="menu-close-btn"
              onClick={() => setSideMenu(false)}
            >
              <MdOutlineClose color="white" size={20} />
            </button>
            <img src={logo} className="logo-image-1" alt="logo" />
          </div>

          <ul className="sidebar-items">
            <li
              onClick={() => setBool(1)}
              className={bool === 1 ? "active-list" : ""}
            >
              <GoHomeFill color="white" size={20} /> Feed
            </li>
            <li
              onClick={() => setBool(2)}
              className={bool === 2 ? "active-list" : ""}
            >
              <RiAccountPinCircleFill size={20} /> Account
            </li>
            <li
              onClick={() => setBool(3)}
              className={bool === 3 ? "active-list" : ""}
            >
              <RiSettings3Fill size={20} /> Settings
            </li>
          </ul>
          <div className="profile-sidebar">
            <div>SP</div>
            Shiva Prasad
          </div>
        </div>
        <div className="posts-container">
          <button id="btn1" onClick={like}>like me</button>
          <h1 id="btn1count" style={{color:"white"}}>0</h1>
          <button id="btn2" onClick={like}>btn 2 </button>
          <h1 id="btn2count"  style={{color:"white"}}>0</h1>
        </div>
        <div className="messages-container"></div>
        <div
          className="overlay"
          onClick={() => setSideMenu(false)}
          style={{ width: `${sideMenu ? "100%" : "0%"}` }}
        ></div>
      </div>
    </div>
  );
}
