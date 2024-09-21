// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PatientDataManagement {
    struct Patient {
        string encryptedData;
        address[] authorizedDoctors;
        bool exists;
    }
    
    mapping(address => Patient) private patients;
    mapping(address => bool) private doctors;
    
    event PatientAdded(address indexed patientAddress);
    event DoctorAuthorized(address indexed patientAddress, address indexed doctorAddress);
    event DoctorDeauthorized(address indexed patientAddress, address indexed doctorAddress);
    
    modifier onlyPatient() {
        require(patients[msg.sender].exists, "Only registered patients can perform this action");
        _;
    }
    
    modifier onlyAuthorizedDoctor(address patientAddress) {
        require(doctors[msg.sender], "Only registered doctors can perform this action");
        require(isAuthorizedDoctor(patientAddress, msg.sender), "Doctor is not authorized for this patient");
        _;
    }
    
    function registerPatient(string memory initialEncryptedData) public {
        require(!patients[msg.sender].exists, "Patient already registered");
        patients[msg.sender] = Patient(initialEncryptedData, new address[](0), true);
        emit PatientAdded(msg.sender);
    }
    
    function updatePatientData(string memory newEncryptedData) public onlyPatient {
        patients[msg.sender].encryptedData = newEncryptedData;
    }
    
    function authorizeDoctor(address doctorAddress) public onlyPatient {
        require(doctors[doctorAddress], "Address is not a registered doctor");
        require(!isAuthorizedDoctor(msg.sender, doctorAddress), "Doctor is already authorized");
        patients[msg.sender].authorizedDoctors.push(doctorAddress);
        emit DoctorAuthorized(msg.sender, doctorAddress);
    }
    
    function deauthorizeDoctor(address doctorAddress) public onlyPatient {
        require(isAuthorizedDoctor(msg.sender, doctorAddress), "Doctor is not authorized");
        for (uint i = 0; i < patients[msg.sender].authorizedDoctors.length; i++) {
            if (patients[msg.sender].authorizedDoctors[i] == doctorAddress) {
                patients[msg.sender].authorizedDoctors[i] = patients[msg.sender].authorizedDoctors[patients[msg.sender].authorizedDoctors.length - 1];
                patients[msg.sender].authorizedDoctors.pop();
                break;
            }
        }
        emit DoctorDeauthorized(msg.sender, doctorAddress);
    }
    
    function getPatientData(address patientAddress) public view onlyAuthorizedDoctor(patientAddress) returns (string memory) {
        return patients[patientAddress].encryptedData;
    }
    
    function registerDoctor() public {
        require(!doctors[msg.sender], "Doctor already registered");
        doctors[msg.sender] = true;
    }
    
    function isAuthorizedDoctor(address patientAddress, address doctorAddress) public view returns (bool) {
        for (uint i = 0; i < patients[patientAddress].authorizedDoctors.length; i++) {
            if (patients[patientAddress].authorizedDoctors[i] == doctorAddress) {
                return true;
            }
        }
        return false;
    }
}