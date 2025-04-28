import React from "react";

const Revenue = ({ accountBalance, currency }) => {
  return (
    <div className="col-xl-3 col-xxl-4 col-lg-4">
      <div className="card">
        <div className="card-header border-0 pb-0">
          <h3 className="fs-20 mb-0 text-black">Balance</h3>
        </div>
        <div className="card-body px-2 pt-3 pb-2">
          <div className="px-4">
            <span className="text-info fs-24 font-w600 me-3">
              {accountBalance?.slice(0, 8)}
            </span>
            <span className="text-secondary fs-18 font-w400">{currency}</span>
          </div>
          <div id="line-chart" />
        </div>
      </div>
    </div>
  );
};

export default Revenue;
