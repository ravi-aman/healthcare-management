import { FaHome, FaUserInjured, FaCalendarAlt, FaPills, FaInbox, FaHospital, FaRobot, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion"; // Import for animations

interface SidebarProps {
    isOpen: boolean;
    onPageChange: (page: string) => void;
}

const HospitalSidebar = ({ isOpen, onPageChange }: SidebarProps) => {
    const [isDashboardOpen, setDashboardOpen] = useState(false);
    const handlePageClick = (page: string) => {
        onPageChange(page);
    };

    return (
        <aside className={`fixed top-0 left-0 h-full py-4 overflow-y-auto bg-gray-800 text-white ${isOpen ? "w-64" : "w-16"} transition-width`}>
            <div className="flex flex-col items-center w-full">
                <div className={`p-4 ${isOpen ? "text-2xl font-bold" : "hidden"}`}>
                    Logo
                </div>

                <nav className="mt-10 w-full space-y-2">
                    <motion.button
                        onClick={() => { setDashboardOpen(!isDashboardOpen); handlePageClick("Dashboard"); }}
                        className="flex items-center p-3 w-full hover:bg-gray-700 transition-colors rounded-md"
                    >
                        <FaHome size={20} />
                        {isOpen && <span className="ml-3">Dashboard</span>}
                        {isOpen && <span className={`ml-auto transition-transform ${isDashboardOpen ? "rotate-180" : ""}`}>&#9660;</span>}
                    </motion.button>
                    {isDashboardOpen && isOpen && (
                        <div className="pl-6 space-y-1">
                            <button onClick={() => handlePageClick("Patient Registration")} className="flex items-center p-2 w-full hover:bg-gray-600 rounded-md">
                                <FaUserInjured size={16} />
                                <span className="ml-2">Patient Registration</span>
                            </button>
                            <button onClick={() => handlePageClick("Patient Records")} className="flex items-center p-2 w-full hover:bg-gray-600 rounded-md">
                                <FaUserInjured size={16} />
                                <span className="ml-2">Patient Records</span>
                            </button>
                            <button onClick={() => handlePageClick("Doctors")} className="flex items-center p-2 w-full hover:bg-gray-600 rounded-md">
                                <FaUserInjured size={16} />
                                <span className="ml-2">Doctors</span>
                            </button>
                            <button onClick={() => handlePageClick("Appointments")} className="flex items-center p-2 w-full hover:bg-gray-600 rounded-md">
                                <FaCalendarAlt size={16} />
                                <span className="ml-2">Appointments</span>
                            </button>
                            <button onClick={() => handlePageClick("Add Medicines")} className="flex items-center p-2 w-full hover:bg-gray-600 rounded-md">
                                <FaPills size={16} />
                                <span className="ml-2">Add Medicines</span>
                            </button>
                        </div>
                    )}

                    <button
                        onClick={() => handlePageClick("Hospital")}
                        className="flex items-center p-3 w-full hover:bg-gray-700 transition-colors rounded-md"
                    >
                        <FaHospital size={20} />
                        {isOpen && <span className="ml-3">Hospitals</span>}
                    </button>

                    <button
                        onClick={() => handlePageClick("Inbox")}
                        className="flex items-center p-3 w-full hover:bg-gray-700 transition-colors rounded-md"
                    >
                        <FaInbox size={20} />
                        {isOpen && <span className="ml-3">Inbox</span>}
                    </button>

                    <button
                        onClick={() => handlePageClick("Ask AI")}
                        className="flex items-center p-3 w-full hover:bg-gray-700 transition-colors rounded-md"
                    >
                        <FaRobot size={20} />
                        {isOpen && <span className="ml-3">Ask AI</span>}
                    </button>

                    <button
                        onClick={() => handlePageClick("Profile")}
                        className="flex items-center p-3 w-full hover:bg-gray-700 transition-colors rounded-md"
                    >
                        <FaUserInjured size={20} />
                        {isOpen && <span className="ml-3">Profile</span>}
                    </button>

                    <button
                        onClick={() => handlePageClick("Shop")}
                        className="flex items-center p-3 w-full hover:bg-gray-700 transition-colors rounded-md"
                    >
                        <FaShoppingCart size={20} />
                        {isOpen && <span className="ml-3">Shop</span>}
                    </button>
                </nav>
            </div>
        </aside>
    );
};

export default HospitalSidebar;
