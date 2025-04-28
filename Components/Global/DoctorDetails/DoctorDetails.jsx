import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

//INTERNAL IMPORT
import Header from "./Header";
import AppoinmentList from "./AppoinmentList";
import Card from "./Card";

import {
  DoctorDetails2,
  DoctorDetails1,
  DoctorDetails3,
  DoctorDetails4,
  DoctorDetails5,
} from "../../SVG/index";
import { FaRegCopy, FaHospital } from "../../ReactICON/index";
import {
  SHORTEN_ADDRESS,
  GET_DOCTOR_APPOINTMENTS_HISTORYS,
  GET_ALL_REGISTERED_MEDICINES,
  CHECK_DOCTOR_REGISTERATION,
} from "../../../Context/constants";

import { useStateContext } from "../../../Context/index";

const DoctorDetails = ({
  doctorDetails,
  setPatientDetails,
  setOpenComponent,
}) => {
  const {
    CHECKI_IF_CONNECTED_LOAD,
    address,
    BOOK_APPOINTMENT,
    PRESCRIBE_MEDICINE,
  } = useStateContext();
  const [doctorAppoinments, setDoctorAppoinments] = useState();

  const [registerMedicine, setRegisterMedicine] = useState();
  const [doctorInfo, setDoctorInfo] = useState();

  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    notifySuccess("Copied successfully");
  };

  useEffect(() => {
    const fetchData = async () => {
      const address = await CHECKI_IF_CONNECTED_LOAD();
      if (doctorDetails) {
        GET_DOCTOR_APPOINTMENTS_HISTORYS(doctorDetails.doctorID).then(
          (appoinmnet) => {
            console.log(appoinmnet);
            setDoctorAppoinments(appoinmnet);
          }
        );
      }
    };

    fetchData();
  }, [doctorDetails]);

  useEffect(() => {
    const fetchData = async () => {
      const address = await CHECKI_IF_CONNECTED_LOAD();
      if (address) {
        GET_ALL_REGISTERED_MEDICINES().then((medicine) => {
          console.log(medicine);
          setRegisterMedicine(medicine);
        });
      }
    };

    fetchData();
  }, [address]);

  console.log(doctorDetails);

  return (
    <div className="container-fluid">
      <Header setOpenComponent={setOpenComponent} />

      <div className="row">
        <div className="col-xl-3 col-lg-4 col-xxl-4">
          <div className="card">
            {doctorAppoinments?.length ? (
              <div className="card-header border-0 pb-0">
                <h4 className="fs-20 font-w600 mb-0">Appointments List</h4>
              </div>
            ) : (
              ""
            )}
            <div className="card-body px-0 pt-4">
              <div
                id="DZ_W_Todo2"
                className="widget-media dz-scroll px-4 height370"
              >
                {doctorAppoinments?.length ? (
                  <ul className="timeline">
                    {doctorAppoinments?.map((item, index) => (
                      <AppoinmentList item={item} index={index} />
                    ))}
                  </ul>
                ) : (
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    src="appointment.jpg"
                    alt="Appointment"
                  />
                )}
              </div>
              <div
                style={{
                  marginTop: "3rem",
                  padding: "1rem",
                }}
              >
                <Card
                  name={doctorDetails?.appointmentCount}
                  title={"Total Appointment:"}
                  icon={<DoctorDetails3 />}
                />
                <Card
                  name={doctorDetails?.successfulTreatmentCount}
                  title={"Successful Treatment:"}
                  icon={<DoctorDetails3 />}
                />
              </div>
            </div>
          </div>
        </div>
        {/* //?? */}
        <div className="col-xl-6 col-xxl-8 col-lg-8">
          <div className="card">
            <div className="card-body">
              <div className="media d-sm-flex d-block text-center text-sm-start pb-4 mb-4 border-bottom">
                <img
                  alt="image"
                  className="rounded me-sm-4 me-0"
                  width={130}
                  src={doctorDetails?.image}
                />
                <div className="media-body align-items-center">
                  <div className="d-sm-flex d-block justify-content-between my-3 my-sm-0">
                    <div>
                      <h3 className="fs-22 text-black font-w600 mb-0">
                        {doctorDetails?.title} {doctorDetails?.firstName}{" "}
                        {doctorDetails?.lastName}
                      </h3>
                      <p className="mb-2 mb-sm-2">
                        {SHORTEN_ADDRESS(doctorDetails?.accountAddress)}{" "}
                        <a
                          onClick={() =>
                            copyText(doctorDetails?.accountAddress)
                          }
                        >
                          {" "}
                          <FaRegCopy />
                        </a>
                      </p>
                    </div>
                    <span>#P-00{doctorDetails?.doctorID}</span>
                  </div>
                  <a className="btn btn-primary light btn-rounded mb-2 me-2">
                    <DoctorDetails1 />
                    {doctorDetails?.gender}
                  </a>
                  <a className="btn btn-primary light btn-rounded mb-2">
                    <DoctorDetails2 />
                    {doctorDetails?.specialization}
                  </a>
                  <a className="btn btn-primary light btn-rounded mb-2">
                    <DoctorDetails2 />
                    {doctorDetails?.degrer}
                  </a>
                </div>
              </div>
              <div className="row">
                <Card
                  name={doctorDetails?.yourAddress}
                  title={"Doctor Address"}
                  icon={<DoctorDetails3 />}
                />
                <Card
                  name={doctorDetails?.mobile}
                  title={"Phone"}
                  icon={<DoctorDetails4 />}
                />
                <Card
                  name={doctorDetails?.emailID}
                  title={"Email"}
                  icon={<DoctorDetails5 />}
                />
                <Card
                  name={doctorDetails?.designation}
                  title={"Designation"}
                  icon={<DoctorDetails3 />}
                />
                <Card
                  name={doctorDetails?.registrationID}
                  title={"RegistrationID"}
                  icon={<DoctorDetails3 />}
                />
                <Card
                  name={doctorDetails?.lastWork}
                  title={"Last Work"}
                  icon={<DoctorDetails3 />}
                />
              </div>
              <hr />
              <div className="row mt-5">
                <Card
                  name={doctorDetails?.collageAddress}
                  title={"Collage Address"}
                  icon={<DoctorDetails3 />}
                />
                <Card
                  name={doctorDetails?.collageName}
                  title={"Collage Name"}
                  icon={<DoctorDetails3 />}
                />
                <Card
                  name={doctorDetails?.collageID}
                  title={"Collage ID"}
                  icon={<DoctorDetails3 />}
                />
                <Card
                  name={doctorDetails?.degrer}
                  title={"Degrer"}
                  icon={<DoctorDetails3 />}
                />
                <Card
                  name={doctorDetails?.joiningYear}
                  title={"Joining Year"}
                  icon={<DoctorDetails3 />}
                />
                <Card
                  name={doctorDetails?.endYear}
                  title={"Ending Year"}
                  icon={<DoctorDetails3 />}
                />
              </div>
              <div className="mt-5">
                <h4 className="fs-20 font-w600">
                  About Dr. {doctorDetails?.title} {doctorDetails?.firstName}{" "}
                  {doctorDetails?.lastName}
                </h4>
                <div className="staff-info">
                  <p>{doctorDetails?.biography}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
