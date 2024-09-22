"use client";

import { useState } from "react";
import HospitalSidebar from "./Sidebar.hospital";
import HospitalNavbar from "./Navbar.hospital";

interface LayoutProps {
    children: React.ReactNode;
}

const HospitalDashboardLayout = ({ children }: LayoutProps) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [activePage, setActivePage] = useState("Dashboard");

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handlePageChange = (page: string) => {
        setActivePage(page);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`bg-gray-800 text-white transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-16"
                    } h-screen flex flex-col`}
            >
                <HospitalSidebar isOpen={isSidebarOpen} onPageChange={handlePageChange} />
            </div>

            {/* Main content area */}
            <div className="flex-1">
                <HospitalNavbar onToggleSidebar={toggleSidebar} activePage={activePage} />
                <main className="p-4 bg-gray-100 min-h-screen rounded-lg">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default HospitalDashboardLayout;