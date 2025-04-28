import React, { useEffect, useState } from "react";

//INTERNAL IMPORT
import { UPLOAD_IPFS_IMAGE } from "../../../../Context/constants";
import Input from "../../Regular/Input";

import { useStateContext } from "../../../../Context/index";
const AddMedice = ({ registerDoctors }) => {
  const { ADD_MEDICINE, setLoader, notifySuccess, notifyError } =
    useStateContext();

  const [medicine, setMedicine] = useState({
    verifyingDoctor: "",
    name: "",
    brand: "",
    manufacturer: "",
    manufacturDate: "",
    expiryDate: "",
    code: "",
    companyEmail: "",
    discount: "",
    manufactureAddress: "",
    price: "",
    quentity: "",
    currentLocation: "",
    mobile: "",
    email: "",
    image: "",
    description: "",
  });

  const handleImageChange = async (event) => {
    try {
      setLoader(true);
      const file = event.target.files[0];
      if (file) {
        const imgUrl = await UPLOAD_IPFS_IMAGE(file);
        setMedicine({ ...medicine, image: imgUrl });
        setLoader(false);
        notifySuccess("Image uploaded successfully");
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
      notifyError("Failed, check your Pinata API Keys");
    }
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Medicine
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form>
              <div className="row">
                <div className="col-xl-12">
                  <div className="form-group">
                    <label className="col-form-label">Verifying Doctor:</label>
                    <select
                      className="form-control"
                      onChange={(e) =>
                        setMedicine({
                          ...medicine,
                          verifyingDoctor: e.target.value,
                        })
                      }
                    >
                      {" "}
                      <option>Select Doctor</option>
                      {registerDoctors?.map((doctor, index) => (
                        <option>
                          {doctor?.title} {doctor?.firstName} {doctor?.lastName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <Input
                  name={"Madicine Name"}
                  type={"text"}
                  handleChange={(e) =>
                    setMedicine({ ...medicine, name: e.target.value })
                  }
                />
                <Input
                  name={"Brand"}
                  type={"text"}
                  handleChange={(e) =>
                    setMedicine({ ...medicine, brand: e.target.value })
                  }
                />
                <Input
                  name={"Manufacturer"}
                  type={"text"}
                  handleChange={(e) =>
                    setMedicine({ ...medicine, manufacturer: e.target.value })
                  }
                />
                <Input
                  name={"Manufacture Date"}
                  type={"date"}
                  handleChange={(e) =>
                    setMedicine({ ...medicine, manufacturDate: e.target.value })
                  }
                />
                <Input
                  name={"Expiry Date"}
                  type={"date"}
                  handleChange={(e) =>
                    setMedicine({ ...medicine, expiryDate: e.target.value })
                  }
                />
                <Input
                  name={"Code"}
                  type={"text"}
                  handleChange={(e) =>
                    setMedicine({ ...medicine, code: e.target.value })
                  }
                />
                <Input
                  name={"Company Email"}
                  type={"text"}
                  handleChange={(e) =>
                    setMedicine({ ...medicine, companyEmail: e.target.value })
                  }
                />{" "}
                <Input
                  name={"Discount"}
                  type={"text"}
                  handleChange={(e) =>
                    setMedicine({ ...medicine, discount: e.target.value })
                  }
                />
                <div className="col-xl-12">
                  <div className="form-group">
                    <label className="col-form-label">
                      Manufacture Address :
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      defaultValue={""}
                      onChange={(e) =>
                        setMedicine({
                          ...medicine,
                          manufactureAddress: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>{" "}
                <Input
                  name={"Price"}
                  type={"text"}
                  handleChange={(e) =>
                    setMedicine({ ...medicine, price: e.target.value })
                  }
                />
                <Input
                  name={"Quentity"}
                  type={"text"}
                  handleChange={(e) =>
                    setMedicine({ ...medicine, quentity: e.target.value })
                  }
                />
                <div className="col-xl-12">
                  <div className="form-group">
                    <label className="col-form-label">
                      Current Location Address:
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      defaultValue={""}
                      onChange={(e) =>
                        setMedicine({
                          ...medicine,
                          currentLocation: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>{" "}
                <Input
                  name={"Mobile"}
                  type={"text"}
                  handleChange={(e) =>
                    setMedicine({ ...medicine, mobile: e.target.value })
                  }
                />
                <Input
                  name={"EmailID"}
                  type={"email"}
                  handleChange={(e) =>
                    setMedicine({ ...medicine, email: e.target.value })
                  }
                />
                <div className="col-xl-12">
                  <div className="form-group">
                    <label className="col-form-label">Upload Image</label>
                    <input
                      size={16}
                      className="form-control"
                      id="file"
                      onChange={handleImageChange}
                      type="file"
                    />
                  </div>
                </div>{" "}
                <div className="col-xl-12">
                  <div className="form-group">
                    <label className="col-form-label">Description:</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea2"
                      rows={3}
                      onChange={(e) =>
                        setMedicine({
                          ...medicine,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              onClick={() => ADD_MEDICINE(medicine)}
              className="btn btn-primary"
            >
              Add Medicine
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMedice;
