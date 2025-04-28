import React from "react";

import TableHead from "../Regular/Table/TableHead";
import TableList from "./TableList";

const Table = ({
  thead,
  tableData,
  name,
  setOpenComponent,
  setMedicineDetails,
  setInvoic,
  currency,
}) => {
  return (
    <table className="table table-sm mb-0">
      <TableHead thead={thead} />
      <tbody id="orders">
        {tableData?.map((item, index) => (
          <TableList
            item={item}
            index={index}
            name={name}
            setOpenComponent={setOpenComponent}
            setMedicineDetails={setMedicineDetails}
            setInvoic={setInvoic}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
