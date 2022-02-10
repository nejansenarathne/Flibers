import React from 'react';
import '../css/style.css'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'

const NotificationPage = () => {
    return ( 
        <div className='notificationPage'>
            <h1>Send a Notification</h1>
            <form>
                <input type="text" placeholder='Notification Title'/> <br />
                <input type="text" placeholder='Notification Body'/> <br />
                <button type='submit'>Submit</button> 
            </form>
        </div>
     );
}
 
export default NotificationPage;