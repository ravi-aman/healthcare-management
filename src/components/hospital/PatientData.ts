// PatientData.ts

export interface PatientRecord {
    id: string;
    fullName: string;
    dateOfBirth: string;
    gender: string;
    address: string;
    phoneNumber: string;
    email: string;
    emergencyContact: string;
    medicalHistory: string[];
    allergies: string[];
    currentMedications: string[];
    vitalSigns: {
        height: string;
        weight: string;
        bloodPressure: string;
        heartRate: string;
        respiratoryRate: string;
        temperature: string;
        bloodPressureData: number[]; // Sample data for blood pressure over time
    };
    physicalExamination: string;
    diagnosticTests: string[];
    treatmentPlans: string[];
    progressNotes: string[];
    consentForms: string[];
    surgicalHistory: string[];
    socialHistory: string;
    mentalHealthHistory: string[];
    reproductiveHealth: string;
    insuranceInfo: {
        provider: string;
        policyNumber: string;
        groupNumber: string;
    };
    medicationAdherenceData: number[]; // Adherence data
}

// Sample Data
export const sampleRecords: PatientRecord[] = [
    {
        id: "1",
        fullName: "John Doe",
        dateOfBirth: "1990-01-01",
        gender: "Male",
        address: "123 Main St, Cityville",
        phoneNumber: "555-555-5555",
        email: "johndoe@example.com",
        emergencyContact: "Jane Doe - 555-123-4567",
        medicalHistory: ["Diabetes", "Hypertension"],
        allergies: ["Penicillin"],
        currentMedications: ["Metformin", "Lisinopril"],
        vitalSigns: {
            height: "180 cm",
            weight: "75 kg",
            bloodPressure: "120/80",
            heartRate: "72 bpm",
            respiratoryRate: "16 bpm",
            temperature: "98.6°F",
            bloodPressureData: [120, 125, 115, 130, 128],
        },
        physicalExamination: "Normal physical exam findings.",
        diagnosticTests: ["Blood glucose test", "ECG"],
        treatmentPlans: ["Diet modification", "Increase physical activity"],
        progressNotes: ["Blood sugar levels improving."],
        consentForms: ["Surgery consent form"],
        surgicalHistory: ["Appendectomy"],
        socialHistory: "Non-smoker, occasional alcohol use.",
        mentalHealthHistory: ["Mild anxiety"],
        reproductiveHealth: "Normal reproductive health.",
        insuranceInfo: {
            provider: "Health Insurance Co.",
            policyNumber: "12345678",
            groupNumber: "GRP123",
        },
        medicationAdherenceData: [85, 15],
    },
    {
        id: "2",
        fullName: "Alice Smith",
        dateOfBirth: "1985-05-15",
        gender: "Female",
        address: "456 Elm St, Townsville",
        phoneNumber: "555-555-1234",
        email: "alicesmith@example.com",
        emergencyContact: "Bob Smith - 555-321-9876",
        medicalHistory: ["Asthma"],
        allergies: ["Nuts"],
        currentMedications: ["Albuterol", "Singulair"],
        vitalSigns: {
            height: "165 cm",
            weight: "60 kg",
            bloodPressure: "110/70",
            heartRate: "68 bpm",
            respiratoryRate: "14 bpm",
            temperature: "98.7°F",
            bloodPressureData: [110, 112, 115, 108, 109],
        },
        physicalExamination: "Mild wheezing observed.",
        diagnosticTests: ["Pulmonary function test"],
        treatmentPlans: ["Use inhaler as needed", "Avoid allergens"],
        progressNotes: ["Asthma well-controlled."],
        consentForms: ["Routine checkup consent form"],
        surgicalHistory: [],
        socialHistory: "Non-smoker.",
        mentalHealthHistory: [],
        reproductiveHealth: "Normal reproductive health.",
        insuranceInfo: {
            provider: "Health First",
            policyNumber: "98765432",
            groupNumber: "GRP456",
        },
        medicationAdherenceData: [90, 10],
    },
    {
        id: "3",
        fullName: "Michael Johnson",
        dateOfBirth: "1978-08-20",
        gender: "Male",
        address: "789 Oak St, Villagetown",
        phoneNumber: "555-444-3333",
        email: "michaeljohnson@example.com",
        emergencyContact: "Sarah Johnson - 555-555-6666",
        medicalHistory: ["Heart Disease"],
        allergies: ["Aspirin"],
        currentMedications: ["Atenolol", "Statins"],
        vitalSigns: {
            height: "175 cm",
            weight: "85 kg",
            bloodPressure: "130/85",
            heartRate: "78 bpm",
            respiratoryRate: "15 bpm",
            temperature: "98.6°F",
            bloodPressureData: [135, 130, 128, 133, 130],
        },
        physicalExamination: "Cardiac exam normal.",
        diagnosticTests: ["Cholesterol test", "Stress test"],
        treatmentPlans: ["Dietary changes", "Regular exercise"],
        progressNotes: ["Cholesterol levels decreasing."],
        consentForms: ["Cardiac evaluation consent form"],
        surgicalHistory: ["Bypass surgery"],
        socialHistory: "Former smoker.",
        mentalHealthHistory: ["Depression"],
        reproductiveHealth: "Normal reproductive health.",
        insuranceInfo: {
            provider: "Life Insurance Co.",
            policyNumber: "54321678",
            groupNumber: "GRP789",
        },
        medicationAdherenceData: [75, 25],
    },
    {
        id: "4",
        fullName: "Emily Davis",
        dateOfBirth: "1992-02-10",
        gender: "Female",
        address: "321 Pine St, Cityplace",
        phoneNumber: "555-777-8888",
        email: "emilydavis@example.com",
        emergencyContact: "Tom Davis - 555-111-2222",
        medicalHistory: ["Thyroid issues"],
        allergies: [],
        currentMedications: ["Levothyroxine"],
        vitalSigns: {
            height: "170 cm",
            weight: "65 kg",
            bloodPressure: "118/76",
            heartRate: "70 bpm",
            respiratoryRate: "16 bpm",
            temperature: "98.4°F",
            bloodPressureData: [120, 119, 118, 121, 117],
        },
        physicalExamination: "Normal findings.",
        diagnosticTests: ["Thyroid function tests"],
        treatmentPlans: ["Regular monitoring of thyroid levels"],
        progressNotes: ["Thyroid levels stable."],
        consentForms: ["Thyroid treatment consent form"],
        surgicalHistory: [],
        socialHistory: "Non-smoker.",
        mentalHealthHistory: [],
        reproductiveHealth: "Normal reproductive health.",
        insuranceInfo: {
            provider: "Health Care Group",
            policyNumber: "11223344",
            groupNumber: "GRP101",
        },
        medicationAdherenceData: [95, 5],
    },
    {
        id: "5",
        fullName: "David Wilson",
        dateOfBirth: "1980-12-12",
        gender: "Male",
        address: "654 Maple St, Hamlet",
        phoneNumber: "555-222-3333",
        email: "davidwilson@example.com",
        emergencyContact: "Lisa Wilson - 555-444-5555",
        medicalHistory: ["Chronic Pain"],
        allergies: ["Latex"],
        currentMedications: ["Ibuprofen", "Acetaminophen"],
        vitalSigns: {
            height: "180 cm",
            weight: "90 kg",
            bloodPressure: "135/90",
            heartRate: "80 bpm",
            respiratoryRate: "18 bpm",
            temperature: "99.1°F",
            bloodPressureData: [136, 134, 135, 140, 139],
        },
        physicalExamination: "Pain upon palpation.",
        diagnosticTests: ["X-ray", "MRI"],
        treatmentPlans: ["Physical therapy", "Pain management"],
        progressNotes: ["Pain levels reducing."],
        consentForms: ["Pain management consent form"],
        surgicalHistory: [],
        socialHistory: "Occasional alcohol use.",
        mentalHealthHistory: ["Anxiety"],
        reproductiveHealth: "Normal reproductive health.",
        insuranceInfo: {
            provider: "Medicare",
            policyNumber: "56789012",
            groupNumber: "GRP202",
        },
        medicationAdherenceData: [70, 30],
    },
];

