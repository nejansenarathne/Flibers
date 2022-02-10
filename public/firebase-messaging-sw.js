importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

import { firebase } from '../src/config/firebase'

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log("Received background message ", payload)

    const notificationTitle = payload.notification.title
    const notificationOption = {
        body: payload.notification.body
    }

    return self.ServiceWorkerRegistration.showNotification(notificationTitle, notificationOption)
})