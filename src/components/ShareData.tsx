'use client'; // Mark this component as a Client Component

import React, { useState } from 'react';

const HealthDataForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        gender: '',
        height: '',
        weight: '',
        bloodType: '',
        allergies: '',
        medications: '',
        chronicConditions: '',
        surgeries: '',
        lifestyle: '',
        consentResearch: false,
        consentContact: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        // Handle checkboxes properly
        if (type === 'checkbox') {
            const { checked } = e.target as HTMLInputElement;
            setFormData({
                ...formData,
                [name]: checked,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form data submitted: ', formData);
        // Here you can send formData to your server or API
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form className="w-full p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
                <h2 className="text-4xl font-bold mb-6 text-center">Health Data Submission Form</h2>

                {/* Name */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                        placeholder="Enter your full name"
                        required
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                {/* Age */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                        placeholder="Enter your age"
                        required
                    />
                </div>

                {/* Gender */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="gender">Gender</label>
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Height */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="height">Height (cm)</label>
                    <input
                        type="number"
                        id="height"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                        placeholder="Enter your height"
                        required
                    />
                </div>

                {/* Weight */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="weight">Weight (kg)</label>
                    <input
                        type="number"
                        id="weight"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                        placeholder="Enter your weight"
                        required
                    />
                </div>

                {/* Blood Type */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="bloodType">Blood Type</label>
                    <select
                        id="bloodType"
                        name="bloodType"
                        value={formData.bloodType}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                        required
                    >
                        <option value="">Select Blood Type</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                    </select>
                </div>

                {/* Allergies */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="allergies">Allergies</label>
                    <textarea
                        id="allergies"
                        name="allergies"
                        value={formData.allergies}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                        placeholder="List any known allergies"
                    />
                </div>

                {/* Medications */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="medications">Medications</label>
                    <textarea
                        id="medications"
                        name="medications"
                        value={formData.medications}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                        placeholder="List current medications"
                    />
                </div>

                {/* Chronic Conditions */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="chronicConditions">Chronic Conditions</label>
                    <textarea
                        id="chronicConditions"
                        name="chronicConditions"
                        value={formData.chronicConditions}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                        placeholder="List any chronic conditions"
                    />
                </div>

                {/* Surgeries */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="surgeries">Surgeries</label>
                    <textarea
                        id="surgeries"
                        name="surgeries"
                        value={formData.surgeries}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                        placeholder="List any surgeries you've had"
                    />
                </div>

                {/* Lifestyle */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="lifestyle">Lifestyle (smoking, alcohol, exercise)</label>
                    <textarea
                        id="lifestyle"
                        name="lifestyle"
                        value={formData.lifestyle}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                        placeholder="Describe your lifestyle habits"
                    />
                </div>

                {/* Consent */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Consent</label>
                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id="consentResearch"
                            name="consentResearch"
                            checked={formData.consentResearch}
                            onChange={handleChange}
                            className="mr-2"
                            required
                        />
                        <label htmlFor="consentResearch">I consent to share my data for research purposes</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="consentContact"
                            name="consentContact"
                            checked={formData.consentContact}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label htmlFor="consentContact">I agree to be contacted for further research participation</label>
                    </div>
                </div>

                {/* Submit */}
                <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg">
                    Submit Data
                </button>
            </form>
        </div>
    );
};

export default HealthDataForm;
