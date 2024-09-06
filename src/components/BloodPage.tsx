import React from 'react';
import BloodFilterComponent from './BloodFilterComponent';
import BloodResultComponent from './BloodResultComponent';

function BloodPage() {
    return (
        <div className="flex flex-col justify-between w-screen md:flex-row gap-10 p-6">
            <div className="w-full md:w-1/4">
                <BloodFilterComponent />
            </div>
            <div className="w-full md:w-3/4">
                <BloodResultComponent />
            </div>
        </div>
    );
}

export default BloodPage;
