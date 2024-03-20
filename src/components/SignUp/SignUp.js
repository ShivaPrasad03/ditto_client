import { FaRegSmileWink } from "react-icons/fa";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { Mail,Lock } from 'lucide-react';
import logo from './Asset_1.svg'
import { useState } from 'react'
import './SignUp.css'



export default function SignUp() {
const [bool, setBool]=useState(1)
const title = ["Welcome Back", "Hey! Ditto"]

const boolFun=()=>{
    if(bool===0){
        setBool(1)
    }
    else{
        setBool(0)
    }
}
const onSubmit=(event)=>{
event.preventDefault()
}
  
return <div className="signup-container">
<div style={{textAlign:"center"}}>
<img className="logo-image" src={logo} alt="logo" />
<div className='card' >
<div className='tabs'>
<p onClick={boolFun} className={`${bool===0?"active-tab":""} tab-btn`}>Login</p> 
<p onClick={boolFun} className={`${bool===1? "active-tab":""} tab-btn`}>SignUp</p>
</div>
    <h1 className="title">{bool===0?title[0]:title[1]} {bool===0?<FaRegFaceSmileBeam/> :<FaRegSmileWink/>} </h1>

    <div className="email input-cont">
        <label htmlFor="email">Email</label>
        <input id="email" type="email"/>
        <Mail className="icon" size={16} color="#005bea"/>
    </div>
    <div className="password input-cont">
        <label htmlFor="password">Password</label>
        <input id="password" type="password"/>
        <Lock className="icon" size={16} color="#005bea"/>
    </div>
    <div className={`input-cont ${bool===0?"disable":''}`}>
        <label htmlFor="confirm password">Confirm Password</label>
        <input id="confirm password" type="password"/>
    </div>
    <div style={{display:"flex", justifyContent:"space-between"}}>

    <div className="checkbox">
      <input id="checkbox" type="checkbox" onClick={(event)=>console.log(event.target.checked)}/>
      <label htmlFor="checkbox">Remember Me</label>
    </div>
    <button className={`forgot-password ${bool===1?"disable":''}`}>Forgot Your Password?</button>
    </div>
   
    <button className="submit" onClick={onSubmit}>Submit</button>
</div>

</div>
</div>
}
