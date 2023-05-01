import React from "react";

export default function Phonetics(props) {
  return <div className="Phonetics">{props.phonetics.data[0].phonetic}</div>;
}
