const ethers = require('ethers');
const crypto = require('crypto');

// ABI of the deployed contract (you'll get this after compiling and deploying the Solidity contract)
const contractABI = []; // Add the ABI here
const contractAddress = "0x..."; // Add the deployed contract address here

// Connect to Linea network (replace with appropriate RPC URL)
const provider = new ethers.providers.JsonRpcProvider("https://rpc.linea.build");

// Your wallet's private key (be extremely careful with this in production!)
const privateKey = "your_private_key_here";
const wallet = new ethers.Wallet(privateKey, provider);

// Connect to the deployed contract
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

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

async function registerPatient(patientData) {
    const publicKey = "patient_public_key"; // In reality, this should be securely generated and stored
    const encryptedData = encryptData(JSON.stringify(patientData), publicKey);
    
    try {
        const tx = await contract.registerPatient(encryptedData);
        await tx.wait();
        console.log("Patient registered successfully");
    } catch (error) {
        console.error("Error registering patient:", error);
    }
}

async function updatePatientData(newPatientData) {
    const publicKey = "patient_public_key"; // Should match the key used for registration
    const encryptedData = encryptData(JSON.stringify(newPatientData), publicKey);
    
    try {
        const tx = await contract.updatePatientData(encryptedData);
        await tx.wait();
        console.log("Patient data updated successfully");
    } catch (error) {
        console.error("Error updating patient data:", error);
    }
}

async function authorizeDoctor(doctorAddress) {
    try {
        const tx = await contract.authorizeDoctor(doctorAddress);
        await tx.wait();
        console.log("Doctor authorized successfully");
    } catch (error) {
        console.error("Error authorizing doctor:", error);
    }
}

async function getPatientData(patientAddress) {
    try {
        const encryptedData = await contract.getPatientData(patientAddress);
        const privateKey = "doctor_private_key"; // In reality, this should be securely stored and accessed
        const decryptedData = decryptData(encryptedData, privateKey);
        console.log("Patient data:", JSON.parse(decryptedData));
    } catch (error) {
        console.error("Error getting patient data:", error);
    }
}

// Example usage
async function main() {
    await registerPatient({name: "John Doe", age: 30, condition: "Healthy"});
    await updatePatientData({name: "John Doe", age: 30, condition: "Mild cold"});
    await authorizeDoctor("0x1234..."); // Replace with actual doctor's address
    await getPatientData("0x5678..."); // Replace with actual patient's address
}

main().catch(console.error);