import React from "react";

const TableList = ({ item, index, name }) => {
  return (
    <tr key={index} className="btn-reveal-trigger">
      <td className="py-2">
        <div className="form-check custom-checkbox checkbox-success">
          <input type="checkbox" className="form-check-input" id="checkbox" />
          <label className="form-check-label" htmlFor="checkbox" />
        </div>
      </td>

      <td className="py-2">#N00-{item?.notificationId}</td>
      <td className="py-2">{item?.message}</td>
      <td className="py-2">{item?.userAddress}</td>
      <td className="py-2">{item?.date}</td>
      <td className="py-2">{item?.categoryType}</td>
    </tr>
  );
};

export default TableList;
