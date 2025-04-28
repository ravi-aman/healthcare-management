import React, { useState, useEffect } from "react";

///INTERNAL IMPORT
import { FaShoppingBag } from "../../ReactICON/index";

const MedicDetails = ({
  medicineDetails,
  BUY_MEDICINE,
  userType,
  currency,
}) => {
  const [medicine, setMedicine] = useState();
  const [quantity, setQuantity] = useState();

  console.log(medicineDetails);

  // const medicine = {
  //   name: "RadiantGlow Serum",
  //   image: "images/product/1.jpg",
  //   price: "$325.00",
  //   discount: "",
  //   review: 2,
  //   quentity: 5,
  //   code: "0405689",
  //   brand: "@theblockchaincoders",
  //   disease: ["Fever", "Headache", "Energy"],
  //   description:
  //     "The Blockchain Coders brings together organizations from across web3 to create the largest community learning blockchain education. ‍",
  // };

  return (
    <div className="col-lg-12">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-xxl-5">
              {/* Tab panes */}
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home-tab-pane"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabIndex={0}
                >
                  <img
                    className="img-fluid rounded"
                    src={medicineDetails?.image}
                    alt=""
                  />
                </div>
                <div className="d-flex align-items-end flex-wrap mt-4">
                  <div className="filtaring-area me-3">
                    <div className="size-filter">
                      <h4 className="m-b-15">Select Quantity</h4>
                      <div
                        className="btn-group mb-sm-0 mb-2"
                        role="group"
                        aria-label="Basic radio toggle button group"
                      >
                        <input
                          type="radio"
                          className="btn-check"
                          name="btnradio"
                          id="btnradio1"
                          defaultChecked=""
                          onClick={() => setQuantity(10)}
                        />
                        <label
                          className="btn btn-outline-primary mb-0"
                          htmlFor="btnradio1"
                        >
                          10
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="btnradio"
                          id="btnradio2"
                          onClick={() => setQuantity(8)}
                        />
                        <label
                          className="btn btn-outline-primary mb-0"
                          htmlFor="btnradio2"
                        >
                          8
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="btnradio"
                          id="btnradio3"
                          onClick={() => setQuantity(5)}
                        />
                        <label
                          className="btn btn-outline-primary mb-0"
                          htmlFor="btnradio3"
                        >
                          5
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="btnradio"
                          id="btnradio4"
                          onClick={() => setQuantity(3)}
                        />
                        <label
                          className="btn btn-outline-primary mb-0"
                          htmlFor="btnradio4"
                        >
                          3
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="btnradio"
                          id="btnradio5"
                          onClick={() => setQuantity(1)}
                        />
                        <label
                          className="btn btn-outline-primary mb-0"
                          htmlFor="btnradio5"
                        >
                          1
                        </label>
                      </div>
                    </div>
                  </div>
                  {/*Quantity start*/}
                  <div className="col-2 px-0 me-3">
                    <input
                      type="number"
                      name="num"
                      className="form-control input-btn input-number"
                      defaultValue={1}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>
                  {/*Quanatity End*/}
                  <div className="shopping-cart me-3">
                    {userType == "Doctor" ? (
                      <a className="btn btn-primary mt-2">
                        <i className="fa  me-3">
                          <FaShoppingBag />
                        </i>
                        Doctor Can't Buy
                      </a>
                    ) : (
                      <a
                        className="btn btn-primary mt-2"
                        onClick={() =>
                          BUY_MEDICINE(
                            medicineDetails?.medicineID,
                            medicineDetails?.price,
                            quantity
                          )
                        }
                      >
                        <i className="fa  me-3">
                          <FaShoppingBag />
                        </i>
                        Buy Medicine
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/*Tab slider End*/}
            <div className="col-xl-9 col-lg-6 col-md-6 col-xxl-7 col-sm-12">
              <div className="product-detail-content">
                {/*Product details*/}
                <div className="new-arrival-content mt-md-0 mt-3 pr">
                  <h4>{medicineDetails?.name}</h4>
                  <div className="comment-review star-rating">
                    <span className="review-text">
                      ({medicineDetails?.discount} % Discount)
                    </span>
                  </div>
                  <div className="d-table mb-2">
                    <p className="price float-start d-block">
                      Price: {medicineDetails?.price} {currency}
                    </p>
                  </div>
                  <p className="text-black">
                    Availability:
                    <span className="item">
                      In stock {medicineDetails?.quantity}
                      <i className="fa ">
                        <FaShoppingBag />
                      </i>
                    </span>
                  </p>
                  <p className="text-black">
                    Product code:{" "}
                    <span className="item">{medicineDetails?.code}</span>
                  </p>
                  <p className="text-black">
                    Brand:{" "}
                    <span className="item">{medicineDetails?.brand}</span>
                  </p>
                  <p className="text-black">
                    Company Email :{" "}
                    <span className="item">
                      {medicineDetails?.companyEmail}
                    </span>
                  </p>
                  <p className="text-black">
                    Mobile :{" "}
                    <span className="item">{medicineDetails?.mobile}</span>
                  </p>
                  <p className="text-black">
                    MedicineID :{" "}
                    <span className="item">
                      #M-00{medicineDetails?.medicineID}
                    </span>
                  </p>
                  <p className="text-black">
                    Expiry Date :{" "}
                    <span className="item">{medicineDetails?.expiryDate}</span>
                  </p>
                  <p className="text-black">
                    Manufacture Address :{" "}
                    <span className="item">
                      {medicineDetails?.manufactureAddress}
                    </span>
                  </p>
                  <p className="text-black">
                    Current Location:{" "}
                    <span className="item">
                      {medicineDetails?.currentLocation}
                    </span>
                  </p>
                  <p className="text-black">
                    Manufacturer :{" "}
                    <span className="item">
                      {medicineDetails?.manufacturer}
                    </span>
                  </p>

                  <p className="text-content">{medicineDetails?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicDetails;
