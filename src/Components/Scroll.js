import React from "react";

const Scroll = (props) => {
  return (
    <div
      className="scroll-div ma3 ba bw3 br3 light-green bg-washed-yellow"
      style={{ overflowY: "scroll" }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
