import React from "react";
import "./InputOption.css";

function InputOptions({ Icon, color, title }) {
  return (
    <div className="inputOptions">
      <Icon style={{ color: color, paddingRight: "5px" }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOptions;
