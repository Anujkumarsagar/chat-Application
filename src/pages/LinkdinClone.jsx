import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainPage from "../components/LinkdinComponents/MainPage/MainPage";

const LinkedinClone = () => {

    const [showDropdown, setShowDropdown] = useState(false);
    const [showMessaging, setShowMessaging] = useState(false);
    const [handlePopSearch, sethandlePopSearch] = useState(false)

    const toggleDropdown = () => setShowDropdown(!showDropdown);
    const toggleMessaging = () => setShowMessaging(!showMessaging);
    const togglePopSearch = () => {
        sethandlePopSearch(!handlePopSearch);
    };
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-white shadow relative p-4 flex justify-between items-center">
                <div className="flex items-center">

                    <span className="flex gap-2">
                        <img className="object-fill w-12 " src="https://cdn-icons-png.flaticon.com/256/11511/11511645.png" alt="Logo" />
                        <h1 className="text-blue-700 font-bold text-2xl">Courtess Residence</h1>
                    </span>
                    <input
                        type="text"
                        placeholder="Search"
                        className="ml-4 p-2 border rounded-lg w-64"
                    />
                </div>
                <nav className="flex space-x-4">
                    <a href="#" className="text-gray-700">
                        Home
                    </a>

                    <Link to="network" relative="path" className="text-gray-700">
                        My Network
                    </Link>
                    <a href="#" className="text-gray-700">
                        Cases
                    </a>
                    <a href="#" className="text-gray-700">
                        Messaging
                    </a>
                    <a href="#" className="text-gray-700">
                        Notifications
                    </a>
                    <div className="relative">
                        <a href="#" className="text-gray-700" onClick={toggleDropdown}>
                            Me
                        </a>
                        {showDropdown && (
                            <div className=" absolute z-20 right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                                <div className="p-2 border-b">
                                    <div className="flex items-center space-x-2">
                                        <img
                                            src="https://via.placeholder.com/50"
                                            alt="profile"
                                            className="rounded-full w-10 h-10"
                                        />
                                        <div>
                                            <div className="font-bold">Anuj Kumar</div>
                                            <div className="text-sm text-gray-500">ABSS INSTITUTE OF TECHNOLOGY</div>
                                        </div>
                                    </div>
                                    <a href="#" className="block mt-2 text-blue-500 text-center">View Profile</a>
                                </div>
                                <div className="p-2 border-b">
                                    <a href="#" className="block text-gray-700">Try 1 month of Premium for ₹0</a>
                                    <a href="#" className="block text-gray-700">Settings & Privacy</a>
                                    <a href="#" className="block text-gray-700">Help</a>
                                    <a href="#" className="block text-gray-700">Language</a>
                                </div>
                                <div className="p-2">
                                    <a href="#" className="block text-gray-700">Posts & Activity</a>
                                    <a href="#" className="block text-gray-700">Job Posting Account</a>
                                    <a href="#" className="block text-gray-700">Sign Out</a>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </header>
            <MainPage />

        </div>
    );
};

export default LinkedinClone;
