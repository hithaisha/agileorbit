
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";




// const firebaseConfig = {
//   apiKey: "AIzaSyBqXjfbE-FdfhAdXrNTULtdjb8mCu6cvSg",
//   authDomain: "agileorbit-288de.firebaseapp.com",
//   projectId: "agileorbit-288de",
//   storageBucket: "agileorbit-288de.firebasestorage.app",
//   messagingSenderId: "210125683895",
//   appId: "1:210125683895:web:1a00d65d3527ce205ce132",
//   measurementId: "G-K3HWX7SR0Y"
// };

// export const db = getFirestore(app);
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAuth } from "firebase/auth"; // Import Auth if needed

// Replace these values with your actual Firebase configuration values
const firebaseConfig = {
    apiKey: "AIzaSyBqXjfbE-FdfhAdXrNTULtdjb8mCu6cvSg",
    authDomain: "agileorbit-288de.firebaseapp.com",
    projectId: "agileorbit-288de",
    storageBucket: "agileorbit-288de.firebasestorage.app",
    messagingSenderId: "210125683895",
    appId: "1:210125683895:web:1a00d65d3527ce205ce132",
    measurementId: "G-K3HWX7SR0Y"
  };

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore and export it
export const db = getFirestore(app);

// Export other services if needed
export const auth = getAuth(app);
