import React from "react";

const TableHead = ({ thead, name }) => {
  return (
    <thead>
      <tr>
        <th>
          <div className="checkbox text-end align-self-center">
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkAll"
                required=""
              />
              <label className="form-check-label" htmlFor="checkAll" />
            </div>
          </div>
        </th>
        {thead?.map((item, index) => (
          <th key={item.name}>{item.name}</th>
        ))}

        {name == "patient" ? <th /> : ""}
      </tr>
    </thead>
  );
};

export default TableHead;
