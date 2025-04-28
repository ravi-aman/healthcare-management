import React from "react";
import toast from "react-hot-toast";

//INTERNAL IMPORT
import {
  TableList1,
  TableList2,
  TableList3,
  TableList4,
} from "../../../SVG/index";

import { FaRegCopy } from "../../../ReactICON/index";
//
const TableList = ({ patient, index }) => {
  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    notifySuccess("Copied successfully");
  };
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
        </div>
      </td>
      <td>{patient?.name}</td>

      <td>
        {patient?.accountAddress}{" "}
        <FaRegCopy onClick={() => copyText(patient?.accountAddress)} />
      </td>
    </tr>
  );
};

export default TableList;
