import { FaRegSmileWink } from "react-icons/fa";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { Mail,Lock,UserRound } from 'lucide-react';
import logo from './Asset_1.svg'
import { useState,useEffect } from 'react'
import { useLocation } from "react-router-dom";
import './SignUp.css'



export default function SignUp() {
const [error, setError] = useState("")
const [details, setDetails]=useState({username:"", email:"", password:"", confirmPassword:""})
const title = ["Welcome To Ditto", "Hey! Ditto"]
const location = useLocation()
const param = location.state
const [bool, setBool]=useState(param)

useEffect(()=>{
    if(param===null){
        setBool(1)
    }
},[param])


const boolFun=()=>{
(bool===1)?setBool(2):setBool(1)
}
const usernameChange=(event)=>{
    setDetails({...details, username:event.target.value})
}
const emailChange=(event)=>{
    setDetails({...details, email:event.target.value})
}
const passwordChange=(event)=>{
    setDetails({...details, password:event.target.value})
}
const confirmPasswordChange=(event)=>{
    setDetails({...details, confirmPassword:event.target.value})
}
const onSubmit=async()=>{
    if(details.password!==details.confirmPassword){
        setError("Password & Confirm Password are not matched")
    }
    else{
        const {username, email, password} = details
        const options ={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({username,email, password})
        }

        if(bool===1){
            const res = await fetch("https://ditto-server.onrender.com/login",options)
            const data = await res.json()
            console.log(data)
        }
        else{
            const res = await fetch("https://ditto-server.onrender.com/signup",options)
            const data = await res.json()
            console.log(data)
        }
      
        
    }
}
  


return <div className="signup-container">
<div style={{textAlign:"center"}}>
<img className="logo-image" src={logo} alt="logo" />
<div className='card' >
<div className='tabs'>
<p onClick={boolFun} className={`${bool===1?"active-tab":""} tab-btn`}>Login</p> 
<p onClick={boolFun} className={`${bool===2? "active-tab":""} tab-btn`}>SignUp</p>
</div>
    <h1 className="title">{bool===1?title[1]:title[0]} {bool===2?<FaRegFaceSmileBeam/> :<FaRegSmileWink/>} </h1>

    <div className={`input-cont ${bool===1?"disable":''}`}>
        <label htmlFor="username">Username</label>
        <input id="username" type="email" onChange={usernameChange} value={details.username} placeholder="username"/>
        <UserRound className="icon" size={16} color="#005bea"/>
    </div>
    <div className="email input-cont">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" onChange={emailChange} value={details.email} placeholder="email"/>
        <Mail className="icon" size={16} color="#005bea"/>
    </div>
    <div className="password input-cont">
        <label htmlFor="password">Password</label>
        <input id="password" type="password"  onChange={passwordChange} value={details.password} placeholder="password"/>
        <Lock className="icon" size={16} color="#005bea"/>
    </div>
    <div className={`input-cont ${bool===1?"disable":''}`}>
        <label htmlFor="confirm password">Confirm Password</label>
        <input id="confirm password" type="password"  onChange={confirmPasswordChange} value={details.confirmPassword} placeholder="confirm password"/>
    </div>
    <div style={{display:"flex", justifyContent:"space-between"}}>

    <div className="checkbox">
      <input id="checkbox" type="checkbox" onClick={(event)=>console.log(event.target.checked)}/>
      <label htmlFor="checkbox">Remember Me</label>
    </div>
    <button className={`forgot-password ${bool===2?"disable":''}`}>Forgot Your Password?</button>
    </div>
   
    <button className="submit" onClick={onSubmit}>Submit</button>
</div>

</div>
</div>
}
