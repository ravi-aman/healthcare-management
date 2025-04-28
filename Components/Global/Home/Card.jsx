import React from "react";

const Card = ({ title, patient, number, iconOne, iconTwo, classStyle }) => {
  return (
    <div className="col-xl-3 col-xxl-3 col-sm-6">
      <div className={`card gradient-bx text-white ${classStyle}`}>
        <div className="card-body">
          <div className="media align-items-center">
            <div className="media-body">
              <p className="mb-1">{title}</p>
              <div className="d-flex flex-wrap">
                <h2 className="fs-40 font-w600 text-white mb-0 me-3">
                  {patient}
                </h2>
                <div>
                  {iconOne}
                  <div className="fs-14">+{number}%</div>
                </div>
              </div>
            </div>
            <span className="border rounded-circle p-4">{iconTwo}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
