import React from "react";

//INTERNAM IMPORT
import {
  HeroCard1,
  HeroCard2,
  HeroCard3,
  HeroCard4,
  HeroCard5,
  HeroCard6,
  HeroCard7,
  HeroCard8,
  Header1,
} from "../../SVG/index";
import Header from "./Header";
import Card from "./Card";
import Revenue from "./Revenue";
import Statistic from "./Statistic";
import Doctors from "./Doctors";
import Patient from "./Patient";

const Home = ({
  registerDoctors,
  registeredPatient,
  setPatientDetails,
  setOpenComponent,
  setDoctorDetails,
  notifications,
  allAppointments,
  accountBalance,
  currency,
}) => {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <Card
          title={"Total Patient"}
          patient={`${registeredPatient?.length}`}
          number={"4"}
          iconOne={<HeroCard1 />}
          iconTwo={<HeroCard2 />}
          classStyle={"bg-danger"}
        />
        <Card
          title={"Doctor"}
          patient={`${registerDoctors?.length}`}
          number={".4"}
          iconOne={<HeroCard3 />}
          iconTwo={<HeroCard4 />}
          classStyle={"bg-success "}
        />
        <Card
          title={"Appointment"}
          patient={`${allAppointments?.length}`}
          number={".2"}
          iconOne={<HeroCard5 />}
          iconTwo={<HeroCard6 />}
          classStyle={"bg-info"}
        />
        <Card
          title={"Notifications"}
          patient={`${notifications?.length}`}
          number={".5"}
          iconOne={<HeroCard7 />}
          iconTwo={<Header1 />}
          classStyle={"bg-secondary"}
        />

        <Revenue accountBalance={accountBalance} currency={currency} />
        <Statistic />
        <Doctors
          registerDoctors={registerDoctors}
          setOpenComponent={setOpenComponent}
          setDoctorDetails={setDoctorDetails}
        />
        <Patient
          registeredPatient={registeredPatient}
          setPatientDetails={setPatientDetails}
          setOpenComponent={setOpenComponent}
        />
      </div>
    </div>
  );
};

export default Home;
