import React from "react";
import { func } from "prop-types";

// function Form(props) {
//   return <div className={`row${props.fluid ? "-fluid" : ""}`} {...props} />;
// }

// export default Row;

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea classname="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-primary">
      {props.children}
    </button>
  );
}