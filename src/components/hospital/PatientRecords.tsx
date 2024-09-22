// PatientRecords.tsx

"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Line, Pie } from "react-chartjs-2";
import { useTable } from "react-table";
import { sampleRecords, PatientRecord } from "./PatientData";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from "chart.js";

// Register the necessary components for charts
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const PatientRecords = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredRecords: PatientRecord[] = sampleRecords.filter(record =>
        record.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Updated columns definition for table if needed later
    const columns = React.useMemo(
        () => [
            { Header: "Medication", accessor: "medication" as const },
            { Header: "Dosage", accessor: "dosage" as const },
            { Header: "Frequency", accessor: "frequency" as const },
        ],
        []
    );

    const data = React.useMemo(
        () => [
            { medication: "Albuterol", dosage: "90 mcg", frequency: "As needed" },
            { medication: "Lisinopril", dosage: "10 mg", frequency: "Daily" },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    });

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-3xl font-semibold mb-6">Patient Records</h1>
            <div className="mb-4">
                <div className="relative">
                    <input
                        type="text"
                        className="border rounded-md py-2 pl-10 pr-4 w-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        placeholder="Search by patient name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {filteredRecords.map(record => {
                    // Prepare data for blood pressure chart specific to the patient
                    const bloodPressureData = {
                        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                        datasets: [
                            {
                                label: "Blood Pressure",
                                data: record.vitalSigns.bloodPressure, // Use the patient's specific blood pressure data
                                fill: false,
                                backgroundColor: "rgba(75, 192, 192, 0.2)",
                                borderColor: "rgba(75, 192, 192, 1)",
                                borderWidth: 1,
                            },
                        ],
                    };

                    // Prepare data for medication adherence specific to the patient
                    const medicationAdherenceData = {
                        labels: ["Adhered", "Not Adhered"],
                        datasets: [
                            {
                                data: record.medicationAdherenceData, // Use the patient's specific adherence data
                                backgroundColor: ["#36A2EB", "#FF6384"],
                                hoverBackgroundColor: ["#36A2EB", "#FF6384"],
                            },
                        ],
                    };

                    return (
                        <div key={record.id} className="border border-gray-300 rounded-lg bg-white shadow p-4">
                            <h2 className="text-xl font-bold text-blue-600">{record.fullName}</h2>
                            <p><strong>Date of Birth:</strong> {record.dateOfBirth}</p>
                            <p><strong>Gender:</strong> {record.gender}</p>
                            <p><strong>Address:</strong> {record.address}</p>
                            <p><strong>Phone:</strong> {record.phoneNumber}</p>
                            <p><strong>Email:</strong> {record.email}</p>
                            <p><strong>Emergency Contact:</strong> {record.emergencyContact}</p>

                            <h3 className="font-semibold mt-4 text-lg">Medical History</h3>
                            <ul className="list-disc list-inside">
                                {record.medicalHistory.map((history, index) => (
                                    <li key={index} className="text-gray-700">{history}</li>
                                ))}
                            </ul>

                            <h3 className="font-semibold mt-4 text-lg">Allergies</h3>
                            <ul className="list-disc list-inside">
                                {record.allergies.map((allergy, index) => (
                                    <li key={index} className="text-gray-700">{allergy}</li>
                                ))}
                            </ul>

                            <h3 className="font-semibold mt-4 text-lg">Current Medications</h3>
                            <ul className="list-disc list-inside">
                                {record.currentMedications.map((medication, index) => (
                                    <li key={index} className="text-gray-700">{medication}</li>
                                ))}
                            </ul>

                            <h3 className="font-semibold mt-4 text-lg">Vital Signs</h3>
                            <p><strong>Height:</strong> {record.vitalSigns.height}</p>
                            <p><strong>Weight:</strong> {record.vitalSigns.weight}</p>
                            <p><strong>Blood Pressure:</strong> {record.vitalSigns.bloodPressure}</p>
                            <p><strong>Heart Rate:</strong> {record.vitalSigns.heartRate}</p>
                            <p><strong>Respiratory Rate:</strong> {record.vitalSigns.respiratoryRate}</p>
                            <p><strong>Temperature:</strong> {record.vitalSigns.temperature}</p>

                            {/* Charts Section */}
                            <div className="mt-6">
                                <h3 className="font-semibold text-lg">Blood Pressure Over Time</h3>
                                <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                                    <Line data={bloodPressureData} height={100} options={{ responsive: true }} />
                                </div>

                                <h3 className="font-semibold text-lg">Medication Adherence</h3>
                                <div className="bg-white p-4 rounded-lg shadow-md">
                                    <Pie data={medicationAdherenceData} height={100} options={{ responsive: true }} />
                                </div>
                            </div>

                            <h3 className="font-semibold mt-4 text-lg">Physical Examination</h3>
                            <p>{record.physicalExamination}</p>

                            <h3 className="font-semibold mt-4 text-lg">Diagnostic Tests</h3>
                            <ul className="list-disc list-inside">
                                {record.diagnosticTests.map((test, index) => (
                                    <li key={index} className="text-gray-700">{test}</li>
                                ))}
                            </ul>

                            <h3 className="font-semibold mt-4 text-lg">Treatment Plans</h3>
                            <ul className="list-disc list-inside">
                                {record.treatmentPlans.map((plan, index) => (
                                    <li key={index} className="text-gray-700">{plan}</li>
                                ))}
                            </ul>

                            <h3 className="font-semibold mt-4 text-lg">Progress Notes</h3>
                            <ul className="list-disc list-inside">
                                {record.progressNotes.map((note, index) => (
                                    <li key={index} className="text-gray-700">{note}</li>
                                ))}
                            </ul>

                            <h3 className="font-semibold mt-4 text-lg">Consent Forms</h3>
                            <ul className="list-disc list-inside">
                                {record.consentForms.map((form, index) => (
                                    <li key={index} className="text-gray-700">{form}</li>
                                ))}
                            </ul>

                            <h3 className="font-semibold mt-4 text-lg">Surgical History</h3>
                            <ul className="list-disc list-inside">
                                {record.surgicalHistory.map((surgery, index) => (
                                    <li key={index} className="text-gray-700">{surgery}</li>
                                ))}
                            </ul>

                            <h3 className="font-semibold mt-4 text-lg">Social History</h3>
                            <p>{record.socialHistory}</p>

                            <h3 className="font-semibold mt-4 text-lg">Mental Health History</h3>
                            <ul className="list-disc list-inside">
                                {record.mentalHealthHistory.map((mhHistory, index) => (
                                    <li key={index} className="text-gray-700">{mhHistory}</li>
                                ))}
                            </ul>

                            <h3 className="font-semibold mt-4 text-lg">Reproductive Health</h3>
                            <p>{record.reproductiveHealth}</p>

                            <h3 className="font-semibold mt-4 text-lg">Insurance Information</h3>
                            <p><strong>Provider:</strong> {record.insuranceInfo.provider}</p>
                            <p><strong>Policy Number:</strong> {record.insuranceInfo.policyNumber}</p>
                            <p><strong>Group Number:</strong> {record.insuranceInfo.groupNumber}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PatientRecords;
