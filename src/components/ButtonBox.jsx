import React from "react";

const ButtonBox = ({ handleClick, color }) => {
  return (
    <button
      className="box__btn"
      onClick={handleClick}
      style={{ backgroundColor: color }}
    >
      Ver Otro
    </button>
  );
};

export default ButtonBox;
