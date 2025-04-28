import { ethers } from "ethers";
import Web3Modal from "web3modal";
import OpenAI from "openai";
import axios from "axios";

import Healthcare from "./Healthcare.json";

//OPEN AI
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_KEY,
  dangerouslyAllowBrowser: true,
});

const HEALTH_CARE_ABI = Healthcare.abi;
const HEALTH_CARE_ADDRESS = process.env.NEXT_PUBLIC_HEALTH_CARE;

//ADMIN
const ADMIN_ADDRESS = process.env.NEXT_PUBLIC_ADMIN_ADDRESS;
const NETWORK = process.env.NEXT_PUBLIC_NETWORK;

//PINATE API - SECRECT KEYS
const PINATA_AIP_KEY = process.env.NEXT_PUBLIC_PINATA_AIP_KEY;
const PINATA_SECRECT_KEY = process.env.NEXT_PUBLIC_PINATA_SECRECT_KEY;

//NETWORK
const networks = {
  holesky: {
    chainId: `0x${Number(17000).toString(16)}`,
    chainName: "Holesky",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/eth_holesky"],
    blockExplorerUrls: ["https://holesky.etherscan.io/"],
  },
  sepolia: {
    chainId: `0x${Number(11155111).toString(16)}`,
    chainName: "Sepolia",
    nativeCurrency: {
      name: "SepoliaETH",
      symbol: "SepoliaETH",
      decimals: 18,
    },
    rpcUrls: ["https://sepolia.infura.io/v3/"],
    blockExplorerUrls: ["https://sepolia.etherscan.io"],
  },
  polygon_amoy: {
    chainId: `0x${Number(80002).toString(16)}`,
    chainName: "Polygon Amoy",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/polygon_amoy"],
    blockExplorerUrls: ["https://www.oklink.com/amoy"],
  },
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/polygon"],
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/bsc"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  base_mainnet: {
    chainId: `0x${Number(8453).toString(16)}`,
    chainName: "Base Mainnet",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://mainnet.base.org/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  base_sepolia: {
    chainId: `0x${Number(84532).toString(16)}`,
    chainName: "Base Sepolia",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://sepolia.base.org"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  localhost: {
    chainId: `0x${Number(31337).toString(16)}`,
    chainName: "localhost",
    nativeCurrency: {
      name: "GO",
      symbol: "GO",
      decimals: 18,
    },
    rpcUrls: ["http://127.0.0.1:8545/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
};

const changeNetwork = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    const network = await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName],
        },
      ],
    });
    return network;
  } catch (err) {
    console.log(err.message);
  }
};

export const HANDLE_NETWORK_SWITCH = async () => {
  const networkName = NETWORK;
  const network = await changeNetwork({ networkName });
  return network;
};

export const SHORTEN_ADDRESS = (address) =>
  `${address?.slice(0, 8)}...${address?.slice(address.length - 4)}`;

export const PARSED_ERROR_MSG = (e) => {
  const json = JSON.parse(JSON.stringify(e));
  return json?.reason || json?.error?.message;
};

export function CONVERT_TIMESTAMP_TO_READABLE(timeStamp) {
  const date = new Date(timeStamp * 1000);

  const readableTime = date.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return readableTime;
}

//CONTRACT

//---FETCHING SMART CONTRACT
const FETCH_CONTRACT = (address, abi, signer) =>
  new ethers.Contract(address, abi, signer);

export const HEALTH_CARE_CONTARCT = async () => {
  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();

  const contract = FETCH_CONTRACT(HEALTH_CARE_ADDRESS, HEALTH_CARE_ABI, signer);
  return contract;
};

//CONTRACT FUNCTIONS
export const CHECKI_IF_CONNECTED = async () => {
  if (!window.ethereum) return "Install MetaMask";
  const network = await HANDLE_NETWORK_SWITCH();
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  if (accounts.length) {
    return accounts[0];
  } else {
    return "No account";
  }
};

//----DOCTORS----

