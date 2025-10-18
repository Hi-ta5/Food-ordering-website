// firebase.js

 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
 import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAdFlb844UkqgcCDqVRWUe9wPiVYx70AoQ",
   authDomain: "trail-c08f8.firebaseapp.com",
   projectId: "trail-c08f8",
   storageBucket: "trail-c08f8.firebasestorage.app",
   messagingSenderId: "327074039132",
   appId: "1:327074039132:web:52be090e15060573022d99"
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

console.log(auth);
console.log(provider);

export { auth, provider };
