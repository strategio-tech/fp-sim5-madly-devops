import React from "react";
function Color(props) {
  return (
    <div
      className={props.active ? "color clickedColor" : "color"}
      style={{ backgroundColor: props.color }}
      onClick={props.onClick}
    ></div>
  );
}
export default Color;
