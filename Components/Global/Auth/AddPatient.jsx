import React, { useEffect, useState } from "react";

//INTERNAL IMPORT
import { GoClockFill } from "../../ReactICON/index";
import { UPLOAD_IPFS_IMAGE } from "../../../Context/constants";
import Input from "./../Regular/Input";

import { useStateContext } from "../../../Context/index";
const AddPatient = ({ registerDoctors, setAddPatient }) => {
  const { ADD_PATIENTS, setLoader, notifySuccess, notifyError } =
    useStateContext();
  const [doctor, setDoctor] = useState();

  const [patient, setPatient] = useState({
    title: "",
    firstName: "",
    lastName: "",
    gender: "",
    medicialHistory: "",
    yourAddress: "",
    mobile: "",
    emailID: "",
    birth: "",
    walletAddress: "",
    image: "",
    message: "",
    city: "",
  });

  const handleImageChange = async (event) => {
    try {
      setLoader(true);
      const file = event.target.files[0];
      if (file) {
        const imgUrl = await UPLOAD_IPFS_IMAGE(file);
        setPatient({ ...patient, image: imgUrl });
        setLoader(false);
        notifySuccess("Image uploaded successfully");
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
      notifyError("Failed, check your Pinata API Keys");
    }
  };

  const handleChange = (e) => {
    const selectedID = parseInt(e.target.value);
    const doctor = registerDoctors.find((doc) => doc.doctorID === selectedID);
    setDoctor(doctor);
  };

  return (
    <div
      className="modal "
      style={{
        display: "block",
      }}
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Patient
            </h5>
            <button
              className="btn-close"
              onClick={() => setAddPatient(false)}
            />
          </div>
          <div className="modal-body">
            <form>
              <div className="row">
                <div className="col-xl-12">
                  <div className="form-group">
                    <label className="col-form-label">Title</label>
                    <select
                      onChange={(e) =>
                        setPatient({
                          ...patient,
                          title: e.target.value,
                        })
                      }
                      className="form-control"
                    >
                      <option value="Miss">Miss</option>
                      <option value="Mr.">Mr.</option>
                      <option value="Mrs.">Mrs.</option>
                    </select>
                  </div>
                </div>
                <Input
                  name={"First Name"}
                  type={"text"}
                  handleChange={(e) =>
                    setPatient({ ...patient, firstName: e.target.value })
                  }
                />
                <Input
                  name={"Last Name"}
                  type={"text"}
                  handleChange={(e) =>
                    setPatient({ ...patient, lastName: e.target.value })
                  }
                />
                <Input
                  name={"Gender"}
                  type={"text"}
                  handleChange={(e) =>
                    setPatient({ ...patient, gender: e.target.value })
                  }
                />
                <Input
                  name={"Injury/Condition"}
                  type={"text"}
                  handleChange={(e) =>
                    setPatient({ ...patient, medicialHistory: e.target.value })
                  }
                />
                <Input
                  name={"Phone"}
                  type={"text"}
                  handleChange={(e) =>
                    setPatient({ ...patient, mobile: e.target.value })
                  }
                />
                <Input
                  name={"Email"}
                  type={"text"}
                  handleChange={(e) =>
                    setPatient({ ...patient, emailID: e.target.value })
                  }
                />
                <Input
                  name={"Date Of Birth"}
                  type={"date"}
                  handleChange={(e) =>
                    setPatient({ ...patient, birth: e.target.value })
                  }
                />
                <Input
                  name={"City"}
                  type={"text"}
                  handleChange={(e) =>
                    setPatient({ ...patient, city: e.target.value })
                  }
                />
                <div className="col-xl-12">
                  <div className="form-group">
                    <label className="col-form-label">Address :</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      defaultValue={""}
                      onChange={(e) =>
                        setPatient({ ...patient, yourAddress: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="form-group">
                    <label className="col-form-label">Consulting Doctor:</label>
                    <select className="form-control" onChange={handleChange}>
                      <option value="">Select Doctor</option>
                      {registerDoctors?.map((doctor, index) => (
                        <option key={index} value={doctor?.doctorID}>
                          {doctor?.title} {doctor?.firstName} {doctor?.lastName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>{" "}
                <div className="col-xl-6">
                  <div className="form-group">
                    <label className="col-form-label">Upload Profile</label>
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
                    <label className="col-form-label">Wallet Address</label>
                    <input
                      size={16}
                      className="form-control"
                      type="text"
                      onChange={(e) =>
                        setPatient({
                          ...patient,
                          walletAddress: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>{" "}
                <div className="col-xl-12">
                  <div className="form-group">
                    <label className="col-form-label">Message:</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea2"
                      rows={3}
                      defaultValue={""}
                      onChange={(e) =>
                        setPatient({ ...patient, message: e.target.value })
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
              className="btn btn-danger light"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              onClick={() => ADD_PATIENTS(patient, doctor)}
              className="btn btn-primary"
            >
              Add Patient
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPatient;
