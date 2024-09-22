import { FaHome, FaUserInjured, FaCalendarAlt, FaPills, FaInbox, FaHospital, FaRobot, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion"; // Import for animations
import Link from 'next/link'; // Import Link from Next.js

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
        <motion.aside
            initial={{ width: 0 }}
            animate={{ width: isOpen ? 256 : 64 }} // 256px for open, 64px for closed
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 h-full py-4 overflow-y-auto bg-gray-800 text-white"
        >
            <div className="flex flex-col items-center w-full">
                <div className={`p-4 ${isOpen ? "text-2xl font-bold" : "hidden"}`}>
                    Logo
                </div>

                <nav className="mt-10 w-full space-y-2">
                    <motion.button
                        whileHover={{ scale: 1.05 }} // Scale effect on hover
                        onClick={() => { setDashboardOpen(!isDashboardOpen); handlePageClick("Dashboard"); }}
                        className="flex items-center p-3 w-full hover:bg-gray-700 transition-colors rounded-md"
                    >
                        <FaHome size={20} />
                        {isOpen && <span className="ml-3">Dashboard</span>}
                        {isOpen && <span className={`ml-auto transition-transform ${isDashboardOpen ? "rotate-180" : ""}`}>&#9660;</span>}
                    </motion.button>
                    {isDashboardOpen && isOpen && (
                        <div className="pl-6 space-y-1">
                            <Link href="/hospital/register" passHref>
                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: "#4b5563" }} // Change background on hover
                                    className="flex items-center p-2 w-full hover:bg-gray-600 rounded-md transition-colors"
                                    onClick={() => handlePageClick("Patient Registration")}
                                >
                                    <FaUserInjured size={16} />
                                    <span className="ml-2">Patient Registration</span>
                                </motion.button>
                            </Link>
                            <Link href="/hospital/patients" passHref>
                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: "#4b5563" }}
                                    className="flex items-center p-2 w-full hover:bg-gray-600 rounded-md transition-colors"
                                    onClick={() => handlePageClick("Patient Records")}
                                >
                                    <FaUserInjured size={16} />
                                    <span className="ml-2">Patient Records</span>
                                </motion.button>
                            </Link>
                            <Link href="#" passHref>
                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: "#4b5563" }}
                                    className="flex items-center p-2 w-full hover:bg-gray-600 rounded-md transition-colors"
                                    onClick={() => handlePageClick("Doctors")}
                                >
                                    <FaUserInjured size={16} />
                                    <span className="ml-2">Doctors</span>
                                </motion.button>
                            </Link>
                            <Link href="#" passHref>
                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: "#4b5563" }}
                                    className="flex items-center p-2 w-full hover:bg-gray-600 rounded-md transition-colors"
                                    onClick={() => handlePageClick("Appointments")}
                                >
                                    <FaCalendarAlt size={16} />
                                    <span className="ml-2">Appointments</span>
                                </motion.button>
                            </Link>
                            <Link href="#" passHref>
                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: "#4b5563" }}
                                    className="flex items-center p-2 w-full hover:bg-gray-600 rounded-md transition-colors"
                                    onClick={() => handlePageClick("Add Medicines")}
                                >
                                    <FaPills size={16} />
                                    <span className="ml-2">Add Medicines</span>
                                </motion.button>
                            </Link>
                        </div>
                    )}

                    <Link href="#" passHref>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#4b5563" }}
                            className="flex items-center p-3 w-full hover:bg-gray-700 transition-colors rounded-md"
                            onClick={() => handlePageClick("Hospital")}
                        >
                            <FaHospital size={20} />
                            {isOpen && <span className="ml-3">Hospitals</span>}
                        </motion.button>
                    </Link>

                    <Link href="#" passHref>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#4b5563" }}
                            className="flex items-center p-3 w-full hover:bg-gray-700 transition-colors rounded-md"
                            onClick={() => handlePageClick("Inbox")}
                        >
                            <FaInbox size={20} />
                            {isOpen && <span className="ml-3">Inbox</span>}
                        </motion.button>
                    </Link>

                    <Link href="#" passHref>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#4b5563" }}
                            className="flex items-center p-3 w-full hover:bg-gray-700 transition-colors rounded-md"
                            onClick={() => handlePageClick("Ask AI")}
                        >
                            <FaRobot size={20} />
                            {isOpen && <span className="ml-3">Ask AI</span>}
                        </motion.button>
                    </Link>

                    <Link href="#" passHref>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#4b5563" }}
                            className="flex items-center p-3 w-full hover:bg-gray-700 transition-colors rounded-md"
                            onClick={() => handlePageClick("Profile")}
                        >
                            <FaUserInjured size={20} />
                            {isOpen && <span className="ml-3">Profile</span>}
                        </motion.button>
                    </Link>

                    <Link href="#" passHref>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#4b5563" }}
                            className="flex items-center p-3 w-full hover:bg-gray-700 transition-colors rounded-md"
                            onClick={() => handlePageClick("Shop")}
                        >
                            <FaShoppingCart size={20} />
                            {isOpen && <span className="ml-3">Shop</span>}
                        </motion.button>
                    </Link>
                </nav>
            </div>
        </motion.aside>
    );
};

export default HospitalSidebar;
