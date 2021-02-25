import React from "react";

export default function Plan(props) {
  return (
    <>
      <li className="shadow p-3 my-2 col-sm-9">{props.value}</li>
      <button
        className="btn btn-danger"
        onClick={() => {
          props.sendData(props.id);
        }}
      >
        X
      </button>
    </>
  );
}
