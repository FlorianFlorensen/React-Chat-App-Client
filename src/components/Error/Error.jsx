import React from "react";
import "./Error.css"


export default function Error(props) {

  const { errorCode } = props;
  let error;

  switch (errorCode) {
    case "2":
      error = <p className="errorText">Username and Room are required</p>
      break;
    case "3":
      error = <p className="errorText">Username is already taken</p>
      break;
    default:
      break;
  }

  return (
    <div className="joinErrorContainer">
      {error}
    </div>
  )

}