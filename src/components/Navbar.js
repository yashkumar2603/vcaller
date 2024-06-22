import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
    return (
        <div className="bg-black/90">
            <div className=" h-[5rem] flex items-center justify-between px-4 md:max-w-[90vw] mx-auto">
                {/* Left */}
                <div className="flex items-center">
                    <div className="flex w-[3rem] h-[3rem] bg-white rounded-full">
                        <img src={logo} alt="logo" className="object-cover " />
                    </div>
                    <div className="text-white font-bold">
                        <p className="text-[21px] pl-2">VCaller</p>
                    </div>
                </div>

                {/* Right */}
                <div className="mr-10">
                    <ul className="text-white flex items-center gap-1">
                        <li>Built with</li>
                        <li> NextJS</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;