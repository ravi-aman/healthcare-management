import React, { useState, useEffect } from "react";

//INTERNAL IMPRORT
import {
  Header,
  NavHeader,
  SideBar,
  Preloader,
  ChatBox,
  Home,
  Patient,
  Doctor,
  Appointment,
  Shop,
  Medicine,
  Order,
  Invoice,
  Profile,
  DoctorProfile,
  DoctorDetails,
  StaffProfile,
  AddMedicine,
  AllAppoinments,
  Chat,
  AI,
  PatientProfile,
  User,
  AddDoctor,
  AddPatient,
  Auth,
  Prescription,
  DoctorAppointment,
  MedicialHistory,
  Notifications,
  Loader,
  UpdateAdmin,
} from "../Components/Global/index";

import {
  CHECK_PATIENT_REGISTERATION,
  CHECK_DOCTOR_REGISTERATION,
  GET_ALL_APPROVE_DOCTORS,
  GET_ALL_REGISTERED_PATIENTS,
  GET_USERNAME_TYPE,
  PARSED_ERROR_MSG,
  SHORTEN_ADDRESS,
  GET_READ_MESSAGE,
  CONVERT_TIMESTAMP_TO_READABLE,
  GET_NOTIFICATION,
  GET_ALL_APPOINTMENTS,
  CHECKI_IF_CONNECTED,
} from "../Context/constants";

import { useStateContext } from "../Context/index";

