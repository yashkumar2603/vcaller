import React, { useEffect, useState } from 'react';
import { auth, provider } from "./utils/firebase";
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { FaGoogle, FaGithub } from 'react-icons/fa';
import Home from "./Home";
import Navbar from "./components/Navbar";

const githubProvider = new GithubAuthProvider();

function SignIn() {
    const [email, setEmail] = useState('');

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider).then((data) => {
            setEmail(data.user.email);
            localStorage.setItem("email", data.user.email);
        }).catch((error) => {
            console.error("Google Sign-in Error:", error);
        });
    };

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider).then((data) => {
            setEmail(data.user.email);
            localStorage.setItem("email", data.user.email);
        }).catch((error) => {
            console.error("GitHub Sign-in Error:", error);
        });
    };

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []);

    if (email) {
        return <Home />;  // Directly return Home component if user is authenticated
    }

    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
                    <div className="flex flex-col gap-4">
                        <button
                            onClick={handleGoogleSignIn}
                            className="flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                        >
                            <FaGoogle />
                            Sign In with Google
                        </button>
                        <button
                            onClick={handleGithubSignIn}
                            className="flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition"
                        >
                            <FaGithub />
                            Sign In with GitHub
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
