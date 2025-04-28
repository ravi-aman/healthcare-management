import React from "react";

//INTERNAL IMPORT

import ChatData from "../Data/Chat.json";
import { Chat1, Chat2, Chat3, Chat4 } from "../../SVG/index";
import Message from "./Message";

const Chat = ({
  GET_MY_FRIEND_LIST,
  GET_READ_MESSAGE,
  CONVERT_TIMESTAMP_TO_READABLE,
  friendList,
}) => {
  const chat = [
    {
      name: "Archie Parker",
      image: "images/avatar/1.jpg",
    },
  ];
  return (
    <div className="tab-pane fade active show" id="chat" role="tabpanel">
      <div className="card mb-sm-3 mb-md-0 contacts_card dz-chat-user-box">
        <div className="card-header chat-list-header text-center">
          <a>
            <Chat1 />
          </a>
          <div>
            <h6 className="mb-1">Chat List</h6>
            <p className="mb-0">Show All</p>
          </div>
          <a>
            <Chat2 />
          </a>
        </div>
        <div
          className="card-body contacts_body p-0 dz-scroll"
          id="DZ_W_Contacts_Body"
        >
          <ul className="contacts">
            {friendList?.map((chat, index) => (
              <li
                key={chat.name}
                className={`${index == 0 ? "active" : ""} dz-chat-user`}
              >
                <div className="d-flex bd-highlight">
                  <div className="img_cont">
                    <img
                      src={chat.image}
                      className="rounded-circle user_img"
                      alt=""
                    />
                    <span className="online_icon" />
                  </div>
                  <div className="user_info">
                    <span>{chat.name}</span>
                    <p>Kalid is online</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card chat dz-chat-history-box d-none">
        <div className="card-header chat-list-header text-center">
          <a className="dz-chat-history-back">
            <Chat3 />
          </a>
          <div>
            <h6 className="mb-1">Chat with Khelesh</h6>
            <p className="mb-0 text-success">Online</p>
          </div>
          <div className="dropdown">
            <a>
              <Chat4 />
            </a>
          </div>
        </div>

        <Message />
      </div>
    </div>
  );
};

export default Chat;
