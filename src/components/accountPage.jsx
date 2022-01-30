import React from 'react';
import signInWithGoogle from '../config/userLogin'

const logged = localStorage.getItem("logged")
const name = localStorage.getItem("name")
const email = localStorage.getItem("email")
const profPic = localStorage.getItem("profPic")

const Acc = () => {
    return ( 
        <div>
            <h1>{name}</h1>
            <img src={profPic} alt="profile picture" />
            <h2>{email}</h2>
        </div>
     );
}
const AccountPage = () => {
    return ( 
        <div className="accountPage">
            {logged === 'true' ?  <Acc />: <button onClick={signInWithGoogle}>Login</button>}
        </div>
     );
}


export default AccountPage;