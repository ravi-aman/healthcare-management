import React from "react";
//INTERNAL IMPORT

import { FaRegEdit } from "../../ReactICON/index";

const Header = ({ patientDetails, doctor, patientAppoinment }) => {
  return (
    <>
      <div className="page-titles">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="javascript:void(0)">Patient</a>
          </li>
          <li className="breadcrumb-item active">
            <a href="javascript:void(0)">Patient Details</a>
          </li>
        </ol>
      </div>
      <div className="d-md-flex d-block mb-3 align-items-center">
        <div className="widget-timeline-icon py-3 py-md-2 px-1 overflow-auto">
          <ul className="timeline">
            <li>
              <div className="icon bg-warning" />
              <a
                className="timeline-panel text-muted"
                href="javascript:void(0);"
              >
                <h4 className="mb-2 mt-0 text-warning fs-16 font-w600">
                  Appoinment
                </h4>
                <p className="fs-14 mb-0">{patientAppoinment?.length}</p>
              </a>
            </li>
            <li className="border-info">
              <div className="icon bg-info" />
              <a
                className="timeline-panel text-muted"
                href="javascript:void(0);"
              >
                <h4 className="mb-2 mt-0 text-info fs-16 font-w600">
                  Assigned Doctor
                </h4>
                <p className="fs-14 mb-0">
                  {doctor?.title} {doctor?.firstName} {doctor?.lastName}
                </p>
              </a>
            </li>
            <li>
              <div className="icon bg-primary" />
              <a
                className="timeline-panel text-muted"
                href="javascript:void(0);"
              >
                <h4 className="mb-2 text-primary mt-0 fs-16 font-w600">
                  Member
                </h4>
                <p className="fs-14 mb-0">25/09/2020, 10:45 AM</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
