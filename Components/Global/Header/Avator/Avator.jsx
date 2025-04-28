import React from "react";

///INTERNAL IMPORT
import { Header4, Header5, Header6 } from "../../../SVG/index";
import Link from "./Link";

const Avator = ({
  user,
  setOpenComponent,
  setPatientDetails,
  setDoctorDetails,
  userType,
  address,
  CONNECT_WALLET,
  checkRegistration,
}) => {
  return (
    <>
      {address && checkRegistration == "User is not registered" ? (
        <a onClick={() => {}} className="nav-link">
          <img src={"logo.png"} width={20} alt="" />
          <div className="header-info">
            <span>Register</span>
          </div>
        </a>
      ) : address && checkRegistration != "User is not registered" ? (
        <>
          <a className="nav-link">
            <img src={user?.image} width={20} alt="" />
            <div className="header-info">
              <span>
                Hello,<strong> {user?.firstName}</strong>
              </span>
            </div>
          </a>
        </>
      ) : (
        <a onClick={() => CONNECT_WALLET()} className="nav-link">
          <img src={"logo.png"} width={20} alt="" />
          <div className="header-info">
            <span>Connect Wallet</span>
          </div>
        </a>
      )}
    </>
  );
};

export default Avator;
