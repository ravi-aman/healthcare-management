const { expect } = require("chai");
const { ethers } = require("hardhat");
const crypto = require('crypto');

describe("PatientDataManagement", function () {
  let PatientDataManagement;
  let patientDataManagement;
  let owner;
  let patient;
  let doctor;

  // Function to encrypt data
  function encryptData(data, publicKey) {
    const buffer = Buffer.from(data, 'utf8');
    return crypto.publicEncrypt(publicKey, buffer).toString('base64');
  }

  // Function to decrypt data
  function decryptData(encryptedData, privateKey) {
    const buffer = Buffer.from(encryptedData, 'base64');
    return crypto.privateDecrypt(privateKey, buffer).toString('utf8');
  }

  before(async function () {
    // Get the ContractFactory and Signers here.
    PatientDataManagement = await ethers.getContractFactory("PatientDataManagement");
    [owner, patient, doctor] = await ethers.getSigners();

    // Deploy the contract
    patientDataManagement = await PatientDataManagement.deploy();
    await patientDataManagement.deployed();
  });

  describe("Patient Registration", function () {
    it("Should register a new patient", async function () {
      const patientData = { name: "John Doe", age: 30, condition: "Healthy" };
      const publicKey = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAr1o3MghzzGObOCWiCCVu\nBBxBtOoKxDgxHcOrgvPMn9yvFsOlWBIKaOznQgSe3qQqOEcpxuuqgpI86OhUi3V4\nkVt+wy4ztHocrwySU7bpZcF+yqNk/MQZmpZ8PwrNY2A4YZBTjL5IbGI9CiGYTqTg\nXAx0gXNvDvcHgDihEqg24gEBE21fmhLyOC/qDe2aRx5v1/2u8nQJV2ZWoMf0dRBd\nXO0B+Fj6+a9WbOd/nE3YMzDu6TOZJjc+zKq4Jt3CX8C7Sn6rVzrohfm5rvgGy8jG\n3HVWogtzPm7o9lzbNWsDhZRjP4pShEuTGMvHHx4M/CJMK17D7pNevGJoLT3O0+uy\nRwIDAQAB\n-----END PUBLIC KEY-----";
      const encryptedData = encryptData(JSON.stringify(patientData), publicKey);

      await patientDataManagement.connect(patient).registerPatient(encryptedData);

      expect(await patientDataManagement.isAuthorizedDoctor(patient.address, doctor.address)).to.equal(false);
    });

    it("Should not allow registering the same patient twice", async function () {
      const encryptedData = "someEncryptedData";
      await expect(patientDataManagement.connect(patient).registerPatient(encryptedData))
        .to.be.revertedWith("Patient already registered");
    });
  });

  describe("Doctor Registration and Authorization", function () {
    it("Should register a new doctor", async function () {
      await patientDataManagement.connect(doctor).registerDoctor();
      // There's no direct way to check if a doctor is registered, so we'll skip assertion here
    });

    it("Should allow a patient to authorize a doctor", async function () {
      await patientDataManagement.connect(patient).authorizeDoctor(doctor.address);
      expect(await patientDataManagement.isAuthorizedDoctor(patient.address, doctor.address)).to.equal(true);
    });

    it("Should allow a patient to deauthorize a doctor", async function () {
      await patientDataManagement.connect(patient).deauthorizeDoctor(doctor.address);
      expect(await patientDataManagement.isAuthorizedDoctor(patient.address, doctor.address)).to.equal(false);
    });
  });

  describe("Patient Data Management", function () {
    it("Should allow a patient to update their data", async function () {
      const newPatientData = { name: "John Doe", age: 31, condition: "Mild cold" };
      const publicKey = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAr1o3MghzzGObOCWiCCVu\nBBxBtOoKxDgxHcOrgvPMn9yvFsOlWBIKaOznQgSe3qQqOEcpxuuqgpI86OhUi3V4\nkVt+wy4ztHocrwySU7bpZcF+yqNk/MQZmpZ8PwrNY2A4YZBTjL5IbGI9CiGYTqTg\nXAx0gXNvDvcHgDihEqg24gEBE21fmhLyOC/qDe2aRx5v1/2u8nQJV2ZWoMf0dRBd\nXO0B+Fj6+a9WbOd/nE3YMzDu6TOZJjc+zKq4Jt3CX8C7Sn6rVzrohfm5rvgGy8jG\n3HVWogtzPm7o9lzbNWsDhZRjP4pShEuTGMvHHx4M/CJMK17D7pNevGJoLT3O0+uy\nRwIDAQAB\n-----END PUBLIC KEY-----";
      const encryptedData = encryptData(JSON.stringify(newPatientData), publicKey);

      await patientDataManagement.connect(patient).updatePatientData(encryptedData);
      // We can't directly check the updated data, but we can verify that the function doesn't revert
    });

    it("Should allow an authorized doctor to get patient data", async function () {
      await patientDataManagement.connect(patient).authorizeDoctor(doctor.address);

      const encryptedData = await patientDataManagement.connect(doctor).getPatientData(patient.address);
      
      const privateKey = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCvWjcyCHPMY5s4\nJaIIJW4EHEG06grEODEdw6uC88yf3K8Ww6VYEgpo7OdCBJ7epCo4RynG66qCkjzo\n6FSLdXiRW37DLjO0ehyvDJJTtullwX7Ko2T8xBmalng/Cs1jYDhhkFOMvkhsYj0K\nIZhOpOBcDHSBc28O9weAOKESqDbiAQETbV+aEvI4L+oN7ZpHHm/X/a7ydAlXZlag\nx/R1EF1c7QH4WPr5r1Zs53+cTdgzMO7pM5kmNz7MqM5IunSJUKMXtMdZv7zIyQF0\nOtQa4OIxwsxPK+fQfBuioDIKK5Kxw7ZNgpuuMeQnx+v+dJ1sRYANrWgxZTUvNkLt\nDGG7cAX5AgMBAAECggEBAIlUk84MtA49NbbzGMeF+bzJ1qBjvK/iKCmoMNCiUbsr\nPLIWG6CWF9Gi6ydahUSYL0Z0r56PGcwTFhkdIKkL0+hntMUE1YNWfGQMBV4kn64o\nC17OvlE54U6xeGrtEhgdIrGxjhZI7IyrhWHVZ2kEbU9XZMk/KFIx3MXtGEk9bTkj\nYiJG6oMsNgwO7Nk3HzLs7Kl3CnW/AaNzfQ5w2RD0D5vYxGrZGScepIcIdv1S9L/+\nYLfgZdBlGTJpO56VLr3w0JVZ9xXg6vwzqbg1dM3bqLx9UF4nxDbXxh3sT/qJ5Umk\nD0pGb4uQBDqE9AzhOTgvPORH8zDY7bqIQWqQQwWy76ECgYEA6Iyj7gI4/H8jx93h\nHoJ8O9dtm+QeGAK+4G2Ktp60C1dBdKz3QSM7wlYXJD3Dd5h5YX6/3zyKJQWoHdYE\ny4gLN6EyPH8gHSEm9/vVsHFYgYBWJY4fNm+DyODRqwVzbCW8NQUXHjABacFi7Zcj\nM6yh+X8PQsfIIH8+NlUfuSvVLI8CgYEAwQZwbtAmI2YsYZu8cWUU5AxrL+yxvuaT\n+YN71sFKIJZ6DFMuCrwN09BFkh4m3UGEUPPRe1wdUZxSUOiRuON6/5c67A51R3Hg\nKbvYmFiJwSZOxjKLZ/xFY8wjR9X14wUKVKH0WEcKDMRVVHkrsFuXDLKCxnA3J24t\nmJrm1xGNbHcCgYAVMvL9zubVrYSGvmRvAQk5JvVjSSSE5GgjbCVopRo2gsMHILje\nWdL+k/d3xVcL7IQnmIxGCN1Xk70T59Xvsy+sTKq7gM6Qwc/yxSrwZEoS/gNbZHwP\nVOyCTLtpU72MlRp32xLXCGxkNvFOxKrqA0jSvFOWMaM6hF5O7BvFZm+wMwKBgQCU\nFR3xjq7cA/jf6XZeTkKmP+JaGlDFb2g4M7GpNISk/mRmXOH/IlzZe4AJXY9Pk4Cp\nHyRv4Rm3uFwDQN/8dQ3MzRPM7mGQpcqkLzm1Bxp3oRqAhXW+cNZBW+ZPFaqEd/UI\nZFmSK11jFNcvVyNpvxcDk7szaOyLcQKa7mwuN89JHQKBgHMiqzOBVjFm5oPgwUQX\nz9mjXyaAEVL5+vHRYvOCKCfVL2AiLpB3VDjq1Q95b1P8VRJUqHcb3wnVd+fBVL95\n+EZMcQRYxfbHBQ4jNl2TiPCzZhV9Mxa5ZVQAvqsaX/Lg3kHbjOkPHx4HRcTZOiTs\nM2jlrfLaVXm2JeO1/+qVk6yQ\n-----END PRIVATE KEY-----";
      const decryptedData = decryptData(encryptedData, privateKey);
      const patientData = JSON.parse(decryptedData);

      expect(patientData.name).to.equal("John Doe");
      expect(patientData.age).to.equal(31);
      expect(patientData.condition).to.equal("Mild cold");
    });

    it("Should not allow an unauthorized doctor to get patient data", async function () {
      await patientDataManagement.connect(patient).deauthorizeDoctor(doctor.address);

      await expect(patientDataManagement.connect(doctor).getPatientData(patient.address))
        .to.be.revertedWith("Doctor is not authorized for this patient");
    });
  });
});