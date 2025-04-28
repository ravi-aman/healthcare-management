import React from "react";

//INTERNAL IMPORT
import {
  MdEmail,
  FaPhone,
  FaMapMarker,
  FcDepartment,
} from "../../ReactICON/index";

const StaffProfile = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="d-md-flex align-items-center">
          <div className="page-titles mb-2">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="javascript:void(0)">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">
                <a href="javascript:void(0)">Staff Profile</a>
              </li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-8">
                    <div className="profile">
                      <div className="staff">
                        <img src="images/doctors/1.jpg" alt="" />
                      </div>
                      <div className="staf-info">
                        <div>
                          <div className="d-flex align-items-center mb-2">
                            <h4 className="mb-0">Name :</h4>
                            <p className="ms-2 mb-0">Kate Velasquez</p>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <h4 className="mb-0">Gender :</h4>
                            <p className="ms-2 mb-0">Female</p>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <h4 className="mb-0">Degrer :</h4>
                            <p className="ms-2 mb-0">BSN</p>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <h4 className="mb-0">Designation :</h4>
                            <p className="ms-2 mb-0">Nurse</p>
                          </div>
                        </div>
                        <div className="location mt-4">
                          <div className="mb-3">
                            <span>
                              <i className="fa-solid  me-2 text-primary">
                                <FaMapMarker />
                              </i>
                              San Francisco, USA
                            </span>
                            <span>
                              <i className="fa  text-secondary me-2">
                                {" "}
                                <FcDepartment />
                              </i>
                              ICU Department
                            </span>
                          </div>
                          <div>
                            <span>
                              <i className="fa  me-2 text-primary">
                                <FaPhone />
                              </i>
                              +1 1234598767
                            </span>
                            <span>
                              <i className="fa me-2 text-secondary">
                                <MdEmail />
                              </i>
                              hello@gmail.com
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h4 className="fs-20 font-w600">About Me</h4>
                    <div className="staff-info">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffProfile;