//GET ALL APPROVE DOCTORS
export const GET_ALL_APPROVE_DOCTORS = async () => {
  const contract = await HEALTH_CARE_CONTARCT();

  const doctors = await contract.GET_ALL_APPROVED_DOCTORS();

  const _doctorsArray = await Promise.all(
    doctors.map(
      async ({
        id,
        IPFS_URL,
        accountAddress,
        appointmentCount,
        successfulTreatmentCount,
        isApproved,
      }) => {
        const {
          data: {
            title,
            firstName,
            lastName,
            gender,
            degrer,
            yourAddress,
            designation,
            lastWork,
            mobile,
            emailID,
            collageName,
            collageID,
            joiningYear,
            endYear,
            specialization,
            registrationID,
            collageAddress,
            walletAddress,
            image,
            biography,
          },
        } = await axios.get(IPFS_URL, {});

        return {
          title,
          firstName,
          lastName,
          gender,
          degrer,
          yourAddress,
          designation,
          lastWork,
          mobile,
          emailID,
          collageName,
          collageID,
          joiningYear,
          endYear,
          specialization,
          registrationID,
          collageAddress,
          walletAddress,
          image,
          biography,
          doctorID: id.toNumber(),
          IPFS_URL,
          accountAddress,
          appointmentCount: appointmentCount.toNumber(),
          successfulTreatmentCount: successfulTreatmentCount.toNumber(),
          isApproved,
        };
      }
    )
  );
  return _doctorsArray;
};

//GET REGISTER DOCTORS
export const GET_ALL_REGISTERED_DOCTORS = async () => {
  const contract = await HEALTH_CARE_CONTARCT();

  const doctors = await contract.GET_ALL_REGISTERED_DOCTORS();

  const _doctorsArray = await Promise.all(
    doctors.map(
      async ({
        id,
        IPFS_URL,
        accountAddress,
        appointmentCount,
        successfulTreatmentCount,
        isApproved,
      }) => {
        const {
          data: {
            title,
            firstName,
            lastName,
            gender,
            degrer,
            yourAddress,
            designation,
            lastWork,
            mobile,
            emailID,
            collageName,
            collageID,
            joiningYear,
            endYear,
            specialization,
            registrationID,
            collageAddress,
            walletAddress,
            image,
            biography,
          },
        } = await axios.get(IPFS_URL, {});

        return {
          title,
          firstName,
          lastName,
          gender,
          degrer,
          yourAddress,
          designation,
          lastWork,
          mobile,
          emailID,
          collageName,
          collageID,
          joiningYear,
          endYear,
          specialization,
          registrationID,
          collageAddress,
          walletAddress,
          image,
          biography,
          doctorID: id.toNumber(),
          IPFS_URL,
          accountAddress,
          appointmentCount: appointmentCount.toNumber(),
          successfulTreatmentCount: successfulTreatmentCount.toNumber(),
          isApproved,
        };
      }
    )
  );

  return _doctorsArray;
};

///GET DOCTOR APPOINMENTS HISTORY
export const GET_DOCTOR_APPOINTMENTS_HISTORYS = async (_doctorID) => {
  const contract = await HEALTH_CARE_CONTARCT();

  const appointments = await contract.GET_DOCTOR_APPOINTMENTS_HISTORYS(
    _doctorID
  );

  const _appointmentArray = Promise.all(
    appointments.map(
      async ({
        id,
        patientId,
        doctorId,
        date,
        from,
        to,
        appointmentDate,
        condition,
        message,
        isOpen,
      }) => {
        const patient = await GET_PATIENT_DETAILS(patientId);
        return {
          appoinmnetID: id.toNumber(),
          patientId: patientId.toNumber(),
          doctorId: doctorId.toNumber(),
          date: CONVERT_TIMESTAMP_TO_READABLE(date.toNumber()),
          isOpen: isOpen,
          from: from,
          to: to,
          appointmentDate: appointmentDate,
          condition: condition,
          message: message,
          patient,
          ...patient,
        };
      }
    )
  );

  return _appointmentArray;
};

//GET BEST DOCTOR
export const GET_MOST_POPULAR_DOCTOR = async () => {
  const contract = await HEALTH_CARE_CONTARCT();

  const doctor = await contract.GET_MOST_POPULAR_DOCTOR();

  const result = {
    name: doctor.name,
    image: doctor.image,
    accountAddress: doctor.accountAddress,
    id: doctor.id.toNumber(),
    specialization: doctor.specialization,
    appointmentCount: doctor.appointmentCount.toNumber(),
    successfulTreatmentCount: doctor.successfulTreatmentCount.toNumber(),
    isApproved: doctor.isApproved,
  };

  return result;
};

