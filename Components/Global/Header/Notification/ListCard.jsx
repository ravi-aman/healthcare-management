import React from "react";

//INTERNAL IMPORT
import {
  FaUserDoctor,
  GiMedicines,
  MdAdminPanelSettings,
  FaUserAlt,
} from "../../../ReactICON/index";

const ListCard = ({ item }) => {
  return (
    <li key={item?.notificationId}>
      <div className="timeline-panel">
        <div
          className={`media me-2 ${
            item?.categoryType == "Doctor"
              ? "media-info"
              : item?.categoryType == "Medicine"
              ? "media-success"
              : item?.categoryType == "Patient"
              ? "media-danger"
              : "text-info"
          } `}
        >
          <small
            style={{
              fontSize: "1.5rem",
            }}
          >
            {item?.categoryType == "Admin" ? (
              <MdAdminPanelSettings />
            ) : item?.categoryType == "Medicine" ? (
              <GiMedicines />
            ) : item?.categoryType == "Doctor" ? (
              <FaUserDoctor />
            ) : (
              <FaUserAlt />
            )}
          </small>
        </div>
        <div className="media-body">
          <h6 className="mb-1">
            {item?.message.slice(0, 50)}
            ..
          </h6>
          <small className="d-block">
            {`${item?.date}` || "29 July 2020 - 02:26 PM"}{" "}
          </small>
        </div>
      </div>
    </li>
  );
};

export default ListCard;
