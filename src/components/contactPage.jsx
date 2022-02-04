import React, { useState } from 'react';
import {db} from '../config/firebase'
import { doc, setDoc } from "firebase/firestore";
import signInWithGoogle from '../config/userLogin'

const ContactBlock = () => {

    const [message, setMessage] = useState("")
    const name = localStorage.getItem("name")
    const email = localStorage.getItem("email")
    const logged = localStorage.getItem("logged")

    const addContact = (e) => {
        if (message === "") {
            alert("Textarea is empty")
        }else{
            e.preventDefault();
            document.getElementById('msgText').value = ""
            const msgRef = doc(db, 'contact', email)
            setDoc(msgRef , {
                name: name,
                email: email,
                message: message
            })
            .then((e) => {alert("Thank you for your feedback")})
            .catch((e) => {console.log(e);})
        }
    }

    return (
        <div className="contactBlock">
            <h1>Contact Us</h1>
            <form>
                <textarea id='msgText' className='contactTextArea' onChange={(e) => {setMessage(e.target.value)}}></textarea> <br />
                {logged === 'true' ?  <button type='submit' onClick={addContact}>Submit</button> : <button className='loginBtn' onClick={signInWithGoogle}>Login</button>}
               
            </form>
        </div>
     );
}

export default ContactBlock;