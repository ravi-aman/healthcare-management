import React from 'react';

function FilterComponent() {
    return (
        <div className="bg-slate-100 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Filters</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="hospitalName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Hospital Name</label>
                    <input
                        id="hospitalName"
                        type="text"
                        placeholder="Search by hospital name"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="facilityType" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Facility Type</label>
                    <select
                        id="facilityType"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600"
                    >
                        <option>All Facilities</option>
                        <option>ICU</option>
                        <option>General Ward</option>
                        <option>Private Room</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Price Range</label>
                    <input
                        id="priceRange"
                        type="range"
                        min="0"
                        max="10000"
                        step="100"
                        className="w-full"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="equipment" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Equipment</label>
                    <input
                        id="equipment"
                        type="text"
                        placeholder="Search by equipment"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
                >
                    Apply Filters
                </button>
            </form>
        </div>
    );
}

export default FilterComponent;
