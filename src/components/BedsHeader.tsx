import React from 'react';
import BedSearchForm from './BedsSearchForm';

// Correct the background image path
const backgroundImage = '/media/doctor.jpg';

function BedsHeader() {
    return (
        <header 
            className="flex flex-col justify-between md:flex-row items-center gap-10 w-full min-h-screen bg-cover bg-center relative overflow-hidden"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative flex-1 mx-20 p-6 rounded-lg shadow-md text-white">
                <h1 className="text-7xl font-extrabold text-white dark:text-gray-100">
                    Find Available Beds
                </h1>
                <p className="mt-2 text-3xl  dark:text-gray-300">
                    Search for available beds in your area quickly and efficiently.
                </p>
            </div>

            <div className="relative flex-1 mt-4 md:mt-0">
                <BedSearchForm />
            </div>
        </header>
    );
}

export default BedsHeader;
