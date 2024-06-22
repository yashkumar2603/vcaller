// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// Use environment variables to secure sensitive data
const firebaseConfig = {
    apiKey: "AIzaSyBigL9BzgZFsEzbyXSagPTkPv770gxMGao",
    authDomain: "vcaller-db411.firebaseapp.com",
    projectId: "vcaller-db411",
    storageBucket: "vcaller-db411.appspot.com",
    messagingSenderId: "229067193193",
    appId: "1:229067193193:web:1e112c568f6c9dd5085bf8",
    measurementId: "G-P0XGGHXGM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
