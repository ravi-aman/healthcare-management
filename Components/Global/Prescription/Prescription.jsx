import React, { useEffect, useState } from "react";

//INTERNAL IMPORT
import Header from "./Header";
import Table from "./Table";

import {
  GET_ALL_APPOINTMENTS,
  GET_DOCTOR_DETAILS,
  GET_PATIENT_DETAILS,
  GET_ALL_PRESCRIBED_MEDICINES_OF_PATIENT,
} from "../../../Context/constants";

const AllAppoinments = ({
  setDoctorDetails,
  setOpenComponent,
  setPatientDetails,
  setMedicineDetails,
}) => {
  const [registerDoctors, setRegisterDoctors] = useState();
  const [allPrescribed, setAllPrescribed] = useState();

  const tableHead = [
    {
      name: "DOCTOR",
    },
    {
      name: "PATIENT",
    },
    {
      name: "MEDICINE",
    },
    {
      name: "DATE",
    },
    {
      name: "PRESCRIPTION",
    },
    {
      name: "PROFILE",
    },
    {
      name: "PROFILE",
    },
    {
      name: "PROFILE",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        GET_ALL_PRESCRIBED_MEDICINES_OF_PATIENT().then((prescription) => {
          console.log(prescription);
          setAllPrescribed(prescription);
        });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const appoinment = [
    {
      image: "images/doctors/1.jpg",
      date: "8 Aug 2021",
      name: "Matthew",
      email: "gabriel@gmail.com	",
      from: "12:00",
      to: "13:00	",
      doctor: "Dr. HANI B BARADI",
      contact: "9876512345",
      condition: "Fever",
    },
    {
      image: "images/doctors/2.jpg",
      date: "8 Aug 2021",
      name: "Matthew",
      email: "gabriel@gmail.com	",
      from: "12:00",
      to: "13:00	",
      doctor: "Dr. HANI B BARADI",
      contact: "9876512345",
      condition: "Fever",
    },
    {
      image: "images/doctors/3.jpg",
      date: "8 Aug 2021",
      name: "Matthew",
      email: "gabriel@gmail.com	",
      from: "12:00",
      to: "13:00	",
      doctor: "Dr. HANI B BARADI",
      contact: "9876512345",
      condition: "Fever",
    },
    {
      image: "images/doctors/4.jpg",
      date: "8 Aug 2021",
      name: "Matthew",
      email: "gabriel@gmail.com	",
      from: "12:00",
      to: "13:00	",
      doctor: "Dr. HANI B BARADI",
      contact: "9876512345",
      condition: "Fever",
    },
    {
      image: "images/doctors/5.jpg",
      date: "8 Aug 2021",
      name: "Matthew",
      email: "gabriel@gmail.com	",
      from: "12:00",
      to: "13:00	",
      doctor: "Dr. HANI B BARADI",
      contact: "9876512345",
      condition: "Fever",
    },
  ];
  return (
    <>
      <div className="container-fluid">
        <Header />
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <Table
                    thead={tableHead}
                    tableData={allPrescribed}
                    name={"appoinment"}
                    setDoctorDetails={setDoctorDetails}
                    setOpenComponent={setOpenComponent}
                    setPatientDetails={setPatientDetails}
                    setMedicineDetails={setMedicineDetails}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllAppoinments;
