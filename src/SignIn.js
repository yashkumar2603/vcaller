import React, { useEffect, useState } from 'react';
import { auth, provider } from "./utils/firebase";
import { signInWithPopup } from "firebase/auth";
import { FaGoogle } from 'react-icons/fa';
import Home from "./Home";
import Navbar from "./components/Navbar";
import conf from "../src/assets/conf.jpg";

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

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []);

    if (email) {
        return <Home />;
    }

    return (
        <div className="relative h-screen overflow-hidden">
            {/* Navbar */}
            <div className="relative z-30">
                <Navbar />
            </div>
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <img src={conf} className="object-cover w-full h-full" alt="background image" />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-90 z-10"></div>
            {/* Content */}
            <div className="relative flex flex-col items-center justify-center min-h-screen z-20 px-4">
                {/* Title and Subtitle */}
                <div className="flex flex-col items-center justify-center pb-8">
                    <h1 className="text-[40px] md:text-[60px] lg:text-[80px] text-white font-bold pt-12 text-center">
                        Video Conferencing App
                    </h1>
                    <p className="text-[20px] md:text-[24px] lg:text-[26px] text-white -mt-2 text-center">
                        By Yash Kumar
                    </p>
                </div>
                {/* Sign-In Block */}
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
