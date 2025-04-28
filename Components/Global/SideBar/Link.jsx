import React from "react";

const Link = ({ name, handleClick }) => {
  return (
    <li>
      <a onClick={handleClick}>{name}</a>
    </li>
  );
};

export default Link;
