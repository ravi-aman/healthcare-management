
export interface MedicalRecord {
    date: string;
    description: string;
    doctor: string;
}

export interface PatientRecord {
    id: number;
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
    };
}

export const sampleRecords: PatientRecord[] = [
    {
        id: 1,
        fullName: "John Doe",
        dateOfBirth: "1993-05-12",
        gender: "Male",
        address: "123 Main St, Springfield",
        phoneNumber: "123-456-7890",
        email: "john.doe@example.com",
        emergencyContact: "Jane Doe - 987-654-3210",
        medicalHistory: [
            "Appendectomy in 2015",
            "Asthma",
            "Family history of diabetes",
        ],
        allergies: ["Penicillin", "Peanuts"],
        currentMedications: ["Albuterol inhaler - as needed"],
        vitalSigns: {
            height: "6'0\"",
            weight: "180 lbs",
            bloodPressure: "120/80 mmHg",
            heartRate: "72 bpm",
            respiratoryRate: "16 breaths/min",
            temperature: "98.6 °F",
        },
        physicalExamination: "No acute distress; clear lungs; normal heart sounds.",
        diagnosticTests: ["Complete Blood Count (CBC)", "Chest X-ray"],
        treatmentPlans: [
            "Continue current medications.",
            "Follow-up in 3 months.",
        ],
        progressNotes: [
            "Patient reports feeling well.",
            "No new symptoms noted.",
        ],
        consentForms: ["Consent for treatment signed on 2023-08-01"],
        surgicalHistory: ["Appendectomy on 2015-06-01"],
        socialHistory: "Non-smoker, occasional alcohol use.",
        mentalHealthHistory: ["No history of mental health issues."],
        reproductiveHealth: "Regular menstrual cycles; no pregnancies.",
        insuranceInfo: {
            provider: "Health Insurance Co.",
            policyNumber: "1234567890",
        },
    },
    {
        id: 2,
        fullName: "Alice Smith",
        dateOfBirth: "1988-11-20",
        gender: "Female",
        address: "456 Elm St, Metropolis",
        phoneNumber: "234-567-8901",
        email: "alice.smith@example.com",
        emergencyContact: "Bob Smith - 876-543-2109",
        medicalHistory: [
            "Hypertension since 2020",
            "No previous surgeries",
        ],
        allergies: ["None"],
        currentMedications: ["Lisinopril - daily"],
        vitalSigns: {
            height: "5'5\"",
            weight: "140 lbs",
            bloodPressure: "130/85 mmHg",
            heartRate: "80 bpm",
            respiratoryRate: "18 breaths/min",
            temperature: "98.7 °F",
        },
        physicalExamination: "Normal heart and lung sounds; no abnormalities detected.",
        diagnosticTests: ["Lipid panel", "Electrocardiogram (ECG)"],
        treatmentPlans: [
            "Monitor blood pressure weekly.",
            "Dietary changes recommended.",
        ],
        progressNotes: [
            "Patient reports no issues.",
            "Blood pressure readings within normal range.",
        ],
        consentForms: ["Consent for treatment signed on 2023-08-15"],
        surgicalHistory: [],
        socialHistory: "Non-smoker, occasional wine drinker.",
        mentalHealthHistory: ["Anxiety disorder managed with therapy."],
        reproductiveHealth: "Irregular menstrual cycles.",
        insuranceInfo: {
            provider: "Wellness Insurance Co.",
            policyNumber: "9876543210",
        },
    },
    {
        id: 3,
        fullName: "Robert Johnson",
        dateOfBirth: "1975-03-30",
        gender: "Male",
        address: "789 Oak St, Gotham",
        phoneNumber: "345-678-9012",
        email: "robert.johnson@example.com",
        emergencyContact: "Lisa Johnson - 654-321-0987",
        medicalHistory: [
            "Chronic back pain",
            "Knee surgery in 2018",
        ],
        allergies: ["Aspirin"],
        currentMedications: ["Ibuprofen - as needed"],
        vitalSigns: {
            height: "5'10\"",
            weight: "220 lbs",
            bloodPressure: "140/90 mmHg",
            heartRate: "75 bpm",
            respiratoryRate: "15 breaths/min",
            temperature: "99.1 °F",
        },
        physicalExamination: "Back pain reported; no other issues observed.",
        diagnosticTests: ["MRI of lower back", "X-ray of knee"],
        treatmentPlans: [
            "Physical therapy recommended.",
            "Follow-up in 6 weeks.",
        ],
        progressNotes: [
            "Patient expresses concern over pain.",
            "Prescribed medication is effective.",
        ],
        consentForms: ["Consent for treatment signed on 2023-09-01"],
        surgicalHistory: ["Knee surgery on 2018-05-15"],
        socialHistory: "Former smoker, now quit.",
        mentalHealthHistory: ["History of depression, currently stable."],
        reproductiveHealth: "N/A",
        insuranceInfo: {
            provider: "Comprehensive Health Ins.",
            policyNumber: "1112223333",
        },
    },
];