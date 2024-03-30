// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfbp7lyJxzOpb4i67a9oO19yuLNgEcDu0",
    authDomain: "user-email-password-auth-fd1ca.firebaseapp.com",
    projectId: "user-email-password-auth-fd1ca",
    storageBucket: "user-email-password-auth-fd1ca.appspot.com",
    messagingSenderId: "279172638497",
    appId: "1:279172638497:web:618d43e437813bbae4c060"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;