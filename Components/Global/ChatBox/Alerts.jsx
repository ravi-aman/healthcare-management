import React from "react";

//INTERNAL IMPORT
import { Alert1, Alert2 } from "../../SVG/index";
import AlertsData from "../Data/Alerts.json";

const Alerts = () => {
  return (
    <div className="tab-pane fade" id="alerts" role="tabpanel">
      <div className="card mb-sm-3 mb-md-0 contacts_card">
        <div className="card-header chat-list-header text-center">
          <a href="javascript:void(0);">
            <Alert1 />
          </a>
          <div>
            <h6 className="mb-1">Notications</h6>
            <p className="mb-0">Show All</p>
          </div>
          <a href="javascript:void(0);">
            <Alert2 />
          </a>
        </div>
        <div
          className="card-body contacts_body p-0 dz-scroll"
          id="DZ_W_Contacts_Body1"
        >
          <ul className="contacts">
            {AlertsData.map((item, index) => (
              <li key={index} className={`${index == 0 ? "active" : ""}`}>
                <div className="d-flex bd-highlight">
                  <div
                    className={`img_cont ${
                      index == 0 ? "primary" : "success"
                    } `}
                  >
                    {item.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="user_info">
                    <span> {item.name}</span>
                    <p
                      className={`${index == 0 ? "text-primary" : "success"} `}
                    >
                      Today
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-footer" />
      </div>
    </div>
  );
};

export default Alerts;
