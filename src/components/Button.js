import React from "react";
import "./Button.css";

function Button({ Name }) {
  return (
    <div>
      <button className="button">{Name}</button>
    </div>
  );
}

export default Button;
