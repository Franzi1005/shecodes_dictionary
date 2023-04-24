import React from "react";
import "./Results.css";

export default function Results(props) {
  if (props.data.answer === true) {
    return (
      <div className="Results">
        <h1>{props.data.word}</h1>
        <i>{props.data.wordKind}</i>
        <div>{props.data.meaning}</div>{" "}
      </div>
    );
  } else return null;
}