//GET DOCTORS DETAILS
export const GET_DOCTOR_DETAILS = async (_doctorId) => {
  const contract = await HEALTH_CARE_CONTARCT();

  const doctor = await contract.GET_DOCTOR_DETAILS(Number(_doctorId));

  const {
    data: {
      title,
      firstName,
      lastName,
      gender,
      degrer,
      yourAddress,
      designation,
      lastWork,
      mobile,
      emailID,
      collageName,
      collageID,
      joiningYear,
      endYear,
      specialization,
      registrationID,
      collageAddress,
      walletAddress,
      image,
      biography,
    },
  } = await axios.get(doctor.IPFS_URL, {});

  const doctorDetails = {
    title,
    firstName,
    lastName,
    gender,
    degrer,
    yourAddress,
    designation,
    lastWork,
    mobile,
    emailID,
    collageName,
    collageID,
    joiningYear,
    endYear,
    specialization,
    registrationID,
    collageAddress,
    walletAddress,
    image,
    biography,
    IPFS_URL: doctor.IPFS_URL,
    accountAddress: doctor.accountAddress,
    doctorID: doctor.id.toNumber(),
    appointmentCount: doctor.appointmentCount.toNumber(),
    successfulTreatmentCount: doctor.successfulTreatmentCount.toNumber(),
    isApproved: doctor.isApproved,
  };
  return doctorDetails;
};

//GET DOCTOR ID DETAILS
export const GET_DOCTOR_ID = async (_doctorAddress) => {
  const contract = await HEALTH_CARE_CONTARCT();

  const doctor = await contract.GET_DOCTOR_ID(_doctorAddress);

  return doctor.toNumber();
};

//CHECK DOCTOR ALREADY REGSITER
export const CHECK_DOCTOR_REGISTERATION = async (_doctorAddress) => {
  if (!_doctorAddress) return console.log("Data Missing");

  const contract = await HEALTH_CARE_CONTARCT();

  const doctor = await contract.GET_DOCTOR_ID(_doctorAddress);

  const doctorDetail = await GET_DOCTOR_DETAILS(doctor?.toNumber());
  return doctorDetail;
};

//----END OF DOCTORS------

//----MEDICINE------------

//GET REGISTER MEDICINE
export const GET_ALL_REGISTERED_MEDICINES = async () => {
  const contract = await HEALTH_CARE_CONTARCT();

  const medicines = await contract.GET_ALL_REGISTERED_MEDICINES();

  const _medicinesArray = await Promise.all(
    medicines.map(
      async ({
        id,
        IPFS_URL,
        price,
        quantity,
        discount,
        currentLocation,
        active,
      }) => {
        const {
          data: {
            verifyingDoctor,
            name,
            brand,
            manufacturer,
            manufacturDate,
            expiryDate,
            code,
            companyEmail,
            manufactureAddress,
            mobile,
            email,
            image,
            description,
          },
        } = await axios.get(IPFS_URL, {});

        return {
          verifyingDoctor,
          name,
          brand,
          manufacturer,
          manufacturDate,
          expiryDate,
          code,
          companyEmail,
          discount: discount.toNumber(),
          manufactureAddress,
          price: price.toNumber(),
          quantity: quantity.toNumber(),
          currentLocation,
          mobile,
          email,
          image,
          description,
          medicineID: id.toNumber(),
          IPFS_URL,
          active,
        };
      }
    )
  );
  return _medicinesArray;
};

//GET MEDICINE DETAILS
export const GET_MEDICINE_DETAILS = async (_medicineId) => {
  const contract = await HEALTH_CARE_CONTARCT();

  const medic = await contract.GET_MEDICINE_DETAILS(Number(_medicineId));

  const {
    data: {
      verifyingDoctor,
      name,
      brand,
      manufacturer,
      manufacturDate,
      expiryDate,
      code,
      companyEmail,
      manufactureAddress,
      mobile,
      email,
      image,
      description,
    },
  } = await axios.get(medic.IPFS_URL, {});

  const _medicine = {
    medicineID: medic.id.toNumber(),
    discount: medic.discount.toNumber(),
    quantity: medic.quantity.toNumber(),
    price: medic.price.toNumber(),
    currentLocation: medic.currentLocation,
    active: medic.active,
    IPFS_URL: medic.IPFS_URL,
    verifyingDoctor,
    name,
    brand,
    manufacturer,
    manufacturDate,
    expiryDate,
    code,
    companyEmail,
    manufactureAddress,
    mobile,
    email,
    image,
    description,
  };

  return _medicine;
};
//-----END OF MEDICINE

//----PATIENTS-----------

