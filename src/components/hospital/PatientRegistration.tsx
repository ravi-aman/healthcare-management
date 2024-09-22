"use client"; // Marking this component as a Client Component

import React from 'react';
import { useForm } from 'react-hook-form';
import { PatientRecord } from './PatientData'; 
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Import from Shadcn
import { Textarea } from '@/components/ui/textarea'; // Import from Shadcn
import { Select } from '@/components/ui/select'; 
// import { Option } from '@/components/ui/ṣelect'; 

const PatientRegistration = () => {
    const { register, handleSubmit, reset } = useForm<PatientRecord>();

    const onSubmit = (data: PatientRecord) => {
        console.log(data);
        reset(); // Clear the form after submission
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-6"
            >
                <h2 className="text-2xl font-bold text-center text-gray-700">Patient Registration</h2>

                {/* Full Name */}
                <div className="form-field">
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <Input
                        {...register('fullName')}
                        required
                        className="transition-transform hover:scale-105"
                    />
                </div>

                {/* Date of Birth */}
                <div className="form-field">
                    <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <Input
                        type="date"
                        {...register('dateOfBirth')}
                        required
                        className="transition-transform hover:scale-105"
                    />
                </div>

                {/* Gender */}
                {/* <div className="form-field">
                    <label className="block text-sm font-medium text-gray-700">Gender</label>
                    <Select
                        {...register('gender')}
                        required
                        className="transition-transform hover:scale-105"
                    >
                        <Option value="">Select</Option>
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                        <Option value="Other">Other</Option>
                    </Select>
                </div> */}

                {/* Address */}
                <div className="form-field">
                    <label className="block text-sm font-medium text-gray-700">Address</label>
                    <Input
                        {...register('address')}
                        required
                        className="transition-transform hover:scale-105"
                    />
                </div>

                {/* Phone Number */}
                <div className="form-field">
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <Input
                        {...register('phoneNumber')}
                        required
                        className="transition-transform hover:scale-105"
                    />
                </div>

                {/* Email */}
                <div className="form-field">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <Input
                        type="email"
                        {...register('email')}
                        required
                        className="transition-transform hover:scale-105"
                    />
                </div>

                {/* Emergency Contact */}
                <div className="form-field">
                    <label className="block text-sm font-medium text-gray-700">Emergency Contact</label>
                    <Input
                        {...register('emergencyContact')}
                        required
                        className="transition-transform hover:scale-105"
                    />
                </div>

                {/* Medical History */}
                <div className="form-field">
                    <label className="block text-sm font-medium text-gray-700">Medical History</label>
                    <Textarea
                        {...register('medicalHistory')}
                        className="transition-transform hover:scale-105"
                    />
                </div>

                {/* Allergies */}
                <div className="form-field">
                    <label className="block text-sm font-medium text-gray-700">Allergies</label>
                    <Textarea
                        {...register('allergies')}
                        className="transition-transform hover:scale-105"
                    />
                </div>

                {/* Current Medications */}
                <div className="form-field">
                    <label className="block text-sm font-medium text-gray-700">Current Medications</label>
                    <Textarea
                        {...register('currentMedications')}
                        className="transition-transform hover:scale-105"
                    />
                </div>

                {/* Vital Signs */}
                <div className="form-field">
                    <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
                    <Input
                        {...register('vitalSigns.height')}
                        required
                        className="transition-transform hover:scale-105"
                    />
                </div>
                <div className="form-field">
                    <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
                    <Input
                        {...register('vitalSigns.weight')}
                        required
                        className="transition-transform hover:scale-105"
                    />
                </div>
                <div className="form-field">
                    <label className="block text-sm font-medium text-gray-700">Blood Pressure (mmHg)</label>
                    <Input
                        {...register('vitalSigns.bloodPressure')}
                        required
                        className="transition-transform hover:scale-105"
                    />
                </div>
                <div className="form-field">
                    <label className="block text-sm font-medium text-gray-700">Heart Rate (bpm)</label>
                    <Input
                        {...register('vitalSigns.heartRate')}
                        required
                        className="transition-transform hover:scale-105"
                    />
                </div>
                <div className="form-field">
                    <label className="block text-sm font-medium text-gray-700">Respiratory Rate (breaths/min)</label>
                    <Input
                        {...register('vitalSigns.respiratoryRate')}
                        required
                        className="transition-transform hover:scale-105"
                    />
                </div>
                <div className="form-field">
                    <label className="block text-sm font-medium text-gray-700">Temperature (°C)</label>
                    <Input
                        {...register('vitalSigns.temperature')}
                        required
                        className="transition-transform hover:scale-105"
                    />
                </div>

                {/* Physical Examination */}
                <div className="form-field">
                    <label className="block text-sm font-medium text-gray-700">Physical Examination</label>
                    <Textarea
                        {...register('physicalExamination')}
                        className="transition-transform hover:scale-105"
                    />
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
                >
                    Register Patient
                </Button>
            </form>
        </div>
    );
};

export default PatientRegistration;
