import React , {useEffect , useState} from 'react'
import './css/style.css'
import Logo from '../img/logo.png'
// import { firebase, db } from "../config/firebase";
// import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
import signInWithGoogle from '../config/userLogin'

const NavBar = () => {

    //getting user data from localStorage
    const name = localStorage.getItem("name")
    const email = localStorage.getItem("email")
    const profilePic = localStorage.getItem("profilePic")
    const logged = localStorage.getItem("logged")

    //setting date
    const d = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    const [day, setDay] = useState(date + " " + month + " " + year)

    //getting quot from API
    const [quot , setQuot] = useState("")
    const radomQuot = () => {
        fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(
            (result) => {
                setQuot(result.content)   
            }
        )
    }
    window.onload = radomQuot
   

    return ( 
        <div className='navigationSection'>
            <div className='topNav'>
                <p className="navDate">{day}</p>
                {logged === 'true' ? <p className="navUser">Welcome, <strong><a href="/account">{name}</a>  </strong> </p> : <button className='loginNavBtn' onClick={signInWithGoogle}>Login</button>}
            </div>
            <div className="midNav">
                <a href="/FlipBLogs.com/"><img className="navLogo" src={Logo}  alt="Logo"  /></a>
                <div className="navTitleDiv">
                    <h1 className="navTitle">Flip Blogs</h1>
                </div>
            </div>
            <div className='navTags'>
                <a href="/">Home</a>
                <a href="/FlipBLogs.com/about">About</a>
                <a href="/FlipBLogs.com/contact">Contact</a>
                <a href="/FlipBLogs.com/account">Account</a>
            </div>
            <div className="bannerNav">
                <p className='navQuot'>
                    <span className="quot">"</span>{quot}<span className="quot">"</span>
                </p>
            </div>
        </div>
     );
}
 
export default NavBar;