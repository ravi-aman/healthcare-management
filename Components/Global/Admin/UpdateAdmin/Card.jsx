import React from "react";

const Card = ({ title, number, classStyle, handleClick }) => {
  return (
    <div onClick={handleClick} className="col-xl-3 col-xxl-3 col-sm-6">
      <div className={`card gradient-bx text-white ${classStyle}`}>
        <div className="card-body">
          <div className="media align-items-center">
            <div className="media-body">
              <p className="mb-1">{title}</p>
              <div className="d-flex flex-wrap">
                <div>
                  <div className="fs-14">{number}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