//GET ALL APPOINMENT
export const GET_ALL_APPOINTMENTS = async () => {
  const contract = await HEALTH_CARE_CONTARCT();

  const appointments = await contract.GET_ALL_APPOINTMENTS();

  const _appointmentArray = Promise.all(
    appointments.map(async (appointment) => {
      return {
        appointmentID: appointment.id.toNumber(),
        patientId: appointment.patientId.toNumber(),
        doctorId: appointment.doctorId.toNumber(),
        date: CONVERT_TIMESTAMP_TO_READABLE(appointment.date.toNumber()),
        from: appointment.from,
        to: appointment.to,
        appointmentDate: appointment.appointmentDate,
        condition: appointment.condition,
        message: appointment.message,
        isOpen: appointment.isOpen,
      };
    })
  );

  return _appointmentArray;
};

//GET REGISTER PATIENTS
export const GET_ALL_REGISTERED_PATIENTS = async () => {
  const contract = await HEALTH_CARE_CONTARCT();

  const patients = await contract.GET_ALL_REGISTERED_PATIENTS();

  const _patientsArray = await Promise.all(
    patients.map(async ({ id, IPFS_URL, medicalHistory, accountAddress }) => {
      const {
        data: {
          title,
          firstName,
          lastName,
          gender,
          yourAddress,
          mobile,
          emailID,
          birth,
          doctorAddress,
          walletAddress,
          image,
          message,
          city,
        },
      } = await axios.get(IPFS_URL, {});

      return {
        title,
        firstName,
        lastName,
        gender,
        yourAddress,
        mobile,
        emailID,
        birth,
        doctorAddress,
        walletAddress,
        image,
        message,
        city,
        patientID: id.toNumber(),
        IPFS_URL,
        medicalHistory,
        accountAddress,
      };
    })
  );
  return _patientsArray;
};

//GET PATIENT APPOINMENT
export const GET_PATIENT_APPOINTMENT = async (_appointmentId) => {
  const contract = await HEALTH_CARE_CONTARCT();

  const appointments = await contract.GET_PATIENT_APPOINTMENT(
    Number(_appointmentId)
  );

  const _appointment = {
    id: appointments.id.toNumber(),
    patientId: appointments.patientId.toNumber(),
    doctorId: appointments.doctorId.toNumber(),
    date: appointments.date.toNumber(),
  };

  return _appointment;
};

///GET ALL PATIENT APPOINMENT HISTORY
export const GET_PATIENT_APPOINTMENT_HISTORYS = async (_patientID) => {
  const contract = await HEALTH_CARE_CONTARCT();

  const appointments = await contract.GET_PATIENT_APPOINTMENT_HISTORYS(
    Number(_patientID)
  );

  console.log(appointments);

  const _appointmentArray = Promise.all(
    appointments.map(
      async ({
        id,
        patientId,
        doctorId,
        date,
        from,
        to,
        appointmentDate,
        condition,
        message,
        isOpen,
      }) => {
        console.log(id.toNumber());
        const doctor = await GET_DOCTOR_DETAILS(doctorId.toNumber());
        return {
          appointmentID: id.toNumber(),
          patientId: patientId.toNumber(),
          doctorId: doctorId.toNumber(),
          date: CONVERT_TIMESTAMP_TO_READABLE(date.toNumber()),
          from: from,
          to: to,
          appointmentDate: appointmentDate,
          condition: condition,
          message: message,
          doctor,
          isOpen,
        };
      }
    )
  );

  return _appointmentArray;
};

//GET PRESCRIPTION DETAILS
export const GET_PATIENT_DETAILS = async (_patientId) => {
  const contract = await HEALTH_CARE_CONTARCT();

  const patient = await contract.GET_PATIENT_DETAILS(Number(_patientId));

  const {
    data: {
      title,
      firstName,
      lastName,
      gender,
      yourAddress,
      mobile,
      emailID,
      birth,
      doctorAddress,
      walletAddress,
      image,
      message,
      city,
    },
  } = await axios.get(patient.IPFS_URL, {});

  const patientDetails = {
    patientID: patient.id.toNumber(),
    IPFS_URL: patient.IPFS_URL,
    medicalHistory: patient.medicalHistory,
    accountAddress: patient.accountAddress,
    title,
    firstName,
    lastName,
    gender,
    yourAddress,
    mobile,
    emailID,
    birth,
    doctorAddress,
    walletAddress,
    image,
    message,
    city,
  };
  return patientDetails;
};

//GET PATIENT ID DETAILS
export const GET_PATIENT_ID = async () => {
  const address = await CHECKI_IF_CONNECTED();
  const contract = await HEALTH_CARE_CONTARCT();

  if (address) {
    const patient = await contract.GET_PATIENT_ID(address);

    return patient.toNumber();
  }
};

