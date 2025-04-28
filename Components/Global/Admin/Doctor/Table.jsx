import React from "react";

import TableHead from "../../Regular/Table/TableHead";
import TableList from "./TableList";

const Table = ({
  thead,
  tableData,
  name,
  setOpenComponent,
  setDoctorDetails,
}) => {
  return (
    <table
      id="example5"
      className="table shadow-hover doctor-list table-bordered mb-4 dataTablesCard fs-14"
    >
      <TableHead thead={thead} />
      <tbody>
        {tableData?.map((item, index) => (
          <TableList
            item={item}
            index={index}
            name={name}
            setOpenComponent={setOpenComponent}
            setDoctorDetails={setDoctorDetails}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
