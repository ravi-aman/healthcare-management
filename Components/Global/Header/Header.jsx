import React, { useState, useEffect } from "react";

//INTERNAL IMPORT
import GiftData from "../Data/Gift.json";

import { Header1, Header2, Header3 } from "../../SVG/index";
import { IoIosSunny, IoMoon } from "../../ReactICON/index";
import Notification from "./Notification/Notification";
import Gift from "./Gift/Gift";
import Avator from "./Avator/Avator";

import { useStateContext } from "../../../Context/index";

const Header = ({
  user,
  setAddress,
  setOpenComponent,
  setPatientDetails,
  setDoctorDetails,
  userType,
  checkRegistration,
  notifications,
  notificationCount,
  setNotificationCount,
}) => {
  const { CONNECT_WALLET, address } = useStateContext();
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setIsMetaMaskInstalled(true);

      window.ethereum.on("accountsChanged", handleAccountsChanged);
    }

    return () => {
      if (typeof window.ethereum !== "undefined") {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
      }
    };
  }, []);

  const handleAccountsChanged = (accounts) => {
    console.log("Accounts changed:", accounts[0]);
    setAddress(accounts[0]);
    setOpenComponent("Home");
  };

  return (
    <div className="header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <div className="dashboard_bar">Dashboard</div>
            </div>
            <ul className="navbar-nav header-right">
              <li className="nav-item dropdown notification_dropdown">
                <a
                  className="nav-link ai-icon"
                  href="javascript:;"
                  role="button"
                  data-bs-toggle="dropdown"
                  onClick={() => (
                    setNotificationCount(0),
                    localStorage.setItem(
                      "ALL_NOTIFICATION",
                      JSON.stringify(notifications?.length)
                    )
                  )}
                >
                  <Header1 />
                  <span className="badge light text-white bg-primary">
                    {notificationCount > 0 && notificationCount}
                  </span>
                </a>
                <Notification
                  notifications={notifications}
                  setOpenComponent={setOpenComponent}
                />
              </li>

              <li className="nav-item dropdown notification_dropdown">
                <a
                  className="nav-link ai-icon"
                  href="javascript:;"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <Header3 />
                  <span className="badge light text-white bg-dark">
                    {GiftData?.length}
                  </span>
                </a>

                <Gift />
              </li>
              <li className="nav-item dropdown notification_dropdown">
                <a
                  className="nav-link bell dz-theme-mode"
                  href="javascript:void(0);"
                >
                  <i id="icon-light">
                    <IoIosSunny />
                  </i>
                  <i id="icon-dark">
                    <IoMoon />
                  </i>
                </a>
              </li>
              <li className="nav-item dropdown header-profile">
                <Avator
                  user={user}
                  setOpenComponent={setOpenComponent}
                  setPatientDetails={setPatientDetails}
                  setDoctorDetails={setDoctorDetails}
                  userType={userType}
                  address={address}
                  CONNECT_WALLET={CONNECT_WALLET}
                  checkRegistration={checkRegistration}
                />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
