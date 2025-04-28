import React, { useEffect, useState } from "react";

//INTERNAL IMPORT
import Card from "./Card";
import Medicines from "../Data/Medicines.json";

import { GET_ALL_REGISTERED_MEDICINES } from "../../../Context/constants";
const Shop = ({ setOpenComponent, setMedicineDetails, currency }) => {
  const [registerMedicine, setRegisterMedicine] = useState();

  useEffect(() => {
    const fetchData = async () => {
      GET_ALL_REGISTERED_MEDICINES().then((medicines) => {
        const _newArray = medicines.filter((medicine) => medicine.active);
        console.log(_newArray);
        setRegisterMedicine(_newArray);
      });
    };

    fetchData();
  }, []);
  return (
    <div className="container-fluid">
      <div className="page-titles">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="javascript:void(0)">Shop</a>
          </li>
          <li className="breadcrumb-item active">
            <a href="javascript:void(0)">Medicines</a>
          </li>
        </ol>
      </div>
      <div className="row">
        {registerMedicine?.map((item, index) => (
          <Card
            item={item}
            index={index}
            setOpenComponent={setOpenComponent}
            setMedicineDetails={setMedicineDetails}
            currency={currency}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
