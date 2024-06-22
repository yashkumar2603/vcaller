import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import conf from "../src/assets/conf.jpg";
import Navbar from "./components/Navbar";

const Home = () => {
    const [RoomCode, setRoomCode] = useState("");
    const navigate = useNavigate();

    const joinRoom = (e) => {
        e.preventDefault();
        if (RoomCode.trim() === "") {
            navigate("/empty");
        } else {
            navigate(`/room/${RoomCode}`);
        }
    };

    const createRoom = () => {
        navigate("/empty"); // Assuming this is where you want to generate the room code
    };

    const handleLogout = () => {
        localStorage.removeItem("email"); // Clear the email from localStorage
        navigate("/"); // Navigate to the sign-in page
    };

    return (
        <div className="">
            {/* Navbar */}
            <Navbar />
            {/* Logout Button */}
            <button
                onClick={handleLogout}
                className="absolute top-4 right-8 bg-red-500 hover:bg-red-300 text-white font-bold rounded-full py-3 px-4"
            >
                Logout
            </button>

            {/* Hero */}
            <div className="relative h-screen">
                {/* Image */}
                <div className="absolute h-full w-full flex overflow-hidden">
                    <img src={conf} className="object-cover w-full h-full" alt="background image" />
                </div>
                {/* Overlay */}
                <div className="absolute h-full w-full flex overflow-hidden bg-black/90"></div>
                {/* Hero Info */}
                <div className="lg:flex lg:pt-20 flex-col items-center justify-center relative z-10 px-6 md:max-w-[90vw] mx-auto">
                    {/* Main */}
                    <div className="flex flex-col items-center justify-center pb-8">
                        <h1 className="text-[50px] md:text-[80px] text-white font-bold pt-12">
                            Video Conferencing App
                        </h1>
                        <p className="text-[26px] text-white -mt-2">By Yash Kumar</p>
                    </div>

                    {/* Enter Code */}
                    <form
                        onSubmit={joinRoom}
                        className="text-white md:pt-12 flex flex-col items-center justify-center"
                    >
                        <div className="flex flex-col justify-center items-center">
                            <label className="text-[30px] md:text-[40px] font-bold pt-6">
                                Enter Room Code
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Room Code"
                                value={RoomCode}
                                onChange={(e) => setRoomCode(e.target.value)}
                                className="py-1.5 md:py-2 px-4 rounded-full max-w-[14rem] mt-2 text-black md:mt-6 outline-0"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-300 duration-100 ease-out font-bold rounded-full py-[5px] md:py-[7px] mt-2 md:mt-4 px-4 md:px-6"
                        >
                            Join Room
                        </button>
                    </form>
                    <label className="text-[20px] text-white md:text-[25px] pt-4">
                        Or
                    </label>
                    {/* Separate Create Room Button */}
                    <button
                        onClick={createRoom}
                        className="bg-green-500 hover:bg-green-300 duration-100 ease-out font-bold rounded-full py-[5px] md:py-[7px] mt-4 md:mt-6 px-4 md:px-6"
                    >
                        Create Room
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
