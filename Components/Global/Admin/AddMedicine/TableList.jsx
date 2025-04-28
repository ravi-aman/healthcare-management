import React from "react";
//INTERNAL IMPORT
import { TableList4 } from "../../../SVG/index";
import { useStateContext } from "../../../../Context/index";

const TableList = ({
  item,
  index,
  name,
  setOpenComponent,
  setActiveFunction,
  updateMedicine,
  setUpdateMedicine,
  setMedicineDetails,
}) => {
  const { UPDATE_MEDICINE_ACTIVE } = useStateContext();
  return (
    <tr key={item?.medicineID}>
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
      <td>{item?.name}</td>
      <td>{item?.verifyingDoctor}</td>
      <td>{item?.price}</td>
      <td>{item?.quantity}</td>
      <td>
        <span className="font-w500">{item?.discount || "0%"}</span>
      </td>
      <td>
        <span className="font-w500">{item?.code}</span>
      </td>
      <td>
        <span className="font-w500">{item?.brand}</span>
      </td>
      <td>
        <span className="font-w500">
          {item?.active ? "Active" : "Deactive"}
        </span>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <div className="dropdown ms-auto c-pointer text-end">
            <div className="btn-link" data-bs-toggle="dropdown">
              <TableList4 />
            </div>
            <div className="dropdown-menu dropdown-menu-right">
              <a
                className="dropdown-item"
                href="javascript:void(0);"
                onClick={() => (
                  setMedicineDetails(item), setOpenComponent("Medicine")
                )}
              >
                View Detail
              </a>
              {item?.active ? (
                <a
                  onClick={() => UPDATE_MEDICINE_ACTIVE(item?.medicineID)}
                  className="dropdown-item"
                >
                  Deactive
                </a>
              ) : (
                <a
                  onClick={() => UPDATE_MEDICINE_ACTIVE(item?.medicineID)}
                  className="dropdown-item"
                >
                  Active
                </a>
              )}

              <a
                onClick={(e) => (
                  setUpdateMedicine({
                    ...updateMedicine,
                    medicineID: item?.medicineID,
                  }),
                  setActiveFunction("Price")
                )}
                className="dropdown-item"
              >
                Update Price
              </a>
              <a
                className="dropdown-item"
                onClick={(e) => (
                  setUpdateMedicine({
                    ...updateMedicine,
                    medicineID: item?.medicineID,
                  }),
                  setActiveFunction("Quentity")
                )}
              >
                Update Quentity
              </a>
              <a
                className="dropdown-item"
                onClick={(e) => (
                  setUpdateMedicine({
                    ...updateMedicine,
                    medicineID: item?.medicineID,
                  }),
                  setActiveFunction("Discount")
                )}
              >
                Update Discount
              </a>
              <a
                className="dropdown-item"
                onClick={(e) => (
                  setUpdateMedicine({
                    ...updateMedicine,
                    medicineID: item?.medicineID,
                  }),
                  setActiveFunction("Location")
                )}
              >
                Update Location
              </a>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TableList;
