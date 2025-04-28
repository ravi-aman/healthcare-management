import React, { useEffect, useState } from "react";

//INTERNAL IMPORT
import Header from "../../Regular/Table/Header";
import Table from "./Table";
import AddPatient from "./AddPatient";

import { useStateContext } from "../../../../Context/index";

import {
  GET_ALL_REGISTERED_PATIENTS,
  GET_ALL_APPROVE_DOCTORS,
} from "../../../../Context/constants";

const Patient = ({ setOpenComponent, setPatientDetails }) => {
  const { CHECKI_IF_CONNECTED_LOAD, address } = useStateContext();
  const [registeredPatient, setRegisteredPatient] = useState();
  const [registeredPatientCopy, setRegisteredPatientCopy] = useState();
  const [registerDoctors, setRegisterDoctors] = useState();

  const tableHead = [
    {
      name: "#ID",
    },
    {
      name: "Name",
    },
    {
      name: "EmailID",
    },
    {
      name: "Phone",
    },
    {
      name: "City",
    },
    {
      name: "Condition",
    },
    {
      name: "Gender",
    },
  ];

  const patients = [
    {
      id: "#P-00012",
      date: "26/02/2020, 12:42 AM",
      name: "Alexia Kev",
      Doctor: "Dr. Samantha",
      Disease: "Allergies , Asthma",
      Status: "Pending",
      RoomNo: "AB-002",
    },
    {
      id: "#P-00012",
      date: "26/02/2020, 12:42 AM",
      name: "Alexia Kev",
      Doctor: "Dr. Samantha",
      Disease: "Allergies , Asthma",
      Status: "Rejected",
      RoomNo: "AB-002",
    },
    {
      id: "#P-00012",
      date: "26/02/2020, 12:42 AM",
      name: "Alexia Kev",
      Doctor: "Dr. Samantha",
      Disease: "Allergies , Asthma",
      Status: "Recovered",
      RoomNo: "AB-002",
    },
    {
      id: "#P-00012",
      date: "26/02/2020, 12:42 AM",
      name: "Alexia Kev",
      Doctor: "Dr. Samantha",
      Disease: "Allergies , Asthma",
      Status: "On Recovery",
      RoomNo: "AB-002",
    },
    {
      id: "#P-00012",
      date: "26/02/2020, 12:42 AM",
      name: "Alexia Kev",
      Doctor: "Dr. Samantha",
      Disease: "Allergies , Asthma",
      Status: "Pending",
      RoomNo: "AB-002",
    },
    {
      id: "#P-00012",
      date: "26/02/2020, 12:42 AM",
      name: "Alexia Kev",
      Doctor: "Dr. Samantha",
      Disease: "Allergies , Asthma",
      Status: "Rejected",
      RoomNo: "AB-002",
    },
    {
      id: "#P-00012",
      date: "26/02/2020, 12:42 AM",
      name: "Alexia Kev",
      Doctor: "Dr. Samantha",
      Disease: "Allergies , Asthma",
      Status: "On Recovery",
      RoomNo: "AB-002",
    },
    {
      id: "#P-00012",
      date: "26/02/2020, 12:42 AM",
      name: "Alexia Kev",
      Doctor: "Dr. Samantha",
      Disease: "Allergies , Asthma",
      Status: "On Recovery",
      RoomNo: "AB-002",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const address = await CHECKI_IF_CONNECTED_LOAD();
      if (address) {
        GET_ALL_REGISTERED_PATIENTS().then((patients) => {
          console.log(patients);
          setRegisteredPatient(patients);
          setRegisteredPatientCopy(patients);
        });
        //DOCTORS
        GET_ALL_APPROVE_DOCTORS().then((doctors) => {
          console.log(doctors);
          setRegisterDoctors(doctors);
        });
      }
    };

    fetchData();
  }, [address]);

  //FILTER
  const onHandleSearch = (value) => {
    const filteredNFTS = registeredPatient.filter(({ firstName }) =>
      firstName.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredNFTS.length === 0) {
      setRegisteredPatient(registeredPatientCopy);
    } else {
      setRegisteredPatient(filteredNFTS);
    }
  };

  const onClearSearch = () => {
    if (registerDoctors?.length && registeredPatientCopy.length) {
      setRegisteredPatient(registeredPatientCopy);
    }
  };
  return (
    <>
      <div className="container-fluid">
        <Header
          name={"Patient List"}
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
                    name={"patient"}
                    tableData={registeredPatient}
                    setOpenComponent={setOpenComponent}
                    setPatientDetails={setPatientDetails}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddPatient registerDoctors={registerDoctors} />
    </>
  );
};

export default Patient;