//CHECK PATIENT ALREADY REGSITER
export const CHECK_PATIENT_REGISTERATION = async (_patientAddress) => {
  if (!_patientAddress) return console.log("Data Missing");

  const contract = await HEALTH_CARE_CONTARCT();

  const patient = await contract.GET_PATIENT_ID(_patientAddress);
  const patientDetail = await GET_PATIENT_DETAILS(patient.toNumber());

  return patientDetail;
};

//GET_ALL_PATIENT_ORDERS
export const GET_ALL_PATIENT_ORDERS = async (_patientID) => {
  const contract = await HEALTH_CARE_CONTARCT();

  const orders = await contract.GET_ALL_PATIENT_ORDERS(Number(_patientID));

  const _orderArray = Promise.all(
    orders.map(async (order) => {
      const patient = await GET_PATIENT_DETAILS(Number(_patientID));
      const medicine = await GET_MEDICINE_DETAILS(order?.medicineId.toNumber());

      return {
        medicineId: order?.medicineId.toNumber(),
        price: order?.price.toNumber(),
        payAmount: order?.payAmount.toNumber(),
        quantity: order?.quantity.toNumber(),
        patientId: order?.patientId.toNumber(),
        date: order?.date.toNumber(),
        patient,
        medicine,
      };
    })
  );

  return _orderArray;
};

//GET_MIDEICIAL_HISTORY
export const GET_PATIENT_MEDICIAL_HISTORY = async (_patientID) => {
  const contract = await HEALTH_CARE_CONTARCT();

  const history = await contract.GET_PATIENT_MEDICIAL_HISTORY(_patientID);

  return history;
};

//-----END OF PATIENTS

//GET PRESCRIPTION DETAILS
export const GET_PRESCRIPTION_DETAILS = async (_prescriptionId) => {
  const contract = await HEALTH_CARE_CONTARCT();

  const prescription = await contract.GET_PRESCRIPTION_DETAILS(
    Number(_prescriptionId)
  );

  const prescriptionDetails = {
    id: prescription.id.toNumber(),
    medicineId: prescription.medicineId.toNumber(),
    patientId: prescription.patientId.toNumber(),
    doctorId: prescription.doctorId.toNumber(),
    date: prescription.date.toNumber(),
  };
  return prescriptionDetails;
};

export const GET_ALL_PRESCRIBED_MEDICINES_OF_PATIENT = async (
  _prescriptionId
) => {
  const address = await CHECKI_IF_CONNECTED();
  const contract = await HEALTH_CARE_CONTARCT();

  if (address) {
    const _patientID = await GET_PATIENT_ID(address);

    const prescription = await contract.GET_ALL_PRESCRIBED_MEDICINES_OF_PATIENT(
      _patientID
    );

    console.log(prescription);

    const _prescriptionArray = Promise.all(
      prescription.map(
        async ({ id, medicineId, patientId, doctorId, date }) => {
          const patient = await GET_PATIENT_DETAILS(Number(_patientID));
          const medicine = await GET_MEDICINE_DETAILS(medicineId.toNumber());
          const doctor = await GET_DOCTOR_DETAILS(doctorId.toNumber());

          return {
            prescriptionId: id.toNumber(),
            medicineId: medicineId.toNumber(),
            patientId: patientId.toNumber(),
            doctorId: doctorId.toNumber(),
            date: CONVERT_TIMESTAMP_TO_READABLE(date.toNumber()),
            patient,
            medicine,
            doctor,
          };
        }
      )
    );

    return _prescriptionArray;
  }
};

//-------END OF PRESCRIPTION--------

//----------CHAT-------------
export const GET_USERNAME_TYPE = async (_userAddress) => {
  if (!_userAddress) return console.log("No Address");

  const contract = await HEALTH_CARE_CONTARCT();

  const user = await contract.GET_USERNAME_TYPE(_userAddress);

  const _userDetail = {
    name: user.name,
    userType: user.userType,
  };

  return _userDetail;
};

export const GET_MY_FRIEND_LIST = async (_userAddress) => {
  if (!_userAddress) return console.log("No Address");

  const contract = await HEALTH_CARE_CONTARCT();

  const user = await contract.GET_MY_FRIEND_LIST(_userAddress);

  const _friendArray = await Promise.all(
    user.map(async ({ name, pubkey }) => {
      return {
        name: name,
        userAddress: pubkey,
      };
    })
  );
  console.log(_friendArray);
  return _friendArray;
};

