import React from 'react';
import Link from 'next/link'; // Import Next.js Link for client-side navigation
import { FaBed, FaTint, FaLungs, FaCalendarCheck, FaPills } from 'react-icons/fa'; // Importing icons

function Service() {
    const services = [
        { icon: <FaBed />, title: 'Check Available Beds', description: 'Find and reserve available hospital beds.', link: '/beds' },
        { icon: <FaTint />, title: 'Check for Blood', description: 'Check for blood availability in your nearby hospitals.', link: '/blood' },
        { icon: <FaLungs />, title: 'Check Oxygen Cylinders', description: 'Check and order oxygen cylinders for emergency use.', link: '/oxygen' },
        { icon: <FaCalendarCheck />, title: 'Book Appointments', description: 'Easily book appointments with doctors and specialists.', link: '/appointments' },
        { icon: <FaPills />, title: 'Buy Medicines', description: 'Order medicines online from trusted pharmacies.', link: '/medicines' },
        { icon: <FaLungs />, title: 'Share Your Data', description: 'Share your data for research purposes and get exciting rewards or tokens.', link: '/sharedata' },
    ];

    return (
        <div className="relative top-[-120px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
            {services.map((service, index) => (
                <Link key={index} href={service.link} passHref>
                    <div className="cursor-pointer h-[200px] w-[350px] bg-black rounded-lg shadow-lg p-5 hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-gray-800">
                        <div className="flex flex-col items-center text-center text-white">
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-sm">{service.description}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Service;
