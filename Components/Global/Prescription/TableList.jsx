import React from "react";

const TableList = ({
  item,
  index,
  name,
  setDoctorDetails,
  setOpenComponent,
  setPatientDetails,
  setMedicineDetails,
}) => {
  return (
    <tr key={item.name}>
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
      <td className="patient-info ps-0">
        <span>
          <img src={item?.patient.image} alt="" />
        </span>
        <span className="text-nowrap ms-2">
          {item?.patient.title} {item?.patient.firstName}{" "}
          {item?.patient.lastName}
        </span>
      </td>
      <td className="patient-info ps-0">
        <span>
          <img src={item?.medicine.image} alt="" />
        </span>
        <span className="text-nowrap ms-2">{item?.medicine.name}</span>
      </td>
      <td className="text-primary">{item.date}</td>
      <td>#M00-{item.prescriptionId}</td>
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
          onClick={() => (
            setPatientDetails(item?.patient), setOpenComponent("PatientProfile")
          )}
          className="btn btn-primary light btn-rounded mb-2 me-2"
        >
          View Patient
        </a>
      </td>
      <td>
        <a
          onClick={() => (
            setMedicineDetails(item?.medicine), setOpenComponent("Medicine")
          )}
          className="btn btn-primary light btn-rounded mb-2 me-2"
        >
          View Medicine
        </a>
      </td>
    </tr>
  );
};

export default TableList;
