import React from "react";

const Update = ({
  updateMedicine,
  setUpdateMedicine,
  handleClick,
  activeFunction,
  setActiveFunction,
}) => {
  return (
    <div className="">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Update {activeFunction}</h5>
            <button
              className="btn-close"
              onClick={() => setActiveFunction("")}
            />
          </div>
          <div className="modal-body">
            <div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder={`new ${activeFunction}`}
                  rows={4}
                  defaultValue={""}
                  onChange={(e) =>
                    setUpdateMedicine({
                      ...updateMedicine,
                      update: e.target.value,
                    })
                  }
                />
              </div>
              <button
                onClick={handleClick}
                className="btn btn-success btn-block"
              >
                Update {activeFunction}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
