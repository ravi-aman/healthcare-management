import React from "react";

//INTERNAL IMPORT
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialLinkedin,
  IoIosStar,
} from "../../ReactICON/index";
import HomeDoctor from "../Data/HomeDoctor.json";

const Doctors = ({ registerDoctors, setOpenComponent, setDoctorDetails }) => {
  return (
    <div className="col-xl-9 col-xxl-8 col-lg-7">
      <div className="card">
        <div className="card-header border-0 pb-0">
          <h3 className="fs-20 mb-0 text-black">Top Rated Doctors</h3>
          <a href="page-review.html" className="text-primary font-w500">
            View more &gt;&gt;
          </a>
        </div>
        <div className="card-body ">
          <div className="assigned-doctor home-doctors">
            {registerDoctors?.map((doctor, index) => (
              <div
                onClick={() => (
                  setDoctorDetails(doctor), setOpenComponent("DoctorDetails")
                )}
                key={index}
                className="items"
              >
                <div className="text-center">
                  <img
                    style={{
                      width: "150px",
                    }}
                    className="home-doctors-img"
                    src={doctor.image}
                    alt=""
                  />
                  <div className="dr-star">#D-00{doctor.doctorID}</div>
                  <h5 className="fs-16 mb-1 font-w600">
                    <a className="text-black" href="page-review.html">
                      DR {doctor.title} {doctor.firstName} {doctor.lastName}
                    </a>
                  </h5>
                  <span className="text-primary mb-2 d-block">
                    {doctor.specialization}
                  </span>
                  <p className="fs-12">{doctor.yourAddress}</p>
                  <div className="social-media">
                    <a href="javascript:void(0);">
                      <i className="lab ">
                        <TiSocialTwitter />
                      </i>
                    </a>
                    <a href="javascript:void(0);">
                      <i className="lab ">
                        <TiSocialFacebook />
                      </i>
                    </a>
                    <a href="javascript:void(0);">
                      <i className="lab ">
                        <TiSocialLinkedin />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
