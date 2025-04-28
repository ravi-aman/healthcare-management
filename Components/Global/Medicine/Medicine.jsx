import React, { useEffect, useState } from "react";

//INTERNAL IMPORT
import Medicines from "../Data/Medicines.json";
import Review from "./Review";
import MedicDetails from "./MedicDetails";
import Card from "../Shop/Card";
import { GET_ALL_REGISTERED_MEDICINES } from "../../../Context/constants";

const Medicine = ({
  setOpenComponent,
  setMedicineDetails,
  medicineDetails,
  userType,
  BUY_MEDICINE,
  currency,
}) => {
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
            <a href="javascript:void(0)">Medicine Detail</a>
          </li>
        </ol>
      </div>
      <div className="row">
        <MedicDetails
          medicineDetails={medicineDetails}
          BUY_MEDICINE={BUY_MEDICINE}
          userType={userType}
          currency={currency}
        />
        {/* review /*/}
        <Review />
        <div>
          <h4 className="fs-20 font-w700 my-4">Medicines</h4>
          <div className="medicines card-slider">
            {registerMedicine?.map((item, index) => (
              <Card
                item={item}
                index={index}
                setOpenComponent={setOpenComponent}
                setMedicineDetails={setMedicineDetails}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medicine;
