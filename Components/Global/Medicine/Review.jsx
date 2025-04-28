import React from "react";

const Review = () => {
  return (
    <div className="modal fade" id="reviewModal">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Review</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            />
          </div>
          <div className="modal-body">
            <form>
              <div className="text-center mb-4">
                <img
                  className="img-fluid rounded"
                  width={78}
                  src="./images/avatar/1.jpg"
                  alt="DexignZone"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Comment"
                  rows={5}
                  defaultValue={""}
                />
              </div>
              <button className="btn btn-success btn-block">RATE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
