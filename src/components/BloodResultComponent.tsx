import React from 'react';

const bloodResults = [
    {
        id: 1,
        image: './media/beds.jpg',
        hospitalName: 'City Hospital',
        bloodGroup: 'A+',
        address: '123 City St, City, Country',
        price: '$100 per unit',
        tags: ['Available', 'Government'],
    },
    {
        id: 2,
        image: './media/beds.jpg',
        hospitalName: 'General Hospital',
        bloodGroup: 'O-',
        address: '456 Town St, Town, Country',
        price: '$150 per unit',
        tags: ['Available', 'Private'],
    },
    {
        id: 3,
        image: './media/beds.jpg',
        hospitalName: 'Sunshine Hospital',
        bloodGroup: 'B+',
        address: '789 Health Ave, Metro, Country',
        price: '$120 per unit',
        tags: ['Available', 'Government'],
    },
    {
        id: 4,
        image: './media/beds.jpg',
        hospitalName: 'Hope Care Center',
        bloodGroup: 'O+',
        address: '321 Hope Blvd, Town, Country',
        price: '$110 per unit',
        tags: ['Available', 'Private'],
    },
    {
        id: 5,
        image: './media/beds.jpg',
        hospitalName: 'Green Valley Hospital',
        bloodGroup: 'AB+',
        address: '654 Valley Road, Green City, Country',
        price: '$130 per unit',
        tags: ['Available', 'Government'],
    },
    {
        id: 6,
        image: './media/beds.jpg',
        hospitalName: 'HealthFirst Hospital',
        bloodGroup: 'A-',
        address: '789 Wellness St, Big City, Country',
        price: '$140 per unit',
        tags: ['Available', 'Private'],
    },
    {
        id: 7,
        image: './media/beds.jpg',
        hospitalName: 'MetroCare Hospital',
        bloodGroup: 'B-',
        address: '321 Central Ave, Metro City, Country',
        price: '$160 per unit',
        tags: ['Available', 'Government'],
    }
];



function BloodResultComponent() {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-3xl font-semibold text-gray-900 text-center dark:text-gray-100 mb-4">Blood Availability</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bloodResults.map(result => (
                    <div key={result.id} className="border rounded-lg overflow-hidden shadow-md">
                        <img
                            src={result.image}
                            alt={result.hospitalName}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{result.hospitalName}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Blood Group: {result.bloodGroup}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{result.address}</p>
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mt-2">{result.price}</p>
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

export default BloodResultComponent;
