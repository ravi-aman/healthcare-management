import React, { useEffect, useState } from "react";

//INTERNAL IMPORT
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
} from "../../../SVG/index";
import Table from "./Table";
import Update from "./Update";
import Card from "./Card";

import { useStateContext } from "../../../../Context/index";

import { GET_FEE } from "../../../../Context/constants";

const UpdateAdmin = ({}) => {
  const [activeFunction, setActiveFunction] = useState();
  const [update, setUpdate] = useState();

  const {
    CHECKI_IF_CONNECTED_LOAD,
    address,
    currency,
    UPDATE_ADMIN_ADDRESS,
    UPDATE_REGISTRATION_PATIENT_FEE,
    UPDATE_APPOINTMENT_FEE,
    UPDATE_REGISTRATION_DOCTOR_FEE,
  } = useStateContext();

  const [dappFee, setDappFee] = useState();

  const tableHead = [
    {
      name: "Doctor Fee",
    },
    {
      name: "Patient Fee",
    },
    {
      name: "Appointment Fee",
    },
    {
      name: "Admin",
    },
  ];

  const medicines = [
    {
      name: "RadiantGlow Serum",
      image: "images/product/1.jpg",
      price: "$325.00",
      discount: "",
      review: 2,
      quentity: 5,
      code: "0405689",
      brand: "@theblockchaincoders",
      disease: ["Fever", "Headache", "Energy"],
      description:
        "The Blockchain Coders brings together organizations from across web3 to create the largest community learning blockchain education. ‍",
    },
    {
      name: "RadiantGlow Serum",
      image: "images/product/2.jpg",
      price: "$325.00",
      discount: "",
      review: 2,
      quentity: 5,
      code: "0405689",
      brand: "@theblockchaincoders",
      disease: ["Fever", "Headache", "Energy"],
      description:
        "The Blockchain Coders brings together organizations from across web3 to create the largest community learning blockchain education. ‍",
    },
    {
      name: "RadiantGlow Serum",
      image: "images/product/3.jpg",
      price: "$325.00",
      discount: "",
      review: 2,
      quentity: 5,
      code: "0405689",
      brand: "@theblockchaincoders",
      disease: ["Fever", "Headache", "Energy"],
      description:
        "The Blockchain Coders brings together organizations from across web3 to create the largest community learning blockchain education. ‍",
    },
    {
      name: "RadiantGlow Serum",
      image: "images/product/4.jpg",
      price: "$325.00",
      discount: "",
      review: 2,
      quentity: 5,
      code: "0405689",
      brand: "@theblockchaincoders",
      disease: ["Fever", "Headache", "Energy"],
      description:
        "The Blockchain Coders brings together organizations from across web3 to create the largest community learning blockchain education. ‍",
    },
    {
      name: "RadiantGlow Serum",
      image: "images/product/5.jpg",
      price: "$325.00",
      discount: "",
      review: 2,
      quentity: 5,
      code: "0405689",
      brand: "@theblockchaincoders",
      disease: ["Fever", "Headache", "Energy"],
      description:
        "The Blockchain Coders brings together organizations from across web3 to create the largest community learning blockchain education. ‍",
    },
    {
      name: "RadiantGlow Serum",
      image: "images/product/1.jpg",
      price: "$325.00",
      discount: "",
      review: 2,
      quentity: 5,
      code: "0405689",
      brand: "@theblockchaincoders",
      disease: ["Fever", "Headache", "Energy"],
      description:
        "The Blockchain Coders brings together organizations from across web3 to create the largest community learning blockchain education. ‍",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const address = await CHECKI_IF_CONNECTED_LOAD();
      if (address) {
        GET_FEE().then((fee) => {
          console.log(fee);
          setDappFee(fee);
        });
      }
    };

    fetchData();
  }, [address]);

  return (
    <>
      <div className="container-fluid">
        {activeFunction == "Doctor Fee" ? (
          <Update
            activeFunction={activeFunction}
            setActiveFunction={setActiveFunction}
            setUpdate={setUpdate}
            handleClick={() => UPDATE_REGISTRATION_DOCTOR_FEE(update)}
          />
        ) : activeFunction == "Patient Fee" ? (
          <Update
            activeFunction={activeFunction}
            setActiveFunction={setActiveFunction}
            setUpdate={setUpdate}
            handleClick={() => UPDATE_REGISTRATION_PATIENT_FEE(update)}
          />
        ) : activeFunction == "Appointment Fee" ? (
          <Update
            activeFunction={activeFunction}
            setActiveFunction={setActiveFunction}
            setUpdate={setUpdate}
            handleClick={() => UPDATE_APPOINTMENT_FEE(update)}
          />
        ) : activeFunction == "Address" ? (
          <Update
            activeFunction={activeFunction}
            setActiveFunction={setActiveFunction}
            setUpdate={setUpdate}
            handleClick={() => UPDATE_ADMIN_ADDRESS(update)}
          />
        ) : (
          ""
        )}

        <div className="row">
          <div className="col-xl-12">
            <div className="table-responsive">
              <Table
                thead={tableHead}
                tableData={dappFee}
                name={"Update Admin"}
                setActiveFunction={setActiveFunction}
                currency={currency}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <Card
            title={"Update Doctor Fee"}
            number={` ${dappFee?.doctorFee} ${currency}`}
            classStyle={"bg-danger"}
            handleClick={() => setActiveFunction("Doctor Fee")}
          />
          <Card
            title={"Update Patient Fee"}
            number={`${dappFee?.patientFee} ${currency}`}
            classStyle={"bg-success "}
            handleClick={() => setActiveFunction("Patient Fee")}
          />
          <Card
            title={"Appointment Fee"}
            number={`${dappFee?.appointmentFee} ${currency}`}
            classStyle={"bg-info"}
            handleClick={() => setActiveFunction("Appointment Fee")}
          />
          <Card
            title={"Update Admin"}
            number={"Addres"}
            classStyle={"bg-secondary"}
            handleClick={() => setActiveFunction("Address")}
          />
        </div>
      </div>
    </>
  );
};

export default UpdateAdmin;
