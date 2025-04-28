import React from "react";

const UpdateStatus = ({
  setConditionUpdate,
  handleClick,
  setUpdateCondition,
  conditionUpdate,
}) => {
  return (
    <div className="">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Update Patient Condition</h5>
            <button
              className="btn-close"
              onClick={() => setUpdateCondition(false)}
            />
          </div>
          <div className="modal-body">
            <div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Current patient conditions"
                  rows={4}
                  defaultValue={""}
                  onChange={(e) =>
                    setConditionUpdate({
                      ...conditionUpdate,
                      message: e.target.value,
                    })
                  }
                />
              </div>
              <button
                onClick={handleClick}
                className="btn btn-success btn-block"
              >
                Update Condition
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateStatus;
