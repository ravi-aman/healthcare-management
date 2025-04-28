import React from "react";

//INTERNAL IMPORT
import HomePatients from "../Data/HomePatients.json";

const Patient = ({
  registeredPatient,
  setPatientDetails,
  setOpenComponent,
}) => {
  return (
    <div className="col-xl-3 col-xxl-4 col-lg-5">
      <div className="card border-0 pb-0">
        <div className="card-header flex-wrap border-0 pb-0">
          <h3 className="fs-20 mb-0 text-black">Recent Patient</h3>
          <a href="patient-list.html" className="text-primary font-w500">
            View more &gt;&gt;
          </a>
        </div>
        <div className="card-body recent-patient px-0">
          <div
            id="DZ_W_Todo2"
            className="widget-media px-4 dz-scroll height320"
          >
            <ul className="timeline">
              {registeredPatient?.map((patient, index) => (
                <li
                  onClick={() => (
                    setPatientDetails(patient),
                    setOpenComponent("PatientProfile")
                  )}
                >
                  <div key={patient.name} className="timeline-panel flex-wrap">
                    <div className="media me-3">
                      <img
                        className="rounded-circle"
                        alt="image"
                        width={50}
                        src={patient.image}
                      />
                    </div>
                    <div className="media-body">
                      <h5 className="mb-1">
                        <a className="text-black">
                          {patient.title} {patient.firstName} {patient.lastName}
                        </a>
                      </h5>
                      <span className="fs-14">{patient.city}</span>
                    </div>
                    <a
                      href="javascript:void(0);"
                      className={`text-${
                        patient.status == "Pending"
                          ? "warning"
                          : patient.status == "On Recovery"
                          ? "info"
                          : patient.status == "Rejected"
                          ? "danger"
                          : patient.status == "Recovered"
                          ? "primary"
                          : ""
                      } mt-2`}
                    >
                      {patient.status}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
