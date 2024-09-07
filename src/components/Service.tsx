import React from 'react';
import { FaBed, FaTint, FaLungs, FaCalendarCheck, FaPills, FaEllipsisH } from 'react-icons/fa'; // Importing icons

function Service() {
    const services = [
        { icon: <FaBed />, title: 'Check Available Beds', description: 'Find and reserve available hospital beds.' },
        { icon: <FaTint />, title: 'Check for Blood', description: 'Check for blood availability in your nearby hospitals.' },
        { icon: <FaLungs />, title: 'Check Oxygen Cylinders', description: 'Check and order oxygen cylinders for emergency use.' },
        { icon: <FaCalendarCheck />, title: 'Book Appointments', description: 'Easily book appointments with doctors and specialists.' },
        { icon: <FaPills />, title: 'Buy Medicines', description: 'Order medicines online from trusted pharmacies.' },
        { icon: <FaLungs />, title: 'Share Your Data', description: 'Share your data for research purposes and get exiting rewards or token ' },
    ];

    return (
        <div className="relative top-[-120px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
            {services.map((service, index) => (
                <div key={index} className="h-[200px] w-[350px] bg-black rounded-lg shadow-lg p-5 hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-gray-800">
                    <div className="flex flex-col items-center text-center text-white">
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-sm">{service.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Service;
