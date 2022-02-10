import React, {useEffect,useState} from 'react';
import {firebase , db} from './firebase'
import toast, { Toaster } from 'react-hot-toast';
import { getMessaging, getToken, onMessage } from 'firebase/messaging'

const messaging = getMessaging()

const requestForToken = (e) => {
    // e.preventDefault()
    return getToken(messaging, {vapidKey: "BLOEbbeHSQMRbbBKCQtdmjBVrfEleVFyqGzOTpV1dE7b4hJrazI8cakefD-Wm3iqAqlrmc7kMrVJIZ89zQKnIt4"})
    .then((currentToken) => {
        if (currentToken) {
            console.log("Current token from client: ", currentToken)
        }else{
            console.log('No registration token available. Request permission to generate one.')
        }
    })
    .catch((e) => {
        console.log("An error occurred while retrieving token: ",  e)
    })
}

const onMessageListener = () => {
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            console.log("payload", payload)
            resolve(payload)
        })
    })
}

const notify = (e) =>{  
    e.preventDefault() 
    toast('Here is your toast.')
};

const NotificationPage = () => {
    requestForToken()
    const [notification, setNotification] = useState({title: '', body: ''})
    
    return ( 
        <div className='notificationPage'>
            <h1>Send a Notification</h1>
            <form>
                <input type="text" placeholder='Notification Title'/> <br />
                <input type="text" placeholder='Notification Body'/> <br />
                <button type='submit' onClick={notify}>Submit</button> 
                <Toaster />
            </form>
        </div>
     );
}
 
export default NotificationPage;