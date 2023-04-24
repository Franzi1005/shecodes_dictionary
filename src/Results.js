import React from "react";
import "./Results.css";

export default function Results(props) {
  return (
    <div className="Results">
      <h1>{props.data.word}</h1>
      <i>{props.data.wordKind}</i>
      <div>{props.data.meaning}</div>{" "}
    </div>
  );
}
