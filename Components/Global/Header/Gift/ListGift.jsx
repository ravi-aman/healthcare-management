import React from "react";

const ListGift = ({ date, title, message, price, index }) => {
  return (
    <li>
      <div
        className={`timeline-badge ${
          index == 0
            ? "primary"
            : index == 1
            ? "info"
            : index == 2
            ? "danger"
            : index == 3
            ? "success"
            : index == 4
            ? "warning"
            : "dark"
        } `}
      />
      <a className="timeline-panel text-muted" href="javascript:;">
        <span>{date}</span>
        <h6 className="mb-0">
          {title}
          {price && (
            <strong
              className={`text-${
                index == 0
                  ? "primary"
                  : index == 1
                  ? "info"
                  : index == 2
                  ? "danger"
                  : "dark"
              }`}
            >
              {price}
            </strong>
          )}
        </h6>
        {message && <p className="mb-0">{message}</p>}
      </a>
    </li>
  );
};

export default ListGift;