export const GET_READ_MESSAGE = async (_userAddress) => {
  if (!_userAddress) return console.log("No Address");
  const address = await CHECKI_IF_CONNECTED();
  const contract = await HEALTH_CARE_CONTARCT();

  if (address) {
    const message = await contract.GET_READ_MESSAGE(_userAddress, address);

    const _messageArray = await Promise.all(
      message.map(async ({ msg, sender, timestamp }) => {
        return {
          msg: msg,
          sender: sender,
          timestamp: CONVERT_TIMESTAMP_TO_READABLE(timestamp),
        };
      })
    );
    return _messageArray;
  }
};

export const GET_ALL_APP_USER = async () => {
  const contract = await HEALTH_CARE_CONTARCT();

  const users = await contract.GET_ALL_APP_USER();

  const _userArray = await Promise.all(
    users.map(async ({ accountAddress, name }) => {
      return {
        accountAddress: accountAddress,
        name: name,
      };
    })
  );
  return _userArray;
};

export const GET_NOTIFICATION = async (_address) => {
  const contract = await HEALTH_CARE_CONTARCT();

  const notifications = await contract.GET_NOTIFICATIONS(_address);

  const _notificationArray = await Promise.all(
    notifications.map(
      async ({ id, userAddress, message, timestamp, categoryType }) => {
        return {
          notificationId: id.toNumber(),
          userAddress: SHORTEN_ADDRESS(userAddress),
          message: message,
          date: CONVERT_TIMESTAMP_TO_READABLE(timestamp.toNumber()),
          categoryType: categoryType,
        };
      }
    )
  );
  return _notificationArray;
};

export const GET_FEE = async () => {
  const contract = await HEALTH_CARE_CONTARCT();

  const _doctorFee = await contract.registrationDoctorFee();
  const _patientFee = await contract.registrationPatientFee();
  const _appointmentFee = await contract.appointmentFee();
  const _admin = await contract.admin();

  const fee = {
    doctorFee: ethers.utils.formatUnits(_doctorFee, "ether"),
    patientFee: ethers.utils.formatUnits(_patientFee, "ether"),
    appointmentFee: ethers.utils.formatUnits(_appointmentFee, "ether"),
    admin: SHORTEN_ADDRESS(_admin),
  };

  return fee;
};

//----------END OF CHAT-------------

//----IPFS UPLOAD--------

//--IMAGE UPLOAD
export const UPLOAD_IPFS_IMAGE = async (file) => {
  if (file) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios({
      method: "post",
      url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
      data: formData,
      headers: {
        pinata_api_key: PINATA_AIP_KEY,
        pinata_secret_api_key: PINATA_SECRECT_KEY,
        "Content-Type": "multipart/form-data",
      },
    });
    const ImgHash = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

    return ImgHash;
  }
};

//--METADAT UPLOAD
export const UPLOAD_METADATA = async (data) => {
  const response = await axios({
    method: "POST",
    url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
    data: data,
    headers: {
      pinata_api_key: PINATA_AIP_KEY,
      pinata_secret_api_key: PINATA_SECRECT_KEY,
      "Content-Type": "application/json",
    },
  });

  const url = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

  return url;
};

//----END OF IPFS UPLOAD--------

//-----------OPEN AI-------------

export const ASK_AI_CHAT = async (prompt) => {
  if (!prompt) {
    return "Prompt Missing";
  }

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: prompt }],
    model: "gpt-4o",
  });

  if (completion?.choices[0].message) {
    const response = {
      prompt: prompt,
      message: completion.choices[0].message.content,
      timestamp: new Date().toISOString(),
    };

    let CHAT_AI_ARRAY = [];
    const AI_ASK_HISTORY = localStorage.getItem("AI_ASK_HISTORY");
    if (AI_ASK_HISTORY) {
      CHAT_AI_ARRAY = JSON.parse(localStorage.getItem("AI_ASK_HISTORY"));
      CHAT_AI_ARRAY.push(response);
      localStorage.setItem("AI_ASK_HISTORY", JSON.stringify(CHAT_AI_ARRAY));
    } else {
      CHAT_AI_ARRAY.push(response);
      localStorage.setItem("AI_ASK_HISTORY", JSON.stringify(CHAT_AI_ARRAY));
    }
  }

  console.log(completion.choices[0]);
  return completion.choices[0].message.content;
};

//-----------END OF OPEN AI-------------
