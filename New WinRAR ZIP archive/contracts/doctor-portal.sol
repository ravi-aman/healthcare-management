// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DoctorsPortal {
    struct Patient {
        string encryptedData;
        mapping(address => bool) authorizedDoctors;
        string[] diagnoses;
    }
    
    mapping(address => Patient) private patients;
    mapping(address => bool) private doctors;
    
    event DiagnosisAdded(address indexed patientAddress, string diagnosis);
    event DoctorAuthorized(address indexed patientAddress, address indexed doctorAddress);
    event DoctorDeauthorized(address indexed patientAddress, address indexed doctorAddress);
    
    modifier onlyDoctor() {
        require(doctors[msg.sender], "Only registered doctors can perform this action");
        _;
    }
    
    modifier onlyAuthorizedDoctor(address patientAddress) {
        require(patients[patientAddress].authorizedDoctors[msg.sender], "Doctor is not authorized for this patient");
        _;
    }
    
    function registerDoctor() public {
        doctors[msg.sender] = true;
    }
    
    function authorizeDoctor(address doctorAddress) public {
        require(doctors[doctorAddress], "Address is not a registered doctor");
        patients[msg.sender].authorizedDoctors[doctorAddress] = true;
        emit DoctorAuthorized(msg.sender, doctorAddress);
    }
    
    function deauthorizeDoctor(address doctorAddress) public {
        patients[msg.sender].authorizedDoctors[doctorAddress] = false;
        emit DoctorDeauthorized(msg.sender, doctorAddress);
    }
    
    function addPatientData(string memory encryptedData) public {
        patients[msg.sender].encryptedData = encryptedData;
    }
    
    function getPatientData(address patientAddress) public view 
        onlyDoctor 
        onlyAuthorizedDoctor(patientAddress) 
        returns (string memory) {
        return patients[patientAddress].encryptedData;
    }
    
    function addDiagnosis(address patientAddress, string memory diagnosis) public 
        onlyDoctor 
        onlyAuthorizedDoctor(patientAddress) {
        patients[patientAddress].diagnoses.push(diagnosis);
        emit DiagnosisAdded(patientAddress, diagnosis);
    }
    
    function getDiagnoses(address patientAddress) public view 
        onlyDoctor 
        onlyAuthorizedDoctor(patientAddress) 
        returns (string[] memory) {
        return patients[patientAddress].diagnoses;
    }
}