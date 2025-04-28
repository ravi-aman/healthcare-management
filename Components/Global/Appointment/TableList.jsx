import React from "react";

const TableList = ({
  item,
  index,
  name,
  setDoctorDetails,
  setOpenComponent,
}) => {
  return (
    <tr key={item?.id}>
      <td>
        <div className="checkbox text-end align-self-center">
          <div className="form-check custom-checkbox">
            <input
              type="checkbox"
              className="form-check-input"
              id="customCheckBox1"
              required=""
            />
            <label className="form-check-label" htmlFor="customCheckBox1" />
          </div>
        </div>
      </td>
      <td className="patient-info ps-0">
        <span>
          <img src={item?.doctor.image} alt="" />
        </span>
        <span className="text-nowrap ms-2">
          {item?.doctor.title} {item?.doctor.firstName} {item?.doctor.lastName}
        </span>
      </td>
      <td className="text-primary">{item?.doctor.emailID}</td>
      <td>{item?.date}</td>
      <td>{item?.appointmentDate}</td>
      <td>{item?.from}</td>
      <td>{item?.to}</td>
      <td>{item?.doctor.mobile}</td>
      <td>{item?.doctor.specialization}</td>
      <td>#A-00{item?.appointmentID}</td>
      <td>
        <a
          onClick={() => (
            setDoctorDetails(item?.doctor), setOpenComponent("DoctorDetails")
          )}
          className="btn btn-primary light btn-rounded mb-2 me-2"
        >
          View Doctor
        </a>
      </td>
      <td>
        <a
          className={`btn ${
            item?.isOpen ? "btn-primary" : "btn-danger"
          } light btn-rounded mb-2 me-2`}
        >
          {item?.isOpen ? "Open" : "Close"}
        </a>
      </td>
    </tr>
  );
};

export default TableList;
