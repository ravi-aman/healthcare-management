import React from "react";

//INTERNAL IMPORT
import Alerts from "./Alerts";
import Chat from "./Chat";
import Note from "./Note";
const ChatBox = () => {
  return (
    <div className="chatbox">
      <div className="chatbox-close" />
      <div className="custom-tab-1">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#notes">
              Notes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#alerts">
              Alerts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab" href="#chat">
              Chat
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <Chat />
          <Alerts />
          <Note />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
