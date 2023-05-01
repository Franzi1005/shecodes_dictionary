import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return <div className="Phonetics">{props.phonetics.data[0].phonetic}</div>;
}
