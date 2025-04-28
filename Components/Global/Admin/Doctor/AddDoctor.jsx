import React, { useEffect, useState } from "react";

//INTERNAL IMPORT
import { UPLOAD_IPFS_IMAGE } from "../../../../Context/constants";
import Input from "../../Regular/Input";

import { useStateContext } from "../../../../Context/index";

const AddDoctor = () => {
  const { ADD_DOCTOR, setLoader, notifySuccess, notifyError } =
    useStateContext();

  const [doctor, setDoctor] = useState({
    title: "",
    firstName: "",
    lastName: "",
    gender: "",
    degrer: "",
    yourAddress: "",
    designation: "",
    lastWork: "",
    mobile: "",
    emailID: "",
    collageName: "",
    collageID: "",
    joiningYear: "",
    endYear: "",
    specialization: "",
    registrationID: "",
    collageAddress: "",
    walletAddress: "",
    image: "",
    biography: "",
  });

  const handleImageChange = async (event) => {
    try {
      setLoader(true);
      const file = event.target.files[0];
      if (file) {
        const imgUrl = await UPLOAD_IPFS_IMAGE(file);
        setDoctor({ ...doctor, image: imgUrl });
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
              Add Doctor
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="form-group">
                    <label className="col-form-label">Title:</label>
                    <select
                      className="form-control"
                      onChange={(e) =>
                        setDoctor({ ...doctor, title: e.target.value })
                      }
                    >
                      <option value="Miss">Miss</option>
                      <option value="Mr.">Mr.</option>
                      <option value="Mrs.">Mrs.</option>
                    </select>
                  </div>
                </div>
                <Input
                  name={"Name"}
                  type={"text"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, firstName: e.target.value })
                  }
                />
                <Input
                  name={"Last Name"}
                  type={"text"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, lastName: e.target.value })
                  }
                />
                <Input
                  name={"Gender"}
                  type={"text"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, gender: e.target.value })
                  }
                />
                <Input
                  name={"Degrer"}
                  type={"text"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, degrer: e.target.value })
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
                        setDoctor({ ...doctor, yourAddress: e.target.value })
                      }
                    />
                  </div>
                </div>{" "}
                <Input
                  name={"Designation"}
                  type={"text"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, designation: e.target.value })
                  }
                />
                <Input
                  name={"Last Work"}
                  type={"text"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, lastWork: e.target.value })
                  }
                />
                <Input
                  name={"Mobile"}
                  type={"text"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, mobile: e.target.value })
                  }
                />
                <Input
                  name={"EmailID"}
                  type={"email"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, emailID: e.target.value })
                  }
                />
                <Input
                  name={"Collage Name"}
                  type={"text"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, collageName: e.target.value })
                  }
                />
                <Input
                  name={"Collage ID"}
                  type={"text"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, collageID: e.target.value })
                  }
                />
                <Input
                  name={"Joining Year"}
                  type={"date"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, joiningYear: e.target.value })
                  }
                />
                <Input
                  name={"End Year"}
                  type={"date"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, endYear: e.target.value })
                  }
                />
                <Input
                  name={"Specialization"}
                  type={"text"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, specialization: e.target.value })
                  }
                />
                <Input
                  name={"Registration ID"}
                  type={"text"}
                  handleChange={(e) =>
                    setDoctor({ ...doctor, registrationID: e.target.value })
                  }
                />
                <div className="col-xl-12">
                  <div className="form-group">
                    <label className="col-form-label">Collage Address :</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      defaultValue={""}
                      onChange={(e) =>
                        setDoctor({ ...doctor, collageAddress: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="form-group">
                    <label className="col-form-label">Wallet Address</label>
                    <input
                      size={16}
                      className="form-control"
                      type="text"
                      onChange={(e) =>
                        setDoctor({ ...doctor, walletAddress: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="form-group">
                    <label className="col-form-label">Upload Profile</label>
                    <input
                      className="form-control"
                      id="file"
                      onChange={handleImageChange}
                      type="file"
                    />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="form-group">
                    <label className="col-form-label">Biography:</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea2"
                      rows={3}
                      onChange={(e) =>
                        setDoctor({ ...doctor, biography: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
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
              onClick={() => ADD_DOCTOR(doctor)}
              className="btn btn-primary"
            >
              Add Doctor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
