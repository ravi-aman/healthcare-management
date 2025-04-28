import React, { useState, useEffect } from "react";
//INTERNAL IMPORT
import { GoClockFill } from "../../ReactICON/index";
import Input from "../Regular/Input";

import { useStateContext } from "../../../Context/index";

const Booking = ({ registerDoctors }) => {
  const { BOOK_APPOINTMENT } = useStateContext();
  //
  const [bookingDoctor, setBookingDoctor] = useState();
  const [booking, setBooking] = useState({
    from: "",
    to: "",
    appointmentDate: "",
    condition: "",
    message: "",
  });

  const handleChange = (e) => {
    const selectedID = parseInt(e.target.value);
    const doctor = registerDoctors.find((doc) => doc.doctorID === selectedID);
    setBookingDoctor(doctor);
  };

  const handleTimeFromChange = (e) => {
    const value = e.target.value;
    const [hours, minutes] = value.split(":");

    let hours12 = hours % 12 || 12;
    let ampm = hours >= 12 ? "PM" : "AM";

    let formattedTime = `${hours12}:${minutes} ${ampm}`;
    setBooking({
      ...booking,
      from: formattedTime,
    });
  };
  const handleTimeTOFromChange = (e) => {
    const value = e.target.value;
    const [hours, minutes] = value.split(":");

    let hours12 = hours % 12 || 12;
    let ampm = hours >= 12 ? "PM" : "AM";

    let formattedTime = `${hours12}:${minutes} ${ampm}`;
    setBooking({
      ...booking,
      to: formattedTime,
    });
  };
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Book Appointment
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="form-group">
                    <label className="col-form-label">
                      Date Of Appointment:
                    </label>
                    <input
                      onChange={(e) =>
                        setBooking({
                          ...booking,
                          appointmentDate: e.target.value,
                        })
                      }
                      size={16}
                      type="date"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <label className="form-label mt-3">
                    Form<span className="text-danger">*</span>
                  </label>
                  <div className="input-group clockpicker">
                    <input
                      type="time"
                      className="form-control"
                      defaultValue="09:30"
                      onChange={handleTimeFromChange}
                    />
                    <span className="input-group-text">
                      <i className="fas ">
                        <GoClockFill />
                      </i>
                    </span>
                  </div>
                </div>
                <div className="col-xl-6">
                  <label className="form-label mt-3">
                    To<span className="text-danger">*</span>
                  </label>
                  <div className="input-group clockpicker">
                    <input
                      type="time"
                      defaultValue="11:30"
                      className="form-control"
                      onChange={handleTimeTOFromChange}
                    />
                    <span className="input-group-text">
                      <i className="fas ">
                        <GoClockFill />
                      </i>
                    </span>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div className="form-group">
                    <label className="col-form-label">Consulting Doctor:</label>
                    <select className="form-control" onChange={handleChange}>
                      <option value="">Select Doctor</option>
                      {registerDoctors?.map((doctor, index) => (
                        <option key={index} value={doctor.doctorID}>
                          {doctor.title} {doctor.firstName} {doctor.lastName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="form-group">
                    <label className="col-form-label">Injury/Condition:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fever"
                      placeholder="fever"
                      onChange={(e) =>
                        setBooking({
                          ...booking,
                          condition: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="form-group">
                    <label className="col-form-label">Message:</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea2"
                      rows={3}
                      defaultValue={""}
                      onChange={(e) =>
                        setBooking({
                          ...booking,
                          message: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger light"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              onClick={() => BOOK_APPOINTMENT(booking, bookingDoctor)}
              className="btn btn-primary"
            >
              Book Appoinment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
