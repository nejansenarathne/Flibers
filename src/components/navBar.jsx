import React , {useEffect , useState} from 'react'
import './css/style.css'
import Logo from '../img/logo.png'
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
    let isAdmin = false
    
    useEffect(() => {
        if (email === "nejansenarathne@gmail.com") {
            isAdmin = true
        }
        if (isAdmin) {
            // alert(`Welcome Admin - ${name}`)
        }
    },[])

    return ( 
        <div className='navigationSection'>
            <div className='topNav'>
                <p className="navDate">{day}</p>
                {logged === 'true' ? <p className="navUser">Welcome, <strong><a href="/account">{name}</a>  </strong> </p> : <button className='loginNavBtn' onClick={signInWithGoogle}>Login</button>}
            </div>
            <div className="midNav">
                <a href="/"><img className="navLogo" src={Logo}  alt="Logo"  /></a>
                <div className="navTitleDiv">
                    <h1 className="navTitle">Flibers</h1>
                </div>
            </div>
            <div className='navTags'>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/account">Account</a>
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