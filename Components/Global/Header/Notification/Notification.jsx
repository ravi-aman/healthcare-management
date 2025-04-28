import React from "react";

//INTERNAL IMPORT
import NotificationJSON from "../../Data/Notification.json";

import ListCard from "./ListCard";
import { FaArrowRightLong } from "../../../ReactICON/index";

const Notification = ({ notifications, setOpenComponent }) => {
  return (
    <div className="dropdown-menu dropdown-menu-end">
      <div
        id="DZ_W_Notification1"
        className="widget-media dz-scroll p-3 height380"
      >
        <ul className="timeline">
          {notifications?.map((item) => <ListCard item={item} />).slice(0, 10)}
        </ul>
      </div>
      <a
        className="all-notification"
        onClick={() => setOpenComponent("Notifications")}
      >
        See all notifications <FaArrowRightLong />
      </a>
    </div>
  );
};

export default Notification;
