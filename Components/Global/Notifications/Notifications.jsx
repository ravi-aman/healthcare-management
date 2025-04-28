import React, { useEffect, useState } from "react";

///INTERNAL IMPORT
import Table from "./Table";

const Notifications = ({ notifications }) => {
  const tableHead = [
    {
      name: "Notifications",
    },
    {
      name: "ID",
    },
    {
      name: "Address",
    },
    {
      name: "date",
    },
    {
      name: "Type",
    },
  ];

  const orders = [
    {
      id: "#181",
      date: "26/02/2020, 12:42 AM",
      name: "Ricky Antony",
      email: "ricky@example.com",
      address:
        "Ricky Antony, 2392 Main Avenue, Penasauka, New Jersey 02149 Via Flat Rate",
      status: "Completed",
      price: "$99",
    },
    {
      id: "#186",
      date: "26/02/2020, 12:42 AM",
      name: "Ricky Antony",
      email: "ricky@example.com",
      address:
        "Ricky Antony, 2392 Main Avenue, Penasauka, New Jersey 02149 Via Flat Rate",
      status: "On Hold",
      price: "$99",
    },
    {
      id: "#183",
      date: "26/02/2020, 12:42 AM",
      name: "Ricky Antony",
      email: "ricky@example.com",
      address:
        "Ricky Antony, 2392 Main Avenue, Penasauka, New Jersey 02149 Via Flat Rate",
      status: "Completed",
      price: "$19",
    },
    {
      id: "#182",
      date: "26/02/2020, 12:42 AM",
      name: "Ricky Antony",
      email: "ricky@example.com",
      address:
        "Ricky Antony, 2392 Main Avenue, Penasauka, New Jersey 02149 Via Flat Rate",
      status: "Pending",
      price: "$29",
    },
    {
      id: "#184",
      date: "26/02/2020, 12:42 AM",
      name: "Antony",
      email: "ricky@example.com",
      address:
        "Ricky Antony, 2392 Main Avenue, Penasauka, New Jersey 02149 Via Flat Rate",
      status: "Completed",
      price: "$9",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="page-titles">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="javascript:void(0)">Notification</a>
          </li>
          <li className="breadcrumb-item active">
            <a href="javascript:void(0)">All Notifications</a>
          </li>
        </ol>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card overflow-hidden">
            <div className="card-body p-0">
              <div className="table-responsive">
                <Table
                  thead={tableHead}
                  tableData={notifications}
                  name={"All Notifications"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
