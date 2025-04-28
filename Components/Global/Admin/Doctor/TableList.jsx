import React from "react";
//INTERNAL IMPORT
import { TableList4 } from "../../../SVG/index";
import { useStateContext } from "../../../../Context/index";

const TableList = ({
  item,
  index,
  name,
  setOpenComponent,
  setDoctorDetails,
}) => {
  const { APPROVE_DOCTOR_STATUS } = useStateContext();
  return (
    <tr key={item?.doctorID}>
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
            src={item?.image}
            height={43}
            width={43}
            className="rounded-circle ms-4"
          />
        </div>
      </td>
      <td>#D-00{item?.doctorID}</td>
      <td>{item?.specialization}</td>
      <td>
        {item?.title} {item?.firstName} {item?.lastName}
      </td>
      <td>{item?.emailID}</td>
      <td>
        <a
          href="javascript:void(0);"
          className={`btn light btn-rounded btn-sm ${
            item?.appointmentCount >= 1
              ? " btn-primary text-nowrap"
              : "btn-secondary"
          } `}
        >
          {item?.appointmentCount >= 1
            ? `${item?.appointmentCount} Appointment`
            : "0 Appointment"}
        </a>
      </td>
      <td>
        <span className="font-w500">{item?.mobile}</span>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span
            className={`text-danger ${
              item?.isApproved ? "text-primary" : "text-danger"
            } font-w600`}
          >
            {item?.isApproved ? "Approved" : "Not Approved"}
          </span>
          <div className="dropdown ms-auto c-pointer text-end">
            <div className="btn-link" data-bs-toggle="dropdown">
              <TableList4 />
            </div>
            <div className="dropdown-menu dropdown-menu-right">
              <a
                onClick={() => (
                  setDoctorDetails(item), setOpenComponent("DoctorDetails")
                )}
                className="dropdown-item"
                href="javascript:void(0);"
              >
                View Detail
              </a>
              {item?.isApproved ? (
                <a
                  onClick={() => APPROVE_DOCTOR_STATUS(item?.doctorID)}
                  className="dropdown-item"
                >
                  Deactive Doctor
                </a>
              ) : (
                <a
                  onClick={() => APPROVE_DOCTOR_STATUS(item?.doctorID)}
                  className="dropdown-item"
                >
                  Approve Doctor
                </a>
              )}
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TableList;
