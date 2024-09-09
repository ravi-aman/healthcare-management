'use client'
import React, { useState } from 'react';

function BloodFilterComponent() {
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [bloodType, setBloodType] = useState('');
    const [availability, setAvailability] = useState('');

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPriceRange([0, parseInt(e.target.value)]);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Filters applied:", { priceRange, bloodType, availability });
    };

    return (
        <div className="bg-white dark:bg-black shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Filter Results</h2>
            <form onSubmit={handleSubmit}>
                {/* Blood Type Filter */}
                <div className="mb-4">
                    <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Blood Type</label>
                    <select
                        id="bloodType"
                        value={bloodType}
                        onChange={(e) => setBloodType(e.target.value)}
                        className="w-full mt-2 p-2 border rounded-md dark:bg-black dark:border-gray-700"
                    >
                        <option value="">Select Blood Type</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Price Range</label>
                    <input
                        id="priceRange"
                        type="range"
                        min="0"
                        max="1000"
                        step="50"
                        value={priceRange[1]}
                        onChange={handlePriceChange}
                        className="w-full"
                    />
                    <p className="text-gray-600 dark:text-gray-300">Up to ${priceRange[1]}</p>
                </div>

                {/* Availability Filter */}
                <div className="mb-4">
                    <label htmlFor="availability" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Available From</label>
                    <input
                        id="availability"
                        type="date"
                        value={availability}
                        onChange={(e) => setAvailability(e.target.value)}
                        className="w-full p-2 border rounded-md dark:bg-black dark:border-gray-700"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Apply Filters
                </button>
            </form>
        </div>
    );
}

export default BloodFilterComponent;