const index = () => {
  const {
    address,
    setAddress,
    SEND_MESSAGE,
    BUY_MEDICINE,
    reCall,
    loader,
    setOpenComponent,
    openComponent,
    notifySuccess,
    notifyError,
    accountBalance,
    currency,
  } = useStateContext();

  const [user, setUser] = useState();
  const [registerDoctors, setRegisterDoctors] = useState();
  const [registeredPatient, setRegisteredPatient] = useState();
  const [userType, setUserType] = useState();
  const [checkRegistration, setCheckRegistration] = useState();
  const [addDocotr, setAddDocotr] = useState(false);
  const [addPatient, setAddPatient] = useState(false);
  const [authComponent, setAuthComponent] = useState(true);
  const [doctorDetails, setDoctorDetails] = useState();
  const [patientDetails, setPatientDetails] = useState();
  const [medicineDetails, setMedicineDetails] = useState();
  const [invoic, setInvoic] = useState();
  const [notifications, setNotifications] = useState();
  const [notificationCount, setNotificationCount] = useState();
  const [allAppointments, setAllAppointments] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (address) {
          setAuthComponent(false);

          const appointments = await GET_ALL_APPOINTMENTS();
          setAllAppointments(appointments);

          GET_NOTIFICATION(address).then((notification) => {
            const reversedArray = [...notification].reverse();
            setNotifications(reversedArray);

            if (reversedArray?.length) {
              let NOTIFICATION = 0;
              const ALL_NOTIFICATION = localStorage.getItem("ALL_NOTIFICATION");
              if (ALL_NOTIFICATION !== null) {
                try {
                  NOTIFICATION = JSON.parse(ALL_NOTIFICATION);
                } catch (error) {
                  console.error("Error parsing ALL_NOTIFICATION:", error);
                  NOTIFICATION = 0;
                }
                setNotificationCount(reversedArray?.length - NOTIFICATION);
              } else {
                setNotificationCount(reversedArray?.length);
              }
            }
          });

          //CALLING DATA

          GET_ALL_APPROVE_DOCTORS().then((doctors) => {
            setRegisterDoctors(doctors);
          });

          GET_ALL_REGISTERED_PATIENTS().then((patients) => {
            setRegisteredPatient(patients);
          });

          const checkUserType = await GET_USERNAME_TYPE(address);

          if (checkUserType?.userType == "Doctor") {
            setOpenComponent("DoctorProfile");
            setUserType("Doctor");
            const doctor = await CHECK_DOCTOR_REGISTERATION(address);
            setUser(doctor);
          } else {
            const patient = await CHECK_PATIENT_REGISTERATION(address);
            console.log(patientDetails);
            setUser(patient);
            setOpenComponent("Profile");
            setUserType("Patient");
          }
        }
      } catch (error) {
        const ErrorMsg = PARSED_ERROR_MSG(error);
        console.log(ErrorMsg);
        if (ErrorMsg == "User is not registered") {
          setAuthComponent(true);
        }
        notifyError(ErrorMsg);
      }
    };

    fetchData();
  }, [address, reCall]);

  const connectMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAddress(accounts[0]);
        notifySuccess("Connected successfully");
      } catch (error) {
        notifyError("Error connecting to MetaMask:");
      }
    } else {
      notifyError("MetaMask is not installed.");
    }
  };

  return (
    <>
      <Preloader />
      <div id="main-wrapper">
        <NavHeader />

        <Header
          user={user}
          setAddress={setAddress}
          setOpenComponent={setOpenComponent}
          setPatientDetails={setPatientDetails}
          setDoctorDetails={setDoctorDetails}
          userType={userType}
          checkRegistration={checkRegistration}
          notifications={notifications}
          notificationCount={notificationCount}
          setNotificationCount={setNotificationCount}
        />
        <SideBar
          setOpenComponent={setOpenComponent}
          openComponent={openComponent}
          user={user}
          setPatientDetails={setPatientDetails}
          userType={userType}
          address={address}
        />
        <div class="content-body">
          {openComponent == "Home" ? (
            <Home
              setPatientDetails={setPatientDetails}
              setOpenComponent={setOpenComponent}
              registerDoctors={registerDoctors}
              registeredPatient={registeredPatient}
              notifications={notifications}
              setDoctorDetails={setDoctorDetails}
              allAppointments={allAppointments}
              accountBalance={accountBalance}
              currency={currency}
            />
          ) : openComponent == "Patient" ? (
            <Patient
              setPatientDetails={setPatientDetails}
              setOpenComponent={setOpenComponent}
            />
          ) : openComponent == "Doctor" ? (
            <Doctor
              setOpenComponent={setOpenComponent}
              setDoctorDetails={setDoctorDetails}
            />
          ) : openComponent == "Add Medicine" ? (
            <AddMedicine
              setOpenComponent={setOpenComponent}
              setMedicineDetails={setMedicineDetails}
              registerDoctors={registerDoctors}
            />
          ) : openComponent == "All Appoinments" ? (
            <AllAppoinments
              setDoctorDetails={setDoctorDetails}
              setOpenComponent={setOpenComponent}
              setPatientDetails={setPatientDetails}
            />
          ) : openComponent == "Appointment" ? (
            <Appointment
              setOpenComponent={setOpenComponent}
              setDoctorDetails={setDoctorDetails}
            />
          ) : openComponent == "Shop" ? (
            <Shop
              setOpenComponent={setOpenComponent}
              setMedicineDetails={setMedicineDetails}
              currency={currency}
            />
          ) : openComponent == "Medicine" ? (
            <Medicine
              setOpenComponent={setOpenComponent}
              setMedicineDetails={setMedicineDetails}
              medicineDetails={medicineDetails}
              BUY_MEDICINE={BUY_MEDICINE}
              userType={userType}
              currency={currency}
            />
          ) : openComponent == "Order" ? (
            <Order
              setOpenComponent={setOpenComponent}
              setMedicineDetails={setMedicineDetails}
              setInvoic={setInvoic}
              currency={currency}
            />
          ) : openComponent == "Invoice" ? (
            <Invoice
              setOpenComponent={setOpenComponent}
              invoic={invoic}
              currency={currency}
            />
          ) : openComponent == "Notifications" ? (
            <Notifications
              notifications={notifications}
              setOpenComponent={setOpenComponent}
            />
          ) : openComponent == "Profile" ? (
            <Profile
              user={user}
              setOpenComponent={setOpenComponent}
              setDoctorDetails={setDoctorDetails}
            />
          ) : openComponent == "PatientProfile" ? (
            <PatientProfile
              patientDetails={patientDetails}
              setOpenComponent={setOpenComponent}
              setDoctorDetails={setDoctorDetails}
            />
          ) : openComponent == "DoctorProfile" ? (
            <DoctorProfile
              setPatientDetails={setPatientDetails}
              setOpenComponent={setOpenComponent}
              user={user}
            />
          ) : openComponent == "DoctorDetails" ? (
            <DoctorDetails
              setPatientDetails={setPatientDetails}
              setOpenComponent={setOpenComponent}
              doctorDetails={doctorDetails}
            />
          ) : openComponent == "StaffProfile" ? (
            <StaffProfile setOpenComponent={setOpenComponent} />
          ) : openComponent == "Chat" ? (
            <Chat
              setOpenComponent={setOpenComponent}
              SEND_MESSAGE={SEND_MESSAGE}
            />
          ) : openComponent == "Ask AI" ? (
            <AI setOpenComponent={setOpenComponent} />
          ) : openComponent == "MedicialHistory" ? (
            <MedicialHistory setOpenComponent={setOpenComponent} />
          ) : openComponent == "User" ? (
            <User setOpenComponent={setOpenComponent} />
          ) : openComponent == "UpdateAdmin" ? (
            <UpdateAdmin setOpenComponent={setOpenComponent} />
          ) : openComponent == "YourAppointments" ? (
            <DoctorAppointment
              setOpenComponent={setOpenComponent}
              setPatientDetails={setPatientDetails}
            />
          ) : openComponent == "Prescription" ? (
            <Prescription
              setOpenComponent={setOpenComponent}
              setDoctorDetails={setDoctorDetails}
              setPatientDetails={setPatientDetails}
              setMedicineDetails={setMedicineDetails}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      {authComponent && (
        <Auth
          setAddDocotr={setAddDocotr}
          setAddPatient={setAddPatient}
          address={address}
          connectMetaMask={connectMetaMask}
          SHORTEN_ADDRESS={SHORTEN_ADDRESS}
        />
      )}

      {addDocotr && <AddDoctor setAddDocotr={setAddDocotr} />}
      {addPatient && (
        <AddPatient
          setAddPatient={setAddPatient}
          registerDoctors={registerDoctors}
        />
      )}
      {loader && <Loader />}
    </>
  );
};

export default index;
