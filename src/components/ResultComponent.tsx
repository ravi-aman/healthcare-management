import React from 'react';

const results = [
    {
        id: 1,
        image: './media/imgh1.jpg',
        hospitalName: 'Example Hospital',
        facilityName: 'ICU',
        address: '123 Main St, City, Country',
        price: '$500 per day',
        equipment: 'Ventilator, ECG Monitor',
        tags: ['Available', 'High Quality'],
    },
    {
        id: 178,
        image: './media/imgh1.jpg',
        hospitalName: 'Dindyal Hospital',
        facilityName: 'ICU',
        address: 'dindyal hospital janakpuri',
        price: 'free',
        equipment: 'Ventilator, ECG Monitor',
        tags: ['Available', 'Avg Quality','Government'],
    },
    {
        id: 178,
        image: './media/imgh1.jpg',
        hospitalName: 'Dindyal Hospital',
        facilityName: 'ICU',
        address: 'dindyal hospital janakpuri',
        price: 'free',
        equipment: 'Ventilator, ECG Monitor',
        tags: ['Available', 'Avg Quality','Government'],
    },
    {
        id: 178,
        image: './media/imgh1.jpg',
        hospitalName: 'Dindyal Hospital',
        facilityName: 'ICU',
        address: 'dindyal hospital janakpuri',
        price: 'free',
        equipment: 'Ventilator, ECG Monitor',
        tags: ['Available', 'Avg Quality','Government'],
    },
];

function ResultComponent() {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-3xl font-semibold text-gray-900 text-center dark:text-gray-100 mb-4">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map(result => (
                    <div key={result.id} className="border rounded-lg overflow-hidden shadow-md">
                        <img
                            src={result.image}
                            alt={result.hospitalName}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{result.hospitalName}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{result.facilityName}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{result.address}</p>
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mt-2">{result.price}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{result.equipment}</p>
                            <div className="flex flex-wrap mt-2">
                                {result.tags.map(tag => (
                                    <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ResultComponent;
