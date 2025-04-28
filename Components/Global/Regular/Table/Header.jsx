import React, { useEffect, useState } from "react";

//INTERNAL IMPORT
import { IoIosSearch } from "../../../ReactICON/index";

const Header = ({ name, onHandleSearch, onClearSearch }) => {
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchItem), 1000);
    return () => clearTimeout(timer);
  }, [searchItem]);

  useEffect(() => {
    if (search) {
      onHandleSearch(search);
    } else {
      onClearSearch();
    }
  }, [search]);
  return (
    <>
      <div className="page-titles">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="javascript:void(0)">Dashboard</a>
          </li>
          <li className="breadcrumb-item active">
            <a href="javascript:void(0)">{name}</a>
          </li>
        </ol>
      </div>
      <div className="form-head d-flex mb-3 mb-md-4 align-items-start">
        <div className="me-auto d-none d-lg-block">
          {name == "Staff List" ? (
            <a
              href="javascript:void();"
              className="btn btn-primary btn-rounded add-staff"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              + Add Staff
            </a>
          ) : name == "Patient List" ? (
            <a
              href="javascript:void();"
              className="btn btn-primary btn-rounded add-staff"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              + Add PAtient
            </a>
          ) : name == "Doctors List" ? (
            <a
              href="javascript:void();"
              className="btn btn-primary btn-rounded add-staff"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              + Add Doctor
            </a>
          ) : name == "Add Medicine" ? (
            <a
              href="javascript:void();"
              className="btn btn-primary btn-rounded add-staff"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              + Add Medicine
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="input-group search-area ms-auto d-inline-flex me-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search here"
            onChange={(e) => setSearchItem(e.target.value)}
            value={searchItem}
          />
          <div className="input-group-append">
            <button type="button" className="input-group-text">
              <i>
                <IoIosSearch />
              </i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
