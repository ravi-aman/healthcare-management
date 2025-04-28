import React from "react";
//INTERNAL IMPORT
import { TableList4 } from "../../../SVG/index";
import { useStateContext } from "../../../../Context/index";

const TableList = ({
  tableData,
  name,
  setOpenComponent,
  setActiveFunction,
  updateMedicine,
  setUpdateMedicine,
  setMedicineDetails,
  currency,
}) => {
  const { UPDATE_MEDICINE_ACTIVE } = useStateContext();
  return (
    <tr>
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
            src={"logo.png"}
            height={43}
            width={43}
            className="rounded-circle ms-4"
          />
        </div>
      </td>
      <td>
        {tableData?.doctorFee} {currency}
      </td>
      <td>
        {tableData?.patientFee} {currency}
      </td>
      <td>
        {tableData?.appointmentFee} {currency}
      </td>
      <td>
        {tableData?.admin} {currency}
      </td>
    </tr>
  );
};

export default TableList;
