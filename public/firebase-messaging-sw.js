importScripts(
  "https://www.gstatic.com/firebasejs/10.11.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.11.1/firebase-messaging-compat.js"
);
 
const firebaseConfig = {
  apiKey: 'AIzaSyCcU5TIMMK-d72rT-uwwg9fqFLWvcLpDTI',
  authDomain: "cier-check.firebaseapp.com",
  projectId: "cier-check",
  storageBucket: "cier-check.firebasestorage.app",
  messagingSenderId: "349052662942",
  appId: "1:349052662942:web:793ed9f25e91c80050378f",
  measurementId: "G-Z2KSPSDQCZ",
};

firebase.initializeApp(firebaseConfig);
 
const messaging = firebase.messaging();
 
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || "/images/logo.svg",
    data: { url: payload.fcmOptions?.link || "/" },
  };
  console.log(notificationOptions)
  self.registration.showNotification(notificationTitle, notificationOptions);
});
 
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = event.notification.data?.url || "/";
  event.waitUntil(
    clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url === url && "focus" in client) return client.focus();
        }
        if (clients.openWindow) return clients.openWindow(url);
      })
  );
});
 