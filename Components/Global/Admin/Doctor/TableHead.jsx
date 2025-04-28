import React from "react";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>
          <div className="checkbox align-self-center">
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
        <th>ID</th>
        <th>Date Join</th>
        <th>Doctor Name</th>
        <th>Specialist</th>
        <th>Schedule</th>
        <th>Contact</th>
        <th>Status</th>
      </tr>
    </thead>
  );
};

export default TableHead;
