import React from "react";

import TableHead from "../../Regular/Table/TableHead";
import TableList from "./TableList";

const Table = ({
  thead,
  tableData,
  name,
  setOpenComponent,
  setActiveFunction,
  updateMedicine,
  setUpdateMedicine,
  setMedicineDetails,
  currency,
}) => {
  return (
    <table
      id="example5"
      className="table shadow-hover doctor-list table-bordered mb-4 dataTablesCard fs-14"
    >
      <TableHead thead={thead} />
      <tbody>
        <TableList
          name={name}
          tableData={tableData}
          setOpenComponent={setOpenComponent}
          setActiveFunction={setActiveFunction}
          updateMedicine={updateMedicine}
          setUpdateMedicine={setUpdateMedicine}
          setMedicineDetails={setMedicineDetails}
          currency={currency}
        />
      </tbody>
    </table>
  );
};

export default Table;
