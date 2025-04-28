import React, { useEffect, useState } from "react";

//INTERNAL IMPORT
import Header from "../../Regular/Table/Header";
import Table from "./Table";

import {
  GET_ALL_APPOINTMENTS,
  GET_DOCTOR_DETAILS,
  GET_PATIENT_DETAILS,
} from "../../../../Context/constants";

const AllAppoinments = ({
  setDoctorDetails,
  setOpenComponent,
  setPatientDetails,
}) => {
  const [registerDoctors, setRegisterDoctors] = useState();
  const [registerDoctorsCopy, setRegisterDoctorsCopy] = useState();

  const tableHead = [
    {
      name: "DOCTOR",
    },
    {
      name: "PATIENT",
    },
    {
      name: "BOOKING DATE",
    },
    {
      name: "ID",
    },
    {
      name: "DATE",
    },
    {
      name: "FROM",
    },
    {
      name: "TO",
    },
    {
      name: "CONDITION",
    },
    {
      name: "DOCTOR",
    },
    {
      name: "PATIENT",
    },
    {
      name: "STATUS",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const appointments = await GET_ALL_APPOINTMENTS();

        const combinedData = await Promise.all(
          appointments.map(async (appointment) => {
            const patient = await GET_PATIENT_DETAILS(appointment.patientId);
            const doctor = await GET_DOCTOR_DETAILS(appointment.doctorId);
            return { ...appointment, doctor, patient, ...doctor };
          })
        );
        console.log(combinedData);
        setRegisterDoctors(combinedData);
        setRegisterDoctorsCopy(combinedData);
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

  //FILTER
  const onHandleSearch = (value) => {
    const filteredNFTS = registerDoctors.filter(({ firstName }) =>
      firstName.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredNFTS.length === 0) {
      setRegisterDoctors(registerDoctorsCopy);
    } else {
      setRegisterDoctors(filteredNFTS);
    }
  };

  const onClearSearch = () => {
    if (registerDoctors?.length && registerDoctorsCopy.length) {
      setRegisterDoctors(registerDoctorsCopy);
    }
  };
  return (
    <>
      <div className="container-fluid">
        <Header
          name={"All Appointment"}
          onHandleSearch={onHandleSearch}
          onClearSearch={onClearSearch}
        />
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <Table
                    thead={tableHead}
                    tableData={registerDoctors}
                    name={"appoinment"}
                    setDoctorDetails={setDoctorDetails}
                    setOpenComponent={setOpenComponent}
                    setPatientDetails={setPatientDetails}
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
