import React from "react";

const Update = ({
  prescribeDoctor,
  setPrescribeDoctor,
  setPrescribeMedicine,
  registerMedicine,
  handleClick,
}) => {
  return (
    <div className="">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Precribe Medicine</h5>
            <button
              className="btn-close"
              onClick={() => setPrescribeMedicine(false)}
            />
          </div>
          <div className="modal-body">
            <div>
              <div className="mb-3">
                <div className="col-xl-12">
                  <div className="form-group">
                    <label className="col-form-label">Medicines:</label>
                    <select
                      className="form-control"
                      onChange={(e) => {
                        const selectedMedicineID = e.target.value;
                        setPrescribeDoctor({
                          ...prescribeDoctor,
                          medicineID: selectedMedicineID,
                        });
                      }}
                    >
                      {registerMedicine?.map((medicine, index) => (
                        <option key={index} value={medicine?.medicineID}>
                          {medicine?.name} $ {medicine?.price}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <button
                onClick={handleClick}
                className="btn btn-success btn-block"
              >
                Prescribe Medicine
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
