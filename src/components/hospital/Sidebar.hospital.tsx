import { FaHome, FaUserInjured, FaCalendarAlt, FaPills } from "react-icons/fa";

interface SidebarProps {
    isOpen: boolean;
    onPageChange: (page: string) => void;
}

const HospitalSidebar = ({ isOpen, onPageChange }: SidebarProps) => {
    const handlePageClick = (page: string) => {
        onPageChange(page);
    };

    return (
        <aside className="flex flex-col items-center justify-between h-full py-4">
            <div className="flex flex-col items-center w-full">
                <div className={`p-4 ${isOpen ? "text-2xl font-bold" : "hidden"}`}>
                    Logo
                </div>

                <nav className="mt-10 w-full space-y-2">
                    <button
                        onClick={() => handlePageClick("Dashboard")}
                        className="flex items-center p-3 w-full hover:bg-gray-700 transition-colors rounded-md"
                    >
                        <FaHome size={20} />
                        {isOpen && <span className="ml-3">Dashboard</span>}
                    </button>

                    <button
                        onClick={() => handlePageClick("Patients")}
                        className="flex items-center p-3 w-full hover:bg-gray-700 transition-colors rounded-md"
                    >
                        <FaUserInjured size={20} />
                        {isOpen && <span className="ml-3">Patients</span>}
                    </button>

                    <button
                        onClick={() => handlePageClick("Appointments")}
                        className="flex items-center p-3 w-full hover:bg-gray-700 transition-colors rounded-md"
                    >
                        <FaCalendarAlt size={20} />
                        {isOpen && <span className="ml-3">Appointments</span>}
                    </button>

                    <button
                        onClick={() => handlePageClick("Medicines")}
                        className="flex items-center p-3 w-full hover:bg-gray-700 transition-colors rounded-md"
                    >
                        <FaPills size={20} />
                        {isOpen && <span className="ml-3">Medicines</span>}
                    </button>
                </nav>
            </div>
        </aside>
    );
};

export default HospitalSidebar;