const ethers = require('ethers');
const crypto = require('crypto');

// ABI of the deployed contract (you'll get this after compiling and deploying the Solidity contract)
const contractABI = []; // Add the ABI here
const contractAddress = "0x..."; // Add the deployed contract address here

// Connect to the network (replace with appropriate RPC URL for Linea)
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

async function registerDoctor() {
    try {
        const tx = await contract.registerDoctor();
        await tx.wait();
        console.log("Doctor registered successfully");
    } catch (error) {
        console.error("Error registering doctor:", error);
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

async function addDiagnosis(patientAddress, diagnosis) {
    try {
        const tx = await contract.addDiagnosis(patientAddress, diagnosis);
        await tx.wait();
        console.log("Diagnosis added successfully");
    } catch (error) {
        console.error("Error adding diagnosis:", error);
    }
}

async function getDiagnoses(patientAddress) {
    try {
        const diagnoses = await contract.getDiagnoses(patientAddress);
        console.log("Patient diagnoses:", diagnoses);
    } catch (error) {
        console.error("Error getting diagnoses:", error);
    }
}

// Example usage
async function main() {
    await registerDoctor();
    await getPatientData("0x1234..."); // Replace with actual patient's address
    await addDiagnosis("0x1234...", "Mild flu");
    await getDiagnoses("0x1234...");
}

main().catch(console.error);