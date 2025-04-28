import React from "react";

//INTERNAL IMPORT
import { Note1, Note2 } from "../../SVG/index";
import { FaRegEdit, AiFillDelete } from "../../ReactICON/index";
import NoteData from "../Data/Note.json";
const Note = () => {
  return (
    <div className="tab-pane fade" id="notes">
      <div className="card mb-sm-3 mb-md-0 note_card">
        <div className="card-header chat-list-header text-center">
          <a href="javascript:void(0);">
            <Note1 />
          </a>
          <div>
            <h6 className="mb-1">Notes</h6>
            <p className="mb-0">Add New Nots</p>
          </div>
          <a href="javascript:void(0);">
            <Note2 />
          </a>
        </div>
        <div
          className="card-body contacts_body p-0 dz-scroll"
          id="DZ_W_Contacts_Body2"
        >
          <ul className="contacts">
            {NoteData.map((item, index) => (
              <li className={`${index == 0 ? "active" : ""}`}>
                <div className="d-flex bd-highlight">
                  <div className="user_info">
                    <span>{item.title}</span>
                    <p>{item.time}</p>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-primary btn-xs sharp me-1"
                    >
                      <i className="fa ">
                        <FaRegEdit />
                      </i>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="btn btn-danger btn-xs sharp"
                    >
                      <i className="fa ">
                        <AiFillDelete />
                      </i>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Note;
