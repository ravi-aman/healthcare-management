import React, { useState, useEffect } from "react";

//INTERNAL IMPORT
import {
  FaUserDoctor,
  BsSendFill,
  IoMdClose,
  FaLink,
  BsRobot,
  FaUserAlt,
} from "../../ReactICON/index"; //INTERNAL IMPORT

//INTERNAL IMPORT
import {
  GET_MY_FRIEND_LIST,
  PARSED_ERROR_MSG,
  GET_READ_MESSAGE,
  SHORTEN_ADDRESS,
  CONVERT_TIMESTAMP_TO_READABLE,
  UPLOAD_IPFS_IMAGE,
} from "../../../Context/constants";
import { useStateContext } from "../../../Context/index";

const Chat = ({ SEND_MESSAGE }) => {
  const {
    CHECKI_IF_CONNECTED_LOAD,
    address,
    setAddress,
    setLoader,
    notifySuccess,
    notifyError,
  } = useStateContext();
  const [friendList, setFriendList] = useState();
  const [activeChat, setActiveChat] = useState();
  const [chatMessage, setChatMessage] = useState();
  const [uploadFile, setUploadFile] = useState(false);

  const [messageChat, setMessageChat] = useState({
    message: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const address = await CHECKI_IF_CONNECTED_LOAD();

        if (address) {
          GET_MY_FRIEND_LIST(address).then((friend) => {
            setActiveChat(friend[0]);
            console.log(friend);
            setFriendList(friend);
          });
        }
      } catch (error) {
        const ErrorMsg = PARSED_ERROR_MSG(error);
        console.log(ErrorMsg);
      }
    };

    fetchData();
  }, [address]);

  useEffect(() => {
    const fetchData = async (activeChat) => {
      try {
        const address = await CHECKI_IF_CONNECTED_LOAD();

        if (address) {
          GET_READ_MESSAGE(activeChat?.userAddress).then((message) => {
            console.log(message);
            setChatMessage(message);
          });
        }
      } catch (error) {
        const ErrorMsg = PARSED_ERROR_MSG(error);
        console.log(ErrorMsg);
      }
    };

    fetchData(activeChat);
  }, [activeChat]);

  return (
    <div className="container-fluid">
      <div className="page-titles">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="javascript:void(0)">Message</a>
          </li>
          <li className="breadcrumb-item active">
            <a href="javascript:void(0)">Doctors</a>
          </li>
        </ol>
      </div>
      {/* row */}
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-xl-3 col-xxl-4 email-left-body">
                  <div className="mb-3 mt-4 mt-sm-0">
                    <div className="p-0">
                      <a
                        href="email-compose.html"
                        className="btn btn-primary btn-block"
                      >
                        Assign Doctors
                      </a>
                    </div>
                    <div className=" mt-4" />
                    {friendList?.map((friend, index) => (
                      <div
                        onClick={() => setActiveChat(friend)}
                        key={index}
                        className="mail-list rounded mt-2"
                      >
                        <a className="list-group-item active">
                          <i className="fa  font-18 align-middle me-2">
                            <FaUserDoctor />
                          </i>
                          {friend?.name}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-xl-9 col-xxl-8">
                  <div>
                    <div className="d-flex align-items-center">
                      <h4 className="card-title d-sm-none d-block">Message</h4>
                    </div>
                    <div className="compose-content">
                      <div>
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control bg-transparent"
                            placeholder={activeChat?.name}
                          />
                        </div>
                        <div
                          style={{
                            height: "20rem",
                            width: "100%",
                            marginBottom: "1rem",
                            border: "2px solid #EDF0F1",
                            borderRadius: "5px",
                            overflowY: "auto",
                          }}
                        >
                          <>
                            <div
                              className="card-body msg_card_body dz-scroll"
                              id="DZ_W_Contacts_Body3"
                            >
                              {chatMessage?.map((message, index) => (
                                <div className="d-flex justify-content-start mb-4">
                                  <div className="img_cont_msg">
                                    <p
                                      style={{
                                        width: "40px",
                                      }}
                                    >
                                      <FaUserAlt />
                                    </p>
                                  </div>
                                  <div className="msg_cotainer">
                                    <p>
                                      {SHORTEN_ADDRESS(message.sender)} &nbsp; (
                                      {message.timestamp})
                                    </p>
                                    <small>{message.msg}</small>
                                  </div>
                                  <br />
                                </div>
                              ))}
                            </div>
                          </>
                        </div>

                        <div className="mb-3">
                          <textarea
                            id="email-compose-editor"
                            className="textarea_editor form-control bg-transparent"
                            rows={2}
                            placeholder="Enter text ..."
                            defaultValue={""}
                            onChange={(e) =>
                              setMessageChat({
                                ...messageChat,
                                message: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-start mt-4 mb-3">
                      <button
                        className="btn btn-danger light btn-sl-sm me-2"
                        type="button"
                        onClick={() => window.location.reload()}
                      >
                        <span className="me-2">
                          <i className="fa ">
                            <IoMdClose />
                          </i>
                        </span>
                        Reset
                      </button>
                      <button
                        className="btn btn-primary btn-sl-sm"
                        type="button"
                        onClick={() => SEND_MESSAGE(activeChat, messageChat)}
                      >
                        <span className="me-2">
                          <i className="fa ">
                            <BsSendFill />
                          </i>
                        </span>
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
