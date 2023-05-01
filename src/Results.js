import React from "react";
import "./Results.css";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <h3>{props.data[0].word}</h3>
        <Phonetics phonetics={props} />

        {props.data[0].meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else return null;
}
