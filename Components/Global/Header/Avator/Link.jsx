import React from "react";

const Link = ({ icon, name, handleClick }) => {
  return (
    <a onClick={handleClick} className="dropdown-item ai-icon">
      {icon}
      <span className="ms-2">{name}</span>
    </a>
  );
};

export default Link;
