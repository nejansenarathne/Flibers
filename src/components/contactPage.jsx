import React, { useState } from 'react';
import {db} from '../config/firebase'
import { doc, setDoc } from "firebase/firestore";

const ContactBlock = () => {

    const [message, setMessage] = useState("")
    const name = localStorage.getItem("name")
    const email = localStorage.getItem("email")

    const addContact = (e) => {
        if (message === "") {
            alert("Textarea is empty")
        }else{
            e.preventDefault();
            alert("Sumited")
            const msgRef = doc(db, 'contact', email)
            setDoc(msgRef , {
                name: name,
                email: email,
                message: message
            })
        }
    }

    return (
        <div className="contactBlock">
            <h1>Contact Us</h1>
            <form onSubmit={addContact}>
                <textarea id='msgText' className='contactTextArea' onChange={(e) => {setMessage(e.target.value)}}></textarea> <br />
                <button onClick={() => {
                    document.getElementById('msgText').value = ""
                }}>Submit</button>
            </form>
        </div>
     );
}

export default ContactBlock;