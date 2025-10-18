import { auth } from './firebase.js';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider // Make sure this is imported
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Wait for the DOM to be fully loaded

// Sign-up with Email and Password


document.addEventListener('DOMContentLoaded', () => {

    const signupButton = document.getElementById('signup-btn');

    signupButton.addEventListener('click', async () => {
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert('Sign-up successful! Redirecting to login page.');
            window.location.href = '/login.html';
        } catch (error) {
            console.error("Error signing up:", error.message);
            alert(`Error signing up: ${error.message}`);
        }
    });

    // Sign-up with Google
    document.getElementById('google-signup-btn').addEventListener('click', async () => {
        console.log("Google Sign-up button clicked");
        const provider = new GoogleAuthProvider(); // Reinitialize provider
        try {
            await signInWithPopup(auth, provider);
            alert('Sign-up with Google successful! Redirecting to home page.');
            window.location.href = '/index.html';
        } catch (error) {
            console.error("Error with Google signup:", error.message);
            alert(`Error with Google signup: ${error.message}`);
        }
    });

    /*const loginButton = document.getElementById('login-btn');

    if (!loginButton) {
        console.error('Login button not found!');
    }
    
    // Log-in with Email and Password
    loginButton.addEventListener('click', async () => {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Login successful! Redirecting to home page.');
            window.location.href = '/index.html';
        } catch (error) {
            console.error("Error logging in:", error.message);
            alert(`Error logging in: ${error.message}`);
        }
    });*/

    // Log to verify if the button is found
const loginButton = document.getElementById('login-btn');

if (!loginButton) {
    alert('Login button not found!');
} else {
    alert('Login button found!');

    // Log-in with Email and Password
    loginButton.addEventListener('click', async () => {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (!email || !password) {
            alert('Please fill out both email and password.');
            return;
        }

        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            alert('Login successful! Redirecting to home page.');
            window.location.href = '/index.html'; // Redirect to home page
        } catch (error) {
            console.error("Error logging in:", error.message);
            alert(`Error logging in: ${error.message}`);
        }
    });
}

})
