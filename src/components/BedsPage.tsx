import React from 'react';
import FilterComponent from './FilterComponent';
import ResultComponent from './ResultComponent';

function BedsPage() {
    return (
        <div className="flex flex-col justify-between w-screen md:flex-row gap-10 p-6">
            <div className="w-full md:w-1/4">
                <FilterComponent />
            </div>
            <div className="w-full md:w-3/4">
                <ResultComponent />
            </div>
        </div>
    );
}

export default BedsPage;
