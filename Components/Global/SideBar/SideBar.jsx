import React from "react";

//INTERNAL IMPORT
import {
  CgMenuGridR,
  CgMenuHotdog,
  FaUsers,
  FaShoppingBag,
  FaUserAlt,
  SlCalender,
  MdEmail,
  FaArrowRightLong,
  BsRobot,
} from "../../ReactICON/index";
import Link from "./Link";

const ADMIN_ADDRESS = process.env.NEXT_PUBLIC_ADMIN_ADDRESS;

const SideBar = ({
  openComponent,
  setOpenComponent,
  user,
  setPatientDetails,
  userType,
  address,
}) => {
  return (
    <div className="deznav">
      <div className="deznav-scroll">
        <ul className="metismenu" id="menu">
          {address == ADMIN_ADDRESS.toLowerCase() && (
            <li>
              <a className="has-arrow ai-icon" aria-expanded="false">
                <i>
                  <CgMenuGridR />
                </i>
                <span
                  onClick={() => setOpenComponent("Home")}
                  className="nav-text"
                >
                  Dashboard
                </span>
              </a>
              <ul aria-expanded="false">
                <Link
                  name={"Patient"}
                  handleClick={() => setOpenComponent("Patient")}
                />
                <Link
                  name={"Doctor"}
                  handleClick={() => setOpenComponent("Doctor")}
                />
                <Link
                  name={"Add Medicine"}
                  handleClick={() => setOpenComponent("Add Medicine")}
                />
                <Link
                  name={"All Appoinments"}
                  handleClick={() => setOpenComponent("All Appoinments")}
                />
                <Link
                  name={"User"}
                  handleClick={() => setOpenComponent("User")}
                />
                <Link
                  name={"Update"}
                  handleClick={() => setOpenComponent("UpdateAdmin")}
                />
              </ul>
            </li>
          )}

          {userType == "Patient" && (
            <li>
              <a
                className="ai-icon"
                aria-expanded="false"
                onClick={() => setOpenComponent("Appointment")}
              >
                <i>
                  <SlCalender />
                </i>
                <span className="nav-text">Appointment</span>
              </a>
            </li>
          )}

          <li>
            <a className="has-arrow ai-icon" aria-expanded="false">
              <i>
                <FaUserAlt />
              </i>
              <span className="nav-text">Profile</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a
                  onClick={() => {
                    if (userType === "Patient") {
                      setPatientDetails(user);
                      setOpenComponent("Profile");
                    } else {
                      setPatientDetails(user);
                      setOpenComponent("DoctorProfile");
                    }
                  }}
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setOpenComponent("Notifications");
                  }}
                >
                  Notifications
                </a>
              </li>
              {userType == "Patient" && (
                <Link
                  name={"Order"}
                  handleClick={() => setOpenComponent("Order")}
                />
              )}
              {userType == "Patient" && (
                <Link
                  name={"Prescription"}
                  handleClick={() => setOpenComponent("Prescription")}
                />
              )}
              {userType == "Patient" && (
                <Link
                  name={"Medicial History"}
                  handleClick={() => setOpenComponent("MedicialHistory")}
                />
              )}
              {userType == "Doctor" && (
                <Link
                  name={"Your Appointments"}
                  handleClick={() => setOpenComponent("YourAppointments")}
                />
              )}
            </ul>
          </li>
          <li>
            <a
              className="ai-icon"
              aria-expanded="false"
              onClick={() => setOpenComponent("Shop")}
            >
              <i>
                <FaShoppingBag />
              </i>
              <span className="nav-text">Shop</span>
            </a>
          </li>
          <li>
            <a
              className="ai-icon"
              aria-expanded="false"
              onClick={() => setOpenComponent("Chat")}
            >
              <i>
                <MdEmail />
              </i>
              <span className="nav-text">Chat</span>
            </a>
          </li>
          <li>
            <a
              className="ai-icon"
              aria-expanded="false"
              onClick={() => setOpenComponent("Ask AI")}
            >
              <i>
                <BsRobot />
              </i>
              <span className="nav-text">Ask AI</span>
            </a>
          </li>
        </ul>
        <div className="plus-box">
          <p className="fs-16 font-w500 mb-1">Check your job schedule</p>
          <a className="text-white fs-26" href="javascript:;">
            <i>
              <FaArrowRightLong />
            </i>
          </a>
        </div>
        <div className="copyright">
          <p className="fs-14 font-w200">
            <strong className="font-w400">TBC Hospital Admin Dashboard</strong>©
            2023 All Rights Reserved
          </p>
          <p className="fs-12">
            Made with <span className="heart" /> by @theblockchaincoders
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
