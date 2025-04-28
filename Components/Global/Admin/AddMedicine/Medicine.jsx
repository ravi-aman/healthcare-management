import React, { useEffect, useState } from "react";

//INTERNAL IMPORT

import Header from "../../Regular/Table/Header";
import Table from "./Table";
import AddMedice from "./AddMedice";
import Update from "./Update";

import { useStateContext } from "../../../../Context/index";

import { GET_ALL_REGISTERED_MEDICINES } from "../../../../Context/constants";

const Medicine = ({
  setOpenComponent,
  setMedicineDetails,
  registerDoctors,
}) => {
  const [activeFunction, setActiveFunction] = useState();
  const [updateMedicine, setUpdateMedicine] = useState({
    medicineID: "",
    update: "",
  });

  const {
    CHECKI_IF_CONNECTED_LOAD,
    address,
    UPDATE_MEDICINE_DISCOUNT,
    UPDATE_MEDICINE_LOCATION,
    UPDATE_MEDICINE_PRICE,
    UPDATE_MEDICINE_QUANTITY,
  } = useStateContext();

  const [registerMedicine, setRegisterMedicine] = useState();
  const [registerMedicineCopy, setRegisterMedicineCopy] = useState();

  const tableHead = [
    {
      name: "Name",
    },
    {
      name: "Approved By",
    },
    {
      name: "Price",
    },
    {
      name: "Quentity",
    },
    {
      name: "Discount",
    },
    {
      name: "Code",
    },
    {
      name: "Brand",
    },
    {
      name: "Status",
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
        GET_ALL_REGISTERED_MEDICINES().then((medicine) => {
          console.log(medicine);
          setRegisterMedicine(medicine);
          setRegisterMedicineCopy(medicine);
        });
      }
    };

    fetchData();
  }, [address]);

  //FILTER
  const onHandleSearch = (value) => {
    const filteredNFTS = registerMedicine.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredNFTS.length === 0) {
      setRegisterMedicine(registerMedicineCopy);
    } else {
      setRegisterMedicine(filteredNFTS);
    }
  };

  const onClearSearch = () => {
    if (registerMedicine?.length && registerMedicineCopy.length) {
      setRegisterMedicine(registerMedicineCopy);
    }
  };
  return (
    <>
      <div className="container-fluid">
        <Header
          name={"Add Medicine"}
          onHandleSearch={onHandleSearch}
          onClearSearch={onClearSearch}
        />

        {activeFunction == "Price" ? (
          <Update
            activeFunction={activeFunction}
            updateMedicine={updateMedicine}
            setActiveFunction={setActiveFunction}
            setUpdateMedicine={setUpdateMedicine}
            handleClick={() => UPDATE_MEDICINE_PRICE(updateMedicine)}
          />
        ) : activeFunction == "Discount" ? (
          <Update
            activeFunction={activeFunction}
            updateMedicine={updateMedicine}
            setActiveFunction={setActiveFunction}
            setUpdateMedicine={setUpdateMedicine}
            handleClick={() => UPDATE_MEDICINE_DISCOUNT(updateMedicine)}
          />
        ) : activeFunction == "Quentity" ? (
          <Update
            activeFunction={activeFunction}
            updateMedicine={updateMedicine}
            setActiveFunction={setActiveFunction}
            setUpdateMedicine={setUpdateMedicine}
            handleClick={() => UPDATE_MEDICINE_QUANTITY(updateMedicine)}
          />
        ) : activeFunction == "Location" ? (
          <Update
            activeFunction={activeFunction}
            updateMedicine={updateMedicine}
            setActiveFunction={setActiveFunction}
            setUpdateMedicine={setUpdateMedicine}
            handleClick={() => UPDATE_MEDICINE_LOCATION(updateMedicine)}
          />
        ) : (
          ""
        )}

        <div className="row">
          <div className="col-xl-12">
            <div className="table-responsive">
              <Table
                thead={tableHead}
                tableData={registerMedicine}
                name={"doctor"}
                setOpenComponent={setOpenComponent}
                setActiveFunction={setActiveFunction}
                updateMedicine={updateMedicine}
                setUpdateMedicine={setUpdateMedicine}
                setMedicineDetails={setMedicineDetails}
              />
            </div>
          </div>
        </div>
      </div>
      <AddMedice registerDoctors={registerDoctors} />
    </>
  );
};

export default Medicine;
