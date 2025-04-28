import React from "react";

const Statistic = () => {
  return (
    <div className="col-xl-9 col-xxl-8 col-lg-8">
      <div className="card">
        <div className="card-header d-sm-flex d-block border-0 pb-0">
          <h3 className="fs-20 mb-3 mb-sm-0 text-black">Patient Statistic</h3>
          <div className="card-action card-tabs mt-3 mt-sm-0 mt-3 mt-sm-0">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#monthly"
                  role="tab"
                >
                  Monthly
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#weekly"
                  role="tab"
                >
                  Weekly
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#today"
                  role="tab"
                >
                  Today
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="card-body ps-2 pe-3 pb-2">
          <div className="tab-content">
            <div className="tab-pane fade show active" id="monthly">
              <span id="chartNewData"></span>
              <div id="chartBar" />
            </div>
            <div className="tab-pane fade" id="weekly">
              <div id="chartBar1" />
            </div>
            <div className="tab-pane fade" id="today">
              <div id="chartBar2" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Statistic;
