import react from "react";
import logo from "./Asset_1.svg";
import signup from "./signup.svg";
import share_idea from './share_idea.svg';
import find_people from './find_people.svg';
import build_community from './build_community.svg';
import { RiRobot2Fill } from "react-icons/ri";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="Home-container">
        <nav>
          <img className="logo-image" src={logo} alt="logo" />
          <div>
            <button className="login-btn btn-1">Login</button>
            <button className="signup-btn btn-1">SignUp</button>
          </div>
        </nav>
        <div className="intro-cont">
          <div className="first-child">
            <h1 className="intro-title">
              <span className="special-intro"> Find People </span>Having Same
              Idea As You
            </h1>
          </div>
          <div className="last-child" >
           
            <div className="circular-path">
              <div> <div><img src={signup} alt="svg"/></div>
              <p>Create an account with Ditto</p></div>
              <div> <div><img src={share_idea} alt="svg"/></div>
              <p>Share your idea using Ditto post</p></div>
              <div> <div><img src={find_people} alt="svg"/></div>
              <p>find people having same idea</p></div>
              <div> <div><img src={build_community} alt="svg"/></div>
              <p>build comunnity & make an impact</p></div>
             
            </div>
            

          </div>
          
        </div>
        <div className="bot">
           <RiRobot2Fill color="white" fontSize={20}/>
          </div>
      </div>
    </>
  );
}
