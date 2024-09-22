"use client";

import { useState, useEffect, useRef } from "react";
import { FaBell } from "react-icons/fa";
import gsap from "gsap";

interface Notification {
    title: string;
    message: string;
    time: string;
}

const notificationsData: Notification[] = [
    {
        title: "Appointment Reminder",
        message: "You have an appointment scheduled for tomorrow at 10 AM.",
        time: "2 mins ago",
    },
    {
        title: "New Patient Registered",
        message: "A new patient has registered in your department.",
        time: "10 mins ago",
    },
    {
        title: "Medication Update",
        message: "The prescription for Patient ID 123 has been updated.",
        time: "30 mins ago",
    },
];

interface NavbarProps {
    onToggleSidebar: () => void;
    activePage: string;
}

const HospitalNavbar = ({ onToggleSidebar, activePage }: NavbarProps) => {
    const [showNotifications, setShowNotifications] = useState(false);
    const notificationRef = useRef<HTMLDivElement | null>(null);

    const toggleNotifications = () => {
        setShowNotifications((prev) => !prev);
    };

    useEffect(() => {
        if (showNotifications) {
            gsap.fromTo(notificationRef.current, 
                { opacity: 0, y: -10 }, 
                { opacity: 1, y: 0, duration: 0.3 }
            );
        }
    }, [showNotifications]);

    return (
        <header className="flex justify-between items-center bg-gray-800 text-white p-4 b-lg">
            <div className="flex items-center space-x-4">
                <button onClick={onToggleSidebar} className="hover:text-gray-400">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <h1 className="text-xl font-semibold">{activePage}</h1>
            </div>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <button onClick={toggleNotifications} className="relative hover:text-gray-400">
                        <FaBell size={28} />
                        <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                            {notificationsData.length > 9 ? "9+" : notificationsData.length}
                        </span>
                    </button>

                    {showNotifications && (
                        <div ref={notificationRef} className="absolute right-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg z-10">
                            <div className="max-h-60 overflow-y-auto">
                                {notificationsData.length > 0 ? (
                                    notificationsData.map((notification, index) => (
                                        <div key={index} className="p-2 border-b border-gray-200 hover:bg-gray-100">
                                            <h3 className="font-semibold">{notification.title}</h3>
                                            <p className="text-sm">{notification.message}</p>
                                            <span className="text-xs text-gray-500">{notification.time}</span>
                                        </div>
                                    ))
                                ) : (
                                    <div className="p-4 text-center">No notifications</div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <button className="hover:text-gray-400">Profile</button>
            </div>
        </header>
    );
};

export default HospitalNavbar;
