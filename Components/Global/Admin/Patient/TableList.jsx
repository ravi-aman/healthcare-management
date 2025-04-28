import React from "react";
//INTERNAL IMPORT
import {
  TableList1,
  TableList2,
  TableList3,
  TableList4,
} from "../../../SVG/index";
//
const TableList = ({ patient, index, setOpenComponent, setPatientDetails }) => {
  return (
    <tr key={patient?.patientID}>
      <td>
        <div className="d-flex align-items-center">
          <div className="checkbox text-end align-self-center">
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheckBox2"
                required=""
              />
              <label className="form-check-label" htmlFor="customCheckBox2" />
            </div>
          </div>
          <img
            alt=""
            src={patient?.image}
            height={43}
            width={43}
            className="rounded-circle ms-4"
          />
        </div>
      </td>
      <td>#P-0{patient?.patientID}</td>
      <td>
        {patient?.title} {patient?.firstName} {patient?.lastName}
      </td>
      <td>{patient?.emailID}</td>
      <td>{patient?.mobile}</td>
      <td>{patient?.city}</td>
      <td>{patient?.medicalHistory[0]}</td>
      <td>{patient?.gender}</td>
      <td>
        <div className="d-flex align-items-center">
          <div className="dropdown ms-auto c-pointer text-end">
            <div className="btn-link" data-bs-toggle="dropdown">
              <TableList4 />
            </div>
            <div className="dropdown-menu dropdown-menu-right">
              <a
                onClick={() => (
                  setPatientDetails(patient), setOpenComponent("PatientProfile")
                )}
                className="dropdown-item"
              >
                View Detail
              </a>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TableList;
