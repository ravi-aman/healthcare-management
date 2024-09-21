import HealthDataForm from '@/components/ShareData';
import React from 'react';

const backgroundImage = '/media/beds.jpg';

function BloodHeader() {
    return (
        <header
            className="flex flex-col justify-center items-center w-full min-h-screen bg-cover bg-center relative overflow-hidden"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 w-full max-w-4xl p-6 text-center text-white">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8">
                    Share your data with full Privacy
                </h1>
                <p className="mt-2 text-lg md:text-xl lg:text-2xl dark:text-gray-300 mb-12">
                    Securely submit your health data and get rewarded with tokens while maintaining your privacy.
                </p>

                {/* Form */}
                <div className="w-full bg-white p-8 rounded-lg shadow-lg max-w-[1000px] mx-auto text-black">
                    <HealthDataForm />
                </div>
            </div>
        </header>
    );
}

export default BloodHeader;
